export type NavLink = {
    label: string;
    href: string;
};

export const HEADER_LINKS: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Product', href: '/product' },
    { label: 'Team', href: '/team' },
    { label: 'News', href: '/news' },
];

export type FooterSection = {
    title: string;
    links: NavLink[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: 'LAYANAN',
        links: [
        { label: 'Discovery', href: '/discovery' },
        { label: 'Demand Signal', href: '/demand-signal' },
        { label: 'Merchant', href: '/merchant' },
        ],
    },
    {
        title: 'PERUSAHAAN',
        links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        ],
    },
    {
        title: 'SUPPORT',
        links: [
        { label: 'Help Center', href: '/help-center' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
    },
];