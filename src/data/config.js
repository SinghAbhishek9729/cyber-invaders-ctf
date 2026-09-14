const CONFIG = {
  eventName: 'Cyber Invaders CTF',
  organizer: 'NIET Cyber Invaders Club',
  institution: 'Noida Institute of Engineering and Technology (NIET)',
  institutionShort: 'NIET Greater Noida',
  date: '24th October',
  location: 'Greater Noida, Uttar Pradesh',
  region: 'Greater Noida',
  tagline: 'HACK. SECURE. EVOLVE.',
  description: 'An inter-college cybersecurity challenge bringing together curious minds, aspiring security professionals and technology enthusiasts.',
  metaDescription: 'Cyber Invaders CTF — a student cybersecurity competition organized by the NIET Cyber Invaders Club across colleges and universities in Greater Noida.',
  registrationUrl: '#register', // TODO: Replace with actual registration URL
  copyrightYear: 2026,
  contact: {
    email: '', // TODO: Add email
    instagram: '', // TODO: Add Instagram URL
    linkedin: '', // TODO: Add LinkedIn URL
    discord: '', // TODO: Add Discord URL
    website: '', // TODO: Add website URL
  },
  socialLinks: {
    instagram: '',
    linkedin: '',
    discord: '',
    twitter: '',
  },
  challengeCategories: [
    { id: '01', name: 'Web Security', description: 'Investigate vulnerabilities and uncover hidden flags in web applications.' },
    { id: '02', name: 'Cryptography', description: 'Decode encrypted messages and break cryptographic systems.' },
    { id: '03', name: 'Digital Forensics', description: 'Analyze digital evidence and trace hidden artifacts.' },
    { id: '04', name: 'OSINT', description: 'Leverage open-source intelligence to discover critical information.' },
    { id: '05', name: 'Reverse Engineering', description: 'Disassemble and analyze compiled programs to reveal secrets.' },
    { id: '06', name: 'Network Security', description: 'Intercept and analyze network traffic to capture flags.' },
    { id: '07', name: 'Steganography', description: 'Uncover data hidden within images, audio, and files.' },
    { id: '08', name: 'Misc', description: 'Diverse challenges that test creative thinking and problem solving.' },
  ],
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'The CTF', href: '#about-ctf' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'How It Works', href: '#journey' },
    { label: 'Rules', href: '#rules' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  logos: {
    niet: '/images/niet-logo.svg',
    cyberInvaders: '/images/cyber-invaders-logo.jpg',
  },
};

export default CONFIG;
