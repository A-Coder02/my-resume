import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arbaj Ansari",
  initials: "Arbaj",
  url: "https://arbaj-dev.vercel.app/",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Full Stack Developer & Technical Lead. Building scalable products with React, Node.js, and modern tech. Passionate about clean code and shipping fast.",
  summary:
    "Full Stack Developer and Technical Lead at Pronttera, leading development of AI-powered products including PayFace (facial recognition payment) and Rixura (medical imaging). Previously at 10Xers Labs and HTS, where I led frontend teams and built high-impact features for B2C platforms. Experienced with React, Next.js, Node.js, Vue.js, React Native, and modern web technologies. Passionate about clean code, mentoring developers, and building products that matter.",
  avatarUrl: "/me.png",
  skills: [
    "ReactJS",
    "React Native",
    "Next.js",
    "Vue.js",
    "Redux",
    "TypeScript",
    "SASS/LESS",
    "Bootstrap",
    "Tailwind CSS",
    "Ant Design",
    "Node.js",
    "NestJS",
    "Supabase",
    "Firebase",
    "GHL (GoHighLevel)",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Chrome Extension Development",
    "WordPress",
    "TensorFlow",
    "Git",
    "Figma",
    "Cursor",
    "Browser MCP",
    "NotebookLM",
    "JIRA",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arbaj897ansari@gmail.com",
    tel: "+918975048440",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/A-Coder02",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arbaj-dev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/arbajansari_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ArbajAnsari-ku3hg",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "arbaj897ansari@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  testimonials: [
    {
      name: "Umar Shaikh",
      image: "/testimonials/umar.png",
      role: "Building Systems That Create Opportunities",
      relation: "Managed Arbaj directly",
      org: "Pronttera",
      orgLogo: "/pronttera.png",
      date: "May 5, 2025",
      body: "I had the pleasure of working with Arbaj at Pronttera, where he was a key contributor to our React Native application development. His technical expertise, especially in building cross-platform mobile apps, was instrumental in delivering a high-quality, user-friendly product. Arbaj consistently demonstrated a deep understanding of React Native and related technologies, and he approached every challenge with a calm, solution-focused mindset. He's not only technically strong but also a great team player—always approachable, supportive, and eager to share knowledge. I highly recommend Arbaj for any team looking for a skilled and dependable mobile developer.",
    },
    {
      name: "Abhishek Katore",
      image: "/testimonials/abhishek.png",
      role: "Frontend Developer | React | JavaScript | Redux",
      relation: "Worked with Arbaj on the same team",
      org: "HTS Tech Solutions",
      orgLogo: "/hts.png",
      date: "June 20, 2025",
      body: "I had the pleasure of working with Arbaj, and I can confidently say he is one of the most knowledgeable React developers I've worked with. His deep understanding of React and frontend architecture consistently impressed the team. During my initial days, Arbaj was incredibly supportive, he guided me patiently and helped me get up to speed. He's a true team player, always willing to lend a hand or share insights. Not only did he contribute technically, but he also took the lead when needed and drove the team forward with clarity and confidence.",
    },
    {
      name: "Pankaj Agade",
      image: "/testimonials/pankaj.png",
      role: "Senior Software Developer | Full Stack Developer | App Development",
      relation: "Managed Arbaj directly",
      org: "HTS Tech Solutions",
      orgLogo: "/hts.png",
      date: "June 19, 2025",
      body: "I have worked with Arbaj and i observed him to be a hardworking and sincere person. He is always ready to help, learns quickly, and handles tasks with full dedication. He is a great team player and always keeps a positive attitude. I truly enjoyed working with him and would happily recommend him for any role or opportunity.",
    },
    {
      name: "Uttam Shendage",
      image: "/testimonials/uttam.png",
      role: "Senior Full-Stack Developer | Angular • ASP.NET Core • C# • SQL Server",
      relation: "Worked with Arbaj on different teams",
      org: "Senwell Solutions",
      date: "May 5, 2025",
      body: "Arbaj stands out for his deep understanding of JavaScript and ability to craft clean, logical code that makes complex functionalities seem effortless on the front end.",
    },
  ],

  work: [
    {
      company: "Pronttera",
      href: "https://pronttera.com",
      // badges: ["Part-time"],
      location: "Pune, India",
      title: "Technical Lead",
      logoUrl: "/pronttera.png",
      start: "Nov 2024",
      end: "Present",
      description:
        "<ul><li><b>PayFace</b> – Built a facial recognition payment application and integrated TensorFlow for biometric face detection and authentication (<a href='http://payface.in/'>payface.in</a>).</li><li><b>Rixura</b> – Developed a DICOM Viewer for medical imaging using dwv-react, enabling visualization of radiology files in the browser (<a href='http://rixura.com/'>rixura.com</a>).</li><li><b>Frostiq</b> – Developed a cake order management product, streamlining orders and operations for bakery businesses.</li><li><b>FitStack</b> – Built a Gym Management application for managing memberships, schedules, and operations.</li></ul>",
    },
    {
      company: "10Xers Labs",
      href: "https://consistentinnovation.co/",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/10xers.png",
      start: "Jul 2025",
      end: "Mar 2026",
      description:
        "<ul><li><b>GrowReach</b> – Built the GrowReach web app (<a href='https://growreach.app/'>growreach.app</a>) and its companion Chrome Extension (<a href='https://chromewebstore.google.com/detail/cifejbakemcfojncacbdakgkbhocglca'>Chrome Web Store</a>); leveraged Cursor with Figma MCP to accelerate UI development.</li><li><b>GrowEasy</b> – Implemented features and maintained a Salon Management application, contributing on the frontend side (<a href='https://groweasy.com/'>groweasy.com</a>).</li><li><b>Ajerly</b> – Integrated WASL feature including WASL status tracking and ongoing maintenance for a car rental application (<a href='https://ajerlycarrental.com/'>ajerlycarrental.com</a>).</li><li><b>Jasmine</b> – Developed a Vue.js-based trading application (<a href='https://www.jasminetrades.com/'>jasminetrades.com</a>), working on the trade order flow for a smooth and reliable trading experience.</li></ul>",
    },
    {
      company: "HTS Tech Solutions",
      href: "https://www.htstechsolutions.com/",
      badges: [],
      location: "Pune, India",
      title: "Senior Software Developer",
      logoUrl: "/hts.png",
      start: "May 2023",
      end: "Jun 2025",
      description:
        "<ul><li>Led frontend development, enforced best practices, and optimized performance for scalable, high-quality applications.</li><li><b>MealPe</b> (<a href='https://mealpe.app/'>mealpe.app</a>) – Worked on a B2C SaaS food ordering and cafeteria management platform; built the restaurant application, super admin application, and a cross-platform mobile app in React Native for iOS and Android.</li><li>Cell Tower Surveillance – Built a real-time 3D monitoring system using Three.js for high-precision tracking; implemented Python scripting with YOLO, openMVG, and openMVS for computer vision and 3D reconstruction.</li><li>React + Tailwind Boilerplate – Cut development time by 30% with reusable components.</li><li>Figma-to-React Tool – Boosted UI performance by 50% with efficient rendering.</li></ul>",
    },
    {
      company: "Vitesse Technologies",
      href: "https://vitessetech.com",
      badges: [],
      location: "Pune, India",
      title: "Full Stack Developer",
      logoUrl: "/vitesse.png",
      start: "Sep 2022",
      end: "Mar 2023",
      description:
        "<ul><li>UI/UX Development – Crafted intuitive interfaces for React & Node.js applications.</li><li>Reusable Component Library – Developed a Node.js library, cutting feature development time by 30%.</li></ul>",
    },
    {
      company: "APSIS Solutions",
      href: "https://apsis.com",
      badges: [],
      location: "Pune, India",
      title: "Associate Software Engineer",
      logoUrl: "/apsis.png",
      start: "Apr 2022",
      end: "Aug 2022",
      description:
        "<ul><li>Boilerplate Development – Built reusable, scalable React code structures to accelerate project setup and improve efficiency.</li><li>Next.js & SSR – Enhanced performance and UX using server-side rendering with Next.js.</li><li>Project Development – Developed features and maintained SNO, Journal App, ITSM, School ERP, and CRM systems.</li><li>Full-Stack Development – Implemented scalable frontend and backend solutions for end-to-end web applications.</li></ul>",
    },
    {
      company: "Fladdra",
      href: "https://fladdra.com",
      badges: [],
      location: "Pune, India",
      title: "React Developer",
      logoUrl: "/fladdra.png",
      start: "Jun 2021",
      end: "Mar 2022",
      description:
        "<ul><li>Frontend Development – Built reusable React.js components aligned with design systems and project goals.</li><li>Web Applications – Developed responsive websites and single-page applications (SPAs) using React.js.</li><li>CRM Development – Contributed to the development of scalable and maintainable CRM platforms.</li><li>React Libraries – Leveraged MUI, Redux, Axios, and other libraries to enhance application functionality and performance.</li></ul>",
    },
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "https://unipune.ac.in",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/sppu.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Dr. PA Inamdar University",
      href: "https://painamdaruniversity.ac.in",
      degree: "Master of Computer Applications",
      logoUrl: "/pai.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Zerox Cloud",
      dates: "2024 - Present",
      location: "Pune, India",
      description:
        "Co-founded and led Zerox Cloud from idea inception to deployment as Co-Founder, Project Manager, and Tech Lead in a 7-member team. Managed full project lifecycle across planning, development, and deployment.",
      image: "/others/zerox-cloud.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://zeroxcloud.in/",
        },
      ],
    },
    {
      title: "Meta Mosaic",
      dates: "2024",
      location: "Open Source",
      description:
        "Built and published an open-source React component library for creating beautiful, responsive mosaic grid layouts with customizable animations, zero dependencies, and full TypeScript support. Available on npm with 20+ weekly downloads.",
      image: "/others/meta-mosaic.png",
      links: [
        {
          title: "npm",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.npmjs.com/package/meta-mosaic",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/A-Coder02/meta-mosaic",
        },
      ],
    },
    {
      title: "PixelPick",
      dates: "2026",
      location: "Chrome Extension",
      description:
        "Built and published a Chrome Extension color picker and eyedropper tool that captures HEX, RGB, and HSL colors from any webpage instantly. Features one-click color selection, automatic clipboard copying, and cross-website compatibility.",
      image: "/others/pixelpick.png",
      links: [
        {
          title: "Chrome Web Store",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chromewebstore.google.com/detail/pixelpick-%E2%80%93-pick-colors-f/fdenfadpabgjdohnedgopjcmdjcimngl",
        },
      ],
    },
    {
      title: "Tweaks for YouTube",
      dates: "2024",
      location: "Chrome Extension",
      description:
        "Developed and published a Chrome Extension that enhances the YouTube browsing experience with ad-blocking and additional UI tweaks.",
      image: "/others/tweaks.png",
      links: [
        {
          title: "Chrome Web Store",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chromewebstore.google.com/detail/tweaks-for-youtube-%E2%80%93-ad-b/mnampdjhbhnacgehfedplboonojmnibo",
        },
      ],
    },
  ],
} as const;
