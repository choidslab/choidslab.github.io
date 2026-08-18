/**
 * Publications data — add new entries at the top.
 * `selected: true` entries appear on the Home page.
 */

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  venueShort: string; // badge label, e.g. "Elsevier", "MDPI"
  year: number;
  volume?: string;
  pages?: string; // page range, e.g. '651–661'
  articleNo?: string; // article number for e-only journals, e.g. '114461'
  doi?: string;
  url?: string;
  type: 'international-journal' | 'domestic-journal' | 'conference';
  selected?: boolean;
  note?: string; // e.g. "SCIE, Q1"
}

export const publications: Publication[] = [
  {
    title:
      'Machine learning-based detection method for malicious PDF files: A temporal classification approach',
    authors: ['Doo-Seop Choi', 'Taeguen Kim', 'BooJoong Kang', 'Eul Gyu Im'],
    venue: 'Applied Soft Computing',
    venueShort: 'Elsevier',
    year: 2025,
    articleNo: '114461',
    doi: '10.1016/j.asoc.2025.114461',
    type: 'international-journal',
    selected: true,
    note: 'SCIE, Q1 · IF: 7.8',
  },
  {
    title:
      'Image-Based Malicious Network Traffic Detection Framework: Data-Centric Approach',
    authors: ['Doo-Seop Choi', 'Taeguen Kim', 'BooJoong Kang', 'Eul Gyu Im'],
    venue: 'Applied Sciences',
    venueShort: 'MDPI',
    year: 2025,
    volume: '15(12)',
    doi: '10.3390/app15126546',
    type: 'international-journal',
    selected: true,
    note: 'SCIE, Q2 · IF: 2.9',
  },
  {
    title: 'Windows Malware Family Dataset Construction and Classification',
    authors: ['Tae-Young Kim', 'Doo-Seop Choi', 'Eul Gyu Im'],
    venue: 'The Transactions of the Korea Information Processing Society',
    venueShort: 'KIPS',
    year: 2025,
    volume: '14(9)',
    pages: '651–661',
    type: 'domestic-journal',
  },
  {
    title:
      'A Comparative Study of Feature Importance Algorithms and Feature Selection for Static Feature-Based Ransomware Detection',
    authors: ['Hye-Min Jeon', 'Doo-Seop Choi', 'Eul Gyu Im'],
    venue: 'The Transactions of the Korea Information Processing Society',
    venueShort: 'KIPS',
    year: 2025,
    volume: '14(8)',
    pages: '576–587',
    type: 'domestic-journal',
  },
  {
    title:
      'Design of a Cloud-based Integrated Security Software Framework for Android Automotive OS Vehicles',
    authors: ['Doo-Seop Choi', 'Eul Gyu Im'],
    venue: 'The Journal of Korean Institute of Next Generation Computing',
    venueShort: 'KINGPC',
    year: 2025,
    volume: '21(3)',
    pages: '7–20',
    type: 'domestic-journal',
  },
];
