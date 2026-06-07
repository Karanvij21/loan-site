# Backlinks audit playbook

How to audit the current backlink profile for getadvanceloan.com using a
free Ahrefs or SEMrush trial. Step-by-step instructions plus what to
do with the results.

## Why this matters

A backlink audit answers two questions:

1. **Who's linking to us?** Backlinks from authoritative finance sites
   (Wikipedia, Investopedia, NerdWallet, Bankrate, CFPB, university
   .edu sites, news publishers) materially increase domain authority
   and the speed at which Google trusts new content from our domain.

2. **Are any backlinks harmful?** Spammy or PBN (private-blog-network)
   backlinks can trigger Google's algorithmic penalties. The audit
   identifies any that should be disavowed via Google Search Console.

## When to run it

Wait until **at least 14 days after the sitemap is fully indexed**. The
Tier 4 data study at /data/personal-loan-apr-by-state is the page most
likely to attract citations from finance journalists and bloggers, but
those citations take 1-3 weeks to accumulate in third-party crawl
databases.

Re-run quarterly. Each new content batch (more guides, more Q&As,
quarterly APR data refresh) tends to attract a small wave of new links.

## Tool option 1: Ahrefs trial ($7 for 7 days)

1. Sign up at **ahrefs.com/trial** with a real email. Use a card that
   you can cancel after 7 days. The trial gives you full Site Explorer
   access.

2. **Run Site Explorer** on `getadvanceloan.com`.

3. **Check these reports in order:**

   - **Overview** → note Domain Rating (DR), URL Rating (UR), Referring
     domains count, Backlinks count. Note these numbers in your tracking
     spreadsheet as the baseline.
   - **Backlinks** → filter by `dofollow` and `Live` status. This is the
     real list of links currently helping the domain.
   - **Referring domains** → shows unique domains rather than total link
     count. More useful for assessing diversity.
   - **Top pages** → which of our pages have attracted the most links.
     /data/personal-loan-apr-by-state should ideally be near the top
     within a few weeks.
   - **Linked domains** (outbound) → which sites we link out to, useful
     for understanding our own E-E-A-T signal pattern.

4. **Export the backlinks list** to CSV via the export button. Save it
   to the repo at `docs/backlinks-{YYYY-MM}.csv` for trend tracking.

5. **Cancel the subscription** immediately after the audit. The trial
   converts to a paid plan at $129+/month otherwise.

## Tool option 2: SEMrush free account (limited)

SEMrush offers a limited free tier with **10 queries per day**. Less
comprehensive than Ahrefs but better than nothing.

1. Create a free account at semrush.com.

2. **Backlink Analytics** → enter `getadvanceloan.com`.

3. Free tier shows the first 100 referring domains. Note the Authority
   Score, total backlinks, and Top Anchor distribution.

4. Limit: you can only run 10 queries per day. Use them sparingly.

## Tool option 3: Moz Link Explorer (5 free queries)

Smaller dataset than Ahrefs but useful for cross-checking.

1. Sign up at **moz.com/link-explorer** for a free MozLocal account.

2. Run the report on `getadvanceloan.com`. Five queries per month free.

3. Note Domain Authority, Page Authority of the homepage, linking
   root domains, and spam score for any flagged backlinks.

## What to look for

### Strong signals (good)

- Backlinks from `.edu` domains (university financial-aid pages,
  research papers)
- Backlinks from `.gov` domains (CFPB, FTC reference pages)
- Backlinks from major personal-finance publishers (Investopedia,
  NerdWallet, Bankrate, The Balance, Forbes Advisor)
- Backlinks from journalist bylines on finance-section content (mainstream
  media often cites data studies for context paragraphs)
- Backlinks from `dofollow` blog posts on midsize finance / mortgage
  blogs

### Yellow flags (investigate)

- Sudden spikes in backlinks within a 24-48 hour window (often signals
  someone running a link-network promotion for or against the domain)
- Repeated identical anchor text from many different domains (signals
  link-network activity)
- Backlinks from domains in languages we don't operate in (occasional is
  fine; many is suspicious)

### Red flags (disavow)

- Backlinks from known PBN domains (low-quality blogs with thin content
  that only exist to pass link equity)
- Backlinks from adult, gambling, or other off-topic high-spam-score
  domains
- Backlinks with manipulative anchor text (`buy personal loan online`,
  `cheap loans now`, etc.) from domains that don't have organic context
  for those terms

For red-flag links, file a **disavow file** through Google Search Console
(Tools → Disavow Links) so Google ignores them in their algorithmic
scoring.

## Outreach if backlinks are sparse

If the audit shows fewer than 10-20 referring domains after a month of
indexing, prioritise these outreach moves:

1. **Pitch the Tier 4 data study to finance journalists.** Email 3-5
   journalists who cover personal-finance topics at outlets like
   CNBC, Bloomberg Personal Finance, MarketWatch, Yahoo Finance, or
   The Balance. Subject line: "Q3 2026 personal loan APR cap study
   (by state)". Attach the PDF version of the data study.

2. **HARO (Help A Reporter Out)**, sign up at helpareporter.com and
   respond to journalist queries that match our subject expertise
   (personal loans, credit, debt, etc.). Successful responses get a
   byline backlink in the published article.

3. **Guest posts on midsize finance blogs.** Identify 5-10 finance
   blogs in the DA 30-50 range (use Ahrefs Content Explorer or Moz
   Link Explorer to find them), pitch guest posts on topics where our
   editorial team has unique perspective (the loan-marketplace
   operator angle).

4. **Submit to finance directories.** Personal-finance directories
   like FinanceBlogs.com, Best Financial Blogs lists, and similar
   curated directories accept submissions and usually link back.

## Quarterly comparison

Save each quarter's audit CSV in `docs/`. Compare quarter-over-quarter
to track:

- Referring domain growth (target: +25% per quarter)
- DR growth (target: +2-3 per quarter for first year)
- Top pages by backlinks (which content is attracting links)
- Anchor-text distribution (should be heavily branded, not commercial
  keywords)

Track these metrics in a small spreadsheet alongside organic-traffic
growth from GSC. The two should correlate; if backlinks are growing
but organic traffic isn't, content depth or technical SEO needs
attention.

## Why we wait until indexing completes

Backlinks discovered before our content is fully indexed in Google won't
show up in our SERP performance even if they exist. The audit is most
useful when paired with GSC data showing what Google has indexed and
how it's ranking.

Run the first audit after the Coverage tab in GSC shows at least 200
indexed URLs. That's typically 14-21 days after sitemap submission.
