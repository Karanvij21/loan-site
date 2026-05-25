-- Run this in the Supabase SQL editor after creating your project.
-- Enable extensions
create extension if not exists "uuid-ossp";

-- Leads table
create table if not exists public.leads (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),

  -- step 1
  amount integer not null,
  purpose text not null,
  credit_rating text not null,

  -- step 2
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  dob date not null,
  ssn_last_4 text not null,
  street text not null,
  city text not null,
  state text not null,
  zip text not null,

  -- step 3
  employment_status text not null,
  employer_name text,
  monthly_income numeric not null,
  pay_frequency text not null,
  next_pay_date date not null,

  -- step 4
  has_bank_account boolean not null,
  direct_deposit boolean not null,

  -- step 5
  tcpa_consent boolean not null,
  ec_consent boolean not null,
  consent_timestamp timestamptz not null,

  -- meta
  ip text,
  user_agent text,
  referrer text,

  -- lender routing
  lendingtree_lead_id text,
  forwarded_at timestamptz
);

create index if not exists leads_email_idx on public.leads(email);
create index if not exists leads_state_idx on public.leads(state);
create index if not exists leads_created_idx on public.leads(created_at desc);

-- RLS: service role bypasses RLS; anon role has no access by default.
alter table public.leads enable row level security;
