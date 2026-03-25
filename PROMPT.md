```
@workspace

## Stack Reality Check (read before writing a single line)
- Next.js 16 App Router, React 19, JavaScript ONLY (no TypeScript)
- Tailwind CSS v4 (no tailwind.config.js — uses CSS @theme in globals.css)
- tw-animate-css installed (import in globals.css for animated utilities)
- shadcn + Radix UI available for primitives
- lucide-react for ALL icons (no inline SVG needed)
- NO Framer Motion — use CSS transitions + IntersectionObserver + tw-animate-css
- clsx + tailwind-merge available (already wired in src/lib/utils.js as cn())

---

## PHASE 1 — src/constants/mockData.jsx
Populate the file with these named exports (already created, currently empty):

export const STATS = [
  { label: "Students placed", value: 250000, suffix: "+", icon: "GraduationCap" },
  { label: "Partner universities", value: 850, suffix: "+", icon: "Building2" },
  { label: "Countries covered", value: 45, suffix: "", icon: "Globe" },
  { label: "Visa approval rate", value: 98.2, suffix: "%", icon: "BadgeCheck" },
]
// icon strings map to lucide-react component names

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

---

## PHASE 2 — globals.css additions
Using Tailwind v4 syntax (@theme block, NOT tailwind.config.js):

@import "tw-animate-css";

@theme {
  --color-brand-primary:       #1e3a8a;
  --color-brand-primary-light: #3b5fc0;
  --color-brand-primary-dark:  #0f1f4d;
  --color-brand-accent:        #f59e0b;
  --color-brand-accent-hover:  #d97706;
  --color-neutral-50:          #f8fafc;

  --font-sans: "Geist", "Inter", system-ui, sans-serif;
  
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}

/* Scroll-reveal utility — toggled by IntersectionObserver */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Skeleton pulse */
@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
.skeleton {
  background-color: theme(colors.neutral.200);
  border-radius: 4px;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .skeleton { animation: none; opacity: 0.7; }
}

Also add Geist font via next/font/google in src/app/layout.js.

---

## PHASE 3 — Create src/components/marketing/GuidedDiscoveryHero.jsx

'use client'

Rules:
- Use cn() from @/lib/utils for conditional classes
- Use lucide-react icons matching the icon string in STATS (dynamically resolve them)
- No Framer Motion — use CSS classes + tw-animate-css utilities for entrance animations
- Apply animate-fade-in + animate-slide-up from tw-animate-css on mount via useEffect adding a class

Structure:
1. OUTER SECTION: full min-h-[92vh], flex center, 
   bg gradient: from-[#0f1f4d] via-[#1e3a8a] to-[#3b5fc0]
   Decorative: 2 absolute div circles (top-right, bottom-left) with opacity-5, pointer-events-none

2. TRUST BADGE: inline-flex pill, bg-amber-500/15, border border-amber-400/30, rounded-full,
   text-amber-300 text-sm font-medium. "✦ Trusted by 250,000+ students across 45 countries"

3. HEADLINE h1: clamp font size via style prop (min 40px, max 56px), font-bold text-white
   tracking-tight leading-[1.1]. Accent word "abroad." in text-amber-400.

4. SUBHEADLINE p: text-white/75 text-lg max-w-xl mx-auto mb-10

5. QUICK FINDER WIDGET (white card):
   - Container: bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
   - 3-segment progress bar at top: thin h-1 divs, bg-brand-primary when active, 
     bg-neutral-200 otherwise. Transition width on step change.
   - State: const [step, setStep] = useState(0) and const [answers, setAnswers] = useState({})
   - Step label: "Step X of 3" in uppercase text-xs text-neutral-400 font-semibold tracking-widest
   - Question: text-xl font-semibold text-neutral-800
   - Step 0 (degree): flex-wrap gap-2, each option a <button> — 
       unselected: border border-neutral-200 text-neutral-700 rounded-[10px] px-4 py-2 text-sm
       selected: bg-brand-primary text-white border-brand-primary
       onClick: setAnswers + setTimeout 300ms then setStep(1)
   - Step 1 (country): grid grid-cols-3 gap-2, each button shows flag + country name
       selected state: bg-blue-50 border-brand-primary text-brand-primary font-semibold
   - Step 2 (intake): same pill style as Step 0
       options: ["Jan / Feb 2025","Sep / Oct 2025","Jan / Feb 2026","Sep / Oct 2026","Flexible"]
   - When step===2 AND answers.intake is set: animate in a completion div (transition opacity):
       text-sm text-neutral-600 "We found 47 matching programmes for you."
       Full-width button: bg-amber-500 hover:bg-amber-600 text-white font-semibold 
       rounded-[10px] py-3.5 "Check my eligibility — free →"
   - Step transitions: on step change, apply a CSS class that does translateX(-20px) + opacity 0 
     for exit, then swap content and animate in from translateX(20px). 
     Use useRef + requestAnimationFrame or simple setTimeout pattern.

6. STATS GRID below widget:
   grid grid-cols-2 md:grid-cols-4 gap-3
   Each StatPill: bg-white/12 backdrop-blur-sm border border-white/20 rounded-[10px] p-4
   - Icon: resolve lucide icon from stat.icon string using a lookup object 
     (import { GraduationCap, Building2, Globe, BadgeCheck } and map by key)
   - Animated counter: useCountUp(target, 2200) custom hook using requestAnimationFrame
     triggered by IntersectionObserver on the stats grid container.
     Display: Math.round(count) for integers, count.toFixed(1) for decimals
   - Value: text-2xl font-bold text-white
   - Label: text-xs text-white/70 mt-1

---

## PHASE 4 — Create src/components/marketing/TrustMatrix.jsx

'use client'

Use a custom useReveal() hook:
  function useReveal(threshold = 0.15) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      const obs = new IntersectionObserver(([e]) => { 
        if (e.isIntersecting) setVisible(true) 
      }, { threshold })
      if (ref.current) obs.observe(ref.current)
      return () => obs.disconnect()
    }, [])
    return { ref, visible }
  }

Structure:
1. SECTION: bg-neutral-50 py-24

2. HEADER (centered, useReveal):
   - Label: text-sm font-semibold tracking-[0.1em] uppercase text-amber-500 mb-3
   - H2: text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 leading-[1.15]
     "Real outcomes.\nReal students." (use <br/>)

3. BENTO GRID: grid grid-cols-12 gap-4 mt-12
   
   LEFT — col-span-8:
   grid grid-cols-3 gap-4
   Map TESTIMONIALS → TestimonialCard sub-component with stagger delay:
   - bg-white border border-neutral-200 rounded-[16px] p-6 flex flex-col gap-4
   - Stars: map rating → amber ★ characters, text-amber-400 text-sm
   - Quote: text-sm text-neutral-700 leading-relaxed italic flex-1
   - Outcome badge: 
       outcomeType==="success": bg-green-50 border border-green-200 text-green-700
       outcomeType==="warning": bg-amber-50 border border-amber-200 text-amber-700
       flex items-center gap-1.5, dot div w-1.5 h-1.5 rounded-full same color,
       text-xs font-semibold
   - Author row: border-t border-neutral-100 pt-3 flex items-center gap-3
       Avatar: w-10 h-10 rounded-full bg-brand-primary text-white text-sm font-semibold
       flex items-center justify-content
       Name: text-sm font-semibold. Destination: text-xs text-neutral-500

   RIGHT — col-span-4: flex flex-col gap-4

   A) VISA TICKER card: bg-white border border-neutral-200 rounded-[16px] p-6
   - Header row: green live-dot (w-2 h-2 rounded-full bg-green-500, 
     add ring-4 ring-green-500/20 for pulse feel) + "Recent visa approvals" text-sm font-semibold
   - "98.2%" in text-4xl font-bold text-brand-primary
   - Subtitle: text-xs text-neutral-400 mb-5 "visa success rate — last 6 months"
   - 3 recent approval rows (hardcoded data fine):
     { name: "Arjun P.", country: "🇨🇦 Canada", time: "2 hrs ago" }
     { name: "Sofia M.", country: "🇬🇧 UK", time: "5 hrs ago" }
     { name: "David K.", country: "🇦🇺 Australia", time: "1 day ago" }
     Each row: flex justify-between, bg-neutral-50 rounded-[10px] p-3
     Left: green checkmark circle (w-7 h-7 bg-green-100 rounded-full flex center) + name/country
     Right: text-xs text-neutral-400 time
   - Reveal on scroll with stagger via style={{ transitionDelay: `${i * 200}ms` }}

   B) COUNSELLORS card: bg-white border border-neutral-200 rounded-[16px] p-5
   - Title: text-sm font-semibold text-neutral-800 mb-4 "Available counsellors today"
   - Map COUNSELLORS → each row: flex items-center gap-3 p-4 bg-neutral-50 rounded-[10px]
       Avatar circle: w-12 h-12 bg-brand-primary text-white
       Name + specialty text
       Scarcity badge RIGHT: 
         slots <= 2: bg-red-50 text-red-600 text-[11px] font-bold "X slots today"
         slots > 2: bg-green-50 text-green-600 text-[11px] font-bold
       "Book now" text-brand-primary text-xs underline decoration-dotted cursor-pointer

4. PARTNER UNIVERSITIES strip:
   - Label: centered text-xs uppercase tracking-widest text-neutral-400 mb-6
   - flex flex-wrap justify-center gap-3
   - Each: bg-white border border-neutral-200 rounded-[10px] px-5 py-2.5 cursor-pointer
     hover:border-brand-primary hover:shadow-sm transition-all
     grayscale hover:grayscale-0 transition (use Tailwind grayscale utility)
     University name text-[13px] font-semibold text-neutral-700
     Country + rank text-[11px] text-neutral-400

---

## PHASE 5 — Create src/components/marketing/InteractiveProcessStepper.jsx

'use client'

State:
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])

handleStepClick(index):
  if index > activeStep: add all steps 0..index-1 to completedSteps Set
  setActiveStep(index)

Progress %: Math.round((completedSteps.length / PROCESS_STEPS.length) * 100)

Structure:
1. SECTION: bg-white py-24

2. GRID: grid grid-cols-2 gap-16 items-start container mx-auto px-6

   LEFT (sticky top-[120px]):
   - Label + H2 + body copy (same pattern as TrustMatrix header)
   - Progress card: bg-neutral-100 rounded-[16px] p-5 mb-6
       Row: "Journey progress" text-sm + percentage text-sm font-bold text-brand-primary
       Progress bar: h-1.5 bg-neutral-200 rounded-full overflow-hidden
         Inner div: transition-[width] duration-400, 
         bg-gradient-to-r from-brand-primary to-amber-500
         width set via inline style: `${progress}%`
       Hint: text-xs text-neutral-400 mt-2 "Click each stage to explore"
   - CTA button: bg-brand-primary text-white font-semibold rounded-[10px] px-7 py-3.5

   RIGHT: map PROCESS_STEPS with index:
   Each step = flex gap-5 (icon column + content column)
   
   ICON COLUMN (w-11 flex-col items-center):
   - Button w-11 h-11 rounded-full border-2 flex items-center justify-center cursor-pointer
       future:    border-neutral-300 text-neutral-400 bg-white
       active:    border-brand-primary bg-brand-primary text-white  
       completed: border-amber-500 bg-amber-500 text-white
     Icon: use lucide-react dynamic lookup — 
       import { UserCheck, Building2, FileText, CreditCard, Plane, Check }
       completed steps show <Check size={18} strokeWidth={2.5} />
       others show the step's icon component at size={18}
   - Connector line (not for last step): flex-1 w-0.5 min-h-[32px] my-1
       completed: bg-amber-500, otherwise: bg-neutral-200
       transition-colors duration-300

   CONTENT COLUMN (flex-1 pb-6, no pb on last):
   - Header row onClick: flex items-center gap-3 cursor-pointer mb-0
       Title: text-lg font-bold (active) or font-semibold (rest) 
              text-neutral-900 (active/completed) or text-neutral-400 (future)
       Duration badge: text-[11px] bg-neutral-100 text-neutral-400 font-semibold px-2 py-0.5 rounded
   - Expandable panel (active step only):
       Use max-h-0 overflow-hidden → max-h-[500px] transition-[max-height] duration-300 ease-out
       When active add the max-h-[500px] class, otherwise max-h-0
       Inner: bg-blue-50 border border-blue-100 rounded-[10px] p-5 mt-3
         Description p: text-sm text-neutral-700 leading-relaxed mb-4
         "DOCUMENTS AT THIS STAGE" label: text-[10px] font-bold uppercase tracking-widest 
           text-neutral-400 mb-2
         Docs: flex flex-wrap gap-2 → each chip: text-[12px] font-medium 
           bg-blue-100 text-brand-primary px-2.5 py-1 rounded (using step.docs array)

---

## PHASE 6 — Create src/components/marketing/SkeletonLoaders.jsx

Export 4 components. All use className="skeleton" for the pulse animation.

UniversityCardSkeleton:
  bg-white border border-neutral-200 rounded-[16px] p-5 flex flex-col gap-4
  - div skeleton w-12 h-12 rounded-[6px]
  - div skeleton h-4 w-3/4
  - div skeleton h-3 w-1/2
  - flex gap-3: three divs skeleton h-6 rounded w-16, w-20, w-14
  - div skeleton h-10 rounded-[10px] w-full mt-2

ScholarshipCardSkeleton:
  bg-white border border-neutral-200 rounded-[16px] p-5 flex flex-col gap-3
  - flex justify-between: skeleton h-5 w-3/5 + skeleton h-5 w-16 rounded
  - skeleton h-3.5 w-4/5
  - skeleton h-3.5 w-3/5
  - flex gap-2: skeleton h-5 rounded-full w-14 + skeleton h-5 rounded-full w-16

SearchResultsSkeleton({ count = 6, type = "university" }):
  grid gap-4, grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  Array.from({ length: count }).map((_, i) => 
    type === "university" ? <UniversityCardSkeleton key={i} /> : <ScholarshipCardSkeleton key={i} />
  )

SkeletonText({ width = "100%", height = 16 }):
  div className="skeleton" style={{ height, width, borderRadius: 4 }}

---

## PHASE 7 — Wire up src/app/page.js

import GuidedDiscoveryHero from "@/components/marketing/GuidedDiscoveryHero"
import TrustMatrix from "@/components/marketing/TrustMatrix"
import InteractiveProcessStepper from "@/components/marketing/InteractiveProcessStepper"

export default function HomePage() {
  return (
    <main>
      <GuidedDiscoveryHero />
      <TrustMatrix />
      <InteractiveProcessStepper />
    </main>
  )
}

---

## IMPORTANT RULES — enforce throughout
1. JS only — if Copilot writes .ts or adds type annotations, reject and rewrite
2. Tailwind v4 — no arbitrary color values that aren't in @theme. Use bg-[#1e3a8a] 
   bracket notation for one-offs if needed, but prefer theme tokens
3. All data from mockData.jsx — no strings hardcoded in component files
4. Lucide icons — resolve dynamically from a lookup object, never string-match with if/else chains
5. Counters — always Math.round() or .toFixed(1) before rendering, step="1" on range inputs
6. No <img> tags anywhere — emoji flags + initials avatars only
7. Responsive: Quick Finder country grid is grid-cols-2 on mobile, grid-cols-3 on md+
8. All interactive components need 'use client' at top
9. tw-animate-css classes (animate-fade-in, animate-slide-up) available for mount animations
10. Test that npm run build passes with zero TypeScript errors (there should be none since it's JS)
```