/**
 * CV data — rendered on the About page.
 */

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  details?: string[];
}

export const education: TimelineItem[] = [
  {
    title: 'Ph.D. in Computer Science',
    org: 'Hanyang University, Seoul, South Korea',
    period: '2022.03 – 2026.08',
    details: [
      'Software Security Laboratory (advisor: Prof. Eul Gyu Im)',
      'Dissertation research on AI-based malware analysis with a focus on document-based malware',
      'Research on AI-based network intrusion detection',
    ],
  },
  {
    title: 'M.S. in Computer and Software',
    org: 'Hanyang University, Seoul, South Korea',
    period: '2015 – 2017',
  },
  {
    title: 'B.E. in Computer Engineering',
    org: 'Myongji University, Yongin, South Korea',
    period: '2006 – 2013',
  },
];

export const experience: TimelineItem[] = [
  {
    title: 'Security Researcher',
    org: 'waiker, Inc., Seoul (Full-time)',
    period: '2021.03 – 2021.06',
    details: [
      'Collected and analyzed security data from AWS cloud infrastructure',
      'Built a large-scale security log processing system (Python, ELK Stack, WAZUH)',
      'Investigated ML/DL-based security technologies and co-authored research papers',
    ],
  },
  {
    title: 'Information Security Engineer',
    org: 'Myongji University, Yongin (Full-time)',
    period: '2019.09 – 2020.11',
    details: [
      'Developed network vulnerability assessment tools in Python',
      'Operated DLP security solutions and analyzed logs',
      'Handled security incidents for the Ministry of Education Cyber Security Center (ECSC)',
    ],
  },
  {
    title: 'AI Research Engineer',
    org: 'Genesis Lab, Inc., Seoul (Full-time)',
    period: '2019.02 – 2019.08',
    details: [
      'AI research for interview-analysis software',
      'Built video data collection and preprocessing pipelines (OpenCV, ffmpeg, MTCNN)',
      'Implemented encryption modules for collected data protection',
    ],
  },
  {
    title: 'Student Researcher',
    org: 'Hanyang University, Seoul (Full-time)',
    period: '2015.09 – 2017.08',
    details: [
      'ML-based classification of normal/abnormal users from network traffic (NSR project)',
      'Developed feature extraction and preprocessing tools for packet analysis',
    ],
  },
  {
    title: 'Security Software Engineer',
    org: 'nSecure Co., Ltd., Seoul (Full-time)',
    period: '2014.12 – 2015.06',
    details: [
      'Technical support for CA Identity Manager (IAM) at financial data centers (Kookmin Bank)',
    ],
  },
  {
    title: 'Security Software Engineer (Intern)',
    org: 'Future Systems, Seongnam',
    period: '2013.10 – 2014.03',
    details: [
      'Black-box testing of firewall software; network traffic analysis with Wireshark',
    ],
  },
  {
    title: 'Network Security Engineer (Intern)',
    org: 'WINS Co., Ltd., Seongnam',
    period: '2012.12 – 2013.01',
    details: ['Operated IPS; packet and log analysis in Linux environments'],
  },
  {
    title: 'Cybersecurity Specialist (CERT Team)',
    org: 'Republic of Korea Army, 2nd Operations Command, Daegu',
    period: '2009.02 – 2010.12',
    details: [
      'Network traffic monitoring, antivirus policy management (AhnLab Policy Center), Infocon procedures',
    ],
  },
];

export const certifications: string[] = [
  'Engineer Information Security (정보보안기사), Korea',
];

export const interests: string[] = [
  'AI-applied Cybersecurity',
  'AI-driven Threat Detection',
  'Malware Detection',
  'Intrusion Detection',
];
