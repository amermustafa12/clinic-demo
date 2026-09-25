document.addEventListener('DOMContentLoaded', () => {

    /* --- Navigation & Sticky Header --- */
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');

    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }
        revealElements();
    });

    const toggleSidebar = () => {
        if (!sidebar || !hamburger || !overlay) return;
        const isActive = sidebar.classList.toggle('active');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    if (hamburger) hamburger.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);
    sidebarLinks.forEach(link => link.addEventListener('click', toggleSidebar));

    /* --- Scroll Reveal Animations --- */
    const reveals = document.querySelectorAll('.reveal');
    const revealElements = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 80;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };
    revealElements();

    /* --- Bilingual Translation Dictionary (EN / AR) --- */
    const langBtn = document.getElementById('lang-switcher');
    const htmlTag = document.documentElement;
    let currentLang = 'en';

    const translations = {
        en: {
            drName: "Dr. Amer Mustafa",
            specialty: "Orthodontics",
            navHome: "Home",
            navServices: "Services",
            navAbout: "About Us",
            navGallery: "Gallery",
            navContact: "Contact",
            connectWithUs: "Connect With Us",
            heroTitle: "Dr. Amer Mustafa",
            heroDesc: "Expert dental care and orthodontics with a personalized approach. We combine modern technology with years of experience to give you the perfect smile.",
            btnServices: "Explore Our Services",
            btnContact: "Contact Us",
            btnViewAll: "View All Services",
            statExp: "Years Experience",
            statPatients: "Happy Patients",
            statSatisfaction: "Patient Satisfaction",
            statCare: "Modern Dental Care",
            secServicesTitle: "Our Premium Services",
            secServicesDesc: "Comprehensive dental care tailored to your needs.",
            srvGeneral: "General Dentistry",
            srvGeneralDesc: "Routine check-ups, professional cleanings, and preventive care.",
            srvOrtho: "Orthodontics",
            srvOrthoDesc: "Braces and clear aligners designed for properly aligned, healthy teeth.",
            srvImplants: "Dental Implants",
            srvImplantsDesc: "Permanent titanium posts and natural porcelain crowns that restore function and form.",
            srvCosmetic: "Cosmetic Dentistry",
            srvCosmeticDesc: "Smile makeovers, composite bonding, and aesthetic restorations for confidence.",
            srvWhitening: "Teeth Whitening",
            srvWhiteningDesc: "In-office laser whitening treatments designed to safely brighten enamel by shades.",
            srvRootCanal: "Root Canal Treatment",
            srvRootCanalDesc: "Precise endodontic treatment using rotary technology to save teeth without pain.",
            srvPediatric: "Pediatric Dentistry",
            srvPediatricDesc: "Gentle preventative care and dental guidance structured for children and teens.",
            srvVeneers: "Porcelain Veneers",
            srvVeneersDesc: "Ultra-thin custom porcelain shells that correct spacing, chips, and tooth shape.",
            secAboutTitle: "Meet The Doctor",
            aboutBio: "With over a decade of dedicated experience in orthodontics and cosmetic dentistry, Dr. Laith focuses on patient comfort and outstanding clinical results. Our clinic philosophy is built on trust, transparency, and modern techniques.",
            aboutBioLong: "Dentistry runs in my blood. Growing up in a family of dedicated dental professionals, I was inspired by my parents and spent countless hours learning the values of care, precision, and trust. Today, I bring over a decade of specialized experience to my practice, ensuring every patient receives world-class treatment in a comfortable environment.",
            qual1: "Certified Orthodontist",
            qual2: "Member of Dental Association",
            qual3: "Advanced Implantology Certified",
            btnLearnMore: "Learn More",
            secBaTitle: "Transformations",
            secBaDesc: "Real results from our dedicated treatments.",
            labelBefore: "Before",
            labelAfter: "After",
            secWhyTitle: "Why Choose Us",
            why1: "Experienced Care",
            why2: "Modern Technology",
            why3: "Patient-Focused",
            why4: "Comfortable Environment",
            secReviewTitle: "Patient Stories",
            rev1: "\"The absolute best dental experience I've ever had. Professional, painless, and a beautiful clinic environment.\"",
            rev2: "\"Dr. Laith transformed my smile with modern aligners. The friendly atmosphere makes you feel right at home.\"",
            rev3: "\"Remarkable precision and care. You immediately notice the high level of clinic hygiene and equipment quality.\"",
            secGalleryTitle: "Clinic Gallery",
            btnGallery: "View Full Gallery",
            ctaTitle: "Your Smile Deserves the Best Care",
            ctaDesc: "Modern dentistry with a personalized approach.",
            footerTagline: "Premium dental care ensuring your perfect smile.",
            footerQuick: "Quick Links",
            srvHeroTitle: "Our Services",
            srvHeroDesc: "Discover a wide range of dental services tailored to meet your needs. From routine cleanings and teeth whitening to advanced cosmetic and restorative treatments, Dr. Laith and his team are dedicated to ensuring your oral health and a radiant smile.",
            aboutHeroTitle: "About Us",
            aboutHeroDesc: "Excellence in modern dentistry rooted in family tradition, technical precision, and genuine patient care. Discover the background and values that guide our practice.",
            galleryHeroTitle: "Clinic Gallery",
            galleryHeroDesc: "Explore our clean, comfortable facilities and state-of-the-art dental technology designed to make your visits pleasant, efficient, and stress-free.",
            contactHeroTitle: "Contact Us",
            contactHeroDesc: "Get in touch with us for inquiries, directions, or information about our orthodontic and general dentistry services. We look forward to welcoming you.",
            credentialsTitle: "Credentials & Education",
            edu1: "Doctor of Dental Surgery (DDS)",
            edu2: "Master's Degree in Orthodontics",
            edu3: "Board Certified Cosmetic Dentist",
            edu4: "Member of International Association of Orthodontics",
            philTitle: "Our Clinic Philosophy",
            philDesc: "Three core pillars defining every procedure and patient interaction.",
            valIntegrity: "Integrity",
            valIntegrityDesc: "Honest diagnosis, transparent plans, and treatments tailored to your dental wellbeing without unnecessary procedures.",
            valInnovation: "Innovation",
            valInnovationDesc: "Utilizing 3D scanning, low-radiation digital imaging, and high-grade materials for predictable, comfortable results.",
            valCompassion: "Compassion",
            valCompassionDesc: "Creating a calm, stress-free clinical environment where patient listening and pain-free care come first.",
            filterAll: "All",
            filterClinic: "Clinic",
            filterTreatment: "Treatment",
            filterTech: "Technology",
            lblAddress: "Visit Us",
            valAddress: "Amman, Jordan<br>Medical Center, 4th Floor",
            lblPhone: "Call Us",
            lblHours: "Working Hours",
            valHours: "Sat - Thu: 9:00 AM - 7:00 PM<br>Friday: Closed",
            formTitle: "Send a Message",
            formName: "Full Name",
            formEmail: "Email Address",
            formPhone: "Phone Number",
            formMessage: "Your Message",
            formSubmit: "Send Message",
            formSuccessMsg: "Thank you. Your message has been received.",
            mapText: "Google Maps Embed Area",
            ctaReady: "Ready to transform your smile?"
        },
        ar: {
            drName:  "د. عامر مصطفى",
            specialty: "تقويم الأسنان",
            navHome: "الرئيسية",
            navServices: "الخدمات",
            navAbout: "من نحن",
            navGallery: "المعرض",
            navContact: "اتصل بنا",
            connectWithUs: "تواصل معنا",
            heroTitle: "د. عامر مصطفى",
            heroDesc: "رعاية أسنان وتقويم بخبرة متقدمة ونهج شخصي. نجمع بين أحدث التقنيات وسنوات الخبرة لمنحك ابتسامة متناسقة وجذابة.",
            btnServices: "استكشف خدماتنا",
            btnContact: "اتصل بنا",
            btnViewAll: "عرض جميع الخدمات",
            statExp: "سنوات الخبرة",
            statPatients: "مريض سعيد",
            statSatisfaction: "نسبة رضا المرضى",
            statCare: "رعاية أسنان حديثة",
            secServicesTitle: "خدماتنا المتميزة",
            secServicesDesc: "رعاية شاملة ومصممة خصيصاً لاحتياجات ابتسامتك.",
            srvGeneral: "طب الأسنان العام",
            srvGeneralDesc: "فحوصات دورية شاملة، تنظيف احترافي، ورعاية وقائية متكاملة.",
            srvOrtho: "تقويم الأسنان",
            srvOrthoDesc: "تقويم معدني وتقويم شفاف حديث لعلاج وتنسيق اصطفاف الأسنان بدقة.",
            srvImplants: "زراعة الأسنان",
            srvImplantsDesc: "غرسات تيتانيوم متطورة وتيجان زركونيا لاستعادة وظيفة وجمال الأسنان.",
            srvCosmetic: "تجميل الأسنان",
            srvCosmeticDesc: "تصميم الابتسامة، الفينير، والحشوات التجميلية لنتائج طبيعية ومشرقة.",
            srvWhitening: "تبييض الأسنان",
            srvWhiteningDesc: "جلسات تبييض آمنة بالليزر تمنحك درجات تفتيح ملحوظة بدون حساسية.",
            srvRootCanal: "علاج العصب وجذور الأسنان",
            srvRootCanalDesc: "علاج جذور متقدم باستخدام الأجهزة الآلية بدون ألم لإنقاذ الأسنان المتضررة.",
            srvPediatric: "طب أسنان الأطفال",
            srvPediatricDesc: "بيئة مريحة وودية لتقديم رعاية وقائية وعلاجية للأطفال واليافعين.",
            srvVeneers: "ابتسامة هوليوود (فينير)",
            srvVeneersDesc: "عدسات خزفية رقيقة ودقيقة لتصحيح عيوب ولون وشكل الأسنان بشكل دائم.",
            secAboutTitle: "تعرف على الطبيب",
            aboutBio: "بخبرة تتجاوز العقد في تقويم الأسنان وطب الأسنان التجميلي، يضع د. ليث راحة المريض والنتائج الدقيقة في مقدمة أولوياته على أسس الثقة والشفافية.",
            aboutBioLong: "طب الأسنان شغف متوارث. نشأت في عائلة من أطباء الأسنان المتفانين، واستلهمت من والديّ معاني الدقة والإخلاص في رعاية المريض. أقدم اليوم خبرة تخصصية متقدمة في عيادتنا وفق أعلى المعايير الطبية الدولية.",
            qual1: "أخصائي تقويم أسنان معتمد",
            qual2: "عضو نقابة أطباء الأسنان",
            qual3: "شهادة متقدمة في زراعة الأسنان",
            btnLearnMore: "المزيد عنا",
            secBaTitle: "قبل وبعد العلاج",
            secBaDesc: "نتائج واقعية تعكس دقة وتميز علاجاتنا السريرية.",
            labelBefore: "قبل",
            labelAfter: "بعد",
            secWhyTitle: "لماذا تختار عيادتنا",
            why1: "خبرة سريرية متقدمة",
            why2: "أحدث التقنيات الطبية",
            why3: "رعاية محورها المريض",
            why4: "بيئة علاجية مريحة",
            secReviewTitle: "تجارب المرضى",
            rev1: "\"أفضل تجربة علاج أسنان على الإطلاق. تعامل احترافي للغاية، بدون أي ألم، والعيادة في قمة النظافة والراحة.\"",
            rev2: "\"د. ليث قام بتعديل أسناني بالتقويم الشفاف بكفاءة عالية. بيئة العيادة مرحبة وتبعث على الاطمئنان.\"",
            rev3: "\"دقة متناهية واهتمام بالتفاصيل. تلاحظ على الفور المستوى العالي من التعقيم وحداثة الأجهزة الطبية.\"",
            secGalleryTitle: "معرض العيادة",
            btnGallery: "مشاهدة المعرض كاملاً",
            ctaTitle: "ابتسامتك تستحق أفضل رعاية طبية",
            ctaDesc: "طب أسنان حديث بنهج شخصي ودقة علمية.",
            footerTagline: "رعاية أسنان متميزة تضمن لك ابتسامة واثقة وصحية.",
            footerQuick: "روابط سريعة",
            srvHeroTitle: "خدماتنا الطبية",
            srvHeroDesc: "اكتشف مجموعة متكاملة من حلول طب الأسنان المصممة لتلبية متطلباتك بدقة، من الفحوصات والتبييض إلى جراحات التقويم والزراعة المتقدمة.",
            aboutHeroTitle: "من نحن",
            aboutHeroDesc: "تميز في طب الأسنان الحديث يستند إلى تقاليد مهنية متوارثة، ودقة تقنية، ورعاية مخلصة لصحة وراحة كل مريض.",
            galleryHeroTitle: "معرض العيادة",
            galleryHeroDesc: "جولة مصورة داخل مرافق العيادة الحديثة وأجنحة العلاج المجهزة بأحدث تقنيات التصوير والتشخيص الرقمي.",
            contactHeroTitle: "اتصل بنا",
            contactHeroDesc: "يسعدنا الرد على استفساراتكم وتحديد المواعيد ومساعدتكم في الوصول إلى العيادة بكل سهولة.",
            credentialsTitle: "المؤهلات والشهادات",
            edu1: "دكتور في جراحة وطب الأسنان (DDS)",
            edu2: "ماجستير في تقويم وتنسيق الأسنان والفكين",
            edu3: "شهادة البورد في تجميل الأسنان",
            edu4: "عضو الجمعية العالمية لتقويم الأسنان",
            philTitle: "فلسفة العيادة",
            philDesc: "ثلاثة مبادئ أساسية ترتكز عليها كافة خططنا العلاجية.",
            valIntegrity: "النزاهة والشفافية",
            valIntegrityDesc: "تشخيص علمي دقيق بدون مبالغة أو اقتراح إجراءات لا يحتاجها المريض.",
            valInnovation: "الابتكار الرقمي",
            valInnovationDesc: "اعتماد أحدث المسحات ثلاثية الأبعاد والتصوير الرقمي منخفض الإشعاع لتحقيق أفضل النتائج.",
            valCompassion: "الرعاية والاهتمام",
            valCompassionDesc: "توفير بيئة هادئة ومريحة تحد من التوتر وتضمن تجربة علاجية خالية من الألم.",
            filterAll: "الكل",
            filterClinic: "العيادة",
            filterTreatment: "العلاجات",
            filterTech: "التقنيات",
            lblAddress: "العنوان",
            valAddress: "عمّان، الأردن<br>المجمع الطبي، الطابق الرابع",
            lblPhone: "الهاتف",
            lblHours: "ساعات العمل",
            valHours: "السبت - الخميس: 9:00 ص - 7:00 م<br>الجمعة: مغلق",
            formTitle: "أرسل رسالة",
            formName: "الاسم الكامل",
            formEmail: "البريد الإلكتروني",
            formPhone: "رقم الهاتف",
            formMessage: "رسالتك",
            formSubmit: "إرسال الرسالة",
            formSuccessMsg: "شكراً لك. تم استلام رسالتك بنجاح.",
            mapText: "موقع العيادة على خرائط جوجل",
            ctaReady: "هل أنت مستعد لبدء تحسين ابتسامتك؟"
        }
    };

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            htmlTag.setAttribute('lang', currentLang);

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang] && translations[currentLang][key]) {
                    if (translations[currentLang][key].includes('<br>')) {
                        el.innerHTML = translations[currentLang][key];
                    } else {
                        el.textContent = translations[currentLang][key];
                    }
                }
            });

            // Adjust review slider position on direction toggle
            if (typeof updateSlidePosition === 'function') {
                updateSlidePosition();
            }
        });
    }

    /* --- Before/After Interactive Slider --- */
    const baSlider = document.querySelector('.ba-slider');
    const baBefore = document.querySelector('.ba-before');
    const baHandle = document.querySelector('.ba-slider-handle');
    let isSliding = false;

    if (baSlider && baBefore && baHandle) {
        const slide = (e) => {
            if (!isSliding) return;
            const rect = baSlider.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const percent = (x / rect.width) * 100;
            baBefore.style.width = `${percent}%`;
            baHandle.style.left = `${percent}%`;
        };

        baSlider.addEventListener('mousedown', () => isSliding = true);
        baSlider.addEventListener('touchstart', () => isSliding = true);
        window.addEventListener('mouseup', () => isSliding = false);
        window.addEventListener('touchend', () => isSliding = false);
        window.addEventListener('mousemove', slide);
        window.addEventListener('touchmove', slide);
    }

    /* --- Reviews Carousel Slider --- */
    const track = document.querySelector('.review-track');
    const slides = document.querySelectorAll('.review-slide');
    const nextBtn = document.querySelector('.next-review');
    const prevBtn = document.querySelector('.prev-review');
    let currentSlide = 0;

    function updateSlidePosition() {
        if (!track || slides.length === 0) return;
        const isRtl = htmlTag.getAttribute('dir') === 'rtl';
        const direction = isRtl ? 1 : -1;
        track.style.transform = `translateX(${currentSlide * 100 * direction}%)`;
    }

    if (track && slides.length > 0) {
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlidePosition();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlidePosition();
            });
        }
    }

    /* --- Gallery Filtering --- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.filter-item');

    if (filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });
    }

    /* --- Lightbox Modal --- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryTriggers = document.querySelectorAll('.lightbox-trigger');

    if (lightbox && lightboxImg) {
        galleryTriggers.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) closeLightbox();
        });
    }

    /* --- Mock Contact Form --- */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formSuccess.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 6000);
        });
    }
});