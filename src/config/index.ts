import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Batyrkhan Sharipbay — Backend Developer & ML Engineer",
  author: "Batyrkhan Sharipbay",
  description:
    "Software Engineer based in Almaty, Kazakhstan. Interested in Web development and ML research.",
  lang: "en",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/batyrkhan-sharipbay/" },
    { text: "Github", href: "https://github.com/sb2rhan" },
  ],
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONFIG_RU: SiteConfig = {
  title: "Шарипбай Батырхан — Backend Developer & ML Engineer",
  author: "Шарипбай Батырхан",
  description:
    "Разработчик ПО, базирующийся в Алматы, Казахстан. Интересуюсь веб-разработкой и исследованиями в области ML.",
  lang: "ru",
  navLinks: [
    { text: "Опыт работы", href: "#experience" },
    { text: "Проекты", href: "#projects" },
    { text: "О себе", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/batyrkhan-sharipbay/" },
    { text: "Github", href: "https://github.com/sb2rhan" },
  ],
  canonicalURL: "https://astro-zen.vercel.app",
};
export const SITE_CONFIG_KK: SiteConfig = {
  title: "Шәріпбай Батырхан — Backend Developer & ML Engineer",
  author: "Шәріпбай Батырхан",
  description:
    "Software Engineer, Алматы қаласы. Қызығушылықтарым: Web development және ML зерттеулері.",
  lang: "kk",
  navLinks: [
    { text: "Тәжірибем", href: "#experience" },
    { text: "Жобаларым", href: "#projects" },
    { text: "Мен туралы", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/batyrkhan-sharipbay/" },
    { text: "Github", href: "https://github.com/sb2rhan" },
  ],
  canonicalURL: "https://astro-zen.vercel.app",
};


export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Batyrkhan Sharipbay",
    specialty: "Backend Developer & ML Engineer",
    summary:
      "Software Engineer based in Almaty, Kazakhstan. Interested in Web development and ML research.",
    email: "batyrkhan.sharipbay@nu.edu.kz",
  },
  experience: [
    {
      company: "Nazarbayev University",
      position: "Research Assistant",
      startDate: "Nov 2024",
      endDate: "Present",
      summary: [
        "Researching the application of Fuzzy Logic in medical AI to improve explainability under the guidance of Professor Adnan Yazici.",
        "Implemented ANFIS with Beetle Swarm Optimization algorithm using PyTorch, increasing the accuracy rates to >95% in classification tasks.",
      ],
    },
    {
      company: "NU Rover Team",
      position: "Lead Software Engineer",
      startDate: "Apr 2023",
      endDate: "Jan 2025",
      summary: [
        "Created and hosted the team website at aspanrover.kz using React and Tailwind CSS. This improved team visibility and communication, leading to a 50% increase in engagement from potential new members.",
        "Deployed a WebSocket server to connect the Console app with the Rover, using AWS API Gateway, Lambda, and DynamoDB. This enabled real-time data transmission and control, enhancing the Rover's operational efficiency.",
        "Developed a Console app using React and Tailwind CSS to control the Rover, providing a user-friendly interface for team members to interact with the Rover's systems.",
        "Helped with writing WebRTC ROS module for Rover in Python, enabling real-time video streaming and remote control capabilities.",
        "Organized meetings in the Software Team regarding future software implementations.",
      ],
    },
  ],
  projects: [
    {
      name: "Point of Sale (PoS) system with Dashboard",
      summary: "A comprehensive PoS system with an intuitive dashboard for sales tracking and inventory management.",
      linkPreview: "/",
      linkSource: "https://github.com/sb2rhan/PoSSystem.git",
      image: "/spotifu.png",
    },
  ],
  about: {
    description: `
      Hi, I am Batyrkhan Sharipbay, a passionate Backend Developer and ML Engineer.
      I have an experience in .NET and Python, as well as front-end frameworks like React and Angular.
      I am interested in learning new technologies and applying them in real-world projects.

      Currently, focused on web development and machine learning research, and I am always eager
      to learn new technologies and improve my skills.
    `,
    image: "/batyrkhan-big.jpg",
  },
};

export const SITE_CONTENT_RU: SiteContent = {
  hero: {
    name: "Шарипбай Батырхан",
    specialty: "Backend Developer & ML Engineer",
    summary:
      "Разработчик ПО, базирующийся в Алматы, Казахстан. Интересуюсь веб-разработкой и исследованиями в области ИИ.",
    email: "batyrkhan.sharipbay@nu.edu.kz",
  },
  experience: [
    {
      company: "Назарбаев Университет",
      position: "Научный ассистент",
      startDate: "Ноябрь 2024",
      endDate: "Настоящее время",
      summary: [
        "Изучение применения Fuzzy Logic в медицинском ИИ для улучшения объяснимости под руководством профессора Adnan Yazici.",
        "Реализовал ANFIS с алгоритмом Beetle Swarm Optimization с использованием PyTorch, увеличив точность классификации до >95%.",
      ],
    },
    {
      company: "NU Rover Team",
      position: "Ведущий разработчик ПО",
      startDate: "Апрель 2023",
      endDate: "Январь 2025",
      summary: [
        "Создал и разместил веб-сайт команды на aspanrover.kz с использованием React и Tailwind CSS. Это улучшило видимость команды и коммуникацию, что привело к увеличению вовлеченности потенциальных новых участников на 50%.",
        "Развернул сервер WebSocket для подключения консольного приложения к Роверу, используя AWS API Gateway, Lambda и DynamoDB. Это обеспечило передачу данных в реальном времени и управление, повысив операционную эффективность Ровера.",
        "Разработал приложение для управления Ровером с использованием React и Tailwind CSS, предоставив удобный интерфейс для взаимодействия участников команды с системами Ровера.",
        "Помог в написании модуля WebRTC ROS для Ровера на Python, что позволило реализовать возможности потоковой передачи видео в реальном времени и удаленного управления.",
        "Организовал встречи в своей команде по вопросам будущих программных реализаций.",
      ],
    },
  ],
  projects: [
    {
      name: "Point of Sale (PoS) system with Dashboard",
      summary: "Комплексная PoS система с интуитивно понятной панелью управления для отслеживания продаж и управления запасами.",
      linkPreview: "/",
      linkSource: "https://github.com/sb2rhan/PoSSystem.git",
      image: "/spotifu.png",
    },
  ],
  about: {
    description: `
      Привет, я Шарипбай Батырхан, Backend Developer и ML Engineer.
      У меня есть опыт работы с .NET и Python, а также с фронтенд-фреймворками, такими как React и Angular.
      Я заинтересован в изучении новых технологий и применении их в реальных проектах.

      В настоящее время я сосредоточен на веб-разработке и исследованиях в области ML и всегда стремлюсь
      изучать новые технологии и улучшать свои навыки.

    `,
    image: "/batyrkhan-big.jpg",
  },
};

export const SITE_CONTENT_KK: SiteContent = {
  hero: {
    name: "Шәріпбай Батырхан",
    specialty: "Backend Developer & ML Engineer",
    summary:
      "Software Engineer, Алматы қаласы. Қызығушылықтарым: Web development және ML зерттеулері.",
    email: "batyrkhan.sharipbay@nu.edu.kz",
  },
  experience: [
    {
      company: "Назарбаев Университеті",
      position: "Зертеу ассистенті",
      startDate: "Қараша 2024",
      endDate: "Қазір",
      summary: [
        "Fuzzy Logic-ті медициналық AI-де қолдану бойынша зерттеу жүргізу, профессор Adnan Yazici жетекшілігімен.",
        "PyTorch қолдану арқылы, Beetle Swarm Optimization алгоритмімен ANFIS-те классификацияда дәлдік деңгейін >95%-ға арттырдым.",
      ],
    },
    {
      company: "NU Rover Team",
      position: "Бас бағдарламалық инженер",
      startDate: "Сәуір 2023",
      endDate: "Қаңтар 2025",
      summary: [
        "React және Tailwind CSS қолдана отырып, aspanrover.kz сайтты құрып, орналастырдым. Бұл команда көрінісін және байланысын жақсартып, әлеуетті жаңа мүшелердің қатысуын 50%-ға арттырды.",
        "AWS API Gateway, Lambda және DynamoDB қолдана отырып, Роверді басқару үшін Консольдік қосымшаны Ровермен байланыстыратын WebSocket серверін орналастырдым. Бұл нақты уақыттағы деректерді беру және басқаруды қамтамасыз етіп, Ровердің жұмыс тиімділігін арттырды.",
        "Роверді басқару үшін React және Tailwind CSS қолдана отырып, Консольдік қосымша әзірледім, бұл команда мүшелеріне Ровердің жүйелерімен өзара әрекеттесуге ыңғайлы интерфейс ұсынды.",
        "Python тілінде Ровер үшін WebRTC ROS модулін жазуға көмектестім, бұл нақты уақыттағы бейне ағынын және қашықтан басқару мүмкіндіктерін іске асыруға мүмкіндік берді.",
        "Болашақ бағдарламалық іске асырулар бойынша Бағдарламалық Топта кездесулер ұйымдастырдым.",
      ],
    },
  ],
  projects: [
    {
      name: "Point of Sale (PoS) жүйесі және Басқару тақтасы",
      summary: "Сатуды бақылау және қорларды басқару үшін интуитивті басқару тақтасы бар кешенді PoS жүйесі.",
      linkPreview: "/",
      linkSource: "https://github.com/sb2rhan/PoSSystem.git",
      image: "/spotifu.png",
    },
  ],
  about: {
    description: `
      Сәлем, мен Шәріпбай Батырхан, Backend Developer және ML Engineer.
      Менің .NET және Python, сондай-ақ React және Angular-да тәжірибем бар.
      Мені жаңа технологияларды үйрену және оларды жобаларда қолдану қызықтырады.

      Қазіргі уақытта Web developing және ML зерттеулерімен қызығамын және әрқашан
      жаңа технологияларды үйренуге және дағдыларымды жетілдіруге дайынмын.
    `,
    image: "/batyrkhan-big.jpg",
  },
};