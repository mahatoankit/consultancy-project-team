export const STATS = [
  { label: "Students placed", value: 250000, suffix: "+", icon: "GraduationCap" },
  { label: "Partner universities", value: 850, suffix: "+", icon: "Building2" },
  { label: "Countries covered", value: 45, suffix: "", icon: "Globe" },
  { label: "Visa approval rate", value: 98.2, suffix: "%", icon: "BadgeCheck" },
]

export const DESTINATIONS = [
  { country: "United Kingdom", flag: "🇬🇧", universities: 120, avgTuition: "£28k" },
  { country: "Canada",         flag: "🇨🇦", universities: 95,  avgTuition: "CAD 32k" },
  { country: "Australia",      flag: "🇦🇺", universities: 88,  avgTuition: "AUD 38k" },
  { country: "USA",            flag: "🇺🇸", universities: 200, avgTuition: "USD 42k" },
  { country: "Germany",        flag: "🇩🇪", universities: 65,  avgTuition: "€2k" },
  { country: "New Zealand",    flag: "🇳🇿", universities: 40,  avgTuition: "NZD 30k" },
]

export const DEGREES = [
  "Undergraduate (UG)", "Postgraduate (PG)", "PhD / Research",
  "Diploma / Certificate", "Foundation Year", "MBA / Management",
]

export const PROCESS_STEPS = [
  { id: 1, title: "Profile assessment",      duration: "1–2 days",  icon: "UserCheck",
    description: "Our counsellors evaluate your academic background, work experience, and goals to shortlist the best universities for you.",
    docs: ["Transcripts", "10th & 12th certificates", "CV / Resume"] },
  { id: 2, title: "University shortlisting", duration: "3–5 days",  icon: "Building2",
    description: "We match you with 6–10 universities across safety, target, and dream tiers based on your profile and career goals.",
    docs: ["Shortlist report", "University comparison sheet"] },
  { id: 3, title: "Application & SOP",       duration: "2–4 weeks", icon: "FileText",
    description: "We craft your Statement of Purpose, review LORs, and manage all application portals ensuring every detail is submission-ready.",
    docs: ["SOP drafts", "LOR templates", "Application forms"] },
  { id: 4, title: "Visa documentation",      duration: "1–3 weeks", icon: "CreditCard",
    description: "From GIC accounts to financial documents, we prepare your full visa package and conduct mock interviews.",
    docs: ["Visa checklist", "Bank statements", "Offer letter"] },
  { id: 5, title: "Pre-departure briefing",  duration: "1 session", icon: "Plane",
    description: "We brief you on accommodation, travel insurance, SIM cards, and local bank accounts so day one abroad feels like home.",
    docs: ["Pre-departure guide", "City handbook"] },
]

export const TESTIMONIALS = [
  { id: 1, name: "Priya Sharma",    avatar: "PS", flag: "🇬🇧",
    destination: "MSc Data Science — University of Edinburgh",
    outcome: "Visa Approved", outcomeType: "success", rating: 5, year: 2024,
    quote: "From shortlisting to visa approval, every step felt supported. My counsellor knew Edinburgh's CS department better than I did." },
  { id: 2, name: "Rahul Mehta",     avatar: "RM", flag: "🇨🇦",
    destination: "MBA — Schulich School, York University",
    outcome: "Scholarship: CAD 18k", outcomeType: "warning", rating: 5, year: 2024,
    quote: "I had three rejections before coming here. They identified the gaps in my profile and I got into my dream school with a scholarship." },
  { id: 3, name: "Fatima Al-Rashid", avatar: "FA", flag: "🇦🇺",
    destination: "BEng Mechanical — Monash University",
    outcome: "Visa Approved", outcomeType: "success", rating: 5, year: 2025,
    quote: "The visa process was the part I was most anxious about. Their mock interview prep was exactly what I needed." },
]

export const PARTNER_UNIVERSITIES = [
  { name: "University of Edinburgh", country: "UK",        rank: 22 },
  { name: "University of Toronto",   country: "Canada",    rank: 21 },
  { name: "Monash University",       country: "Australia", rank: 57 },
  { name: "TU Munich",               country: "Germany",   rank: 37 },
  { name: "University of Auckland",  country: "NZ",        rank: 65 },
  { name: "McGill University",       country: "Canada",    rank: 46 },
  { name: "University of Melbourne", country: "Australia", rank: 33 },
  { name: "King's College London",   country: "UK",        rank: 40 },
]

export const COUNSELLORS = [
  { name: "Anika Verma",  avatar: "AV", specialty: "UK & Europe",    experience: 8,  slots: 3 },
  { name: "James Okafor", avatar: "JO", specialty: "Canada & USA",   experience: 11, slots: 1 },
  { name: "Mei Lin",      avatar: "ML", specialty: "Australia & NZ", experience: 6,  slots: 4 },
]
