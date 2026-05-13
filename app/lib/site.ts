export type Language = "id" | "en";

export const languages: {
  code: Language;
  flag: string;
  label: string;
  shortLabel: string;
}[] = [
  { code: "id", flag: "🇮🇩", label: "Indo", shortLabel: "ID" },
  { code: "en", flag: "🇬🇧", label: "English", shortLabel: "EN" },
];

export const siteConfig = {
  name: "Digitra",
  fullName: "Digitra Digital Transformation",
  founded: "2025",
  email: "digitraofficialid@gmail.com",
  whatsappNumber: "6285177896515",
};

export const siteCopy = 
{
  "id": {
    "site": {
      "tagline": "Solusi Digital Praktis untuk Bisnis yang Ingin Tumbuh",
      "menuTitle": "Menu",
      "contactTitle": "Kontak",
      "contactDescription": "Bangun website, sistem automation, dan visual brand yang membuat bisnis Anda terlihat lebih profesional, rapi, dan mudah dipercaya.",
      "contactCta": "Konsultasi Gratis via WhatsApp",
      "copyright": "All rights reserved."
    },
    "theme": {
      "switchLabel": "Ganti mode warna",
      "dark": "Malam",
      "light": "Pagi"
    },
    "navLinks": [
      {
        "href": "/",
        "label": "Beranda"
      },
      {
        "href": "/services",
        "label": "Layanan"
      },
      {
        "href": "/contact",
        "label": "Kontak"
      }
    ],
    "whatsapp": {
      "defaultTopic": "konsultasi kebutuhan digital bisnis",
      "newBriefTopic": "brief proyek baru",
      "startProjectLabel": "Mulai Proyek via WhatsApp",
      "chatUs": "Chat Digitra",
      "chatWhatsApp": "Hubungi Digitra",
      "packageWebsite": "Tanya Paket Website",
      "customGas": "Diskusikan Sistem GAS",
      "askPackage": "Konsultasi Paket yang Tepat",
      "consultViaWhatsApp": "Konsultasi Gratis via WhatsApp",
      "openWhatsApp": "Buka WhatsApp"
    },
    "serviceHighlights": [
      {
        "title": "GAS Web Business Application",
        "href": "/services/gas",
        "eyebrow": "Automation",
        "summary": "Ubah proses manual di Google Sheets menjadi sistem bisnis yang lebih otomatis, rapi, dan mudah dipantau."
      },
      {
        "title": "Company Profile & Landing Page",
        "href": "/services/company-profile-landing-page",
        "eyebrow": "Website",
        "summary": "Website profesional untuk menjelaskan bisnis, membangun kepercayaan, dan mengarahkan calon klien agar lebih yakin menghubungi Anda."
      },
      {
        "title": "Design Visual",
        "href": "/services/designs",
        "eyebrow": "Brand Visual",
        "summary": "Desain logo, brosur, poster, dan feeds Instagram yang membantu brand terlihat lebih konsisten, profesional, dan mudah dikenali."
      }
    ],
    "home": {
      "hero": {
        "eyebrow": "Website • Automation • Design Visual",
        "titlePrefix": "Membawa Bisnis Anda Tumbuh di ",
        "titleAccent": "Era Digital",
        "description": "Digitra membantu bisnis membuat website profesional, sistem automation berbasis Google Apps Script, dan desain visual yang rapi agar brand Anda terlihat lebih kredibel, mudah dipahami, dan siap mendapatkan lebih banyak calon klien.",
        "primaryCta": "Konsultasi Gratis",
        "secondaryCta": "Lihat Layanan"
      },
      "heroStats": [
        {
          "value": "3+",
          "label": "Tahun Pengalaman"
        },
        {
          "value": "12+",
          "label": "Proyek Selesai"
        },
        {
          "value": "100%",
          "label": "Komitmen Timeline"
        },
        {
          "value": "24/7",
          "label": "Support Prioritas"
        }
      ],
      "process": {
        "eyebrow": "Yang Digitra Bantu",
        "title": "Bukan cuma terlihat bagus. Sistem Digital Anda harus membantu bisnis bekerja lebih rapi.",
        "description": "Kami membantu bisnis membangun aset digital yang jelas fungsinya: website untuk meningkatkan kepercayaan, automation untuk menghemat waktu operasional, dan desain visual untuk membuat brand tampil konsisten di mata pelanggan.",
        "items": [
          {
            "title": "Scope Jelas",
            "text": "Kami petakan kebutuhan, tujuan, dan prioritas bisnis sebelum desain atau development dimulai."
          },
          {
            "title": "Visual Profesional",
            "text": "Layout, warna, font, dan copy disusun agar bisnis Anda terlihat rapi, modern, dan mudah dipercaya."
          },
          {
            "title": "Siap Digunakan",
            "text": "Website, sistem, dan desain dibuat responsif, mudah dibagikan, dan siap dipakai untuk promosi maupun operasional."
          }
        ]
      },
      "serviceSection": {
        "eyebrow": "Layanan Digitra",
        "title": "Pilih solusi digital yang paling dibutuhkan bisnis Anda saat ini.",
        "exploreCta": "Pelajari Layanan",
        "chips": [
          "Landing Page",
          "Company Profile",
          "GAS Automation",
          "Logo Design",
          "Instagram Feeds",
          "SEO Basic",
          "Copywriting"
        ]
      },
      "testimonials": {
        "eyebrow": "Testimoni Klien",
        "title": "Bisnis yang terbantu tampil lebih rapi, efisien, dan profesional.",
        "items": [
          {
            "quote": "Fitur otomatisasi HPP-nya benar-benar menyelamatkan bisnis saya. Sekarang saya bisa tracking profit asli tiap hari, dan riwayat keluar masuk bahan baku tercatat sangat detail. Dengan harga langganan yang terjangkau, aplikasi ini di luar ekspektasi dan sangat membantu operasional harian coffee shop kami.",
            "name": "Fahmi Rizal",
            "role": "Owner, Kala Kopi Kiosk"
          },
          {
            "quote": "Sistem manajemen F&B ini bikin dapur dan kasir jauh lebih sinkron. Dulu kami pusing menghitung margin tiap menu, sekarang potong stok dan hitung bahan baku sudah otomatis. Tidak menyangka dengan biaya yang efisien, kafe kami bisa punya sistem internal se-powerful ini.",
            "name": "Sarah Amalia",
            "role": "Operations Manager, Tropis Eatery & Space"
          },
          {
            "quote": "Kesan pertamanya: keren banget. Desain company profile-nya terlihat eksklusif dan sama sekali tidak terasa seperti template pasaran. Pengerjaannya juga cepat, hanya 4 hari sudah jadi 4 halaman dengan informasi yang detail. Harganya sangat masuk akal untuk kualitas website seperti ini.",
            "name": "Andry",
            "role": "Founder, tanipremium.id"
          }
        ]
      },
      "faq": {
        "eyebrow": "FAQ",
        "title": "Pertanyaan yang sering ditanyakan sebelum mulai proyek",
        "cta": "Konsultasi Sekarang"
      },
      "closing": {
        "title": "Dalam beberapa detik, calon klien sudah menilai bisnis Anda.",
        "description": "Website dan visual yang rapi membuat bisnis terlihat lebih serius. Copy yang jelas membantu calon pelanggan memahami apa yang Anda tawarkan. Digitra membantu keduanya bekerja bersama: tampilan yang profesional dan pesan yang meyakinkan.",
        "cta": "Konsultasikan Kebutuhan Anda"
      },
      "topics": {
        "getStarted": "memulai proyek digital",
        "faq": "diskusi paket website",
        "closing": "konsultasi kebutuhan bisnis"
      }
    },
    "packageTabs": {
      "landing": {
        "label": "Landing Page",
        "description": "Cocok untuk promosi satu produk, campaign, validasi market, atau halaman penjualan yang fokus mengarahkan pengunjung ke satu aksi utama."
      },
      "company": {
        "label": "Company Profile",
        "description": "Cocok untuk bisnis yang ingin terlihat lebih kredibel dengan profil perusahaan, layanan, portofolio, dan informasi kontak yang tersusun profesional."
      }
    },
    "landingPackages": [
      {
        "name": "Starter",
        "price": "Rp 500.000",
        "label": "Landing Page",
        "features": [
          "Durasi pengerjaan 4-6 hari setelah materi lengkap",
          "4x revisi minor",
          "2x revisi mayor",
          "Maksimal 4 section",
          "SEO dasar untuk struktur halaman",
          "Responsive untuk mobile dan desktop",
          "Copywriting disiapkan oleh klien",
          "Domain dan hosting tidak termasuk",
          "Source code dikirim via GitHub atau ZIP",
          "Maintenance 1 bulan"
        ]
      },
      {
        "name": "Intermediate",
        "price": "Rp 1.100.000",
        "label": "Best Value",
        "featured": true,
        "features": [
          "Durasi pengerjaan 2-4 hari setelah materi lengkap",
          "6x revisi minor",
          "2x revisi mayor untuk layout",
          "Maksimal 8 section",
          "SEO premium untuk struktur, heading, dan metadata",
          "Copywriting profesional termasuk",
          "Animasi ringan dan UI modern",
          "Domain dan hosting termasuk (.com, .net, atau .online)",
          "Source code dikirim via GitHub atau ZIP",
          "Maintenance 3 bulan"
        ]
      }
    ],
    "companyProfilePackages": [
      {
        "name": "Starter",
        "price": "Rp 800.000",
        "label": "Company Profile",
        "features": [
          "Cocok untuk UMKM dan bisnis baru",
          "Durasi pengerjaan 6 hari setelah materi lengkap",
          "2x revisi minor",
          "1x revisi mayor untuk layout",
          "Maksimal 3 halaman",
          "Konten teks disiapkan oleh klien",
          "Responsive untuk mobile dan desktop",
          "Source code dikirim via GitHub atau ZIP",
          "Domain dan hosting tidak termasuk"
        ]
      },
      {
        "name": "Intermediate",
        "price": "Rp 1.500.000",
        "label": "Best Value",
        "featured": true,
        "features": [
          "Cocok untuk bisnis yang ingin tampil lebih profesional",
          "Durasi pengerjaan 4-7 hari dengan fast response",
          "4x revisi minor",
          "2x revisi mayor",
          "Maksimal 5 halaman",
          "Copywriting profesional dari bullet points klien",
          "Animasi ringan dan UI modern",
          "SEO dasar untuk meta title dan description",
          "Source code dikirim via GitHub atau ZIP",
          "Domain dan hosting tidak termasuk"
        ]
      }
    ],
    "servicesPage": {
      "hero": {
        "eyebrow": "Layanan Digitra",
        "title": "Solusi digital sederhana untuk bisnis yang ingin terlihat lebih profesional.",
        "description": "Bangun fondasi digital bisnis Anda dengan layanan yang tepat: website profesional untuk menjelaskan bisnis, automation Google Apps Script untuk merapikan alur kerja internal, dan desain visual yang membuat brand tampil lebih konsisten, kredibel, dan mudah dipercaya.",
        "chips": [
          "Website",
          "Automation",
          "Design"
        ]
      },
      "gas": {
        "eyebrow": "01 / GAS Automation",
        "title": "Google Apps Script Business Application",
        "description": "Sistem berbasis Google Apps Script untuk membantu bisnis merapikan workflow, laporan, dashboard, approval, notifikasi, dan proses operasional yang masih dikerjakan manual.",
        "learnMore": "Diskusikan Sistem GAS",
        "detail": {
          "eyebrow": "Detail GAS Automation",
          "title": "Bangun sistem operasional yang sesuai cara kerja bisnis Anda.",
          "description": "Digitra membantu mengubah proses manual berbasis Google Sheets menjadi aplikasi bisnis yang lebih mudah digunakan, dipantau, dan dikembangkan sesuai kebutuhan operasional.",
          "imageLabel": "Preview dashboard dan sistem GAS",
          "groups": [
            {
              "title": "Yang Bisa Dibuat",
              "items": [
                "Dashboard otomatis dari Google Sheets",
                "Form input dengan validasi data",
                "Approval bertahap dan notifikasi otomatis"
              ]
            },
            {
              "title": "Alur Kerja",
              "items": [
                "Mapping kebutuhan dan struktur data",
                "Pembuatan prototype alur utama",
                "Testing bersama data contoh"
              ]
            },
            {
              "title": "Output Awal",
              "items": [
                "Sistem GAS siap digunakan",
                "Dokumentasi penggunaan singkat",
                "Rekomendasi pengembangan lanjutan"
              ]
            }
          ]
        }
      },
      "website": {
        "eyebrow": "02 / Website",
        "title": "Company Profile & Landing Page",
        "description": "Website profesional untuk memperkenalkan bisnis, menjelaskan penawaran, membangun kepercayaan, dan mengarahkan calon klien agar lebih yakin mengambil tindakan.",
        "learnMore": "Lihat Paket Website",
        "topic": "paket Company Profile dan Landing Page",
        "detail": {
          "eyebrow": "Detail Website",
          "title": "Struktur halaman yang membantu bisnis terlihat jelas dan meyakinkan.",
          "description": "Landing page dan company profile dibuat dengan struktur yang berbeda sesuai tujuan bisnis. Landing page fokus pada satu penawaran dan CTA, sedangkan company profile membangun kredibilitas melalui profil, layanan, portofolio, dan informasi perusahaan.",
          "imageLabel": "Preview mockup website",
          "groups": [
            {
              "title": "Landing Page",
              "items": [
                "Fokus pada satu produk, jasa, atau campaign",
                "Copy diarahkan ke satu CTA utama",
                "Cocok untuk promosi, validasi produk, atau iklan"
              ]
            },
            {
              "title": "Company Profile",
              "items": [
                "Struktur halaman lebih lengkap",
                "Menjelaskan profil, layanan, dan trust bisnis",
                "Cocok untuk bisnis yang ingin terlihat lebih kredibel"
              ]
            }
          ]
        }
      },
      "design": {
        "eyebrow": "03 / Design Visual",
        "title": "Jasa desain logo, brosur, poster, dan feeds Instagram profesional.",
        "description": "Digitra membantu bisnis membuat desain visual yang rapi, konsisten, dan siap dipakai untuk promosi online maupun offline.",
        "detail": {
          "title": "Visual brand yang dibuat sesuai kebutuhan bisnis dan budget.",
          "description": "Setiap paket desain disusun agar bisnis mendapatkan visual profesional tanpa proses yang rumit. Mulai dari logo usaha, brosur promosi, poster campaign, sampai desain feeds Instagram, Digitra menjaga proses brief, konsep, revisi, dan file akhir tetap jelas."
        }
      },
      "workflow": {
        "eyebrow": "Workflow",
        "title": "Proses kerja rapi, timeline jelas, hasil lebih terarah."
      },
      "faq": {
        "eyebrow": "FAQ",
        "title": "Sebelum memulai proyek bersama Digitra"
      },
      "recommendation": {
        "title": "Bingung pilih paket yang tepat?",
        "description": "Kirim brief singkat, kami bantu petakan kebutuhan, prioritas, dan estimasi pengerjaan agar Anda tidak salah memilih paket.",
        "cta": "Minta Rekomendasi Paket"
      }
    },
    "gasExamples": [
      {
        "title": "F&B Business Management",
        "description": "Sistem POS F&B cerdas dengan sinkronisasi data real-time, kalkulasi HPP otomatis, dan pelacakan bahan baku untuk membantu menjaga profitabilitas bisnis kuliner Anda.",
        "button": "Tanya Detail"
      },
      {
        "title": "Fashion Retail POS",
        "description": "Kelola transaksi retail dan grosir, pantau stok, serta lacak siklus pesanan dari proses awal sampai diterima pelanggan dalam satu dashboard bisnis.",
        "button": "Tanya Detail"
      },
      {
        "title": "Digital Reseller App",
        "description": "Sistem khusus untuk pengelola bisnis akun premium dengan fitur loyalty card otomatis yang ter-update di setiap transaksi untuk meningkatkan retensi pembelian.",
        "button": "Tanya Detail"
      }
    ],
    "gasBenefits": [
      {
        "title": "Tanpa Server Tambahan",
        "subtitle": "Mulai bangun aplikasi bisnis tanpa perlu menyewa atau mengelola server sendiri."
      },
      {
        "title": "Lebih Hemat Biaya",
        "subtitle": "Solusi custom yang lebih terjangkau karena dibangun langsung di atas ekosistem Google Workspace."
      },
      {
        "title": "Data Tetap di Tangan Anda",
        "subtitle": "Database menggunakan Google Sheets, sehingga data tetap transparan, mudah dicek, dan bisa dikelola sendiri."
      },
      {
        "title": "Familiar untuk Tim",
        "subtitle": "Tim lebih cepat beradaptasi karena sistem menggunakan spreadsheet yang sudah umum dipakai dalam operasional bisnis."
      },
      {
        "title": "Terhubung ke Google Workspace",
        "subtitle": "Integrasikan workflow dengan Sheets, Gmail, Drive, Forms, Docs, dan Calendar dalam satu sistem yang rapi."
      },
      {
        "title": "Workflow Lebih Otomatis",
        "subtitle": "Kurangi pekerjaan manual seperti rekap data, approval, laporan, reminder, dan notifikasi berulang."
      },
      {
        "title": "Dibuat Sesuai Alur Bisnis",
        "subtitle": "Sistem dirancang mengikuti proses kerja bisnis Anda agar lebih relevan, praktis, dan mudah digunakan."
      },
      {
        "title": "Cocok untuk Sistem Internal",
        "subtitle": "Pilihan ideal untuk MVP, dashboard operasional, approval system, POS sederhana, inventory, dan tools internal bisnis."
      }
    ],
    "gasShowcases": [
      {
        "title": "Fashion Retail POS",
        "image": "/GAS/BusinessFashion-V2.png"
      },
      {
        "title": "Digital Reseller App",
        "image": "/GAS/BusinessAppPremium-V2.png"
      },
      {
        "title": "F&B Business Management",
        "image": "/GAS/BusinessFnB-V2.png"
      },
      {
        "title": "Job Application System",
        "image": "/GAS/JobApplication-V2.png"
      }
    ],
    "websiteShowcases": [
      {
        "title": "Charcoal Pro Company Profile",
        "badge": "Company Profile",
        "image": "/lancom/CharcoalPro-CompanyProfile.png"
      },
      {
        "title": "Paja Barbershop Booking App",
        "badge": "Booking App",
        "image": "/lancom/PajaBarbershop-BookingApp.png"
      },
      {
        "title": "Tani Premium Landing Page",
        "badge": "Landing Page",
        "image": "/lancom/TaniPremium.Landing.png"
      }
    ],
    "designPackages": [
      {
        "title": "Logo Design",
        "packages": [
          "Starter - Rp 200K, cocok untuk logo usaha baru, 3 konsep logo, all file format, dan 3x revisi",
          "Top - Rp 400K, pilihan seimbang dengan 4 konsep logo, all file format, 4x revisi, dan 3D mockup",
          "Premium - Rp 750K, untuk brand yang butuh output lebih matang, 5 konsep logo, VIP support, all file format, revisi fleksibel, dan 3D mockup"
        ]
      },
      {
        "title": "Brosur / Poster",
        "packages": [
          "Easy - Rp 25K, 2 desain brosur atau poster promosi, all file format, dan 2x revisi",
          "Medium - Rp 50K, 3 desain, all file format, 2x revisi, dan 3D mockup untuk presentasi yang lebih menarik",
          "Hard - Rp 75K, 3 desain premium, VIP support, all file format, 3x revisi, dan 3D mockup"
        ]
      },
      {
        "title": "Social Media Feeds",
        "packages": [
          "Paket feeds social media dibuat custom sesuai jumlah konten, gaya visual, target campaign, dan kebutuhan CTA copywriting. Chat terlebih dahulu agar scope dan estimasi lebih pas."
        ]
      }
    ],
    "designFaqs": [
      {
        "question": "Berapa harga jasa desain logo di Digitra?",
        "answer": "Harga jasa desain logo Digitra mulai dari Rp 200.000 untuk paket Starter. Paket ini sudah mencakup beberapa pilihan konsep, file siap pakai, dan revisi. Untuk brand yang ingin tampilan lebih premium, tersedia paket Top dan Premium dengan konsep lebih banyak, 3D mockup, dan support yang lebih intensif."
      },
      {
        "question": "Apakah Digitra menyediakan jasa desain feeds Instagram profesional?",
        "answer": "Ya. Digitra menyediakan jasa desain feeds Instagram profesional untuk bisnis yang ingin tampilan media sosial lebih rapi, konsisten, dan mudah dikenali. Desain dapat disesuaikan dengan warna brand, gaya konten, target audiens, dan kebutuhan campaign sehingga feed tidak hanya menarik, tetapi juga mendukung komunikasi bisnis."
      },
      {
        "question": "Berapa lama pembuatan desain brosur atau poster?",
        "answer": "Durasi pembuatan desain brosur atau poster bergantung pada jumlah desain, kelengkapan brief, dan tingkat revisi. Setelah materi seperti teks, logo, foto produk, dan referensi visual lengkap, Digitra akan menyusun timeline yang jelas agar proses berjalan efisien."
      },
      {
        "question": "Apa saja file akhir yang didapat dari layanan desain Digitra?",
        "answer": "Digitra menyiapkan file akhir sesuai kebutuhan penggunaan, seperti format untuk upload media sosial, cetak brosur, presentasi, atau kebutuhan branding. Untuk paket logo, klien dapat menerima format file yang dibutuhkan agar desain mudah dipakai di website, banner, kemasan, kartu nama, dan materi promosi lainnya."
      },
      {
        "question": "Mengapa memilih Digitra untuk desain logo, brosur, dan media sosial?",
        "answer": "Digitra cocok untuk bisnis yang ingin desain terlihat profesional tanpa proses yang rumit. Kami membantu merapikan brief, membuat visual sesuai karakter brand, memberi ruang revisi yang jelas, dan menawarkan harga bersaing. Hasil desain dibuat agar siap dipakai untuk promosi digital maupun cetak."
      }
    ],
    "workflowSteps": [
      {
        "title": "Kuisioner Klien",
        "description": "Digitra mengirim daftar pertanyaan untuk memahami target, kebutuhan, referensi, prioritas bisnis, dan arah visual yang diinginkan."
      },
      {
        "title": "Pengumpulan Materi",
        "description": "Klien menyiapkan logo, foto produk atau layanan, informasi kontak, referensi, dan bahan dasar lain yang diperlukan."
      },
      {
        "title": "Timeline Dimulai",
        "description": "Durasi pengerjaan mulai dihitung setelah seluruh materi dasar diterima lengkap oleh tim Digitra."
      }
    ],
    "contactPage": {
      "hero": {
        "eyebrow": "Contact Digitra",
        "title": "Ceritakan kebutuhan digital bisnis Anda.",
        "description": "Butuh website, sistem automation, atau desain visual? Digitra akan membantu merapikan brief Anda menjadi scope kerja yang jelas, realistis, dan mudah dieksekusi.",
        "primaryCta": "Konsultasi via WhatsApp",
        "secondaryCta": "Kirim Email",
        "topic": "konsultasi proyek digital"
      },
      "brief": {
        "title": "Agar konsultasi lebih cepat, siapkan brief singkat.",
        "description": "Informasi berikut membantu kami memahami kebutuhan Anda dan memberi rekomendasi paket yang lebih tepat.",
        "items": [
          "Jenis layanan yang dibutuhkan",
          "Target pengunjung atau calon klien",
          "Referensi website atau visual",
          "Materi yang sudah tersedia",
          "Target waktu pengerjaan"
        ]
      },
      "topics": {
        "eyebrow": "Pilih Topik",
        "title": "Mulai dari layanan yang paling Anda butuhkan."
      },
      "route": {
        "eyebrow": "Contact Route",
        "title": "Pilih channel yang paling nyaman untuk mengirim brief.",
        "cards": [
          {
            "title": "WhatsApp",
            "action": "Buka WhatsApp",
            "topic": "kontak utama",
            "description": "Respons cepat untuk diskusi kebutuhan, estimasi paket, dan pengiriman brief awal."
          },
          {
            "title": "Email",
            "action": "digitraofficialid@gmail.com",
            "description": "Cocok untuk mengirim dokumen, brief panjang, referensi visual, dan lampiran materi proyek."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Kapan durasi pengerjaan mulai dihitung?",
        "answer": "Durasi pengerjaan dimulai setelah seluruh materi dasar dari klien sudah lengkap, seperti logo, foto produk atau layanan, informasi bisnis, kontak, dan referensi yang dibutuhkan. Dengan begitu, proses kerja bisa berjalan lebih cepat dan hasilnya lebih maksimal."
      },
      {
        "question": "Apakah saya harus menyiapkan semua teks, atau Digitra bisa membantu copywriting?",
        "answer": "Digitra bisa membantu copywriting untuk paket Intermediate, baik Landing Page maupun Company Profile. Anda cukup mengirimkan bullet points atau ide kasar, lalu kami bantu merapikannya menjadi bahasa bisnis yang lebih profesional, jelas, dan mudah dipahami calon pelanggan. Untuk paket Starter, konten teks disiapkan oleh klien."
      },
      {
        "question": "Bagaimana sistem revisi jika hasilnya ada yang kurang sesuai?",
        "answer": "Setiap paket memiliki kuota revisi yang jelas. Revisi minor mencakup perubahan teks, warna, font, atau gambar ringan. Revisi mayor mencakup perubahan struktur atau layout halaman. Semua batas revisi akan dijelaskan sejak awal agar proses tetap transparan."
      },
      {
        "question": "Apakah website yang dibuat akan responsive di HP?",
        "answer": "Ya. Website Digitra dibuat responsive agar tetap rapi saat dibuka melalui smartphone, tablet, maupun desktop."
      },
      {
        "question": "Apakah saya mendapatkan source code website?",
        "answer": "Ya. Setelah proyek selesai, source code final dapat diserahkan melalui GitHub atau file ZIP sesuai kesepakatan paket."
      }
    ]
  }
}as const;

export function whatsappLink(topic: string, language: Language = "id") {
  const message =
    language === "id"
      ? `Halo Digitra, saya ingin konsultasi tentang ${topic}.`
      : `Hello Digitra, I would like to consult about ${topic}.`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export const navLinks = siteCopy.id.navLinks;
export const serviceHighlights = siteCopy.id.serviceHighlights;
export const heroStats = siteCopy.id.home.heroStats;
export const testimonials = siteCopy.id.home.testimonials.items;
export const gasExamples = siteCopy.id.gasExamples;
export const landingPackages = siteCopy.id.landingPackages;
export const companyProfilePackages = siteCopy.id.companyProfilePackages;
export const designPackages = siteCopy.id.designPackages;
export const workflowSteps = siteCopy.id.workflowSteps;
export const faqs = siteCopy.id.faqs;
