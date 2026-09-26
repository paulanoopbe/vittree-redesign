(function () {
  if (!document.getElementById('vt-resp')) { var st = document.createElement('style'); st.id = 'vt-resp'; st.textContent = "html{-webkit-text-size-adjust:100%;text-size-adjust:100%}\nimg{max-width:100%}\ninput,select,textarea{font-size:16px;-webkit-appearance:none;appearance:none}\n@media (max-width:1180px){[data-nav=\"links\"] a,[data-nav=\"links\"]>span{padding-left:9px!important;padding-right:9px!important}}\n@media (max-width:1240px){[data-nav=\"logo\"]{height:54px!important}[data-nav=\"bar\"]{gap:16px!important}}\n@media (max-width:1140px){[data-nav=\"links\"],[data-nav=\"cta\"],[data-nav=\"mega\"]{display:none!important}[data-nav=\"burger\"]{display:flex!important}}\n@media (max-width:1024px){\n[data-g=\"split\"]{grid-template-columns:minmax(0,1fr)!important;gap:44px!important}\n[data-g=\"g4\"],[data-g=\"g4s\"],[data-g=\"g3\"]{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n[data-s=\"static\"]{position:static!important}\n[data-nav=\"links\"],[data-nav=\"cta\"],[data-nav=\"mega\"]{display:none!important}\n[data-nav=\"burger\"]{display:flex!important}\n[data-f]{right:16px!important}\n}\n@media (max-width:768px){\n[data-p=\"pad\"]{padding:72px 20px!important}\n[data-p=\"padx\"]{padding-left:20px!important;padding-right:20px!important;padding-bottom:72px!important}\n[data-p=\"hero\"]{padding:116px 20px 64px!important}\n[data-p=\"foot\"]{padding:56px 20px 28px!important}\n[data-g=\"g3\"]{grid-template-columns:minmax(0,1fr)!important}\n[data-s=\"chips\"]{position:static!important;flex-wrap:nowrap!important;overflow-x:auto!important;-webkit-overflow-scrolling:touch;scrollbar-width:none;margin-left:-20px;margin-right:-20px;padding-left:20px!important;padding-right:20px!important}\n[data-s=\"chips\"]::-webkit-scrollbar{display:none}\n[data-s=\"chips\"]>*{flex-shrink:0}\n[data-nav=\"bar\"]{padding:0 20px!important;height:72px!important}\n[data-nav=\"logo\"]{height:38px!important}\n[data-f]{right:12px!important;bottom:12px!important;max-width:220px!important;padding:16px 18px!important}\n}\n@media (max-width:640px){\n[data-g=\"g2\"],[data-g=\"gauto\"],[data-g=\"g4\"]{grid-template-columns:minmax(0,1fr)!important}\n[data-g=\"g4s\"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:28px 16px!important}\n[data-b=\"box\"]{padding:30px 20px!important;border-radius:20px!important}\n[data-h=\"1\"]{font-size:44px!important;line-height:1.03!important}\nh2{overflow-wrap:break-word}\n}\n@media (hover:none){[style*=\"transition\"]{-webkit-tap-highlight-color:transparent}}\n@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}"; (document.head || document.documentElement).appendChild(st); }

  var cats = [
    { id: 'setup', name: 'Setup & Cross-Border', color: '#3f97d1', tint: '#e6f1f9', blurb: 'Set up in India, the UAE, Europe or the USA, structure foreign investment and run export units.',
      steps: ['Structure consultation', 'Documents & name approval', 'Filing & registration', 'Post-incorporation setup'] },
    { id: 'tax', name: 'Accounting & Compliance', color: '#0f3a57', tint: '#e5ecf1', blurb: 'Accounting, tax, audit and analytics for businesses in India and abroad — delivered by our Accounting & Compliance team.', sub: true,
      steps: ['Review of current books', 'Process & calendar setup', 'Monthly execution', 'Reporting & filings'] },
    { id: 'legal', name: 'Legal & Corporate', color: '#6a5acd', tint: '#eeecf9', blurb: 'Contracts, legal opinions and corporate records drafted and maintained properly.',
      steps: ['Brief & fact finding', 'Research & drafting', 'Review with you', 'Execution & filing'] },
    { id: 'growth', name: 'Growth & Funding', color: '#3b7a25', tint: '#e8f3e1', blurb: 'Strategy, government support and investor capital to take your business further.',
      steps: ['Eligibility assessment', 'Business plan & documents', 'Application or pitch', 'Follow-up to disbursal'] },
    { id: 'trade', name: 'Trade & Customs', color: '#b7791f', tint: '#f8f0e1', blurb: 'Pay less duty on what you import and get money back on what you export.',
      steps: ['Trade flow review', 'Scheme selection', 'Licence application', 'Ongoing compliance'] }
  ];

  var S = [
    { id: 'business-formation', cat: 'setup', name: 'Business Formation', short: 'Private limited, LLP, OPC and partnership registration.',
      intro: 'Choose the right structure and get registered quickly — with PAN, TAN, GST and bank account setup handled alongside incorporation.',
      includes: ['Private Limited & One Person Company', 'Limited Liability Partnership (LLP)', 'Partnership firm registration', 'Name approval & MoA / AoA drafting', 'DSC, DIN, PAN & TAN', 'GST and bank account setup'],
      forWho: ['Founders starting their first company', 'Firms converting to an LLP or company', 'Groups adding a new entity'],
      faqs: [{ q: 'Which structure should I choose?', a: 'It depends on funding plans, liability and compliance appetite. Investors usually expect a private limited company; professional firms often prefer an LLP. We advise before you file.' }, { q: 'How long does incorporation take?', a: 'Typically 7–15 working days once documents are ready, subject to MCA processing times.' }] },
    { id: 'foreign-entity', cat: 'setup', name: 'Foreign Entity Incorporation', short: 'Subsidiaries, branch and liaison offices for overseas companies.',
      intro: 'We help overseas companies enter India — and Indian companies set up abroad — with the right vehicle and full regulatory approvals.',
      includes: ['Wholly owned subsidiary in India', 'Branch, liaison & project offices', 'Overseas subsidiary setup', 'Apostille & document legalisation', 'Nominee director guidance', 'Post-setup compliance calendar'],
      forWho: ['Foreign companies entering India', 'Indian businesses expanding overseas', 'NRIs investing in Indian ventures'],
      faqs: [{ q: 'Does a foreign company need RBI approval?', a: 'Most sectors fall under the automatic route. Branch and liaison offices, and some sectors, need specific approval — we assess this first.' }, { q: 'Can all directors be foreign nationals?', a: 'At least one director must be resident in India. We can guide you on meeting this requirement.' }] },
    { id: 'fdi-odi', cat: 'setup', name: 'Foreign Investment Reporting (FDI & ODI)', short: 'RBI/FEMA filings when money comes into or goes out of India.',
      intro: 'Stay on the right side of FEMA when money crosses borders — from share allotments to overseas investments and annual returns.',
      includes: ['FC-GPR & FC-TRS filings', 'ODI Form & overseas investment reporting', 'Annual Return on Foreign Liabilities & Assets', 'Pricing & valuation guidelines', 'Compounding of contraventions', 'Downstream investment reporting'],
      forWho: ['Companies with foreign shareholders', 'Businesses investing overseas', 'Startups raising from foreign investors'],
      faqs: [{ q: 'What happens if an FDI filing is missed?', a: 'Late submission fees or compounding may apply. We can regularise past delays and set up reminders going forward.' }, { q: 'Is a valuation needed for foreign investment?', a: 'Yes — shares issued to or transferred with non-residents must follow FEMA pricing guidelines, usually backed by a valuation report.' }] },
    { id: 'sez', cat: 'setup', name: 'Tax-Free Export Zones (SEZ)', short: 'Set up and run a tax-advantaged export unit in a special economic zone.',
      intro: 'From Letter of Approval to monthly and annual SEZ reporting, we handle the paperwork so your unit keeps its benefits.',
      includes: ['SEZ unit Letter of Approval', 'Bond-cum-legal undertaking', 'SOFTEX & monthly reporting', 'Annual Performance Report', 'NFE monitoring', 'Exit & de-bonding support'],
      forWho: ['IT & ITeS exporters', 'Manufacturing exporters', 'Existing SEZ units needing compliance support'],
      faqs: [{ q: 'What are the key SEZ benefits?', a: 'Duty-free imports and procurement, GST exemptions on supplies, and simpler procedures — subject to maintaining positive net foreign exchange.' }, { q: 'Can you take over compliance for an existing unit?', a: 'Yes. We start with a health check of past filings and fix any gaps.' }] },
    { id: 'accounting', cat: 'tax', name: 'Accounting & Bookkeeping', short: 'Monthly books, reconciliations and MIS.',
      intro: 'Accurate, up-to-date books that you can rely on — run on cloud accounting tools and reviewed by qualified accountants.',
      includes: ['Day-to-day bookkeeping', 'Bank & vendor reconciliations', 'Payables & receivables tracking', 'Payroll accounting', 'Monthly MIS reports', 'Tally, Zoho & QuickBooks support'],
      forWho: ['Startups without an in-house team', 'SMEs wanting timely MIS', 'Foreign subsidiaries in India'],
      faqs: [{ q: 'Which software do you work with?', a: 'Tally, Zoho Books, QuickBooks and Xero, among others. We can also help you migrate.' }, { q: 'Can you clean up past books?', a: 'Yes, we regularly reconstruct and reconcile prior periods before taking over.' }] },
    { id: 'financial-statements', cat: 'tax', name: 'Financial Statements', short: 'Year-end financials to Ind AS and Schedule III.',
      intro: 'Audit-ready financial statements prepared to current accounting standards, with notes and schedules your auditors will expect.',
      includes: ['Balance sheet & P&L', 'Cash flow statements', 'Notes & schedules', 'Ind AS / AS compliance', 'Consolidation for groups', 'Auditor liaison'],
      forWho: ['Companies and LLPs at year end', 'Groups needing consolidation', 'Businesses preparing for fundraise'],
      faqs: [{ q: 'Do you also do the audit?', a: 'Statutory audit is performed independently. We prepare the financials and coordinate with your auditor.' }, { q: 'How early should we start?', a: 'Ideally in the first month after year end, so audit and filings stay on schedule.' }] },
    { id: 'gst', cat: 'tax', name: 'GST Compliance', short: 'Registration, returns, reconciliations and notices.',
      intro: 'Every GST return filed on time and reconciled — with input credit protected and department notices handled.',
      includes: ['GST registration & amendments', 'GSTR-1, 3B & annual returns', 'Input tax credit reconciliation', 'E-invoicing & e-way bills', 'LUT for exporters & refunds', 'Notices, audits & appeals'],
      forWho: ['Businesses of any size registered under GST', 'Exporters claiming refunds', 'Companies facing notices'],
      faqs: [{ q: 'Can you help with GST refunds?', a: 'Yes — exporters, inverted-duty cases and excess payments. We prepare and follow up the application.' }, { q: 'We received a GST notice. What now?', a: 'Share it with us quickly. We review, prepare a reply and represent you where needed.' }] },
    { id: 'income-tax', cat: 'tax', name: 'Income Tax', short: 'Returns, TDS, advance tax and assessments.',
      intro: 'Tax planning and compliance for companies, firms and individuals — including TDS, transfer pricing coordination and assessments.',
      includes: ['Corporate & individual returns', 'TDS / TCS returns', 'Advance tax computation', 'Tax audit support', 'Assessment & appeal representation', 'NRI & cross-border taxation'],
      forWho: ['Companies, LLPs & firms', 'Promoters and NRIs', 'Businesses under scrutiny'],
      faqs: [{ q: 'Do you handle scrutiny assessments?', a: 'Yes, we prepare submissions and represent you before tax authorities.' }, { q: 'Can you help founders with personal tax?', a: 'Yes — including ESOPs, capital gains and foreign income.' }] },
    { id: 'audit', cat: 'tax', name: 'Audit & Assurance', short: 'Internal audit, controls review and due diligence.',
      intro: 'Independent reviews that strengthen controls and give owners, lenders and investors confidence in the numbers.',
      includes: ['Internal audit', 'Internal financial controls review', 'Stock & asset verification', 'Concurrent & process audits', 'Agreed-upon procedures', 'Management audits'],
      forWho: ['Growing companies adding controls', 'Boards and investors', 'Lenders requiring verification'],
      faqs: [{ q: 'Is internal audit mandatory?', a: 'For certain companies above prescribed thresholds, yes. For others it is good practice as the business scales.' }, { q: 'How often should it be done?', a: 'Quarterly or half-yearly works for most businesses.' }] },
    { id: 'virtual-cfo', cat: 'tax', name: 'Virtual CFO', short: 'Senior finance leadership, part time.',
      intro: 'A seasoned finance head for budgeting, cash flow, board reporting and investor readiness — without a full-time cost.',
      includes: ['Budgets & forecasts', 'Cash flow management', 'Board & investor reporting', 'Pricing & unit economics', 'Banking relationships', 'Fundraise readiness'],
      forWho: ['Funded startups', 'Family businesses professionalising', 'SMEs preparing for growth'],
      faqs: [{ q: 'How much time does a virtual CFO spend?', a: 'Plans are scoped by need — typically a few days a month plus on-call support.' }, { q: 'Can you work with our accountant?', a: 'Yes, we lead and review the existing team rather than replace it.' }] },
    { id: 'legal-drafting', cat: 'legal', name: 'Legal Drafting', short: 'Contracts, agreements and business documents.',
      intro: 'Clear, enforceable agreements drafted for how your business actually works — reviewed with commercial sense.',
      includes: ['Shareholder & founder agreements', 'Service & vendor contracts', 'Employment & consultant agreements', 'NDAs & IP assignments', 'Lease & licence deeds', 'Term sheets'],
      forWho: ['Founders bringing in partners', 'Businesses signing key contracts', 'Companies raising investment'],
      faqs: [{ q: 'Can you review a contract we received?', a: 'Yes — we mark up risks and suggest changes, usually within a few working days.' }, { q: 'Do you provide templates?', a: 'We can build a set of standard templates tailored to your business.' }] },
    { id: 'legal-opinions', cat: 'legal', name: 'Legal Opinions', short: 'Written opinions on corporate, tax and regulatory questions.',
      intro: 'Reasoned written opinions that help you decide — on corporate law, FEMA, tax and regulatory matters.',
      includes: ['Corporate & company law', 'FEMA & cross-border issues', 'Tax positions', 'Regulatory interpretation', 'Transaction structuring', 'Title & compliance checks'],
      forWho: ['Boards needing a documented view', 'Lenders and investors', 'Businesses entering new regulation'],
      faqs: [{ q: 'How long does an opinion take?', a: 'Most opinions are delivered within one to two weeks, depending on complexity.' }, { q: 'Can the opinion be shared with a bank or investor?', a: 'Yes, we can address it to the relevant party.' }] },
    { id: 'trademark-copyright', cat: 'legal', name: 'Trademark & Copyright', short: 'Register and protect your brand, content and creative work.',
      intro: 'Secure your brand name, logo and creative work — from search and filing to objections, renewals and enforcement.',
      includes: ['Trademark search & clearance', 'Trademark application & filing', 'Objection replies & hearings', 'Opposition & rectification', 'Copyright registration', 'Renewals, assignments & licensing'],
      forWho: ['Startups launching a brand', 'Businesses with logos, products or content to protect', 'Creators, publishers and software companies'],
      faqs: [{ q: 'How long does trademark registration take?', a: 'You can use the TM symbol once filed. Full registration typically takes 12–18 months if there are no objections or oppositions.' }, { q: 'Is copyright registration necessary?', a: 'Copyright exists on creation, but registration gives strong evidence of ownership, which helps in disputes and licensing.' }] },
    { id: 'corporate-compliance', cat: 'legal', name: 'Corporate & ROC Compliance', short: 'Annual filings, board meetings and statutory registers.',
      intro: 'Your company secretarial work kept current — annual returns, meetings, registers and event-based filings.',
      includes: ['Annual ROC filings (AOC-4, MGT-7)', 'LLP Form 8 & 11', 'Board & general meeting minutes', 'Statutory registers', 'Share allotments & transfers', 'Director KYC & changes'],
      forWho: ['Private companies & LLPs', 'Startups issuing shares or ESOPs', 'Dormant companies catching up'],
      faqs: [{ q: 'We have missed past ROC filings. Can this be fixed?', a: 'Yes. We file pending returns and advise on condonation schemes where available.' }, { q: 'Do you handle ESOP documentation?', a: 'Yes — schemes, grants and related filings.' }] },
    { id: 'govt-funding', cat: 'growth', name: 'Government Grants & Subsidies', short: 'Central and state schemes, grants and subsidies.',
      intro: 'Find and secure the public funding your business qualifies for — capital subsidies, interest subvention, startup grants and more.',
      includes: ['Eligibility mapping across schemes', 'Startup India & state startup grants', 'MSME capital & interest subsidies', 'PLI and sector incentive schemes', 'Detailed project reports', 'Application to disbursal follow-up'],
      forWho: ['Manufacturers expanding capacity', 'DPIIT-recognised startups', 'MSMEs investing in technology'],
      faqs: [{ q: 'How do I know what I qualify for?', a: 'We run an eligibility assessment based on your sector, location, size and investment plans.' }, { q: 'Do grants need to be repaid?', a: 'Grants and subsidies usually do not, but conditions apply. We explain obligations upfront.' }] },
    { id: 'angel-seed', cat: 'growth', name: 'Angel & Seed Investment', short: 'Pitch readiness and investor introductions.',
      intro: 'Get investor-ready and raise your first rounds — with a sharp pitch, clean financial model and a well-run process.',
      includes: ['Pitch deck & narrative', 'Financial model & valuation', 'Investor outreach & introductions', 'Term sheet negotiation support', 'Due diligence preparation', 'Closing & compliance filings'],
      forWho: ['Pre-seed and seed startups', 'Founders raising their first round', 'Businesses seeking strategic investors'],
      faqs: [{ q: 'Do you invest yourselves?', a: 'No — we prepare you and connect you with angels, networks and seed funds.' }, { q: 'When should we start preparing?', a: 'Three to six months before you want to close is ideal.' }] },
    { id: 'strategic-advisory', cat: 'growth', name: 'Strategic Advisory', short: 'Growth strategy, restructuring and business planning.',
      intro: 'Clear-headed guidance on where to grow and how to structure for it — grounded in numbers, not slides.',
      includes: ['Business & growth plans', 'Group restructuring', 'Market entry strategy', 'Cost & margin improvement', 'Succession planning', 'Board advisory'],
      forWho: ['Owner-led businesses', 'Companies entering new markets', 'Groups simplifying structures'],
      faqs: [{ q: 'Is this a one-off project?', a: 'It can be either — a defined project or an ongoing advisory retainer.' }, { q: 'Do you help implement?', a: 'Yes. Our compliance and funding teams carry plans through to execution.' }] },
    { id: 'valuation', cat: 'growth', name: 'Valuation & Due Diligence', short: 'Business valuations and transaction diligence.',
      intro: 'Defensible valuations and thorough diligence for fundraises, share transfers, M&A and regulatory needs.',
      includes: ['Share valuations (FEMA, Income Tax)', 'Startup & fundraise valuations', 'Financial due diligence', 'Tax due diligence', 'Buy-side & sell-side support', 'ESOP valuations'],
      forWho: ['Companies issuing or transferring shares', 'Investors assessing targets', 'Founders selling a stake'],
      faqs: [{ q: 'Which valuation methods do you use?', a: 'DCF, comparable companies and net asset methods — selected to suit the purpose and regulation.' }, { q: 'Is a registered valuer needed?', a: 'For some purposes, yes. We work with registered valuers where required.' }] },
    { id: 'project-finance', cat: 'growth', name: 'Project Finance & Bank Loans', short: 'Term loans, working capital and CMA reports.',
      intro: 'Well-prepared loan proposals that banks can say yes to — for expansion, machinery and working capital.',
      includes: ['Project reports & CMA data', 'Term loan & working capital proposals', 'CGTMSE & collateral-free loans', 'Bank liaison', 'Loan restructuring', 'Stock statement support'],
      forWho: ['MSMEs expanding capacity', 'Businesses needing working capital', 'New projects seeking term loans'],
      faqs: [{ q: 'Can you get loans without collateral?', a: 'Schemes like CGTMSE make this possible for eligible MSMEs. We check fit and prepare the application.' }, { q: 'Which banks do you work with?', a: 'Public, private and small finance banks, as well as NBFCs.' }] },
    { id: 'duty-exemption', cat: 'trade', name: 'Duty-Free Imports for Exporters', short: 'Import raw materials and machinery without paying customs duty.',
      intro: 'Import inputs and capital goods duty-free or at concessional rates under the Foreign Trade Policy — with licences, norms and export obligations managed for you.',
      includes: ['Duty-free raw materials for export production', 'Machinery at zero or low duty', 'Duty-free inputs after you export', 'Import-export code & trade licence filings', 'Tracking your export commitments'],
      items: [
        { t: 'Duty-free raw materials for export production', d: 'Import the inputs you use to make export goods without paying customs duty. (Advance Authorisation)' },
        { t: 'Machinery at zero or low duty', d: 'Import machinery at zero or reduced duty, in return for reaching an export target over a few years. (EPCG)' },
        { t: 'Duty-free inputs after you export', d: 'Earn a duty-free import licence once your exports are made — and sell it if you don\'t need it. (DFIA)' },
        { t: 'Import-export code & trade licence filings' },
        { t: 'Tracking your export commitments' }
      ],
      forWho: ['Manufacturer-exporters importing inputs', 'Exporters investing in new machinery', 'New exporters setting up trade licences'],
      faqs: [{ q: 'Which option suits us?', a: 'One licence is issued before you import, based on your export plan; the other is issued after you export and can be sold. We compare both for your product.' }, { q: 'What export target comes with cheaper machinery?', a: 'Usually exports worth six times the duty saved, within six years. We track it and close it off on time.' }] },
    { id: 'duty-remission', cat: 'trade', name: 'Refunds on Export Duties & Taxes', short: 'Get back the duties and taxes built into your export prices.',
      intro: 'Recover the duties and embedded taxes built into your exports — claimed accurately, reconciled and followed up until credited.',
      includes: ['Refund of customs duty on export inputs', 'Refund of hidden taxes in export prices', 'Tax refunds for garment & textile exporters', 'Claim filing & matching', 'Follow-up with customs until paid'],
      items: [
        { t: 'Refund of customs duty on export inputs', d: 'Get back the customs duty paid on materials used in goods you export. (Duty Drawback)' },
        { t: 'Refund of hidden taxes in export prices', d: 'Recover fuel, power and local taxes built into your costs that no other scheme refunds. (RoDTEP)' },
        { t: 'Tax refunds for garment & textile exporters', d: 'Extra tax refunds for apparel and made-up textile exports. (RoSCTL)' },
        { t: 'Claim filing & matching' },
        { t: 'Follow-up with customs until paid' }
      ],
      forWho: ['Exporters of manufactured goods', 'Apparel & textile exporters', 'Businesses with unclaimed past refunds'],
      faqs: [{ q: 'Can we claim more than one refund?', a: 'Usually yes — they cover different duties and taxes. We check each shipment.' }, { q: 'Can past unclaimed benefits be recovered?', a: 'Often, within the time limits allowed. We review past shipments to find unclaimed amounts.' }] },
    { id: 'import-facilitation', cat: 'trade', name: 'Import Now, Pay Duty Later', short: 'Delay paying import duty and get faster customs clearance.',
      intro: 'Improve working capital and speed up clearances with bonded manufacturing, deferred duty payment and trusted-trader status.',
      includes: ['Manufacture in a duty-free bonded unit', 'Pay import duty later', 'Fast-track customs clearance', 'Bonded unit licence & setup', 'Monthly returns & records'],
      items: [
        { t: 'Manufacture in a duty-free bonded unit', d: 'Import goods and raw materials duty-free to manufacture in a bonded warehouse, deferring duty until goods enter the domestic market. (MOOWR)' },
        { t: 'Pay import duty later', d: 'Trusted manufacturers can clear imports now and pay duty later, freeing up cash (available until March 2028). (Duty deferment)' },
        { t: 'Fast-track customs clearance', d: 'Trusted-trader status for quicker clearance, fewer inspections and priority treatment. (AEO)' },
        { t: 'Bonded unit licence & setup' },
        { t: 'Monthly returns & records' }
      ],
      forWho: ['Manufacturers importing inputs or capital goods', 'Regular importers seeking faster clearance', 'Businesses outside SEZs seeking duty relief'],
      faqs: [{ q: 'How is this different from an export zone?', a: 'It works from your own premises anywhere in India, with no zone location or export targets.' }, { q: 'Who qualifies for fast-track clearance?', a: 'Importers, exporters and logistics players with a strong compliance record. We assess readiness and prepare the application.' }] }
  ,
    {"id":"eu-setup","cat":"setup","name":"Company Setup in Belgium & the EU","short":"Set up a Belgian or EU company, branch or subsidiary through our Brussels office.","intro":"Expand into Europe with a team on the ground in Brussels — entity choice, incorporation, registrations and ongoing compliance handled for you.","includes":["Entity choice: SRL/BV, branch or subsidiary","Notary, registration & enterprise number","VAT & EORI registration","Registered address support","Bank account introductions","Ongoing accounting & compliance"],"forWho":["Indian SMEs expanding to Europe","Exporters needing an EU presence","Tech and service firms serving EU clients"],"faqs":[{"q":"Do I need to travel to Belgium?","a":"Usually not. Most steps can be completed with a power of attorney and apostilled documents."},{"q":"Branch or subsidiary?","a":"A subsidiary limits liability and is simpler for local contracts; a branch is lighter to run. We compare both for your plans."}]},
    {"id":"uae-setup","cat":"setup","name":"Company Setup in the UAE","short":"Mainland or free-zone company setup in Dubai and the UAE.","intro":"Set up in Dubai with local support — the right licence and zone, registrations, banking introductions and ongoing compliance.","includes":["Mainland vs free-zone advice","Trade licence & registration","Visa & establishment card guidance","Bank account introductions","VAT & corporate tax registration","Ongoing accounting & compliance"],"forWho":["Indian SMEs expanding to the Gulf","Trading and logistics businesses","Founders setting up a regional hub"],"faqs":[{"q":"Mainland or free zone?","a":"Free zones suit international trade and services; mainland is needed to trade directly in the local market. We advise based on your customers."},{"q":"How long does setup take?","a":"Typically two to four weeks once documents are ready."}]},
    {"id":"us-setup","cat":"setup","name":"Company Setup in the USA","short":"Form a US LLC or C-Corp (Delaware, Wyoming and other states).","intro":"Enter the US market with the right entity — formation, EIN, registered agent, banking introductions and ongoing compliance handled for you.","includes":["LLC vs C-Corp advice (Delaware, Wyoming & others)","State formation & registered agent","EIN & ITIN applications","Bank account introductions","US bookkeeping & sales tax","Annual reports & federal/state filings"],"forWho":["Indian SaaS and tech founders","Exporters selling to US customers","Startups raising from US investors"],"faqs":[{"q":"LLC or C-Corp?","a":"Investors usually expect a Delaware C-Corp; an LLC can suit service or trading businesses. We compare both for your plans."},{"q":"Do I need to visit the US?","a":"No. Formation, EIN and most banking steps can be completed remotely."}]},
    {"id":"outsourced-accounting","cat":"tax","name":"Outsourced Accounting for Overseas Firms","short":"Remote bookkeeping, reporting and payroll for UK, EU and UAE businesses.","intro":"A dedicated team that keeps your books, runs month-end and reports to your standards — with overlap in your working hours and a fraction of local cost.","includes":["Bookkeeping in Xero, QuickBooks, Sage & Zoho","Month-end close & management accounts","Payables & receivables","Payroll processing support","IFRS & local GAAP reporting","NDA, data security & access controls"],"forWho":["Accounting firms outsourcing overflow work","SMEs in the EU, UK and UAE","Groups with an Indian back office"],"faqs":[{"q":"Which time zones do you cover?","a":"Our Brussels and Dubai offices give overlap with European and Gulf working hours; processing is done by our India team."},{"q":"How is our data protected?","a":"All work is under NDA, with role-based access to your systems and no local copies of client data."}]},
    {"id":"eu-vat","cat":"tax","name":"EU VAT & Bookkeeping","short":"VAT registration, returns and local bookkeeping in Belgium and the EU.","intro":"Stay VAT-compliant across the EU — registrations, periodic returns and bookkeeping, coordinated from our Brussels office.","includes":["VAT registration & EORI","Periodic VAT returns & EC sales lists","Intra-EU and OSS filings","Local bookkeeping","Annual accounts support","Coordination with local accountants"],"forWho":["Indian companies with an EU entity","Exporters selling into the EU","EU SMEs outsourcing VAT work"],"faqs":[{"q":"Do I need an EU VAT number?","a":"If you store goods, sell to consumers above thresholds or run an EU entity, usually yes. We check your case."},{"q":"Can you work with our local accountant?","a":"Yes — we prepare the data and filings and coordinate with them."}]},
    {"id":"uae-tax","cat":"tax","name":"UAE VAT & Corporate Tax","short":"VAT and corporate tax registration, returns and bookkeeping in the UAE.","intro":"Keep your UAE entity compliant with VAT and the new corporate tax regime — registrations, returns and books handled end to end.","includes":["VAT registration & returns","Corporate tax registration & filing","Bookkeeping & financial statements","Free-zone compliance","Transfer pricing coordination","Economic substance & UBO filings"],"forWho":["UAE mainland and free-zone companies","Indian groups with a UAE entity","Traders and service firms in Dubai"],"faqs":[{"q":"Does corporate tax apply to free-zone companies?","a":"Qualifying free-zone income may be taxed at 0%, but registration and filing are still required."},{"q":"When must we register?","a":"Deadlines depend on your licence date. We confirm yours and file on time."}]},
    {"id":"data-analytics","cat":"tax","name":"Data Analytics & Dashboards","short":"Turn your accounting and sales data into clear dashboards and insight.","intro":"See your business at a glance — we connect your accounting, sales and inventory data into dashboards and reports you can act on.","includes":["Power BI & Zoho Analytics dashboards","Cash flow & profitability analysis","Sales, inventory & margin reports","KPI design for boards & investors","Data clean-up & integration","Forecasting models"],"forWho":["Owners who want numbers at a glance","Finance teams moving off spreadsheets","Businesses preparing for investors"],"faqs":[{"q":"Which tools do you use?","a":"Mostly Power BI and Zoho Analytics, connected to Tally, Zoho Books, QuickBooks or Xero."},{"q":"Is this a one-off or ongoing?","a":"Either — a one-time dashboard build or a monthly reporting service."}]}
  ];

  var byId = {}; S.forEach(function (s) { byId[s.id] = s; });
  
  var alias = { moowr: 'import-facilitation', dgft: 'duty-exemption', 'customs-schemes': 'duty-remission' };
  Object.keys(alias).forEach(function (k) { byId[k] = byId[alias[k]]; });
  var catById = {}; cats.forEach(function (c) { catById[c.id] = c; });

  function href(id) { return 'service.html?s=' + id; }

  var finderMap = {
    manufacturing: ['govt-funding', 'import-facilitation', 'project-finance', 'duty-exemption'],
    tech: ['angel-seed', 'govt-funding', 'valuation', 'virtual-cfo'],
    export: ['duty-exemption', 'duty-remission', 'sez', 'import-facilitation'],
    services: ['strategic-advisory', 'project-finance', 'govt-funding', 'virtual-cfo']
  };
  var stageBoost = {
    idea: ['business-formation', 'govt-funding'],
    early: ['angel-seed', 'govt-funding'],
    growing: ['project-finance', 'valuation'],
    established: ['strategic-advisory', 'import-facilitation']
  };
  function finder(stage, sector) {
    var ids = (stageBoost[stage] || []).concat(finderMap[sector] || []);
    var seen = {}, out = [];
    ids.forEach(function (id) { if (!seen[id] && byId[id]) { seen[id] = 1; out.push(id); } });
    return out.slice(0, 4);
  }

  var io = null;
  function reveal() {
    vtDynamic();
    document.querySelectorAll('img[data-ph]').forEach(function (im) { if (im.complete && im.naturalWidth === 0) im.style.display = 'none'; });
    if (!('IntersectionObserver' in window)) return;
    if (!io) io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { var el = e.target; el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none'; io.unobserve(el); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    var vh = window.innerHeight;
    document.querySelectorAll('[data-reveal]:not([data-rv])').forEach(function (el) {
      el.setAttribute('data-rv', '1');
      if (el.getBoundingClientRect().top < vh * 0.92) return;
      var d = el.getAttribute('data-reveal') || '0';
      el.style.opacity = '0';
      el.style.transform = 'translateY(34px) scale(.985)';
      el.style.filter = 'blur(6px)';
      el.style.transition = 'opacity 1s cubic-bezier(.2,.7,.2,1) ' + d + 'ms, transform 1s cubic-bezier(.2,.7,.2,1) ' + d + 'ms, filter 1s ease ' + d + 'ms';
      io.observe(el);
    });
    document.querySelectorAll('[data-count]:not([data-cv])').forEach(function (el) {
      el.setAttribute('data-cv', '1');
      var target = parseFloat(el.getAttribute('data-count'));
      var suf = el.getAttribute('data-suffix') || '', pre = el.getAttribute('data-prefix') || '';
      var o = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return; o.disconnect();
          var t0 = performance.now();
          (function step(now) {
            var p = Math.min(1, (now - t0) / 1600), v = target * (1 - Math.pow(1 - p, 3));
            el.textContent = pre + Math.round(v).toLocaleString('en-IN') + suf;
            if (p < 1) requestAnimationFrame(step);
          })(t0);
        });
      }, { threshold: 0.5 });
      o.observe(el);
    });
  }


  function vtDynamic() {
    if (window.__vtDyn) return; window.__vtDyn = 1;
    var css = document.createElement('style');
    css.textContent = '[data-marq]:hover{animation-play-state:paused!important}[data-ind]:hover img{transform:scale(1.07)}#vt-progress{position:fixed;top:0;left:0;height:3px;width:100%;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,#5aa83a,#3f97d1);z-index:400;pointer-events:none}';
    document.head.appendChild(css);
    var bar = document.createElement('div'); bar.id = 'vt-progress'; document.body.appendChild(bar);
    var ticking = false;
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var h = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
        document.querySelectorAll('[data-par]').forEach(function (el) {
          var r = el.getBoundingClientRect(), k = parseFloat(el.getAttribute('data-par')) || 0.08;
          el.style.transform = 'translateY(' + ((r.top + r.height / 2 - innerHeight / 2) * -k).toFixed(1) + 'px)';
        });
        ticking = false;
      });
    }
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    if (matchMedia('(hover:hover)').matches) {
      document.addEventListener('mousemove', function (e) {
        var t = e.target && e.target.closest ? e.target.closest('section,header,div[data-b]') : null;
        document.querySelectorAll('[data-spot]').forEach(function (l) {
          var p = l.parentElement;
          if (t && (p === t || p.contains(t))) {
            var r = p.getBoundingClientRect();
            l.style.background = 'radial-gradient(520px circle at ' + (e.clientX - r.left) + 'px ' + (e.clientY - r.top) + 'px, rgba(255,255,255,.09), transparent 60%)';
            l.style.opacity = '1';
          } else l.style.opacity = '0';
        });
      }, { passive: true });
    }
    document.addEventListener('error', function (e) { var el = e.target; if (el && el.tagName === 'IMG' && el.hasAttribute('data-ph')) el.style.display = 'none'; }, true);
  }


  function seo(o) {
    document.documentElement.lang = 'en-IN';
    if (o.title) document.title = o.title;
    function meta(sel, attr, key, val) { var m = document.head.querySelector(sel); if (!m) { m = document.createElement('meta'); m.setAttribute(attr, key); document.head.appendChild(m); } m.setAttribute('content', val); }
    if (o.desc) { meta('meta[name="description"]', 'name', 'description', o.desc); meta('meta[property="og:description"]', 'property', 'og:description', o.desc); meta('meta[name="twitter:description"]', 'name', 'twitter:description', o.desc); }
    if (o.title) { meta('meta[property="og:title"]', 'property', 'og:title', o.title); meta('meta[name="twitter:title"]', 'name', 'twitter:title', o.title); }
    if (o.url) { var c = document.head.querySelector('link[rel="canonical"]'); if (!c) { c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); } c.href = o.url; meta('meta[property="og:url"]', 'property', 'og:url', o.url); }
    (o.ld || []).forEach(function (obj, i) { var id = 'vt-ld-' + (o.key || 'x') + '-' + i; var sc = document.getElementById(id); if (!sc) { sc = document.createElement('script'); sc.type = 'application/ld+json'; sc.id = id; document.head.appendChild(sc); } sc.textContent = JSON.stringify(obj); });
  }
  document.documentElement.lang = 'en-IN';

  function whenReady(cb) {
    if (window.VT) return cb();
    var t = setInterval(function () { if (window.VT) { clearInterval(t); cb(); } }, 25);
  }

  if (document.body) vtDynamic(); else document.addEventListener('DOMContentLoaded', vtDynamic);
  window.VT = { cats: cats, services: S, byId: byId, catById: catById, href: href, finder: finder, reveal: reveal, seo: seo };
  window.VTready = whenReady;
})();
