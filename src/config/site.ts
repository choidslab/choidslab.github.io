/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — single source of truth for site identity.
 *
 *  When this personal site grows into a research lab site,
 *  change `siteName`, `tagline`, and `emails` here and the
 *  whole site updates. No other file needs editing.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  /** Shown in the header logo, browser tab, and footer. */
  siteName: 'Doo-Seop Choi',

  /** Short label under / next to the site name (header + hero). */
  tagline: 'AI × Cybersecurity Researcher',

  /** Short mono handle used in decorative terminal touches
   *  (e.g. the hero prompt `~/dschoi $`). Update on rebrand. */
  handle: 'dschoi',

  /** Future lab identity — flip `useLabBranding` to true later. */
  lab: {
    useLabBranding: false,
    name: 'DAIS Lab',
    fullName: 'Data & AI Security Lab',
  },

  /** Deployed URL. */
  url: 'https://choidslab.github.io',

  /** Contact emails — first entry is primary. Replace the Hanyang
   *  address later by editing this array only. */
  emails: ['dschoi@dslab.kr', 'dslab0915@hanyang.ac.kr'],

  /** Affiliation line used on About / Contact / footer. */
  affiliation:
    'Department of Computer Science, Hanyang University, Seoul, South Korea',

  /** Social / scholarly profiles. Add or remove freely. */
  socials: {
    googleScholar: 'https://scholar.google.com/citations?user=YTLlDpgAAAAJ',
    github: 'https://github.com/choidslab',
    // linkedin: '',
    // orcid: '',
  },

  /** SEO description. */
  description:
    'Doo-Seop Choi — Ph.D. in Computer Science (Hanyang University). Research on AI-applied cybersecurity: malicious document detection, LLM-driven security analysis, and trustworthy AI.',

  /** Navigation. Order matters. To add a Members page later,
   *  add `{ label: 'Members', href: '/members' }` here and create
   *  `src/pages/members.astro`. */
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Research', href: '/research/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'News', href: '/news/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;

/** Display name used in publication author lists (bolded). */
export const AUTHOR_ME = 'Doo-Seop Choi';
