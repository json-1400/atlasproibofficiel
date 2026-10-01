-- Migration: 20261001000000_content_revisions.sql
-- Content Revisions and Sitemap Lastmod Tracking with Row Level Security (RLS)

create table if not exists content_revisions (
  id uuid primary key default gen_random_uuid(),
  route text unique not null,
  last_modified timestamptz default now(),
  change_frequency text default 'weekly',
  priority numeric(3,2) default 0.8,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_content_revisions_route on content_revisions(route);

-- Enable Row Level Security (RLS)
alter table content_revisions enable row level security;

-- Policy 1: Allow public read-only access (needed for public sitemap generation and indexing crawlers)
create policy "Allow public read access on content_revisions"
  on content_revisions for select
  using (true);

-- Policy 2: Writes, updates, and deletes are restricted to backend service_role only
create policy "Allow service_role full access on content_revisions"
  on content_revisions for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
