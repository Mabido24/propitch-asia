const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "i18n");

const en = {
  meta: {
    title: "ProPitch Asia — Connecting elite football with Southeast Asia",
    description:
      "ProPitch Asia connects elite European football with Southeast Asia through advisory, international tours, ventures and premium experiences — facilities, pathways and partnerships built with the region.",
    ogDescription:
      "Advisory, international operations, ventures and experiences — football development infrastructure for Southeast Asia."
  },
  lang: {
    label: "Language",
    names: {
      en: "English",
      fr: "Français",
      de: "Deutsch",
      it: "Italiano",
      es: "Español",
      pt: "Português",
      th: "ไทย",
      ru: "Русский",
      zh: "中文",
      ar: "العربية"
    }
  },
  nav: {
    brand: "PROPITCH ASIA",
    kickoff: "0′ KICKOFF",
    advisory: "25′ ADVISORY",
    international: "50′ INT'L",
    ventures: "65′ VENTURES",
    experiences: "80′ EXPERIENCES",
    fulltime: "90′ FULL TIME"
  },
  hero: {
    eyebrow: "CONFIDENTIAL COMPANY OVERVIEW",
    titleHtml: "CONNECTING<br>ELITE FOOTBALL<br>WITH <em>SOUTHEAST ASIA.</em>",
    badge: "ELITE FOOTBALL. REGIONAL OPPORTUNITY.",
    scroll: "SCROLL FOR KICKOFF"
  },
  whyAsia: {
    eyebrow: "WHY SOUTHEAST ASIA",
    title: "Building the future of football in Asia.",
    p1:
      "Southeast Asia already over-indexes on European football fandom — it just watches from the outside. ProPitch Asia exists to turn that audience into infrastructure: facilities, pathways, partnerships and programming built with the region rather than sold into it.",
    p2:
      "We work across four divisions — advisory, international operations, ventures and experiences — so a club, federation or investor can enter the region through whichever door fits their ambitions.",
    stat1Lbl: "Football fans across Thailand, Malaysia, Indonesia, the Philippines, Vietnam & Singapore",
    stat1Src: "Nielsen Fan Insights",
    stat2Lbl: "Cumulative Premier League TV audience across the region, 2021/22 season",
    stat2Src: "Nielsen",
    stat3Lbl: "Every Premier League match broadcast live across six SEA markets",
    stat3Src: "Nielsen, 2022",
    stat4Lbl: "Combined population across ASEAN — young, mobile-first, football-literate",
    stat4Src: "UN / ASEAN Estimates"
  },
  advisory: {
    eyebrow: "PROPITCH ADVISORY",
    title: "Facility & football-development consulting",
    intro:
      "From world-class pitches to world-class partnerships — we advise clubs, federations and investors on the infrastructure and pathways elite football is built on.",
    tag1: "// MASTERPLANNING",
    h1: "Pitch & training-facility design",
    p1: "Surface specification, drainage, floodlighting and technical-area layout for training grounds and academies.",
    tag2: "// PATHWAYS",
    h2: "Academy curriculum & coach education",
    p2: "Age-group curricula, coach licensing pathways and periodisation frameworks built for local federations.",
    tag3: "// COMPLIANCE",
    h3: "Licensing & federation compliance",
    p3: "Club licensing, youth-category regulation and AFC/regional-body compliance support.",
    tag4: "// TALENT ID",
    h4: "Scouting network build-out",
    p4: "Regional talent identification systems, trial structures and data pipelines for recruitment teams.",
    tag5: "// PARTNERSHIPS",
    h5: "Partnership & Sponsorship Consultants",
    p5:
      "Structuring club, kit and title-sponsor partnerships, and connecting regional brands with the right football properties across the region."
  },
  international: {
    eyebrow: "PROPITCH INTERNATIONAL",
    title: "Club tours, camps & exhibition matches",
    intro: "Where world football meets Asia — we plan and deliver the on-the-ground programme, market by market.",
    onTour: "ON TOUR",
    tourKicker: "TOUR",
    tourTitle: "Pre-season club tours",
    tourDesc: "Multi-city itineraries with training sessions open to local academies.",
    tourMeta: "3–5 CITIES · 7–10 DAYS",
    campKicker: "CAMP",
    campTitle: "Elite youth camps",
    campDesc: "Federation-endorsed camps run to the visiting club's own coaching curriculum.",
    campMeta: "5 MARKETS · YEAR-ROUND",
    exhbKicker: "EXHB",
    exhbTitle: "Exhibition & legends matches",
    exhbDesc: "Stadium partnerships, matchday operations and broadcast coordination.",
    exhbMeta: "SINGLE-CITY · TICKETED",
    schlKicker: "SCHL",
    schlTitle: "School & grassroots outreach",
    schlDesc: "Community sessions run alongside every tour, camp and exhibition leg.",
    schlMeta: "ONGOING"
  },
  ventures: {
    eyebrow: "PROPITCH VENTURES",
    title: "Projects, partnerships & investments",
    intro:
      "Football development without borders — the deal-flow side of the business, from facility joint ventures to format IP.",
    v1Title: "Training-ground joint ventures",
    v1Desc: "Facility development with local landholders & federations",
    v1Status: "STRUCTURING",
    v2Title: "Broadcast & media-rights structuring",
    v2Desc: "Regional rights packaging for club & format content",
    v2Status: "ACTIVE",
    v3Title: "Minority stakes in regional clubs & academies",
    v3Desc: "Long-term capital alongside operating partners",
    v3Status: "EVALUATING",
    v4Title: "Format IP — ASEAN Football Star Hunt",
    v4Desc: "Talent-search television format, see Experiences below",
    v4Status: "ACTIVE"
  },
  experiences: {
    eyebrow: "PROPITCH EXPERIENCES",
    title: "Events & premium football programmes",
    intro:
      "Where the audience meets the game — matchday hospitality, festivals and our flagship regional format.",
    flagshipTag: "FLAGSHIP FORMAT",
    conceptEyebrow: "CONFIDENTIAL CONCEPT · IN DEVELOPMENT",
    starHuntTitleHtml: "ASEAN Football<br>Star Hunt",
    starHuntDesc:
      "One club. Five nations. A live search for Southeast Asia's next professional footballer — ending on the biggest stage the region has to offer.",
    chipThailand: "THAILAND",
    chipMalaysia: "MALAYSIA",
    chipIndonesia: "INDONESIA",
    chipPhilippines: "PHILIPPINES",
    chipVietnam: "VIETNAM",
    chipFinal: "FINAL · SINGAPORE",
    prog1Title: "Premium matchday hospitality",
    prog1Desc: "Curated matchday programmes for partners and sponsors across the region's biggest fixtures.",
    prog2Title: "Grassroots festivals",
    prog2Desc: "Multi-club community festivals run alongside tours, camps and academy partnerships.",
    prog3Title: "Coach & scout exchange",
    prog3Desc: "Short-term placements connecting regional coaching staff with partner academies in Europe."
  },
  contact: {
    eyebrow: "90′ · FULL TIME",
    titleHtml: "Let's take<br>the pitch.",
    intro:
      "Whether it's a facility masterplan, a tour itinerary, a partnership or the next season of Star Hunt — tell us which division fits, and we'll take it from there.",
    ctaEmail: "EMAIL HELLO@PROPITCH.ASIA",
    ctaBack: "BACK TO KICKOFF",
    faqEyebrow: "FREQUENTLY ASKED",
    faq1Q: "What is ProPitch Asia?",
    faq1A:
      "A Bangkok-based group connecting elite European football with Southeast Asia — facilities, pathways, partnerships and programming built with the region, not sold into it.",
    faq2Q: "What are the four divisions?",
    faq2A:
      "Advisory (facility and development consulting), International (tours, camps, exhibition matches), Ventures (partnerships and investments), and Experiences (events and premium programmes).",
    faq3Q: "Who is it for?",
    faq3A:
      "Clubs, federations, investors and brands seeking a structured entry into Southeast Asian football across advisory, operations, deal-flow or fan-facing programming.",
    faq4Q: "How do we get in touch?",
    faq4Html:
      'Email <a href="mailto:hello@propitch.asia">hello@propitch.asia</a> and name the division that matches your brief.',
    companyEyebrow: "PROPITCH ASIA CO., LTD.",
    phone: "+66 [ office line — update before launch ]",
    linkedin: "[ LinkedIn — add URL when live ]",
    office: "Registered office, Bangkok, Thailand"
  },
  footer: {
    motto: "FOOTBALL DEVELOPMENT WITHOUT BORDERS.",
    divisions: "ADVISORY · INTERNATIONAL · VENTURES · EXPERIENCES · © PROPITCH ASIA CO., LTD."
  },
  schemaJson: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://propitch-asia.pages.dev/#organization",
        name: "ProPitch Asia Co., Ltd.",
        url: "https://propitch-asia.pages.dev/",
        email: "hello@propitch.asia",
        description:
          "ProPitch Asia connects elite football with Southeast Asia through advisory, international operations, ventures and premium experiences.",
        areaServed: ["Thailand", "Southeast Asia"],
        knowsAbout: [
          "Football development",
          "Sports facilities",
          "Club tours",
          "Football partnerships",
          "Southeast Asia"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://propitch-asia.pages.dev/#website",
        url: "https://propitch-asia.pages.dev/",
        name: "ProPitch Asia",
        publisher: { "@id": "https://propitch-asia.pages.dev/#organization" },
        inLanguage: "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://propitch-asia.pages.dev/#webpage",
        url: "https://propitch-asia.pages.dev/",
        name: "ProPitch Asia — Connecting elite football with Southeast Asia",
        isPartOf: { "@id": "https://propitch-asia.pages.dev/#website" },
        about: { "@id": "https://propitch-asia.pages.dev/#organization" },
        inLanguage: "en",
        description:
          "Company overview: advisory, international, ventures and experiences divisions for football in Southeast Asia."
      },
      {
        "@type": "FAQPage",
        "@id": "https://propitch-asia.pages.dev/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is ProPitch Asia?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "ProPitch Asia is a Bangkok-based group that connects elite European football with Southeast Asia — turning regional fandom into infrastructure: facilities, pathways, partnerships and programming built with the region."
            }
          },
          {
            "@type": "Question",
            name: "What divisions does ProPitch Asia operate?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Four divisions: ProPitch Advisory (facility and football-development consulting), ProPitch International (club tours, camps and exhibition matches), ProPitch Ventures (projects, partnerships and investments), and ProPitch Experiences (events and premium football programmes)."
            }
          },
          {
            "@type": "Question",
            name: "Where does ProPitch Asia work?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The company is focused on Southeast Asia, with operations and partnerships across the region and a registered office in Bangkok, Thailand."
            }
          },
          {
            "@type": "Question",
            name: "How can clubs or investors contact ProPitch Asia?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Email hello@propitch.asia with the division that fits your goals — advisory, international, ventures or experiences — and the team will follow up."
            }
          }
        ]
      }
    ]
  }
};

function deepMerge(base, patch) {
  const out = { ...base };
  for (const k of Object.keys(patch)) {
    if (patch[k] && typeof patch[k] === "object" && !Array.isArray(patch[k])) {
      out[k] = deepMerge(base[k] || {}, patch[k]);
    } else {
      out[k] = patch[k];
    }
  }
  return out;
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

const locales = {
  fr: {
    meta: {
      title: "ProPitch Asia — Relier le football d'élite à l'Asie du Sud-Est",
      description:
        "ProPitch Asia relie le football européen d'élite à l'Asie du Sud-Est via le conseil, les tournées internationales, les ventures et les expériences premium — infrastructures, parcours et partenariats construits avec la région.",
      ogDescription:
        "Conseil, opérations internationales, ventures et expériences — infrastructure de développement footballistique pour l'Asie du Sud-Est."
    },
    lang: { label: "Langue" },
    nav: {
      kickoff: "0′ COUP D'ENVOI",
      advisory: "25′ CONSEIL",
      international: "50′ INT'L",
      ventures: "65′ VENTURES",
      experiences: "80′ EXPÉRIENCES",
      fulltime: "90′ FIN DE MATCH"
    },
    hero: {
      eyebrow: "APERÇU CONFIDENTIEL DE L'ENTREPRISE",
      titleHtml: "RELIER<br>LE FOOTBALL D'ÉLITE<br>À L'<em>ASIE DU SUD-EST.</em>",
      badge: "FOOTBALL D'ÉLITE. OPPORTUNITÉ RÉGIONALE.",
      scroll: "DÉFILER POUR LE COUP D'ENVOI"
    },
    whyAsia: {
      eyebrow: "POURQUOI L'ASIE DU SUD-EST",
      title: "Construire l'avenir du football en Asie.",
      p1:
        "L'Asie du Sud-Est surperforme déjà en passion pour le football européen — mais regarde depuis l'extérieur. ProPitch Asia transforme cette audience en infrastructure : installations, parcours, partenariats et programmes construits avec la région, pas vendus à la région.",
      p2:
        "Nous opérons via quatre divisions — conseil, international, ventures et expériences — pour que clubs, fédérations ou investisseurs entrent par la porte qui correspond à leurs ambitions.",
      stat1Lbl:
        "Fans de football en Thaïlande, Malaisie, Indonésie, Philippines, Vietnam et Singapour",
      stat2Lbl: "Audience TV cumulée de Premier League dans la région, saison 2021/22",
      stat3Lbl: "Chaque match de Premier League diffusé en direct sur six marchés d'Asie du Sud-Est",
      stat4Lbl: "Population combinée de l'ASEAN — jeune, mobile-first, football-littérate"
    },
    advisory: {
      eyebrow: "PROPITCH ADVISORY",
      title: "Conseil en infrastructures & développement footballistique",
      intro:
        "Des terrains de classe mondiale aux partenariats de classe mondiale — nous conseillons clubs, fédérations et investisseurs sur les infrastructures et parcours du football d'élite.",
      tag1: "// MASTERPLAN",
      h1: "Conception de terrains & centres d'entraînement",
      p1: "Spécifications de surface, drainage, éclairage et aménagement des zones techniques pour centres et académies.",
      tag2: "// PARCOURS",
      h2: "Curriculum académique & formation des entraîneurs",
      p2: "Curricula par âge, filières de licence et cadres de périodisation adaptés aux fédérations locales.",
      tag3: "// CONFORMITÉ",
      h3: "Licences & conformité fédérale",
      p3: "Licences de club, catégories jeunes et conformité AFC/régionale.",
      tag4: "// TALENTS",
      h4: "Déploiement de réseaux de scouting",
      p4: "Identification régionale, structures d'essais et pipelines data pour le recrutement.",
      tag5: "// PARTENARIATS",
      h5: "Conseil partenariats & sponsoring",
      p5:
        "Structuration des partenariats club, équipementier et naming, et mise en relation des marques régionales avec les bonnes propriétés football."
    },
    international: {
      eyebrow: "PROPITCH INTERNATIONAL",
      title: "Tournées de clubs, stages & matchs d'exhibition",
      intro:
        "Où le football mondial rencontre l'Asie — nous planifions et livrons le programme terrain, marché par marché.",
      onTour: "EN TOURNÉE",
      tourTitle: "Tournées de pré-saison",
      tourDesc: "Itinéraires multi-villes avec séances ouvertes aux académies locales.",
      campTitle: "Stages jeunes d'élite",
      campDesc: "Stages validés par les fédérations selon le curriculum du club visiteur.",
      exhbTitle: "Matchs d'exhibition & légendes",
      exhbDesc: "Partenariats stades, opérations matchday et coordination broadcast.",
      schlTitle: "Outreach écoles & grassroots",
      schlDesc: "Sessions communautaires à chaque étape de tournée, stage ou exhibition."
    },
    ventures: {
      eyebrow: "PROPITCH VENTURES",
      title: "Projets, partenariats & investissements",
      intro:
        "Le développement footballistique sans frontières — le volet deal-flow, des co-entreprises d'installations à l'IP de formats.",
      v1Title: "Co-entreprises de centres d'entraînement",
      v1Desc: "Développement d'installations avec propriétaires fonciers & fédérations",
      v1Status: "STRUCTURATION",
      v2Title: "Structuration droits broadcast & médias",
      v2Desc: "Packaging régional des droits club & contenus de format",
      v3Title: "Participations minoritaires clubs & académies",
      v3Desc: "Capital long terme aux côtés d'opérateurs locaux",
      v4Title: "IP de format — ASEAN Football Star Hunt",
      v4Desc: "Format TV de détection de talents, voir Expériences"
    },
    experiences: {
      eyebrow: "PROPITCH EXPERIENCES",
      title: "Événements & programmes football premium",
      intro:
        "Où le public rencontre le jeu — hospitalité matchday, festivals et notre format phare régional.",
      flagshipTag: "FORMAT PHARE",
      conceptEyebrow: "CONCEPT CONFIDENTIEL · EN DÉVELOPPEMENT",
      starHuntTitleHtml: "ASEAN Football<br>Star Hunt",
      starHuntDesc:
        "Un club. Cinq nations. Une recherche en direct du prochain footballeur pro d'Asie du Sud-Est — sur la plus grande scène de la région.",
      chipFinal: "FINALE · SINGAPOUR",
      prog1Title: "Hospitalité matchday premium",
      prog1Desc: "Programmes matchday pour partenaires et sponsors sur les plus grandes affiches régionales.",
      prog2Title: "Festivals grassroots",
      prog2Desc: "Festivals multi-clubs en marge des tournées, stages et partenariats académiques.",
      prog3Title: "Échange entraîneurs & scouts",
      prog3Desc: "Placements courts reliant staffs régionaux et académies partenaires en Europe."
    },
    contact: {
      eyebrow: "90′ · FIN DE MATCH",
      titleHtml: "Entrons<br>sur le terrain.",
      intro:
        "Masterplan d'installation, itinéraire de tournée, partenariat ou prochaine saison Star Hunt — indiquez la division adaptée, nous prenons le relais.",
      ctaEmail: "ÉCRIRE HELLO@PROPITCH.ASIA",
      ctaBack: "RETOUR AU COUP D'ENVOI",
      faqEyebrow: "QUESTIONS FRÉQUENTES",
      faq1Q: "Qu'est-ce que ProPitch Asia ?",
      faq1A:
        "Un groupe basé à Bangkok qui relie le football européen d'élite à l'Asie du Sud-Est — infrastructures, parcours, partenariats et programmes construits avec la région.",
      faq2Q: "Quelles sont les quatre divisions ?",
      faq2A:
        "Advisory (conseil installations & développement), International (tournées, stages, exhibitions), Ventures (partenariats & investissements), Experiences (événements & programmes premium).",
      faq3Q: "Pour qui ?",
      faq3A:
        "Clubs, fédérations, investisseurs et marques cherchant une entrée structurée dans le football d'Asie du Sud-Est.",
      faq4Q: "Comment nous contacter ?",
      faq4Html:
        'Écrivez à <a href="mailto:hello@propitch.asia">hello@propitch.asia</a> en précisant la division concernée.',
      companyEyebrow: "PROPITCH ASIA CO., LTD.",
      office: "Siège social enregistré, Bangkok, Thaïlande"
    },
    footer: {
      motto: "LE DÉVELOPPEMENT FOOTBALLISTIQUE SANS FRONTIÈRES.",
      divisions: "ADVISORY · INTERNATIONAL · VENTURES · EXPERIENCES · © PROPITCH ASIA CO., LTD."
    }
  },
  de: {
    meta: {
      title: "ProPitch Asia — Elitefußball mit Südostasien verbinden",
      description:
        "ProPitch Asia verbindet europäischen Elitefußball mit Südostasien durch Advisory, internationale Tours, Ventures und Premium-Experiences — Infrastruktur, Wege und Partnerschaften, mit der Region gebaut.",
      ogDescription:
        "Advisory, internationale Operationen, Ventures und Experiences — Fußballentwicklungs-Infrastruktur für Südostasien."
    },
    lang: { label: "Sprache" },
    nav: {
      kickoff: "0′ ANSTOß",
      advisory: "25′ ADVISORY",
      international: "50′ INT'L",
      ventures: "65′ VENTURES",
      experiences: "80′ EXPERIENCES",
      fulltime: "90′ ENDE"
    },
    hero: {
      eyebrow: "VERTRAULICHER UNTERNEHMENSÜBERBLICK",
      titleHtml: "ELITEFUSSBALL<br>MIT <em>SÜDOSTASIEN</em><br>VERBINDEN.",
      badge: "ELITEFUSSBALL. REGIONALE CHANCE.",
      scroll: "SCROLLEN FÜR ANSTOß"
    },
    whyAsia: {
      eyebrow: "WARUM SÜDOSTASIEN",
      title: "Die Zukunft des Fußballs in Asien gestalten.",
      p1:
        "Südostasien übertrifft Europa beim Fan-Interesse — schaut aber von außen zu. ProPitch Asia macht aus dieser Audience Infrastruktur: Anlagen, Wege, Partnerschaften und Programme mit der Region, nicht in die Region verkauft.",
      p2:
        "Vier Divisionen — Advisory, International, Ventures, Experiences — damit Clubs, Verbände oder Investoren durch die passende Tür einsteigen."
    },
    contact: {
      eyebrow: "90′ · ENDE",
      titleHtml: "Auf<br>den Platz.",
      ctaEmail: "E-MAIL HELLO@PROPITCH.ASIA",
      ctaBack: "ZURÜCK ZUM ANSTOß",
      faqEyebrow: "HÄUFIGE FRAGEN",
      office: "Eingetragener Sitz, Bangkok, Thailand"
    },
    footer: { motto: "FUSSBALLENTWICKLUNG OHNE GRENZEN." }
  },
  it: {
    meta: {
      title: "ProPitch Asia — Collegare il calcio d'élite al Sud-est asiatico",
      description:
        "ProPitch Asia collega il calcio europeo d'élite al Sud-est asiatico con advisory, tour internazionali, ventures ed esperienze premium — infrastrutture, percorsi e partnership costruiti con la regione.",
      ogDescription:
        "Advisory, operazioni internazionali, ventures ed experiences — infrastruttura di sviluppo calcistico per il Sud-est asiatico."
    },
    lang: { label: "Lingua" },
    nav: {
      kickoff: "0′ KICKOFF",
      advisory: "25′ ADVISORY",
      fulltime: "90′ FINE"
    },
    hero: {
      eyebrow: "PANORAMICA AZIENDALE RISERVATA",
      titleHtml: "COLLEGARE<br>IL CALCIO D'ÉLITE<br>AL <em>SUD-EST ASIATICO.</em>",
      badge: "CALCIO D'ÉLITE. OPPORTUNITÀ REGIONALE.",
      scroll: "SCORRI PER IL KICKOFF"
    },
    whyAsia: {
      eyebrow: "PERCHÉ IL SUD-EST ASIATICO",
      title: "Costruire il futuro del calcio in Asia.",
      p1:
        "Il Sud-est asiatico è già sopra la media per passione del calcio europeo — ma guarda da fuori. ProPitch Asia trasforma quel pubblico in infrastruttura costruita con la regione.",
      p2:
        "Quattro divisioni — advisory, internazionale, ventures ed experiences — per l'ingresso di club, federazioni o investitori."
    },
    contact: {
      faqEyebrow: "DOMANDE FREQUENTI",
      office: "Sede legale, Bangkok, Thailandia"
    },
    footer: { motto: "SVILUPPO CALCISTICO SENZA FRONTIERE." }
  },
  es: {
    meta: {
      title: "ProPitch Asia — Conectar el fútbol de élite con el sudeste asiático",
      description:
        "ProPitch Asia conecta el fútbol europeo de élite con el sudeste asiático mediante advisory, giras internacionales, ventures y experiencias premium — instalaciones, rutas y alianzas construidas con la región.",
      ogDescription:
        "Advisory, operaciones internacionales, ventures y experiences — infraestructura de desarrollo futbolístico para el sudeste asiático."
    },
    lang: { label: "Idioma" },
    nav: { kickoff: "0′ SAQUE", fulltime: "90′ FINAL" },
    hero: {
      eyebrow: "RESUMEN CONFIDENCIAL DE LA EMPRESA",
      titleHtml: "CONECTAR<br>EL FÚTBOL DE ÉLITE<br>CON EL <em>SUDESTE ASIÁTICO.</em>",
      badge: "FÚTBOL DE ÉLITE. OPORTUNIDAD REGIONAL.",
      scroll: "DESPLÁZATE PARA EL SAQUE"
    },
    whyAsia: {
      eyebrow: "POR QUÉ EL SUDESTE ASIÁTICO",
      title: "Construir el futuro del fútbol en Asia.",
      p1:
        "El sudeste asiático ya supera índices de afición al fútbol europeo — pero mira desde fuera. ProPitch Asia convierte esa audiencia en infraestructura hecha con la región.",
      p2: "Cuatro divisiones para que clubes, federaciones o inversores entren por la puerta que encaje."
    },
    contact: { faqEyebrow: "PREGUNTAS FRECUENTES", office: "Oficina registrada, Bangkok, Tailandia" },
    footer: { motto: "DESARROLLO FUTBOLÍSTICO SIN FRONTERAS." }
  },
  pt: {
    meta: {
      title: "ProPitch Asia — Ligando o futebol de elite ao Sudeste Asiático",
      description:
        "A ProPitch Asia liga o futebol europeu de elite ao Sudeste Asiático através de advisory, tours internacionais, ventures e experiências premium — infraestrutura, percursos e parcerias construídos com a região.",
      ogDescription:
        "Advisory, operações internacionais, ventures e experiences — infraestrutura de desenvolvimento do futebol para o Sudeste Asiático."
    },
    lang: { label: "Idioma" },
    nav: { kickoff: "0′ KICKOFF", fulltime: "90′ FIM" },
    hero: {
      eyebrow: "VISÃO CONFIDENCIAL DA EMPRESA",
      titleHtml: "LIGAR<br>O FUTEBOL DE ELITE<br>AO <em>SUDESTE ASIÁTICO.</em>",
      badge: "FUTEBOL DE ELITE. OPORTUNIDADE REGIONAL.",
      scroll: "ROLE PARA O KICKOFF"
    },
    whyAsia: {
      eyebrow: "PORQUÊ O SUDESTE ASIÁTICO",
      title: "Construir o futuro do futebol na Ásia.",
      p1:
        "O Sudeste Asiático já supera em paixão pelo futebol europeu — mas assiste de fora. A ProPitch Asia transforma esse público em infraestrutura feita com a região.",
      p2: "Quatro divisões para clubes, federações ou investidores entrarem pela porta certa."
    },
    contact: { faqEyebrow: "PERGUNTAS FREQUENTES", office: "Sede registada, Bangkok, Tailândia" },
    footer: { motto: "DESENVOLVIMENTO DO FUTEBOL SEM FRONTEIRAS." }
  },
  th: {
    meta: {
      title: "ProPitch Asia — เชื่อมฟุตบอลระดับเอลิตกับเอเชียตะวันออกเฉียงใต้",
      description:
        "ProPitch Asia เชื่อมฟุตบอลยุโรประดับเอลิตกับเอเชียตะวันออกเฉียงใต้ผ่านที่ปรึกษา ทัวร์นานาชาติ เวนเจอร์ และประสบการณ์พรีเมียม — สิ่งอำนวยความสะดวก เส้นทาง และพันธมิตรที่สร้างร่วมกับภูมิภาค",
      ogDescription:
        "ที่ปรึกษา ปฏิบัติการนานาชาติ เวนเจอร์ และประสบการณ์ — โครงสร้างพื้นฐานพัฒนาฟุตบอลสำหรับเอเชียตะวันออกเฉียงใต้"
    },
    lang: { label: "ภาษา" },
    nav: {
      kickoff: "0′ เริ่มเกม",
      advisory: "25′ ที่ปรึกษา",
      international: "50′ นานาชาติ",
      ventures: "65′ เวนเจอร์",
      experiences: "80′ ประสบการณ์",
      fulltime: "90′ จบเกม"
    },
    hero: {
      eyebrow: "ภาพรวมบริษัท (ข้อมูลลับ)",
      titleHtml: "เชื่อม<br>ฟุตบอลเอลิต<br>กับ <em>เอเชียตะวันออกเฉียงใต้</em>",
      badge: "ฟุตบอลเอลิต โอกาสระดับภูมิภาค",
      scroll: "เลื่อนเพื่อเริ่มเกม"
    },
    whyAsia: {
      eyebrow: "ทำไมเอเชียตะวันออกเฉียงใต้",
      title: "สร้างอนาคตฟุตบอลในเอเชีย",
      p1:
        "เอเชียตะวันออกเฉียงใต้มีแฟนฟุตบอลยุโรมเกินสัดส่วน — แต่ยังมองจากนอก ProPitch Asia เปลี่ยนฐานแฟนให้เป็นโครงสร้างพื้นฐานที่สร้างร่วมกับภูมิภาค",
      p2: "สี่หน่วยงาน — ที่ปรึกษา นานาชาติ เวนเจอร์ และประสบการณ์ — ให้สโมสร สมาคม หรือนักลงทุนเข้าทางที่เหมาะ"
    },
    contact: {
      faqEyebrow: "คำถามที่พบบ่อย",
      office: "สำนักงานจดทะเบียน กรุงเทพฯ ประเทศไทย"
    },
    footer: { motto: "พัฒนาฟุตบอลไร้พรมแดน" }
  },
  ru: {
    meta: {
      title: "ProPitch Asia — Элитный футбол и Юго-Восточная Азия",
      description:
        "ProPitch Asia связывает европейский элитный футбол с Юго-Восточной Азией через консалтинг, международные туры, ventures и премиальные experiences — инфраструктура, пути и партнёрства, созданные вместе с регионом.",
      ogDescription:
        "Консалтинг, международные операции, ventures и experiences — инфраструктура развития футбола в Юго-Восточной Азии."
    },
    lang: { label: "Язык" },
    nav: {
      kickoff: "0′ СТАРТ",
      advisory: "25′ КОНСАЛТИНГ",
      international: "50′ МЕЖДУНАР.",
      ventures: "65′ VENTURES",
      experiences: "80′ EXPERIENCES",
      fulltime: "90′ ФИНАЛ"
    },
    hero: {
      eyebrow: "КОНФИДЕНЦИАЛЬНЫЙ ОБЗОР КОМПАНИИ",
      titleHtml: "СВЯЗЫВАЕМ<br>ЭЛИТНЫЙ ФУТБОЛ<br>С <em>ЮГО-ВОСТОЧНОЙ АЗИЕЙ.</em>",
      badge: "ЭЛИТНЫЙ ФУТБОЛ. РЕГИОНАЛЬНАЯ ВОЗМОЖНОСТЬ.",
      scroll: "ПРОКРУТИТЕ К СТАРТУ"
    },
    whyAsia: {
      eyebrow: "ПОЧЕМУ ЮГО-ВОСТОЧНАЯ АЗИЯ",
      title: "Строим будущее футбола в Азии.",
      p1:
        "В ЮВА уже сверхвысокий интерес к европейскому футболу — но регион смотрит со стороны. ProPitch Asia превращает аудиторию в инфраструктуру, созданную вместе с регионом.",
      p2: "Четыре направления — advisory, international, ventures и experiences — для клубов, федераций и инвесторов."
    },
    contact: {
      faqEyebrow: "ЧАСТЫЕ ВОПРОСЫ",
      office: "Юридический адрес: Бангкок, Таиланд"
    },
    footer: { motto: "РАЗВИТИЕ ФУТБОЛА БЕЗ ГРАНИЦ." }
  },
  zh: {
    meta: {
      title: "ProPitch Asia — 连接精英足球与东南亚",
      description:
        "ProPitch Asia 通过顾问、国际巡回、创投与高端体验，将欧洲精英足球与东南亚连接——设施、路径与合作伙伴关系与区域共建。",
      ogDescription: "顾问、国际运营、创投与体验——东南亚足球发展基础设施。"
    },
    lang: { label: "语言" },
    nav: {
      kickoff: "0′ 开球",
      advisory: "25′ 顾问",
      international: "50′ 国际",
      ventures: "65′ 创投",
      experiences: "80′ 体验",
      fulltime: "90′ 终场"
    },
    hero: {
      eyebrow: "机密公司概览",
      titleHtml: "连接<br>精英足球<br>与<em>东南亚。</em>",
      badge: "精英足球 · 区域机遇",
      scroll: "下滑至开球"
    },
    whyAsia: {
      eyebrow: "为何是东南亚",
      title: "在亚洲打造足球的未来。",
      p1:
        "东南亚对欧洲足球的热情已超比例——但多停留在观看。ProPitch Asia 将受众转化为与区域共建的基础设施、路径、合作与项目。",
      p2: "四大业务——顾问、国际、创投、体验——让俱乐部、足协或投资者从最合适的入口进入。"
    },
    contact: {
      faqEyebrow: "常见问题",
      office: "注册办事处：泰国曼谷"
    },
    footer: { motto: "无国界足球发展。" }
  },
  ar: {
    meta: {
      title: "ProPitch Asia — ربط كرة القدم النخبوية بجنوب شرق آسيا",
      description:
        "تربط ProPitch Asia كرة القدم الأوروبية النخبوية بجنوب شرق آسيا عبر الاستشارات والجولات الدولية والمشاريع والتجارب المميزة — بنية تحتية ومسارات وشراكات تُبنى مع المنطقة.",
      ogDescription: "استشارات وعمليات دولية ومشاريع وتجارب — بنية تحتية لتطوير كرة القدم في جنوب شرق آسيا."
    },
    lang: { label: "اللغة" },
    nav: {
      kickoff: "0′ البداية",
      advisory: "25′ استشارات",
      international: "50′ دولي",
      ventures: "65′ مشاريع",
      experiences: "80′ تجارب",
      fulltime: "90′ النهاية"
    },
    hero: {
      eyebrow: "نظرة عامة سرية على الشركة",
      titleHtml: "ربط<br>كرة القدم النخبوية<br>بـ<em>جنوب شرق آسيا.</em>",
      badge: "كرة قدم نخبوية. فرصة إقليمية.",
      scroll: "مرّر للبداية"
    },
    whyAsia: {
      eyebrow: "لماذا جنوب شرق آسيا",
      title: "بناء مستقبل كرة القدم في آسيا.",
      p1:
        "جنوب شرق آسيا يتفوّق في شغف كرة القدم الأوروبية — لكنه يشاهد من الخارج. ProPitch Asia تحوّل هذا الجمهور إلى بنية تحتية تُبنى مع المنطقة لا تُباع لها.",
      p2: "أربعة قطاعات — استشارات ودولي ومشاريع وتجارب — لدخول الأندية والاتحادات والمستثمرين من الباب المناسب."
    },
    contact: {
      faqEyebrow: "أسئلة شائعة",
      office: "المكتب المسجّل، بانكوك، تايلاند"
    },
    footer: { motto: "تطوير كرة القدم بلا حدود." }
  }
};

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const all = { en, ...locales };
for (const [code, patch] of Object.entries(all)) {
  const data = code === "en" ? en : deepMerge(clone(en), patch);
  if (code !== "en" && data.schemaJson) {
    data.schemaJson["@graph"].forEach((node) => {
      if (node.inLanguage) node.inLanguage = code === "zh" ? "zh-Hans" : code;
    });
  }
  fs.writeFileSync(path.join(outDir, `${code}.json`), JSON.stringify(data, null, 2) + "\n", "utf8");
}

console.log("Built", Object.keys(all).length, "locale files in i18n/");
