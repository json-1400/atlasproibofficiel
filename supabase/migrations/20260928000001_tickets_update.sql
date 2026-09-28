-- Supabase Migration: Update tickets table with extended tracking fields
-- Version: 20260928000001_tickets_update.sql

create table if not exists public.tickets (
  id uuid not null default gen_random_uuid(),
  ticket_number text unique,
  customer_name text null,
  email text not null,
  phone text null,
  order_number text null,
  category text null default 'technique',
  device_type text null,
  subject text null,
  message text not null,
  status text not null default 'open',
  priority text not null default 'normal',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint tickets_pkey primary key (id)
);

-- Add missing columns if table already existed with base columns
alter table public.tickets add column if not exists ticket_number text unique;
alter table public.tickets add column if not exists customer_name text null;
alter table public.tickets add column if not exists phone text null;
alter table public.tickets add column if not exists order_number text null;
alter table public.tickets add column if not exists category text null default 'technique';
alter table public.tickets add column if not exists device_type text null;
alter table public.tickets add column if not exists priority text not null default 'normal';
alter table public.tickets add column if not exists updated_at timestamp with time zone default now();

-- Indices
create index if not exists idx_tickets_email on public.tickets using btree (email);
create index if not exists idx_tickets_order_number on public.tickets using btree (order_number);
create index if not exists idx_tickets_status on public.tickets using btree (status);
create index if not exists idx_tickets_ticket_number on public.tickets using btree (ticket_number);

-- RLS
alter table public.tickets enable row level security;
