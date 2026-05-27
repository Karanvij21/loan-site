-- Run this in the Supabase SQL editor.
-- Stores OneSignal notification IDs for scheduled pushes so we can cancel
-- pending ones when the user converts (lead submitted) or advances stages.

create table if not exists public.scheduled_pushes (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),

  -- Subscriber identifier from OneSignal (UUID)
  one_signal_id text not null,

  -- The notification ID OneSignal returned. Used as DELETE target.
  notification_id text not null,

  -- Free-form stage label so we can cancel-by-prefix.
  -- e.g. abandoned_t30m, abandoned_t24h, never_started_t1d, submitted_t1h
  stage text not null,

  -- When OneSignal will deliver this push (informational, not enforced here).
  send_after timestamptz,

  -- Set when /api/lead (or another trigger) successfully calls
  -- DELETE /notifications/{id} on OneSignal.
  cancelled_at timestamptz
);

create index if not exists scheduled_pushes_one_signal_idx
  on public.scheduled_pushes(one_signal_id) where cancelled_at is null;

create index if not exists scheduled_pushes_stage_idx
  on public.scheduled_pushes(stage) where cancelled_at is null;

alter table public.scheduled_pushes enable row level security;
