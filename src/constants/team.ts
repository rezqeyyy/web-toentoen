export const DIVISIONS = ["Product Team", "Bussiness Team", "IT Team"] as const;
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
    // --- PRODUCT TEAM (11 anggota sesuai grid mockup) ---
    {
        id: "prod-1",
        name: "Sakura Haruno",
        division: "Product Team",
        role: "Product Manager",
        quoteHighlight: '"User First"',
        quoteRest:
        ": Merancang produk yang tidak hanya indah, tapi juga memecahkan masalah.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-2",
        name: "Bayu Pratama",
        division: "Product Team",
        role: "UX Researcher",
        quoteHighlight: '"Listen Closely"',
        quoteRest:": Setiap insight pengguna adalah peta menuju pengalaman yang lebih baik.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-3",
        name: "Dimas Saputra",
        division: "Product Team",
        role: "UI Designer",
        quoteHighlight: '"Detail Matters"',
        quoteRest: ": Pixel-perfect bukan obsesi, tapi rasa hormat pada pengguna.",
        imageThumbnail: portraitH,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-4",
        name: "Anita Wulandari",
        division: "Product Team",
        role: "Product Designer",
        quoteHighlight: '"Design with Purpose"',
        quoteRest: ": Estetika tanpa fungsi hanyalah dekorasi.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-5",
        name: "Rian Hidayat",
        division: "Product Team",
        role: "Product Analyst",
        quoteHighlight: '"Numbers Tell Stories"',
        quoteRest:": Data membantu kami membuat keputusan yang lebih baik setiap hari.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-6",
        name: "Fajar Nugroho",
        division: "Product Team",
        role: "QA Specialist",
        quoteHighlight: '"Quality Always Wins"',
        quoteRest: ": Kami menemukan bug agar pengguna tidak pernah harus.",
        imageThumbnail: portraitH,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-7",
        name: "Maya Lestari",
        division: "Product Team",
        role: "Content Strategist",
        quoteHighlight: '"Words Build Trust"',
        quoteRest: ": Kalimat yang tepat membuat fitur kompleks terasa sederhana.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-8",
        name: "Reza Maulana",
        division: "Product Team",
        role: "Design System Lead",
        quoteHighlight: '"Consistency Scales"',
        quoteRest:": Sistem yang baik membebaskan tim untuk fokus pada hal yang penting.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-9",
        name: "Ayu Permata",
        division: "Product Team",
        role: "Interaction Designer",
        quoteHighlight: '"Motion with Meaning"',
        quoteRest: ": Setiap animasi harus punya alasan untuk ada.",
        imageThumbnail: portraitH,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-10",
        name: "Tegar Wibowo",
        division: "Product Team",
        role: "Product Owner",
        quoteHighlight: '"Ship & Learn"',
        quoteRest:": Iterasi kecil yang cepat mengalahkan rencana besar yang lambat.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "prod-11",
        name: "Sinta Dewi",
        division: "Product Team",
        role: "Service Designer",
        quoteHighlight: '"End-to-End Thinking"',
        quoteRest: ": Pengalaman pengguna tidak berhenti di layar.",
        imageThumbnail: portraitM,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },

    // --- BUSSINESS TEAM ---
    {
        id: "bus-1",
        name: "Kakashi Hatake",
        division: "Bussiness Team",
        role: "Business Development",
        quoteHighlight: '"Growth Mindset"',
        quoteRest:": Membuka peluang baru dan memperluas ekosistem merchant lokal.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "bus-2",
        name: "Citra Anggraini",
        division: "Bussiness Team",
        role: "Partnership Lead",
        quoteHighlight: '"Win Together"',
        quoteRest:": Kemitraan yang baik tumbuh dari nilai yang saling menguatkan.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "bus-3",
        name: "Galang Pratomo",
        division: "Bussiness Team",
        role: "Marketing Manager",
        quoteHighlight: '"Stories Sell"',
        quoteRest: ": Kami menjual makna, bukan sekadar fitur.",
        imageThumbnail: portraitH,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "bus-4",
        name: "Hesti Rahmawati",
        division: "Bussiness Team",
        role: "Operations Lead",
        quoteHighlight: '"Smooth is Fast"',
        quoteRest: ": Proses yang rapi menghasilkan eksekusi yang cepat.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
    },

    // --- IT TEAM ---
    {
        id: "it-1",
        name: "Naruto Uzumaki",
        division: "IT Team",
        role: "Tim IT",
        quoteHighlight: '"The Problem Solvers"',
        quoteRest:": Karena IT ada untuk memberikan solusi atas setiap tantangan digital.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "it-2",
        name: "Rizqi Asan Masika",
        division: "IT Team",
        role: "Full-Stack Developer",
        quoteHighlight: '"Code is Poetry"',
        quoteRest: ": Membangun arsitektur clean code untuk masa depan Toentoen.",
        imageThumbnail: "/assets/asan foto.png",
        imageLarge: "/assets/ec7a28cf-c744-4ca3-940f-36bc9b9bfefc.png",
        linkedinUrl: "https://www.linkedin.com/in/rizqiasanmasika",
    },
    {
        id: "it-3",
        name: "Kirana Putri",
        division: "IT Team",
        role: "DevOps Engineer",
        quoteHighlight: '"Automate Everything"',
        quoteRest:": Infrastruktur yang andal adalah pondasi pengalaman yang andal.",
        imageThumbnail: portraitW,
        imageLarge: largeW,
        linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
        id: "it-4",
        name: "Yoga Pranata",
        division: "IT Team",
        role: "Data Engineer",
        quoteHighlight: '"Data is Fuel"',
        quoteRest: ": Pipeline yang sehat membuat keputusan yang sehat.",
        imageThumbnail: portraitM,
        imageLarge: largeM,
        linkedinUrl: "https://www.linkedin.com/in/"
    },
];
