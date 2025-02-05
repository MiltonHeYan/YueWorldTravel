class I18n {
    constructor() {
        console.log('I18n initialized');
        this.languages = ['zh', 'en', 'ja', 'ko'];
        this.currentLang = this.getBrowserLanguage();
        this.translations = {
            zh: {
                logo: "悦界行旅",
                nav: {
                    home: "首页",
                    services: "我们的服务",
                    about: "关于我们"
                },
                hero: {
                    title: "专注商业考察，链接全球机遇",
                    subtitle: "一家专注于商业考察旅行的专业旅行社",
                    features: {
                        inspection: {
                            title: "专业考察",
                            desc: "定制化商业考察路线"
                        },
                        resources: {
                            title: "资源对接",
                            desc: "全球优质商业资源"
                        },
                        communication: {
                            title: "深度交流",
                            desc: "行业专家面对面"
                        }
                    },
                    cta: "立即预订"
                },
                services: {
                    hotel: {
                        title: "酒店服务",
                        subtitle: "全球凯悦酒店预订",
                        desc: "我们与全球凯悦酒店集团紧密合作，为您提供凯悦旗下各品牌酒店的预订服务。无论是商务出行还是休闲度假，我们都能为您找到最合适的住宿选择，享受凯悦酒店的高品质服务和舒适体验。"
                    },
                    custom: {
                        title: "定制服务",
                        subtitle: "境内定制游服务",
                        desc: "我们的私人高端定制旅游服务专注于满足您的个性化需求。我们的专业团队将根据您的兴趣和预算，为您量身定制独一无二的旅行计划。"
                    },
                    entry: {
                        title: "入境服务",
                        subtitle: "入境定制游服务",
                        desc: "我们深知入境游的复杂性，因此提供全面的入境游服务，包括签证咨询、行程规划、当地交通安排等。"
                    }
                },
                footer: {
                    copyright: "© 2024 悦界行旅 版权所有"
                }
            },
            en: {
                logo: "YUEWorld",
                nav: {
                    home: "Home",
                    services: "Services",
                    about: "About Us"
                },
                hero: {
                    title: "Focus on Business Inspection, Connect Global Opportunities",
                    subtitle: "A Professional Travel Agency Specializing in Business Inspection Tours",
                    features: {
                        inspection: {
                            title: "Professional Inspection",
                            desc: "Customized Business Routes"
                        },
                        resources: {
                            title: "Resource Connection",
                            desc: "Global Premium Resources"
                        },
                        communication: {
                            title: "In-depth Exchange",
                            desc: "Meet Industry Experts"
                        }
                    },
                    cta: "Book Now"
                },
                services: {
                    hotel: {
                        title: "Hotel Services",
                        subtitle: "Global Hyatt Hotel Booking",
                        desc: "We work closely with Hyatt Hotels Corporation worldwide to provide booking services for all Hyatt brands."
                    },
                    custom: {
                        title: "Custom Services",
                        subtitle: "Domestic Custom Tour Services",
                        desc: "Our private high-end custom travel service focuses on meeting your personalized needs."
                    },
                    entry: {
                        title: "Entry Services",
                        subtitle: "Inbound Custom Tour Services",
                        desc: "We understand the complexity of inbound travel and provide comprehensive services."
                    }
                },
                footer: {
                    copyright: "© 2024 Yueworld Travel All Rights Reserved"
                }
            },
            ja: {
                logo: "YUEWorld",
                nav: {
                    home: "ホーム",
                    services: "サービス",
                    about: "会社概要"
                },
                hero: {
                    title: "ビジネス視察に特化し、グローバルな機会をつなぐ",
                    subtitle: "ビジネス視察旅行の専門旅行会社",
                    features: {
                        inspection: {
                            title: "専門視察",
                            desc: "カスタマイズされた視察ルート"
                        },
                        resources: {
                            title: "リソース接続",
                            desc: "グローバルな優良リソース"
                        },
                        communication: {
                            title: "深い交流",
                            desc: "業界専門家との対面"
                        }
                    },
                    cta: "今すぐ予約"
                },
                services: {
                    hotel: {
                        title: "ホテルサービス",
                        subtitle: "ハイアットホテル世界予約",
                        desc: "世界中のハイアットホテルグループと提携し、最高品質のサービスを提供します。"
                    },
                    custom: {
                        title: "カスタムサービス",
                        subtitle: "国内カスタムツアー",
                        desc: "お客様のニーズに合わせた完全オーダーメイドの旅行プランをご提供します。"
                    },
                    entry: {
                        title: "入国サービス",
                        subtitle: "インバウンドツアー",
                        desc: "ビザ申請から現地案内まで、包括的なサービスを提供します。"
                    }
                },
                footer: {
                    copyright: "© 2024 悦界旅行 全著作権所有"
                }
            },
            ko: {
                logo: "YUEWorld",
                nav: {
                    home: "홈",
                    services: "서비스",
                    about: "회사 소개"
                },
                hero: {
                    title: "비즈니스 시찰에 집중하고, 글로벌 기회를 연결합니다",
                    subtitle: "비즈니스 시찰 여행 전문 여행사",
                    features: {
                        inspection: {
                            title: "전문 시찰",
                            desc: "맞춤형 비즈니스 루트"
                        },
                        resources: {
                            title: "자원 연결",
                            desc: "글로벌 프리미엄 자원"
                        },
                        communication: {
                            title: "심층 교류",
                            desc: "업계 전문가와의 만남"
                        }
                    },
                    cta: "지금 예약"
                },
                services: {
                    hotel: {
                        title: "호텔 서비스",
                        subtitle: "글로벌 하얏트 호텔 예약",
                        desc: "전 세계 하얏트 호텔 그룹과 협력하여 최고의 서비스를 제공합니다."
                    },
                    custom: {
                        title: "맞춤 서비스",
                        subtitle: "국내 맞춤 투어",
                        desc: "고객님의 요구에 맞는 완벽한 맞춤형 여행 계획을 제공합니다."
                    },
                    entry: {
                        title: "입국 서비스",
                        subtitle: "인바운드 투어",
                        desc: "비자 신청부터 현지 안내까지 포괄적인 서비스를 제공합니다."
                    }
                },
                footer: {
                    copyright: "© 2024 유계여행 모든 권리 보유"
                }
            }
        };
        this.init();
    }

    getBrowserLanguage() {
        const savedLang = localStorage.getItem('language');
        if (savedLang) return savedLang;

        const browserLang = navigator.language.toLowerCase();
        
        if (browserLang.startsWith('zh')) return 'zh';
        if (browserLang.startsWith('ja')) return 'ja';
        if (browserLang.startsWith('ko')) return 'ko';
        if (browserLang.startsWith('en')) return 'en';
        
        return 'en';
    }

    init() {
        this.updateLanguage(this.currentLang);
        
        // 添加点击事件监听
        const langBtn = document.querySelector('.current-lang');
        const langDropdown = document.querySelector('.lang-dropdown');
        
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            langDropdown.classList.toggle('show');
            langBtn.classList.toggle('active');
        });

        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
            langBtn.classList.remove('active');
        });

        // 点击选项时切换语言
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                this.updateLanguage(option.getAttribute('data-lang'));
                langDropdown.classList.remove('show');
                langBtn.classList.remove('active');
            });
        });
    }

    updateLanguage(lang) {
        console.log('Switching to language:', lang);
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // 更新当前语言显示
        const currentLangText = {
            'zh': '中文',
            'en': 'English',
            'ja': '日本語',
            'ko': '한국어'
        }[lang];
        
        document.querySelector('.current-lang .lang-text').textContent = currentLangText;

        // 更新页面内容
        this.updateContent();
    }

    updateContent() {
        console.log('Updating content for language:', this.currentLang);
        const translate = (key) => {
            const keys = key.split('.');
            let value = this.translations[this.currentLang];
            for (const k of keys) {
                value = value[k];
            }
            return value;
        };

        // 更新 logo
        document.querySelector('.logo').textContent = translate('logo');

        // 更新导航
        document.querySelector('a[href="#home"]').textContent = translate('nav.home');
        document.querySelector('a[href="#services"]').textContent = translate('nav.services');
        document.querySelector('a[href="#about"]').textContent = translate('nav.about');

        // 更新英雄区域
        document.querySelector('.hero h1').textContent = translate('hero.title');
        document.querySelector('.hero > p').textContent = translate('hero.subtitle');
        document.querySelector('.cta-button').textContent = translate('hero.cta');
        
        // 更新特性
        const features = document.querySelectorAll('.feature');
        ['inspection', 'resources', 'communication'].forEach((feature, index) => {
            features[index].querySelector('h3').textContent = translate(`hero.features.${feature}.title`);
            features[index].querySelector('p').textContent = translate(`hero.features.${feature}.desc`);
        });

        // 更新服务
        const services = document.querySelectorAll('.service-block');
        ['hotel', 'custom', 'entry'].forEach((service, index) => {
            services[index].querySelector('h2').textContent = translate(`services.${service}.title`);
            services[index].querySelector('.service-title').textContent = translate(`services.${service}.subtitle`);
            services[index].querySelector('p').textContent = translate(`services.${service}.desc`);
        });

        // 更新页脚
        document.querySelector('footer p').textContent = translate('footer.copyright');
    }
} 