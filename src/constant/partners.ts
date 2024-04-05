export type partnerType = {
  name: string;
  bio: string;
  image: string;
  issues?: string[];
  xUrl?: string;
  website?: {
    name: string;
    url: string;
  };
  instagramUrl?: {
    name: string;
    url: string;
  };
  metaUrl?: string;
  phoneNumber?: string;
  email?: string;
};

export const partners: partnerType[] = [
  {
    name: 'The Closing Company',
    bio:
      'Your go-to attorney at law and public notary for real estate transactions. He has you covered from start to\n' +
      "finish. Whether it's cleaning and recording a title, drafting and reviewing contracts, handling\n" +
      "Public Deeds, or guiding you through the closing process, we'll make it seamless and\n" +
      'stress-free.',
    image: '/images/The Closing Company.png',
    website: {
      name: 'The Closing Company',
      url: 'www.theclosingcompany.legal',
    },
    instagramUrl: {
      url: 'https://www.instagram.com/the_closing_company/',
      name: '@the_closing_company',
    },
    phoneNumber: '787-407-8300',
    email: 'legaldesk@theclosingcompany.legal',
  },
  {
    name: 'GEO Tax',
    bio:
      'Giovanni Mendez has extensive experience as a corporate and tax attorney, including compliance, financial reporting, tax preparation, and regulatory matters. GEO Tax specializes in' +
      'Pre-move tax analysis of your business (inlcuding Federal, State, and Puerto Rico income aspects), Corporate Structuring, Tax Incentives Consulting, Investment Fund Structures, Liaison Services, and Strategic Partnerships, among many other skills. ',
    image: '/images/GEO Tax.png',
    website: {
      url: 'www.geo.tax',
      name: 'GEO Tax',
    },
    instagramUrl: {
      url: 'https://www.instagram.com/geo.tax/',
      name: '@geo.tax',
    },
    phoneNumber: '787-665-2022',
    email: 'gmendez@geo.tax',
  },
  {
    name: 'Summit Interiors',
    bio:
      'Jami Claypoole is an Interior Designer and Project Manager. Her career began in\n' +
      'the industry when she opened a successful interior design shop in Mountain Home, AR.\n' +
      'For over 20 years she has worked with architects and contractors to help clients\n' +
      'imagine the potential their homes can offer. She specializes in Project Management, Event and Holiday Decoration, Staging and Renovation.',
    image: '/images/Summit Interiors.png',
    website: {
      name: 'SummitInteriors',
      url: 'https://www.summitinteriors.com/',
    },
    phoneNumber: '908-247-7701',
    email: 'jami@summitinteriors.com',
  },
];
