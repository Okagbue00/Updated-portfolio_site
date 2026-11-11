const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    label: "Threat Intelligence",
    title:
      "The DFIR Report: Real-World Intrusions Broken Down Step by Step",
    image: "/images/the-dfir-report.png",
    link: "https://thedfirreport.com/reports/",
  },
  {
    id: 2,
    label: "Security Policy & Cryptography",
    title: "Schneier on Security: Big-Picture Thinking on Privacy and Security",
    image: "/images/schneier-on-security.png",
    link: "https://www.schneier.com",
  },
  {
    id: 3,
    label: "Investigative Journalism",
    title: "Krebs on Security: Deep Dives Into Cybercrime and Data Breaches",
    image: "/images/krebs-on-security.png",
    link: "https://krebsonsecurity.com",
  },
];

const techStack = [
  {
    category: "Cloud",
    items: ["Microsoft Azure", "AWS", "Google Cloud"],
  },
  {
    category: "Network Sec",
    items: ["Wireshark", "Suricata", "Zeek"],
  },
  {
    category: "SIEM / SOC",
    items: ["Splunk", "KQL", "Microsoft Sentinel"],
  },
  {
    category: "Offensive",
    items: ["Kali Linux", "Burp Suite", "Metasploit", "Nmap"],
  },
  {
    category: "Vuln Mgmt",
    items: [" Nessus", "OpenVAS", "Qualys"],
  },
  {
    category: "Coding",
    items: ["Python", "JavaScript", "Bash", "PowerShell"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Okagbue00?tab=repositories",
  },
  
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Francisdevvv",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/francisokagbue/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    name: "gal1.png",
    img: "/images/image10.jpg",
    albums: ["Favorites"],
  },
  {
    id: 2,
    name: "gal2.png",
    img: "/images/image11.jpg",
    albums: ["Memories"],
  },
  {
    id: 3,
    name: "gal3.png",
    img: "/images/image13.jpg",
    albums: ["Places"],
  },
  {
    id: 4,
    name: "gal4.png",
    img: "/images/image14.jpg",
    albums: ["People", "Favorites"],
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Hardened OpenVPN Remote Access",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "OpenVPN-Access.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A secure remote-access VPN deployment designed with strong encryption, certificate-based authentication, and strict network access controls for a segmented lab environment.",
            "Implemented OpenVPN with AES-256-GCM encryption and TLS 1.3 for robust data protection.",
            "Established network segmentation and strict access controls to limit VPN user permissions within the lab environment.",
          ],
        },
        
        {
          id: 4,
          name: "openVPN.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/openvpn_project.png",
        },
        
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "C# Game 2D Shooter",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "C# Game 2D Shooter.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A lightweight C# game engine designed for 2D and 3D game development.",
            "Built a powerful rendering engine using C# and Unity",
            "Implemented core features like scene management, input handling, and physics simulation.",
          ],
        },
    
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Scripture Proof",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Scripture Proof Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ScriptureProof is an AI-powered Christian mobile app inspired by Acts 17:11.",
            "Upload any sermon and the AI transcribes it, identifies every Bible verse quoted.",
            "and cross-references each one against scripture - giving you a scriptureproof score.",
            "Some Key Features: Sermon Verifier, Bible Study Hub, Daily Reading Plan, Bible Quiz and more.",
          ],
        },
        {
          id: 2,
          name: "scriptureproof.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://scriptureproof.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "scriptureproof.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/scriptureProof.png",
        },
    
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/image10.jpg",
    },
    {
      id: 2,
      name: "hiking-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/image11.jpg",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };