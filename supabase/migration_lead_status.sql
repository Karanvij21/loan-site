-- Run in the Supabase SQL editor.
-- Adds columns for the admin dashboard to display per-lead delivery status.
-- lendingtree_lead_id + forwarded_at already exist from the initial schema;
-- email_sent_at is new.

alter table public.leads
  add column if not exists email_sent_at timestamptz;

create index if not exists leads_forwarded_idx
  on public.leads(forwarded_at desc nulls last);

create index if not exists leads_email_sent_idx
  on public.leads(email_sent_at desc nulls last);
