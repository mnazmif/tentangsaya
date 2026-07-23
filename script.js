let currentLang = 'id';

const translations = {
    id: {
        // Nav
        navHome: "Beranda",
        navPortfolio: "Tugas Akademik",
        navAchieve: "Prestasi & Pengalaman",
        langBtn: "🇬🇧 English",

        // Beranda Hero
        badgeTitle: "Teknik Sipil",
        heroTagline: "Lulusan Teknik Sipil | Peminat Analisis Keuangan & Pasar Modal",
        profileSummary: `Saya adalah seorang <strong>Lulusan Baru (Fresh Graduate) Teknik Sipil</strong> yang memiliki pengalaman berorganisasi di <strong>Galeri Investasi Bursa Efek Indonesia (GIBEI)</strong> tingkat universitas. Saya adalah pribadi yang adaptif dan selalu tertarik untuk mempelajari hal-hal baru—seperti mengeksplorasi dasar-dasar pembuatan website serta pemodelan website berbasis AI secara mandiri.`,
        btnCv: "📄 Unduh CV (PDF)",
        btnContact: "✉️ Hubungi Saya",

        // Stats
        statAchieve: "Prestasi & Pengalaman",
        statProjects: "Portofolio Tugas Besar",
        statGibei: "Divisi Teknikal & Analisis",

        // Skills
        hardSkillTitle: "🛠️ Hard Skills",
        hardSkillList: `
            <li><strong>Microsoft Office:</strong> Ms. Excel, Ms. Word, & Ms. PowerPoint (Pengolahan Data, Dokumen, & Presentasi)</li>
            <li><strong>AutoCAD:</strong> Gambar Teknik Dasar</li>
            <li><strong>Manajemen Proyek:</strong> Dasar-dasar Primavera P6</li>
        `,
        softSkillTitle: "🤝 Soft Skills",
        softSkillList: `
            <li>Pemahaman Dasar Bahasa Inggris</li>
            <li>Kemampuan Bekerja Secara Berkelompok</li>
            <li>Kemampuan Beradaptasi</li>
            <li>Manajemen Waktu & Kedisiplinan</li>
            <li>Komunikasi Interpersonal</li>
        `,

        // Contact
        contactTitle: "📬 Kontak & Media Sosial",
        contactDesc: "Silakan hubungi saya melalui media berikut untuk diskusi karir, proyek, atau kolaborasi:",
        lblWa: "WhatsApp / No. HP",

        // Academic Page
        academicTitle: "📚 Portofolio Akademik & Teknik Sipil",
        academicSubtitle: "Rekapitulasi 8 Tugas Besar & Riset Ketekniksipilan",
        btnPdf: "Lihat / Download Laporan PDF",

        p1Title: "1. Analisis Implementasi Car Free Day (CFD) Terhadap Pemodelan Emisi Kendaraan",
        p1Desc: "Penelitian komprehensif untuk membuktikan secara kuantitatif pengaruh penerapan CFD terhadap perubahan volume lalu lintas dan sebaran emisi gas buang kendaraan.",
        p2Title: "2. Perencanaan Geometrik Jalan Raya & Pengolahan Data Topografi Digital",
        p2Desc: "Merencanakan trase dan geometrik jalan raya secara komprehensif dengan integrasi data elevasi digital (DEMNAS) hingga visualisasi pemodelan 3D.",
        p3Title: "3. Perancangan & Analisis Struktur Beton Bertulang (Gedung Kantor)",
        p3Desc: "Merencanakan dan menganalisis struktur gedung kantor beton bertulang berdasarkan regulasi SNI, mulai dari pembebanan pelat, balok, kolom, tangga, hingga pondasi.",
        p4Title: "4. Perancangan & Analisis Struktur Baja (Atap Kuda-Kuda & Elemen Gedung)",
        p4Desc: "Merencanakan dan menganalisis keandalan struktur bangunan baja bertingkat (gording, kuda-kuda, kolom, balok induk/anak, bondex, dan sambungan) agar mampu menahan beban rencana.",
        p5Title: "5. Pemodelan 3D & Visualisasi Arsitektural-Struktur (Hotel 4 Lantai)",
        p5Desc: "Mengembangkan hasil rekonstruksi gambar 2D menjadi model visualisasi 3D parametrik menggunakan ArchiCAD untuk mensimulasikan bentuk nyata bangunan, potongan 3D, dan fasad.",
        p6Title: "6. Menggambar Rekonstruksi Bangunan Komersial (Hotel 4 Lantai > 1.000 m²)",
        p6Desc: "Menyusun gambar kerja (shop drawing) dan rekonstruksi teknis untuk bangunan hotel 4 lantai secara mendetail (denah, tampak, potongan, dan detail struktur).",
        p7Title: "7. Perancangan Layout & Analisis Spasial Peta Tematik (SIG)",
        p7Desc: "Mengolah data geospasial dan merancang tata letak (layouting) peta digital secara komunikatif, presisi, dan estetik sesuai standar kartografi.",
        p8Title: "8. Praktikum Ilmu Ukur Tanah 1 & 2 (Pemetaan & Topografi Lahan)",
        p8Desc: "Pemetaan topografi dan pengukuran kontur lahan di lapangan, pengolahan data koordinat via Excel, pemodelan kontur 3D via Surfer, dan gambar peta situasi via AutoCAD.",

        // Achievements Page
        cat1Title: "🏆 Kategori 1: Top Achievements (Juara 1 & Prestasi Utama)",
        cat2Title: "🥈 Kategori 2: Kompetisi & Podium Lainnya",
        cat3Title: "🤝 Kategori 3: Pengalaman Organisasi & Pengabdian",
        thEvent: "Kejuaraan / Prestasi",
        thOrg: "Organisasi / Pengabdian",
        thRole: "Peran / Jabatan",
        thYear: "Tahun",
        thPeriod: "Periode",
        thProof: "Bukti Sertifikat / Foto Piala",
        
        award1st: "Juara 1",
        award2nd: "Juara 2",
        award3rd: "Juara 3",
        roleGibei: "Anggota Divisi Teknikal & Analisis",
        roleTax: "Relawan Pajak (Edukasi & Pendampingan SPT)"
    },
    en: {
        // Nav
        navHome: "Home",
        navPortfolio: "Academic Projects",
        navAchieve: "Achievements & Experience",
        langBtn: "🇮🇩 Bahasa Indonesia",

        // Beranda Hero
        badgeTitle: "Civil Engineering",
        heroTagline: "Civil Engineering | Financial Analysis & Capital Market Enthusiast",
        profileSummary: `I am a <strong>Civil Engineering </strong> with organizational experience in the <strong>Indonesia Stock Exchange Investment Gallery (GIBEI)</strong> at the university level. I am an adaptive individual who is always eager to learn new things—such as exploring the fundamentals of web development and AI-assisted website modeling independently.`,
        btnCv: "📄 Download CV (PDF)",
        btnContact: "✉️ Contact Me",

        // Stats
        statAchieve: "Achievements & Experience",
        statProjects: "Major Engineering Projects",
        statGibei: "Technical & Analysis Division",

        // Skills
        hardSkillTitle: "🛠️ Hard Skills",
        hardSkillList: `
            <li><strong>Microsoft Office:</strong> Ms. Excel, Ms. Word, & Ms. PowerPoint (Data Processing, Documentation, & Presentations)</li>
            <li><strong>AutoCAD:</strong> Basic Technical Drawing</li>
            <li><strong>Project Management:</strong> Active Learning Primavera P6</li>
        `,
        softSkillTitle: "🤝 Soft Skills",
        softSkillList: `
            <li>Basic English Comprehension</li>
            <li>Teamwork & Collaboration</li>
            <li>Adaptability</li>
            <li>Time Management & Discipline</li>
            <li>Interpersonal Communication</li>
        `,

        // Contact
        contactTitle: "📬 Contact & Social Media",
        contactDesc: "Feel free to reach out to me via the following platforms for career discussions, projects, or collaborations:",
        lblWa: "WhatsApp / Phone",

        // Academic Page
        academicTitle: "📚 Academic Portfolio & Civil Engineering Projects",
        academicSubtitle: "Recapitulation of 8 Major Projects & Engineering Research",
        btnPdf: "View / Download PDF Report",

        p1Title: "1. Car Free Day (CFD) Implementation Analysis on Vehicle Emission Modeling",
        p1Desc: "Comprehensive study to quantitatively prove the impact of CFD implementation on traffic volume shifts and vehicle exhaust emission distribution.",
        p2Title: "2. Highway Geometric Design & Digital Topographic Data Processing",
        p2Desc: "Designing highway alignment and geometry comprehensively by integrating digital elevation data (DEMNAS) up to 3D modeling visualization.",
        p3Title: "3. Reinforced Concrete Structure Design & Analysis (Office Building)",
        p3Desc: "Designing and analyzing reinforced concrete office building structures according to Indonesian SNI regulations, covering slab, beam, column, stair, and foundation loading.",
        p4Title: "4. Steel Structure Design & Analysis (Truss Roof & Building Elements)",
        p4Desc: "Designing and analyzing structural reliability of multi-story steel buildings (purlins, roof trusses, columns, main/secondary beams, decking, and connections) to withstand design loads.",
        p5Title: "5. 3D Modeling & Architectural-Structural Visualization (4-Story Hotel)",
        p5Desc: "Developing 2D drawing reconstructions into parametric 3D visualization models using ArchiCAD to simulate real building forms, 3D cutaways, and facades.",
        p6Title: "6. Commercial Building Reconstruction Drawing (4-Story Hotel > 1,000 m²)",
        p6Desc: "Preparing detailed shop drawings and technical reconstructions for a 4-story hotel building (floor plans, elevations, sections, and structural details).",
        p7Title: "7. Layout Design & Spatial Analysis of Thematic Maps (GIS)",
        p7Desc: "Processing geospatial data and designing digital map layouts communicatively, precisely, and aesthetically according to cartographic standards.",
        p8Title: "8. Land Surveying Practicum 1 & 2 (Site Mapping & Topography)",
        p8Desc: "Topographic mapping and land contour surveying in the field, coordinate data processing via Excel, 3D contour modeling via Surfer, and site map drawing via AutoCAD.",

        // Achievements Page
        cat1Title: "🏆 Category 1: Top Achievements (1st Place & Major Honors)",
        cat2Title: "🥈 Category 2: Competitions & Other Podiums",
        cat3Title: "🤝 Category 3: Organizational Experience & Public Service",
        thEvent: "Competition / Achievement",
        thOrg: "Organization / Community Service",
        thRole: "Role / Position",
        thYear: "Year",
        thPeriod: "Period",
        thProof: "Certificate / Trophy Photo",
        
        award1st: "1st Winner",
        award2nd: "2nd Winner",
        award3rd: "3rd Winner",
        roleGibei: "Technical & Analysis Division Member",
        roleTax: "Tax Volunteer (Education & Tax Return Filing Assistance)"
    }
};

function updateLanguage(lang) {
    const t = translations[lang];

    // Header Nav
    if (document.getElementById('nav-home')) document.getElementById('nav-home').innerText = t.navHome;
    if (document.getElementById('nav-portfolio')) document.getElementById('nav-portfolio').innerText = t.navPortfolio;
    if (document.getElementById('nav-achieve')) document.getElementById('nav-achieve').innerText = t.navAchieve;
    if (document.getElementById('langToggle')) document.getElementById('langToggle').innerText = t.langBtn;

    // Index Page
    if (document.getElementById('badge-title')) document.getElementById('badge-title').innerText = t.badgeTitle;
    if (document.getElementById('hero-tagline')) document.getElementById('hero-tagline').innerText = t.heroTagline;
    if (document.getElementById('profileSummary')) document.getElementById('profileSummary').innerHTML = t.profileSummary;
    if (document.getElementById('btn-cv')) document.getElementById('btn-cv').innerText = t.btnCv;
    if (document.getElementById('btn-contact')) document.getElementById('btn-contact').innerText = t.btnContact;

    if (document.getElementById('stat-achieve')) document.getElementById('stat-achieve').innerText = t.statAchieve;
    if (document.getElementById('stat-projects')) document.getElementById('stat-projects').innerText = t.statProjects;
    if (document.getElementById('stat-gibei')) document.getElementById('stat-gibei').innerText = t.statGibei;

    if (document.getElementById('hardSkillTitle')) document.getElementById('hardSkillTitle').innerText = t.hardSkillTitle;
    if (document.getElementById('hardSkillList')) document.getElementById('hardSkillList').innerHTML = t.hardSkillList;
    if (document.getElementById('softSkillTitle')) document.getElementById('softSkillTitle').innerText = t.softSkillTitle;
    if (document.getElementById('softSkillList')) document.getElementById('softSkillList').innerHTML = t.softSkillList;

    if (document.getElementById('contact-title')) document.getElementById('contact-title').innerText = t.contactTitle;
    if (document.getElementById('contact-desc')) document.getElementById('contact-desc').innerText = t.contactDesc;
    if (document.getElementById('lbl-wa')) document.getElementById('lbl-wa').innerText = t.lblWa;

    // Portfolio Page
    if (document.getElementById('academicTitle')) document.getElementById('academicTitle').innerText = t.academicTitle;
    if (document.getElementById('academicSubtitle')) document.getElementById('academicSubtitle').innerText = t.academicSubtitle;
    
    if (document.getElementById('p1-title')) document.getElementById('p1-title').innerText = t.p1Title;
    if (document.getElementById('p1-desc')) document.getElementById('p1-desc').innerText = t.p1Desc;
    if (document.getElementById('p2-title')) document.getElementById('p2-title').innerText = t.p2Title;
    if (document.getElementById('p2-desc')) document.getElementById('p2-desc').innerText = t.p2Desc;
    if (document.getElementById('p3-title')) document.getElementById('p3-title').innerText = t.p3Title;
    if (document.getElementById('p3-desc')) document.getElementById('p3-desc').innerText = t.p3Desc;
    if (document.getElementById('p4-title')) document.getElementById('p4-title').innerText = t.p4Title;
    if (document.getElementById('p4-desc')) document.getElementById('p4-desc').innerText = t.p4Desc;
    if (document.getElementById('p5-title')) document.getElementById('p5-title').innerText = t.p5Title;
    if (document.getElementById('p5-desc')) document.getElementById('p5-desc').innerText = t.p5Desc;
    if (document.getElementById('p6-title')) document.getElementById('p6-title').innerText = t.p6Title;
    if (document.getElementById('p6-desc')) document.getElementById('p6-desc').innerText = t.p6Desc;
    if (document.getElementById('p7-title')) document.getElementById('p7-title').innerText = t.p7Title;
    if (document.getElementById('p7-desc')) document.getElementById('p7-desc').innerText = t.p7Desc;
    if (document.getElementById('p8-title')) document.getElementById('p8-title').innerText = t.p8Title;
    if (document.getElementById('p8-desc')) document.getElementById('p8-desc').innerText = t.p8Desc;

    document.querySelectorAll('.btn-text').forEach(btn => {
        btn.innerText = t.btnPdf;
    });

    // Prestasi Page
    if (document.getElementById('cat1-title')) document.getElementById('cat1-title').innerText = t.cat1Title;
    if (document.getElementById('cat2-title')) document.getElementById('cat2-title').innerText = t.cat2Title;
    if (document.getElementById('cat3-title')) document.getElementById('cat3-title').innerText = t.cat3Title;

    document.querySelectorAll('.th-event').forEach(el => el.innerText = t.thEvent);
    document.querySelectorAll('.th-org').forEach(el => el.innerText = t.thOrg);
    document.querySelectorAll('.th-role').forEach(el => el.innerText = t.thRole);
    document.querySelectorAll('.th-year').forEach(el => el.innerText = t.thYear);
    document.querySelectorAll('.th-period').forEach(el => el.innerText = t.thPeriod);
    document.querySelectorAll('.th-proof').forEach(el => el.innerText = t.thProof);

    document.querySelectorAll('.award-1st').forEach(el => el.innerText = t.award1st);
    document.querySelectorAll('.award-2nd').forEach(el => el.innerText = t.award2nd);
    document.querySelectorAll('.award-3rd').forEach(el => el.innerText = t.award3rd);

    if (document.getElementById('role-gibei')) document.getElementById('role-gibei').innerText = t.roleGibei;
    if (document.getElementById('role-tax')) document.getElementById('role-tax').innerText = t.roleTax;
}

// TOGGLE SWITCH BAHASA
document.getElementById('langToggle')?.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage(currentLang);
});

// POPUP SERTIFIKAT DIPERBESAR SAAT DI-KLIK
document.addEventListener('DOMContentLoaded', () => {
    const certImages = document.querySelectorAll('.cert-img');
    
    certImages.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
            overlay.style.backdropFilter = 'blur(4px)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '2000';
            overlay.style.cursor = 'pointer';

            const enlargedImg = document.createElement('img');
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.borderRadius = '8px';
            enlargedImg.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => overlay.remove());
        });
    });
});