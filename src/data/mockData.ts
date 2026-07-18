export type NavigationItem = {
  label: string;
  href: string;
};

export type Facility = {
  name: string;
  region: string;
  careType: string;
  bedsAvailable: number;
  supportPrograms: string[];
  contactToken: string;
};

export type RegistryRow = {
  id: string;
  careCategory: string;
  recoveryTier: string;
  status: string;
  biometricMatch: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Get Diagnosis', href: '#diagnosis' },
  { label: 'Find Care', href: '#facilities' },
  { label: 'Search ID', href: '#portal' },
  { label: 'Stats / Help', href: '#analytics' },
];

export const registryRows: RegistryRow[] = [
  { id: 'SUB-89B2X', careCategory: 'Alcohol recovery', recoveryTier: 'Tier 2', status: 'Monitoring', biometricMatch: 'Matches your record' },
  { id: 'SUB-44M8P', careCategory: 'Opioid support', recoveryTier: 'Tier 3', status: 'High support', biometricMatch: 'No duplicate found' },
  { id: 'SUB-71Q9L', careCategory: 'Stimulant support', recoveryTier: 'Tier 1', status: 'Community follow-up', biometricMatch: 'Private match only' },
];

export const facilities: Facility[] = [
  {
    name: 'North Harbor Recovery Center',
    region: 'Northeast District',
    careType: 'Detox + behavioral health',
    bedsAvailable: 6,
    supportPrograms: ['Detox', 'CBT', 'Peer recovery'],
    contactToken: 'FAC-211',
  },
  {
    name: 'Havenwell Behavioral Clinic',
    region: 'Central District',
    careType: 'Outpatient care',
    bedsAvailable: 12,
    supportPrograms: ['Medication support', 'Family counseling', 'Trauma-informed care'],
    contactToken: 'FAC-410',
  },
  {
    name: 'Cedar Community Recovery Hub',
    region: 'South District',
    careType: 'Community support',
    bedsAvailable: 3,
    supportPrograms: ['Vocational guidance', 'Group support', 'Housing navigation'],
    contactToken: 'FAC-089',
  },
];

export const analyticsSeries = [
  { label: 'Jan', recovery: 58, adherence: 70 },
  { label: 'Feb', recovery: 63, adherence: 74 },
  { label: 'Mar', recovery: 69, adherence: 78 },
  { label: 'Apr', recovery: 74, adherence: 83 },
  { label: 'May', recovery: 81, adherence: 88 },
  { label: 'Jun', recovery: 87, adherence: 94 },
];

export const faqItems = [
  {
    question: 'How is privacy protected?',
    answer: 'Only a private ID code is shown. No names are displayed.',
  },
  {
    question: 'What does the care finder show?',
    answer: 'Nearby care options, open beds, and the type of help each place offers.',
  },
  {
    question: 'Can this be changed later?',
    answer: 'Yes. The page is set up so it can connect to real data later.',
  },
];
