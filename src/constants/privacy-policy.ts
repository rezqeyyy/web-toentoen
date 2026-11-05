// src/constants/privacy-policy.ts

export const PRIVACY_POLICY_META = {
  lastUpdated: '4 November 2026',
  title: 'Kebijakan Privasi Toentoen',
  supportEmail: 'support@toentoen.com',
};

export type PolicySection = {
  id: string;
  heading: string;
  content: PolicyBlock[];
};

export type PolicyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'unordered-list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'contact-box'; items: { label: string; value: string; href?: string }[] };

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'pengantar',
    heading: '1. Pengantar',
    content: [
      { type: 'paragraph', text: 'Selamat datang di <strong>Toentoen</strong>.' },
      {
        type: 'paragraph',
        text: 'Kebijakan Privasi ini menjelaskan bagaimana Toentoen memproses, mengumpulkan, menggunakan, menyimpan, mengungkapkan, dan melindungi informasi pribadi apa pun yang Kami peroleh dari atau mengenai Anda, atau yang Anda berikan kepada Kami, sehubungan dengan penggunaan layanan yang disediakan oleh Toentoen melalui situs web maupun aplikasi mobile Android (<em>"Aplikasi"</em>).',
      },
      {
        type: 'paragraph',
        text: 'Diharapkan untuk membaca informasi mengenai Kebijakan Privasi ini dengan saksama agar Anda memahami bagaimana Kami mengelola dan melindungi data pribadi Anda.',
      },
    ],
  },
  {
    id: 'pengakuan',
    heading: '2. Pengakuan & Penyetujuan',
    content: [
      {
        type: 'paragraph',
        text: 'Dengan mengakses, menggunakan, dan/atau mendaftarkan akun dalam layanan Toentoen, Pengguna dan/atau Merchant mengakui telah membaca, memahami, dan menyetujui seluruh ketentuan dalam Kebijakan Privasi ini, serta setuju atas pemrosesan data pribadi Anda sesuai dengan Kebijakan Privasi ini.',
      },
    ],
  },
  {
    id: 'data-pribadi',
    heading: '3. Data Pribadi yang Dikumpulkan',
    content: [
      { type: 'paragraph', text: 'Toentoen dapat mengumpulkan data dan informasi pribadi, termasuk namun tidak terbatas pada:' },
      {
        type: 'unordered-list',
        items: [
          '<strong>Data Identitas Akun:</strong> mencakup nama lengkap, alamat e-mail, dan nomor telepon / WhatsApp yang valid.',
          '<strong>Data Identitas Merchant:</strong> untuk keperluan verifikasi kepatuhan (<em>KYC</em>) dan keamanan akun Merchant, termasuk informasi Kartu Tanda Penduduk (KTP), foto diri (<em>selfie</em>), foto tempat usaha, izin usaha, dan/atau dokumen pendukung lainnya sesuai kebutuhan verifikasi akun Merchant.',
          '<strong>Data Transaksi & Aktivitas:</strong> rincian pemesanan, produk yang dibeli/dijual, ulasan, komentar, penanda (<em>bookmark</em>), dan interaksi pada platform.',
          '<strong>Data Perangkat & Teknis:</strong> alamat IP (<em>Internet Protocol</em>), jenis dan pengenal perangkat, sistem operasi, log aktivitas, serta informasi teknis lainnya yang diperlukan untuk menjaga keamanan dan pengembangan layanan.',
          '<strong>Data Lokasi:</strong> perkiraan atau posisi geografis perangkat apabila Pengguna memberikan izin akses lokasi pada perangkat untuk mempermudah pencarian merchant dan produk terdekat.',
          '<strong>Data Komunikasi:</strong> pesan, korespondensi, atau catatan komunikasi antara Pengguna, Merchant, dan Toentoen melalui layanan pelanggan atau fitur aplikasi.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Kami dapat menggunakan, membuat, melisensikan, atau mengungkapkan data statistik atau demografis untuk tujuan apa pun. Data tersebut dapat berasal dari data pribadi namun tidak akan dianggap sebagai data pribadi apabila telah dianonimkan sehingga tidak secara langsung maupun tidak langsung mengungkap identitas Anda.',
      },
    ],
  },
  {
    id: 'penggunaan-data',
    heading: '4. Penggunaan Data',
    content: [
      { type: 'paragraph', text: 'Data dan informasi yang dikumpulkan dapat digunakan untuk:' },
      {
        type: 'ordered-list',
        items: [
          'Menyediakan, mengelola, memelihara, menguji, mempersonalisasikan, dan mengembangkan layanan Toentoen.',
          'Mengidentifikasi dan mendaftarkan Anda sebagai Pengguna dan/atau Merchant.',
          'Memverifikasi identitas Pengguna dan/atau Merchant serta memproses otentikasi login (termasuk verifikasi kode OTP via WhatsApp atau E-mail).',
          'Mengelola akun dan profil Anda pada layanan Kami.',
          'Memproses transaksi, pemesanan, dan aktivitas operasional pada platform.',
          'Menjaga keamanan sistem serta mencegah kecurangan, penipuan, pelanggaran hukum, dan penyalahgunaan layanan.',
          'Menyampaikan informasi, pemberitahuan operasional, promosi, atau pembaruan layanan.',
          'Memenuhi kewajiban hukum sesuai ketentuan peraturan perundang-undangan yang berlaku di Republik Indonesia.',
          'Memantau dan menganalisis aktivitas, perilaku, dan data demografis Pengguna dan/atau Merchant.',
          'Menyediakan bantuan teknis dan menyelesaikan kendala operasional layanan pelanggan.',
          'Menghasilkan informasi statistik dan data analitik untuk tujuan pengujian, penilaian, pengembangan produk, dan fitur analitik Toentoen.',
        ],
      },
    ],
  },
  {
    id: 'penyimpanan',
    heading: '5. Penyimpanan, Retensi, dan Perlindungan Data',
    content: [
      {
        type: 'paragraph',
        text: 'Toentoen menerapkan langkah-langkah keamanan teknis dan organisasional yang wajar dan diperlukan untuk melindungi data pribadi dari akses, penggunaan, perubahan, pengungkapan, atau perusakan tanpa izin. Langkah ini meliputi penerapan enkripsi transmisi (HTTPS/TLS) serta penyimpanan kata sandi terenkripsi.',
      },
      {
        type: 'paragraph',
        text: 'Meskipun demikian, Pengguna memahami bahwa transmisi data melalui internet tidak sepenuhnya bebas dari risiko keamanan di luar kendali wajar Kami.',
      },
      {
        type: 'paragraph',
        text: 'Kami menyimpan data pribadi Anda selama akun Anda tetap aktif atau selama diperlukan untuk memenuhi tujuan pengumpulannya, kecuali jika periode penyimpanan yang lebih lama diwajibkan oleh ketentuan hukum atau perpajakan.',
      },
    ],
  },
  {
    id: 'pengungkapan',
    heading: '6. Pengungkapan Data Kepada Pihak Ketiga',
    content: [
      {
        type: 'paragraph',
        text: 'Toentoen tidak akan menjual atau mengungkapkan data pribadi Pengguna dan/atau Merchant kepada pihak ketiga tanpa dasar yang sah. Namun, data tertentu dapat dibagikan, digunakan, diolah, atau dimanfaatkan bersama pihak ketiga terpercaya, afiliasi, mitra usaha, maupun rekanan bisnis untuk kepentingan operasional (seperti penyedia penyimpanan cloud aman dan gateway pengiriman notifikasi/OTP), pengembangan layanan, analisis, pemasaran, promosi, dan aktivitas bisnis lainnya sepanjang tetap sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.',
      },
      { type: 'paragraph', text: 'Pengungkapan data juga dapat dilakukan apabila:' },
      {
        type: 'unordered-list',
        items: [
          'Diperlukan untuk penyediaan dan pengoperasian layanan platform.',
          'Diperintahkan oleh peraturan perundang-undangan atau aparat penegak hukum dan instansi pemerintah yang berwenang.',
          'Diperlukan untuk investigasi atas dugaan pelanggaran hukum, penipuan, atau penyalahgunaan layanan.',
          'Diperlukan untuk melindungi hak, keamanan, dan kepentingan sah Toentoen, Pengguna, Merchant, maupun pihak lainnya.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Toentoen tidak bertanggung jawab atas kebijakan privasi maupun praktik pengelolaan data yang dilakukan oleh pihak ketiga independen yang tautannya dibuka melalui platform Toentoen.',
      },
    ],
  },
  {
    id: 'cookies',
    heading: '7. Cookies dan Teknologi Serupa',
    content: [
      {
        type: 'paragraph',
        text: 'Toentoen dapat menggunakan cookies, <em>local storage</em>, dan teknologi pelacak serupa untuk meningkatkan pengalaman pengguna, memahami perilaku penggunaan layanan, mengelola sesi otentikasi, serta mengembangkan fitur dan performa aplikasi.',
      },
      {
        type: 'paragraph',
        text: 'Pengguna dapat mengatur preferensi cookies melalui pengaturan perangkat atau browser yang digunakan. Menonaktifkan cookies tertentu dapat memengaruhi ketersediaan beberapa fitur pada layanan.',
      },
    ],
  },
  {
    id: 'hak-pengguna',
    heading: '8. Hak Pengguna dan Prosedur Penghapusan Akun',
    content: [
      {
        type: 'paragraph',
        text: 'Pengguna dan/atau Merchant memiliki hak tertentu berdasarkan peraturan perundang-undangan yang berlaku di Negara Kesatuan Republik Indonesia (termasuk UU Pelindungan Data Pribadi No. 27 Tahun 2022) untuk:',
      },
      {
        type: 'unordered-list',
        items: [
          'Mengakses dan memperoleh salinan data pribadi yang diberikan kepada Toentoen.',
          'Memperbarui atau meminta perbaikan terhadap data pribadi yang tidak akurat atau tidak lengkap.',
          'Mengajukan permintaan penghapusan akun beserta data pribadi yang terkait.',
        ],
      },
      { type: 'paragraph', text: '<strong>Tata Cara Penghapusan Akun dan Data Pribadi:</strong>' },
      {
        type: 'unordered-list',
        items: [
          '<strong>Melalui Aplikasi:</strong> Pengguna dapat menghapus akun secara mandiri melalui menu <code class="bg-gray-100 px-1 rounded text-sm font-mono">Profil</code> &gt; <code class="bg-gray-100 px-1 rounded text-sm font-mono">Pengaturan Akun</code> &gt; <code class="bg-gray-100 px-1 rounded text-sm font-mono">Hapus Akun</code> di dalam aplikasi Toentoen.',
          '<strong>Melalui E-mail Dukungan:</strong> Pengguna juga dapat mengajukan permohonan penghapusan akun dan data pribadi terkait dengan mengirimkan e-mail permohonan resmi ke <strong>support@toentoen.com</strong> dengan mencantumkan alamat e-mail atau nomor telepon yang terdaftar pada akun Toentoen.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Setelah verifikasi permohonan selesai, data identitas Anda akan dihapus atau dianonimkan dari basis data aktif Kami dalam jangka waktu yang wajar, kecuali data transaksi atau pencatatan tertentu yang wajib Kami simpan untuk mematuhi kewajiban hukum, pembukuan, atau penyelesaian sengketa.',
      },
      {
        type: 'paragraph',
        text: 'Sesuai dengan ketentuan peraturan perundang-undangan yang berlaku, Kami berhak untuk menolak permintaan Anda terhadap pengajuan koreksi dan/atau penghapusan data pribadi apabila permintaan tersebut bertentangan dengan kewajiban hukum atau kepentingan perlindungan keamanan yang sah.',
      },
    ],
  },
  {
    id: 'perubahan',
    heading: '9. Perubahan Kebijakan Privasi',
    content: [
      {
        type: 'paragraph',
        text: 'Toentoen dapat melakukan peninjauan kembali dan mengubah Kebijakan Privasi ini atas kebijakan Kami sendiri dari waktu ke waktu guna menjaga konsistensi kebijakan dengan perkembangan teknologi dan hukum di masa depan. Toentoen akan memberitahukan kepada Anda jika terjadi perubahan dan/atau pembaruan materiil terhadap Kebijakan Privasi ini melalui pengumuman di aplikasi, situs web, atau melalui e-mail terdaftar.',
      },
    ],
  },
  {
    id: 'hukum',
    heading: '10. Hukum yang Berlaku dan Penyelesaian Sengketa',
    content: [
      {
        type: 'paragraph',
        text: 'Kebijakan Privasi ini diatur dan ditafsirkan berdasarkan hukum Negara Kesatuan Republik Indonesia. Setiap perselisihan yang timbul sehubungan dengan Kebijakan Privasi ini akan terlebih dahulu diselesaikan secara musyawarah untuk mencapai mufakat sebelum ditempuh penyelesaian melalui jalur hukum pada yurisdiksi pengadilan yang berwenang di Indonesia.',
      },
    ],
  },
  {
    id: 'kontak',
    heading: '11. Kontak dan Pengaduan',
    content: [
      {
        type: 'paragraph',
        text: 'Pengguna dan/atau Merchant dapat menyampaikan pertanyaan, permintaan pelaksanaan hak data pribadi, saran, atau pengaduan terkait Kebijakan Privasi ini melalui:',
      },
      {
        type: 'contact-box',
        items: [
          { label: 'E-mail Dukungan Pelanggan', value: 'support@toentoen.com', href: 'mailto:support@toentoen.com' },
          { label: 'Layanan Bantuan Aplikasi', value: 'Fitur Bantuan / Customer Service di dalam Aplikasi Toentoen' },
          { label: 'Pihak Pengembang', value: 'Tim Pengembang Toentoen (Toentoen Developer Team)' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Toentoen berhak melakukan verifikasi identitas atas setiap permintaan atau pengaduan yang diajukan sebelum memproses data guna memastikan keamanan pemilik data yang sah.',
      },
    ],
  },
];

