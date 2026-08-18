/**
 * Research areas — the three pillars shown on Home and Research pages.
 */

export interface ResearchArea {
  id: string;
  index: string; // "01" style label
  title: string;
  short: string; // one-line summary for cards
  description: string; // full paragraph for the Research page
  keywords: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'malware-detection',
    index: '01',
    title: 'AI-based Malware Detection',
    short:
      'Machine learning–driven detection of non-executable and document-based malware (PDF, HWP, Office), robust to how threats evolve over time.',
    description:
      'Attackers increasingly deliver malware through everyday document formats rather than executables. This research designs data-driven detection pipelines for non-executable malware — feature engineering from file structure and embedded content, temporal analysis of how malicious samples drift over the years, and ensemble models that stay accurate as threats evolve. Representative work includes a temporal classification framework for malicious PDF detection published in Applied Soft Computing.',
    keywords: ['Document Malware', 'PDF/HWP/Office', 'Concept Drift', 'Feature Engineering', 'Ensemble Learning'],
  },
  {
    id: 'llm-security',
    index: '02',
    title: 'LLM-driven Security Analysis',
    short:
      'Applying large language models to understand file context and semantics — moving detection beyond static signatures toward contextual threat analysis.',
    description:
      'Large language models can read a file the way an analyst does: understanding embedded scripts, URLs, and document context together. This research explores LLM-based analysis of non-executable files — contextual malicious-intent detection, explanation of why a sample is flagged, and hybrid pipelines that combine lightweight ML triage with LLM-level deep inspection for practical deployment.',
    keywords: ['Large Language Models', 'Contextual Detection', 'Explainable Security', 'Hybrid Pipelines'],
  },
  {
    id: 'trustworthy-ai',
    index: '03',
    title: 'Trustworthy AI for Security',
    short:
      'Making security AI reliable: adversarial robustness, interpretability, and safety of the models we deploy to defend systems.',
    description:
      'A detection model is itself an attack surface. This research studies the trustworthiness of AI used in security — robustness against adversarial evasion, interpretability of model decisions (SHAP, feature attribution), data-quality and leakage auditing, and ultimately the safety and reliability of AI models themselves as they take on larger roles in defense.',
    keywords: ['Adversarial Robustness', 'Interpretability (XAI)', 'Model Safety', 'Evaluation & Auditing'],
  },
];
