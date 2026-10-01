-- Migration: 20261001000000_content_revisions.sql
-- Content Revisions and Sitemap Lastmod Tracking

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
