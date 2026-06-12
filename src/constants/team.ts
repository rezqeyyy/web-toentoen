export const DIVISIONS = [ "Owner", "Finance", "Bussiness Team", "IT Team", "Design Team", "QA"] as const;
export type Division = (typeof DIVISIONS)[number];

export type TeamMember = {
    id: string;
    name: string;
    division: Division;
    role: string;
    quoteHighlight: string;
    quoteRest: string;
    imageThumbnail: string;
    imageLarge: string;
    linkedinUrl?: string;
};

const portraitW = "https://placehold.co/400x300/cfe9de/0d4f47?text=+";
const portraitM = "https://placehold.co/400x300/cfe9de/0d4f47?text=+";
const portraitH = "https://placehold.co/400x300/cfe9de/0d4f47?text=+";
const largeW = "https://placehold.co/600x800/d4b896/ffffff?text=Foto";
const largeM = "https://placehold.co/600x800/3f3a36/ffffff?text=Foto";

export const TEAM_DATA: TeamMember[] = [
    // OWNER
    {
        id: "owner-1",
        name: "Ignatius Ricky Jonathan ",
        division: "Owner",
        role: "Product Manager",
        quoteHighlight: '"User First"',
        quoteRest:
        ": Merancang produk yang tidak hanya indah, tapi juga memecahkan masalah.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: " https://www.linkedin.com/in/igrickyjo/ ",
    },

    // FINANCE
    {
        id: "finance-1",
        name: "Hansen Tegu",
        division: "Finance",
        role: "UX Researcher",
        quoteHighlight: '"Listen Closely"',
        quoteRest:": Setiap insight pengguna adalah peta menuju pengalaman yang lebih baik.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/hansenteguh/",
    },

    // --- BUSSINESS TEAM ---
    {
        id: "bus-1",
        name: "Erlinda Yunita Kesuma",
        division: "Bussiness Team",
        role: "Business Development",
        quoteHighlight: '"Growth Mindset"',
        quoteRest:": Membuka peluang baru dan memperluas ekosistem merchant lokal.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: " https://www.linkedin.com/in/erlinda-yunita-972a66a9/",
    },
    {
        id: "bus-2",
        name: "Wahyuda Abdia Putra",
        division: "Bussiness Team",
        role: "Partnership Lead",
        quoteHighlight: '"Win Together"',
        quoteRest:": Kemitraan yang baik tumbuh dari nilai yang saling menguatkan.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: " https://www.linkedin.com/in/wahyuda-abdia-putra-63b557407/",
    },

    // --- IT TEAM ---
    {
        id: "it-1",
        name: "Wibowo Raditya Trilaksmono",
        division: "IT Team",
        role: "Tim IT",
        quoteHighlight: '"The Problem Solvers"',
        quoteRest:": Karena IT ada untuk memberikan solusi atas setiap tantangan digital.",
        imageThumbnail: "/assets/radit-copy.jpeg",
        imageLarge: "/assets/radit.jpeg",
        linkedinUrl: " https://www.linkedin.com/in/veldrict/",
    },
    {
        id: "it-2",
        name: "Rizqi Asan Masika",
        division: "IT Team",
        role: "Frontend Developer",
        quoteHighlight: '"Code is Poetry"',
        quoteRest: ": Membangun arsitektur clean code untuk masa depan Toentoen.",
        imageThumbnail: "/assets/asan foto.png",
        imageLarge: "/assets/ec7a28cf-c744-4ca3-940f-36bc9b9bfefc.png",
        linkedinUrl: "https://www.linkedin.com/in/rizqiasanmasika",
    },
    {
        id: "it-3",
        name: "Ilham Hadi Prabawa",
        division: "IT Team",
        role: "Frontend Developer",
        quoteHighlight: '"Automate Everything"',
        quoteRest:": Infrastruktur yang andal adalah pondasi pengalaman yang andal.",
        imageThumbnail: "/assets/ilham foto.png",
        imageLarge: "/assets/ilham foto besar.png",
        linkedinUrl: " https://www.linkedin.com/in/ilham-hadi-prabawa-2a886111b/",
    },
    {
        id: "it-4",
        name: "Zulhan Arif Fasya Hidayat",
        division: "IT Team",
        role: "Backend Developer",
        quoteHighlight: '"Data is Fuel"',
        quoteRest: ": Pipeline yang sehat membuat keputusan yang sehat.",
        imageThumbnail: "/assets/zulhan foto.png",
        imageLarge: "/assets/zulhan foto besar.png",
        linkedinUrl: " https://www.linkedin.com/in/zulhanariffasyahidayat/?locale=en "
    },

    // DESIGN TEAM
    {
        id: "Design-1",
        name: "Mahendra Raihan",
        division: "Design Team",
        role: "UX/UI Designer",
        quoteHighlight: '"Design is a Process"',
        quoteRest: ": Desain yang baik adalah hasil dari pemahaman yang mendalam tentang pengguna.",
        imageThumbnail: "/assets/tes - Copy.jpg",
        imageLarge: "/assets/tes.jpg",
        linkedinUrl: " https://www.linkedin.com/in/mahendra-raihan-1ab716199/"
    },
    {
        id: "Design-2",
        name: "Yanuar Rizki",
        division: "Design Team",
        role: "UX/UI Designer",
        quoteHighlight: '"Design is a Process"',
        quoteRest: ": Desain yang baik adalah hasil dari pemahaman yang mendalam tentang pengguna.",
        imageThumbnail: "/assets/yoga foto.png",
        imageLarge: "/assets/yoga foto besar.png",
        linkedinUrl: "https://www.linkedin.com/in/yanuar-rizki-94805b23b/"
    },

    // QA
    {
        id: "QA-1",
        name: "Yoga Ari Kumoro",
        division: "QA",
        role: "Quality Assurance Engineer",
        quoteHighlight: '"Quality is a Process"',
        quoteRest: ": Memastikan setiap produk yang dirilis memenuhi standar kualitas tertinggi.",
        imageThumbnail: "/assets/yoga - Copy.jpeg",
        imageLarge: "/assets/yoga.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/yoga-ari-kumoro/"
    },
];
