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
  email: "hello@digitra.id",
  whatsappNumber: "6285177896515",
};

export const siteCopy = {
  id: {
    site: {
      tagline: "Partner Tepercaya untuk Evolusi Digital",
      menuTitle: "Menu",
      contactTitle: "Kontak",
      contactDescription:
        "Digitalisasikan bisnis Anda. Konsultasikan kebutuhan otomasi, website, hingga identitas visual brand Anda bersama kami.",
      contactCta: "Mulai Konsultasi Gratis",
      copyright: "All rights reserved.",
    },
    theme: {
      switchLabel: "Ganti mode warna",
      dark: "Gelap",
      light: "Terang",
    },
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
    whatsapp: {
      defaultTopic: "konsultasi website",
      newBriefTopic: "brief proyek baru",
      startProjectLabel: "Start project on WhatsApp",
      chatUs: "Chat Us",
      chatWhatsApp: "Hubungi Kami",
      packageWebsite: "WhatsApp Paket Website",
      customGas: "Custom GAS",
      askPackage: "Tanya Paket",
      consultViaWhatsApp: "Konsultasi via WhatsApp",
      openWhatsApp: "Hubungi via WhatsApp",
    },
    serviceHighlights: [
      {
        title: "GAS Web Business Application",
        href: "/services#gas",
        eyebrow: "Automation",
        summary:
          "Sistem Google Apps Script untuk dashboard, approval, reporting, dan workflow bisnis yang berulang.",
      },
      {
        title: "Company Profile & Landing Page",
        href: "/services#company-profile",
        eyebrow: "Website",
        summary:
          "Halaman profesional yang menjelaskan value bisnis, membangun trust, dan mengarahkan calon klien ke CTA.",
      },
      {
        title: "Design",
        href: "/services#design",
        eyebrow: "Brand Visual",
        summary:
          "Logo, brosur, poster, dan social media asset agar komunikasi brand terlihat konsisten.",
      },
    ],
    home: {
      hero: {
        eyebrow: "Digital Transformation Studio",
        titlePrefix: "Membawa Bisnis Anda Menuju",
        titleAccent: "Evolusi Digital",
        description:
          "Digitra merancang website, automation, dan visual brand yang membuat bisnis terlihat lebih terpercaya dan lebih mudah dijelaskan.",
        primaryCta: "Mulai Sekarang",
        secondaryCta: "Lihat Layanan",
      },
      heroStats: [
        { value: "3+", label: "Tahun Pengalaman" },
        { value: "12+", label: "Proyek Selesai" },
        { value: "100%", label: "Tepat Waktu" },
        { value: "24/7", label: "VIP Support" },
      ],
      process: {
        eyebrow: "Yang Kami Kerjakan",
        title: "Dapatkan tim digital khusus dengan biaya yang lebih efisien.",
        description:
          "Digitra membantu bisnis menyusun pesan, visual, dan sistem agar calon klien cepat paham apa yang Anda tawarkan. Kami menjaga proses tetap ramping: mulai dari kuisioner, pengumpulan materi, desain, development, sampai revisi yang terukur.",
        items: [
          {
            title: "Scope jelas",
            text: "Kebutuhan bisnis dipetakan dulu agar halaman, fitur, dan revisi punya arah yang konkret.",
          },
          {
            title: "Visual rapi",
            text: "Layout, warna, dan copy disusun agar brand terlihat modern tanpa mengorbankan keterbacaan.",
          },
          {
            title: "Siap dipakai",
            text: "Website dan sistem dibangun responsive, mudah dibagikan, dan siap menjadi kanal digital utama.",
          },
        ],
      },
      serviceSection: {
        eyebrow: "Layanan Kami",
        title: "Kami bantu bagian digital yang paling berdampak.",
        exploreCta: "Pelajari Lebih Lanjut",
        chips: [
          "Landing Page",
          "Company Profile",
          "GAS Automation",
          "Logo Design",
          "Social Media",
          "SEO Basic",
          "Copywriting",
        ],
      },
      testimonials: {
        eyebrow: "Testimoni",
        title: "Apa yang dikatakan pelanggan kami",
        items: [
          {
            quote:
              "Digitra membantu kami mengubah brief yang masih kasar menjadi website yang jauh lebih jelas dan siap dikirim ke calon klien.",
            name: "Rafi Pradana",
            role: "Founder UMKM Kuliner",
          },
          {
            quote:
              "Prosesnya rapi. Kami tahu materi apa yang harus disiapkan, kapan revisi masuk, dan scope akhirnya tidak melebar.",
            name: "Nadia Kirana",
            role: "Marketing Lead",
          },
          {
            quote:
              "Dashboard berbasis Google Apps Script membuat rekap harian tim lebih cepat dibanding cara manual sebelumnya.",
            name: "Bagas Erlangga",
            role: "Operations Manager",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Sebelum kita mulai",
        cta: "Hubungi Kami ",
      },
      closing: {
        title: "Kata jelas. Visual kuat. Trust meningkat.",
        description:
          "Website yang bagus bukan cuma terlihat modern. Ia harus menjelaskan siapa Anda, layanan apa yang dijual, dan alasan calon klien perlu percaya dalam beberapa detik pertama.",
        cta: "Mulai bersama Digitra",
      },
      topics: {
        getStarted: "memulai proyek digital",
        faq: "diskusi paket website",
        closing: "memulai proyek website",
      },
    },
    packageTabs: {
      landing: {
        label: "Landing Page",
        description:
          "Cocok untuk promosi satu produk, campaign, validasi market, atau halaman penjualan yang fokus pada satu tujuan.",
      },
      company: {
        label: "Company Profile",
        description:
          "Cocok untuk bisnis yang perlu profil lebih lengkap dengan struktur halaman profesional.",
      },
    },
    landingPackages: [
      {
        name: "Starter",
        price: "Rp 450.000",
        label: "Landing Page",
        features: [
          "Durasi 5-7 hari",
          "2x revisi minor",
          "1x revisi mayor",
          "Maksimal 4 section",
          "Responsive design",
          "Copywriting tidak termasuk",
          "Domain dan hosting tidak termasuk",
        ],
      },
      {
        name: "Intermediate",
        price: "Rp 1.050.000",
        label: "Best Value",
        featured: true,
        features: [
          "Durasi 2-4 hari dengan pelayanan VIP",
          "4x revisi minor",
          "2x revisi mayor untuk layout",
          "Maksimal 7 section",
          "Copywriting termasuk",
          "Animasi ringan",
          "Domain dan hosting termasuk (.com, .net, .online)",
          "Source code opsional via Github",
        ],
      },
    ],
    companyProfilePackages: [
      {
        name: "Starter",
        price: "Rp 750.000",
        label: "Company Profile",
        features: [
          "Untuk UMKM dan bisnis baru",
          "Durasi 7 hari",
          "2x revisi minor",
          "1x revisi mayor untuk layout",
          "Maksimal 3 halaman",
          "Konten teks dari klien",
          "Responsive mobile dan desktop",
          "Source code via Github atau ZIP",
          "Domain dan hosting tidak termasuk",
        ],
      },
      {
        name: "Intermediate",
        price: "Rp 1.350.000",
        label: "Best Value",
        featured: true,
        features: [
          "Untuk perusahaan mapan dan profesional",
          "Durasi 4-7 hari dengan VIP dan fast response",
          "4x revisi minor",
          "2x revisi mayor",
          "Maksimal 5 halaman",
          "Copywriting profesional dari bullet points",
          "Animasi ringan dan UI modern",
          "SEO dasar untuk meta title dan description",
          "Source code via Github atau ZIP",
          "Domain dan hosting tidak termasuk",
        ],
      },
    ],
    servicesPage: {
      hero: {
        eyebrow: "Layanan Digitra",
        title: "Layanan digital sederhana untuk pertumbuhan bisnis yang serius.",
        description:
          "Pilih layanan sesuai kebutuhan: website yang menjelaskan bisnis, sistem automation yang merapikan kerja internal, atau visual brand yang membuat komunikasi lebih konsisten.",
        chips: ["Web", "Automation", "Design"],
      },
      gas: {
        eyebrow: "01 / GAS",
        title: "GAS Web Business Application",
        description:
          "Sistem berbasis Google Apps Script untuk workflow, laporan, dashboard, approval, dan proses operasional yang sering berulang.",
        learnMore: "Pelajari lebih detail",
        detail: {
          eyebrow: "Detail GAS Automation",
          title: "Kerangka sistem operasional yang bisa disesuaikan.",
          description:
            "Bagian ini disiapkan untuk menjelaskan modul, alur data, dan contoh tampilan sistem GAS. Nanti bisa ditambahkan screenshot dashboard, form approval, atau sample report.",
          imageLabel: "Placeholder gambar dashboard GAS",
          groups: [
            {
              title: "Yang bisa dibuat",
              items: [
                "Dashboard dari Google Sheets",
                "Form input dan validasi data",
                "Approval bertahap dan notifikasi",
              ],
            },
            {
              title: "Alur kerja",
              items: [
                "Mapping kebutuhan dan struktur data",
                "Pembuatan prototype alur utama",
                "Testing bersama data contoh",
              ],
            },
            {
              title: "Output awal",
              items: [
                "Sistem GAS siap pakai",
                "Dokumentasi penggunaan singkat",
                "Rekomendasi pengembangan lanjutan",
              ],
            },
          ],
        },
      },
      website: {
        eyebrow: "02 / Website",
        title: "Company Profile & Landing Page",
        description:
          "Website profesional untuk memperkenalkan bisnis, menjelaskan penawaran, dan mengarahkan calon klien pembelian.",
        learnMore: "Pelajari selengkapnya",
        topic: "paket Company Profile dan Landing Page",
        detail: {
          eyebrow: "Detail Website",
          title: "Struktur halaman untuk menjelaskan bisnis dan penawaran.",
          description:
            "Kerangka ini disiapkan untuk membandingkan kebutuhan Landing Page dan Company Profile. Area gambar bisa diisi mockup hero, section layanan, portfolio, atau tampilan responsive.",
          imageLabel: "Placeholder gambar mockup website",
          groups: [
            {
              title: "Landing Page",
              items: [
                "Fokus pada satu offer atau campaign",
                "Copy diarahkan ke satu CTA utama",
                "Cocok untuk validasi produk atau promo",
              ],
            },
            {
              title: "Company Profile",
              items: [
                "Struktur halaman lebih lengkap",
                "Menjelaskan profil, layanan, dan trust",
                "Cocok untuk bisnis yang butuh kredibilitas",
              ],
            },
          ],
        },
      },
      design: {
        eyebrow: "03 / Design",
        title: "Visual brand assets untuk setiap channel.",
        description:
          "Logo, brosur, poster, dan social media feeds yang membantu brand terlihat konsisten dari website sampai materi promosi.",
      },
      workflow: {
        eyebrow: "Workflow",
        title: "Proses rapi, timeline jelas.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Sebelum kita mulai",
      },
      recommendation: {
        title: "Butuh rekomendasi paket?",
        description:
          "Kirim brief singkat, kami bantu petakan kebutuhan dan estimasi pengerjaan.",
        cta: "Hubungi Digitra",
      },
    },
    gasExamples: [
      {
        title: "Operational Dashboard",
        price: "Custom Quote",
        description:
          "Dashboard ringan untuk memantau data Google Sheets, progres pekerjaan, dan status operasional harian.",
      },
      {
        title: "Approval & Form System",
        price: "Custom Quote",
        description:
          "Alur form, validasi data, approval internal, dan notifikasi otomatis untuk proses bisnis berulang.",
      },
      {
        title: "Reporting Automation",
        price: "Custom Quote",
        description:
          "Otomasi rekap, laporan berkala, dan distribusi data agar tim tidak perlu menyalin data manual.",
      },
    ],
    designPackages: [
      {
        title: "Logo Design",
        packages: [
          "Starter - Rp 200.000, 3 pilihan desain, all file format, 3x revisi",
          "Top - Rp 400.000, 4 pilihan desain, all file format, 4x revisi, 3D mockup",
          "Premium - Rp 750.000, 5 pilihan desain, VIP support, all file format, unlimited revisi, 3D mockup",
        ],
      },
      {
        title: "Brosur / Poster",
        packages: [
          "Easy - 2 desain, all file format, 2x revisi",
          "Medium - 3 desain, all file format, 2x revisi, 3D mockup",
          "Hard - 3 desain, VIP support, all file format, 3x revisi, 3D mockup",
        ],
      },
      {
        title: "Social Media Feeds",
        packages: [
          "Harga dan layanan OnChat, disesuaikan dengan kebutuhan konten dan diskusi lebih lanjut",
        ],
      },
    ],
    workflowSteps: [
      {
        title: "Kuisioner Klien",
        description:
          "Digitra mengirim daftar pertanyaan untuk menggali target, kebutuhan, referensi, dan prioritas bisnis.",
      },
      {
        title: "Pengumpulan Materi",
        description:
          "Klien menyiapkan logo, foto produk atau layanan, informasi kontak, dan bahan dasar yang diperlukan.",
      },
      {
        title: "Argo Waktu Kerja",
        description:
          "Durasi pengerjaan dimulai sejak seluruh materi dasar diserahkan sepenuhnya kepada tim Digitra.",
      },
    ],
    contactPage: {
      hero: {
        eyebrow: "Contact Digitra",
        title: "Ceritakan kebutuhan bisnis Anda berikutnya.",
        description:
          "Ceritakan kebutuhan website, automation, atau desain visual. Digitra akan bantu merapikan brief menjadi scope kerja yang jelas dan mudah dieksekusi.",
        primaryCta: "Hubungi Kami ",
        secondaryCta: "Email Digitra",
        topic: "konsultasi proyek digital",
      },
      brief: {
        title: "Siapkan brief Anda",
        description:
          "Informasi ini akan mempercepat konsultasi dan membantu kami memberi rekomendasi paket yang pas.",
        items: [
          "Jenis layanan yang dibutuhkan",
          "Target pengunjung atau calon klien",
          "Referensi website atau visual",
          "Materi yang sudah tersedia",
          "Target waktu pengerjaan",
        ],
      },
      topics: {
        eyebrow: "Pilih Topik",
        title: "Mulai dari layanan yang Anda butuhkan.",
      },
      route: {
        eyebrow: "Contact Route",
        title: "Pilih channel yang paling cocok untuk brief Anda.",
        cards: [
          {
            title: "WhatsApp",
            action: "Buka WhatsApp",
            topic: "kontak utama",
            description:
              "Respons cepat untuk diskusi kebutuhan, estimasi paket, dan pengiriman brief awal.",
          },
          {
            title: "Email",
            action: siteConfig.email,
            description:
              "Cocok untuk mengirim dokumen, brief panjang, referensi visual, dan lampiran materi proyek.",
          },
        ],
      },
    },
    faqs: [
      {
        question: "Kapan durasi pengerjaan mulai dihitung?",
        answer:
          "Durasi baru dihitung sejak seluruh materi dasar(seperti logo resolusi tinggi, foto produk/layanan, dan informasi detail kontak) dari klien sudah lengkap dan diterima tim Digitra.",
      },
      {
        question: "Apakah saya harus menyiapkan semua teks, atau Digitra bisa membantu copywriting??",
        answer:
          "Jika Anda memilih Paket Intermediate (Landing Page maupun Company Profile), tim kami akan menangani copywriting profesional. Anda cukup mengirimkan bullet points atau ide kasarnya, dan kami yang akan memolesnya menjadi bahasa bisnis yang elegan. Untuk Paket Starter, materi teks 100% disiapkan oleh klien",
      },
      {
        question: "Bagaimana sistem revisi jika hasil desain ada yang kurang sesuai?",
        answer:
          "Kami menyediakan kuota revisi yang sangat transparan. Revisi Minor berlaku untuk perubahan warna, font, penggantian gambar, atau teks ringan. Sedangkan Revisi Mayor berlaku untuk perombakan struktur atau layout halaman. Jumlah kuota revisi (1x hingga 4x) menyesuaikan dengan paket yang Anda pilih.",
      },
      {
        question: "Apakah website yang dibuat akan terlihat rapi di HP (Responsive)?",
        answer:
          "Pasti. Seluruh website yang dikembangkan oleh Digitra dijamin 100% responsif dan dioptimalkan agar tampil sempurna, baik saat dibuka melalui smartphone, tablet, maupun desktop.",
      },
      {
        question: "Apakah saya memiliki kendali atas source code website saya nanti?",
        answer:
          "Tentu saja. Sebagai bentuk transparansi dan kepemilikan penuh aset digital Anda, seluruh source code final akan kami serahkan melalui Github atau file ZIP setelah proyek dinyatakan selesai sepenuhnya.",
      },
    ],
  },
  en: {
    site: {
      tagline: "Your Trusted Partner for Digital Evolution",
      footerDescription:
        "Websites, automation, and visual branding for businesses that want to look digitally ready.",
      menuTitle: "Menu",
      contactTitle: "Contact",
      contactDescription:
        "Digitize your business. Consult with us about your automation needs, website, and brand identity.",
      contactCta: "Start Free Consultation",
      copyright: "All rights reserved.",
    },
    theme: {
      switchLabel: "Switch color mode",
      dark: "Dark",
      light: "Light",
    },
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
    whatsapp: {
      defaultTopic: "website consultation",
      newBriefTopic: "new project brief",
      startProjectLabel: "Start project on WhatsApp",
      chatUs: "Chat Us",
      chatWhatsApp: "Hubungi Kami ",
      packageWebsite: "WhatsApp Website Package",
      customGas: "Custom GAS",
      askPackage: "Ask Package",
      consultViaWhatsApp: "Consult via WhatsApp",
      openWhatsApp: "Open WhatsApp",
    },
    serviceHighlights: [
      {
        title: "GAS Web Business Application",
        href: "/services#gas",
        eyebrow: "Automation",
        summary:
          "Google Apps Script systems for dashboards, approvals, reporting, and recurring business workflows.",
      },
      {
        title: "Company Profile & Landing Page",
        href: "/services#company-profile",
        eyebrow: "Website",
        summary:
          "Professional pages that explain business value, build trust, and guide prospects toward a clear CTA.",
      },
      {
        title: "Design",
        href: "/services#design",
        eyebrow: "Brand Visual",
        summary:
          "Logos, brochures, posters, and social media assets that keep brand communication consistent.",
      },
    ],
    home: {
      hero: {
        eyebrow: "Digital Transformation Studio",
        titlePrefix: "Bringing Your Business Into",
        titleAccent: "Digital Evolution",
        description:
          "Digitra designs websites, automation, and visual branding that make your business look more trustworthy and easier to explain.",
        primaryCta: "Get Started",
        secondaryCta: "View Services",
      },
      heroStats: [
        { value: "1+", label: "Years Experience" },
        { value: "5+", label: "Projects Delivered" },
        { value: "100%", label: "On-Time Delivery" },
        { value: "24/7", label: "VIP Support" },
      ],
      process: {
        eyebrow: "What We Do",
        title: "Get a dedicated digital team at a fraction of the cost.",
        description:
          "Digitra helps businesses structure their message, visuals, and systems so prospects quickly understand what you offer. We keep the process lean: from questionnaire, material collection, design, development, to focused revisions.",
        items: [
          {
            title: "Clear scope",
            text: "Business needs are mapped first so pages, features, and revisions have a concrete direction.",
          },
          {
            title: "Polished visuals",
            text: "Layouts, colors, and copy are arranged so the brand feels modern while staying easy to read.",
          },
          {
            title: "Ready to use",
            text: "Websites and systems are built responsive, easy to share, and ready to become your main digital channel.",
          },
        ],
      },
      serviceSection: {
        eyebrow: "Our Services",
        title: "We can help you with the digital pieces that matter.",
        exploreCta: "Explore Service",
        chips: [
          "Landing Page",
          "Company Profile",
          "GAS Automation",
          "Logo Design",
          "Social Media",
          "SEO Basic",
          "Copywriting",
        ],
      },
      testimonials: {
        eyebrow: "Testimonials",
        title: "What our customers say",
        items: [
          {
            quote:
              "Digitra helped us turn a rough brief into a much clearer website that was ready to send to prospective clients.",
            name: "Rafi Pradana",
            role: "Culinary MSME Founder",
          },
          {
            quote:
              "The process was neat. We knew what materials to prepare, when revisions came in, and the final scope did not spread.",
            name: "Nadia Kirana",
            role: "Marketing Lead",
          },
          {
            quote:
              "The Google Apps Script dashboard made our daily team recap faster than the manual method we used before.",
            name: "Bagas Erlangga",
            role: "Operations Manager",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Before we start",
        cta: "Hubungi Kami ",
      },
      closing: {
        title: "Clear words. Strong visuals. Better trust.",
        description:
          "A good website is not only modern-looking. It should explain who you are, what you sell, and why prospects should trust you within the first few seconds.",
        cta: "Start with Digitra",
      },
      topics: {
        getStarted: "starting a digital project",
        faq: "discussing a website package",
        closing: "starting a website project",
      },
    },
    packageTabs: {
      landing: {
        label: "Landing Page",
        description:
          "Best for promoting one product, running a campaign, validating the market, or building a sales page focused on one goal.",
      },
      company: {
        label: "Company Profile",
        description:
          "Best for businesses that need a more complete profile with a professional page structure.",
      },
    },
    landingPackages: [
      {
        name: "Starter",
        price: "Rp 450.000",
        label: "Landing Page",
        features: [
          "5-7 day delivery",
          "2 minor revisions",
          "1 major revision",
          "Up to 4 sections",
          "Responsive design",
          "Copywriting not included",
          "Domain and hosting not included",
        ],
      },
      {
        name: "Intermediate",
        price: "Rp 1.050.000",
        label: "Best Value",
        featured: true,
        features: [
          "2-4 day delivery with VIP service",
          "4 minor revisions",
          "2 major layout revisions",
          "Up to 7 sections",
          "Copywriting included",
          "Light animation",
          "Domain and hosting included (.com, .net, .online)",
          "Optional source code via Github",
        ],
      },
    ],
    companyProfilePackages: [
      {
        name: "Starter",
        price: "Rp 750.000",
        label: "Company Profile",
        features: [
          "For MSMEs and new businesses",
          "7 day delivery",
          "2 minor revisions",
          "1 major layout revision",
          "Up to 3 pages",
          "Client-provided text content",
          "Responsive mobile and desktop",
          "Source code via Github or ZIP",
          "Domain and hosting not included",
        ],
      },
      {
        name: "Intermediate",
        price: "Rp 1.350.000",
        label: "Best Value",
        featured: true,
        features: [
          "For established and professional companies",
          "4-7 day delivery with VIP and fast response",
          "4 minor revisions",
          "2 major revisions",
          "Up to 5 pages",
          "Professional copywriting from bullet points",
          "Light animation and modern UI",
          "Basic SEO for meta title and description",
          "Source code via Github or ZIP",
          "Domain and hosting not included",
        ],
      },
    ],
    servicesPage: {
      hero: {
        eyebrow: "Digitra Services",
        title: "Simple digital services for serious business growth.",
        description:
          "Choose services based on your needs: a website that explains your business, an automation system that cleans up internal work, or visual branding that makes communication more consistent.",
        chips: ["Web", "Automation", "Design"],
      },
      gas: {
        eyebrow: "01 / GAS",
        title: "GAS Web Business Application",
        description:
          "Google Apps Script based systems for workflows, reports, dashboards, approvals, and recurring operational processes.",
        learnMore: "Learn more details",
        detail: {
          eyebrow: "GAS Automation Detail",
          title: "An operational system framework that can be customized.",
          description:
            "This area is prepared to explain modules, data flow, and GAS system examples. Later you can add dashboard screenshots, approval forms, or sample reports.",
          imageLabel: "GAS dashboard image placeholder",
          groups: [
            {
              title: "What can be built",
              items: [
                "Dashboards from Google Sheets",
                "Input forms and data validation",
                "Layered approvals and notifications",
              ],
            },
            {
              title: "Workflow",
              items: [
                "Needs mapping and data structure",
                "Main flow prototype build",
                "Testing with sample data",
              ],
            },
            {
              title: "Initial output",
              items: [
                "Ready-to-use GAS system",
                "Short usage documentation",
                "Further development recommendations",
              ],
            },
          ],
        },
      },
      website: {
        eyebrow: "02 / Website",
        title: "Company Profile & Landing Page",
        description:
          "Professional websites to introduce your business, explain your offer, and guide prospects toward purchase.",
        learnMore: "Learn more",
        topic: "Company Profile and Landing Page package",
        detail: {
          eyebrow: "Website Detail",
          title: "A page structure for explaining the business and offer.",
          description:
            "This framework is prepared to compare Landing Page and Company Profile needs. The image area can later hold hero mockups, service sections, portfolio, or responsive previews.",
          imageLabel: "Website mockup image placeholder",
          groups: [
            {
              title: "Landing Page",
              items: [
                "Focused on one offer or campaign",
                "Copy is directed to one main CTA",
                "Best for product validation or promotion",
              ],
            },
            {
              title: "Company Profile",
              items: [
                "More complete page structure",
                "Explains profile, services, and trust",
                "Best for businesses that need credibility",
              ],
            },
            {
              title: "Ready to expand",
              items: [
                "Sections can be added based on scope",
                "Responsive layout from the start",
                "Space for images, portfolio, and testimonials",
              ],
            },
          ],
        },
      },
      design: {
        eyebrow: "03 / Design",
        title: "Visual brand assets for every channel.",
        description:
          "Logos, brochures, posters, and social media feeds that help your brand stay consistent from website to promotional materials.",
      },
      workflow: {
        eyebrow: "Workflow",
        title: "Clean process, clear timeline.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Before we start",
      },
      recommendation: {
        title: "Need a package recommendation?",
        description:
          "Send a short brief and we will help map your needs and estimate the work.",
        cta: "Contact Digitra",
      },
    },
    gasExamples: [
      {
        title: "Operational Dashboard",
        price: "Custom Quote",
        description:
          "A lightweight dashboard to monitor Google Sheets data, task progress, and daily operational status.",
      },
      {
        title: "Approval & Form System",
        price: "Custom Quote",
        description:
          "Form flows, data validation, internal approval, and automatic notifications for recurring business processes.",
      },
      {
        title: "Reporting Automation",
        price: "Custom Quote",
        description:
          "Automated recaps, periodic reports, and data distribution so the team does not need to copy data manually.",
      },
    ],
    designPackages: [
      {
        title: "Logo Design",
        packages: [
          "Starter - Rp 200.000, 3 design options, all file formats, 3 revisions",
          "Top - Rp 400.000, 4 design options, all file formats, 4 revisions, 3D mockup",
          "Premium - Rp 750.000, 5 design options, VIP support, all file formats, unlimited revisions, 3D mockup",
        ],
      },
      {
        title: "Brochure / Poster",
        packages: [
          "Easy - 2 designs, all file formats, 2 revisions",
          "Medium - 3 designs, all file formats, 2 revisions, 3D mockup",
          "Hard - 3 designs, VIP support, all file formats, 3 revisions, 3D mockup",
        ],
      },
      {
        title: "Social Media Feeds",
        packages: [
          "Pricing and service details are OnChat, adjusted to your content needs and further discussion",
        ],
      },
    ],
    workflowSteps: [
      {
        title: "Client Questionnaire",
        description:
          "Digitra sends a list of questions to explore targets, needs, references, and business priorities.",
      },
      {
        title: "Material Collection",
        description:
          "The client prepares logos, product or service photos, contact information, and the basic assets needed.",
      },
      {
        title: "Work Timer",
        description:
          "The delivery timeline starts once all basic materials have been fully handed over to the Digitra team.",
      },
    ],
    contactPage: {
      hero: {
        eyebrow: "Contact Digitra",
        title: "Tell us what your business needs next.",
        description:
          "Tell us about your website, automation, or visual design needs. Digitra will help turn the brief into a clear and executable scope of work.",
        primaryCta: "Hubungi Kami ",
        secondaryCta: "Email Digitra",
        topic: "digital project consultation",
      },
      brief: {
        title: "Prepare your brief",
        description:
          "This information will speed up the consultation and help us recommend the right package.",
        items: [
          "Type of service needed",
          "Target visitors or prospective clients",
          "Website or visual references",
          "Materials already available",
          "Target delivery timeline",
        ],
      },
      topics: {
        eyebrow: "Choose Topic",
        title: "Start from the service you need.",
      },
      route: {
        eyebrow: "Contact Route",
        title: "Pick the channel that fits your brief.",
        cards: [
          {
            title: "WhatsApp",
            action: "Open WhatsApp",
            topic: "main contact",
            description:
              "Fast response for discussing needs, package estimates, and sending the initial brief.",
          },
          {
            title: "Email",
            action: siteConfig.email,
            description:
              "Best for sending documents, long briefs, visual references, and project material attachments.",
          },
        ],
      },
    },
    faqs: [
      {
        question: "Can Digitra help with copywriting?",
        answer:
          "Yes. Copywriting is included in selected packages, especially the Intermediate Landing Page and Intermediate Company Profile packages.",
      },
      {
        question: "When does the delivery timeline start?",
        answer:
          "The timeline starts once all basic materials from the client are complete and received by the Digitra team.",
      },
      {
        question: "Will the website be responsive?",
        answer:
          "Yes. Websites are built to look clean on mobile and desktop according to the selected package scope.",
      },
    ],
  },
} as const;

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
