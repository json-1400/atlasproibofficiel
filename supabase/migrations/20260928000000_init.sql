-- Supabase Schema Migration: Atlas Pro ONTV Officiel
-- Version: 20260928000000_init.sql

-- Enable UUID extension if not already enabled
create extension if not exists "pgcrypto";

-- 1. Customers Table
create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  phone text,
  created_at timestamptz default now()
);

-- Index on email for fast lookups/upserts
create index if not exists idx_customers_email on customers(email);

-- 2. Orders Table
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete set null,
  plan_slug text not null,          -- atlas-pro-12-mois, atlas-pro-6-mois, atlas-pro-3-mois
  amount numeric(10,2) not null,
  currency text default 'EUR',
  status text default 'pending',    -- pending | paid | delivered | failed
  payment_ref text,
  activation_start date,
  activation_end date,
  reminder_sent boolean default false,
  notes text,
  created_at timestamptz default now()
);

-- Index on customer_id and status for order queries
create index if not exists idx_orders_customer_id on orders(customer_id);
create index if not exists idx_orders_status on orders(status);
create index if not exists idx_orders_renewal on orders(activation_end, reminder_sent);

-- 3. Support Tickets Table
create table if not exists tickets (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  subject text,
  message text not null,
  status text default 'open',       -- open | in_progress | resolved | closed
  created_at timestamptz default now()
);

create index if not exists idx_tickets_email on tickets(email);

-- 4. Row Level Security (RLS)
alter table customers enable row level security;
alter table orders enable row level security;
alter table tickets enable row level security;

-- Zero public access policies: all reads and writes must pass through server route handlers
-- authenticated via the SUPABASE_SERVICE_ROLE_KEY.
