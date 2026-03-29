export type PortfolioCategory =
    | "All"
    | "Tourism & Gov"
    | "Events & Shows"
    | "Sports & Institutions"
    | "Cityscapes & Architecture"
    | "Workshops & Education"
    | "Fine Art";

export interface PortfolioLink {
    label: string;
    url: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    subtitle?: string;
    category: PortfolioCategory;
    image?: string; 
    youtubeLink: string;
    links?: PortfolioLink[];
    featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
    // --- FEATURED HIGHLIGHTS (Top 6 for Homepage) --- //
    {
        id: "kolli-hills",
        title: "Kolli Hills",
        category: "Tourism & Gov",
        image: "/thumbnails/Kolli Hills.JPG",
        youtubeLink: "#",
        links: [{ label: "Kolli Hills - 36 Hairpin Bends", url: "https://youtu.be/9CiexvWfWOQ" }],
        featured: true
    },
    {
        id: "bangalore-metro",
        title: "Bangalore Metro",
        subtitle: "BMRCL",
        category: "Tourism & Gov",
        image: "/images/projects/bangalore-metro.jpg",
        youtubeLink: "#",
        links: [
            { label: "Inside & Underground TBM", url: "https://youtu.be/hJN9gbC49UY" },
            { label: "Metro Trains", url: "https://www.instagram.com/p/CyU0qVhSU1I/" },
            { label: "Metro Trains", url: "https://www.instagram.com/p/CyTh-eEy4DN/" },
            { label: "Purple Line Inauguration 2023", url: "https://www.instagram.com/p/CyK0RxGy4B4/" },
            { label: "Metro Line - ITPL", url: "https://www.instagram.com/p/C08zVR4SMbp/" },
            { label: "Metro Line Night Shot KR Puram", url: "https://www.instagram.com/p/C8_tgC8y3Xg/" },
            { label: "Two Trains", url: "https://www.instagram.com/p/DDL7ChTSF1x/" },
            { label: "Day 2 Night Transition Metro Train", url: "https://www.instagram.com/p/Czfn0XySiK6/" }
        ]
    },
    {
        id: "ksca-pitch",
        title: "KSCA Stadium",
        subtitle: "Karnataka State Cricket Association",
        category: "Sports & Institutions",
        image: "/images/projects/ksca-pitch/1.jpg",
        youtubeLink: "#",
        links: [{ label: "KSCA - 3 Ovals - Bangalore", url: "https://youtu.be/eJqVejC4jp0" }]
    },
    {
        id: "vintage-cars",
        title: "Vintage Cars Collection",
        subtitle: "KVCCC - Association 4 Years",
        category: "Events & Shows",
        image: "/images/projects/vintage-cars.jpg",
        youtubeLink: "#"
    },
    {
        id: "bangalore-race-course",
        title: "Bangalore Race Course",
        category: "Cityscapes & Architecture",
        image: "/images/projects/bangalore-race-course.jpg",
        youtubeLink: "#"
    },
    {
        id: "aerial-landscape",
        title: "Abstract Earth",
        category: "Fine Art",
        image: "/images/projects/aerial-landscape.jpg",
        youtubeLink: "#"
    },

    // --- REMAINDER ITEMS --- //
    {
        id: "nhai",
        title: "NHAI Highway Expansion",
        subtitle: "National Highways Authority of India",
        category: "Tourism & Gov",
        image: "/thumbnails/NHAI.JPG",
        youtubeLink: "#",
        links: [
            { label: "NHAI - Presentation to PM Modi", url: "https://youtu.be/FP2RMMQUH24" },
            { label: "NHAI Presentation to PM Modi", url: "https://www.instagram.com/p/CfCkdTpgAEI/" },
            { label: "NHAI", url: "https://youtu.be/lWI85TkGvjI" }
        ]
    },
    {
        id: "kstdc",
        title: "KSTDC Campaigns",
        subtitle: "Karnataka State Tourism",
        category: "Tourism & Gov",
        image: "/thumbnails/KSDTC CAMP.jpg",
        youtubeLink: "#"
    },
    {
        id: "isha-foundation",
        title: "Isha Foundation",
        category: "Sports & Institutions",
        image: "/thumbnails/ISHA.JPG",
        youtubeLink: "#",
        links: [
            { label: "Adiyogi", url: "https://www.instagram.com/p/C_NMX-xSD3J/" },
            { label: "Adiyogi", url: "https://www.instagram.com/p/C-65QE0SIut/" },
            { label: "Isha Coimbatore", url: "https://www.instagram.com/p/C_CVaXfSvmf/" },
            { label: "Adiyogi Coimbatore", url: "https://www.instagram.com/p/DAnKuEySipD/" },
            { label: "Adiyogi Chikballapur", url: "https://www.instagram.com/p/DTb8-z7ku6j/" }
        ]
    },
    {
        id: "udupi-tourism",
        title: "Udupi Tourism Dept",
        category: "Tourism & Gov",
        image: "/thumbnails/Udupi.DNG",
        youtubeLink: "#"
    },
    {
        id: "shivamogga-tourism",
        title: "Shivamogga Tourism Dept",
        category: "Tourism & Gov",
        image: "/thumbnails/Shivamogga.jpg",
        youtubeLink: "#",
        links: [
            { label: "Bhadra Wildlife Sanctuary", url: "https://www.instagram.com/p/DOK0EpngEON/" },
            { label: "Wild Tusker", url: "https://www.instagram.com/p/DLWL_R0Shpe/" },
            { label: "Black Panther", url: "https://www.instagram.com/p/DLabpllSf-p/" },
            { label: "Leopard & Black Panther", url: "https://www.instagram.com/p/DLcj5sCSm73/" },
            { label: "Sakrebyle Elephant Camp (1)", url: "https://www.instagram.com/p/DLeTgVESBAB/" },
            { label: "Sakrebyle Elephant Camp (2)", url: "https://www.instagram.com/p/DLhHWDuSHhy/" },
            { label: "Jog Falls", url: "https://www.instagram.com/p/DLj8-b0SCCC/" },
            { label: "Sakrebyle Elephant Camp (3)", url: "https://www.instagram.com/p/DLmKwPCSXEJ/" },
            { label: "Sangam – Tunga & Bhadra Rivers", url: "https://www.instagram.com/p/DLoe7_eyh9m/" },
            { label: "Kimmane Resort", url: "https://www.instagram.com/p/DLsG-ipSUQ1/" },
            { label: "Shivamogga A Glimpse", url: "https://www.instagram.com/stories/highlights/18065093930516188/" }
        ]
    },
    {
        id: "chickmagalur-tourism",
        title: "Chickmagalur Tourism Dept",
        category: "Tourism & Gov",
        image: "/thumbnails/Chickmagalur.jpg",
        youtubeLink: "#",
        links: [
            { label: "Landscape", url: "https://www.instagram.com/p/DAiIUhsyEAu/" },
            { label: "Waterfalls", url: "https://www.instagram.com/p/DAaoZyGypCh/" }
        ]
    },
    {
        id: "sakleshpur-tourism",
        title: "Sakleshpur Tourism Dept",
        category: "Tourism & Gov",
        image: "/thumbnails/Sakleshpur.JPG",
        youtubeLink: "#",
        links: [
            { label: "Mallali Waterfalls", url: "https://www.instagram.com/p/DNsWjfDZByZ/" },
            { label: "Manjarabad Fort", url: "https://www.instagram.com/p/DNp55njS58P/" },
            { label: "Heart Shape Lake", url: "https://www.instagram.com/p/DNnqxYrygVX/" }
        ]
    },
    {
        id: "gadag-tourism",
        title: "Gadag Tourism Dept",
        category: "Tourism & Gov",
        image: "/images/projects/gadag.jpg",
        youtubeLink: "#",
        links: [{ label: "Gadag", url: "https://www.instagram.com/stories/highlights/18081955147887208/" }]
    },
    {
        id: "guinness-2024",
        title: "Guinness World Record Event 2024",
        category: "Events & Shows",
        youtubeLink: "#",
        links: [
            { label: "Kundyolanda Hockey Carnival (1)", url: "https://www.instagram.com/p/C6DmDOFS1XZ/" },
            { label: "Kundyolanda Hockey Carnival (2)", url: "https://www.instagram.com/p/C55sJXtof4p/" }
        ]
    },
    {
        id: "guinness-2025",
        title: "Guinness World Record Event 2025",
        category: "Events & Shows",
        youtubeLink: "#",
        links: [
            { label: "Largest Mammal GWR 2025", url: "https://www.instagram.com/p/DPORhgbEq93/" },
            { label: "Drone Show – Karnataka Map", url: "https://www.instagram.com/p/DPZDZyXgCOl/" },
            { label: "Certificate Presentation", url: "https://www.instagram.com/stories/highlights/18059405948432517/" }
        ]
    },
    {
        id: "drone-workshop-mysore-2023",
        title: "Drone Workshop 2023",
        subtitle: "Mysore University",
        category: "Workshops & Education",
        image: "/thumbnails/Drone Workshop Mys Uni 2023.JPG",
        youtubeLink: "#"
    },
    {
        id: "drone-workshop-mysore-2024",
        title: "Drone Workshop 2024",
        subtitle: "Mysore University",
        category: "Workshops & Education",
        image: "/thumbnails/Drone Workshop Mys Uni 2024.jpg",
        youtubeLink: "#"
    },
    {
        id: "drone-workshop-police-2025",
        title: "Police Dept Drone Workshop 2025",
        category: "Workshops & Education",
        image: "/images/achievements/police department/Police_department.jpeg",
        youtubeLink: "#",
        links: [{ label: "Drone Workshop Police Dept", url: "https://www.instagram.com/stories/highlights/18070502852388087/" }]
    },
    {
        id: "mysore-dussera",
        title: "Mysore Dussera Light Festival",
        category: "Events & Shows",
        image: "/thumbnails/Mysore Dussera 2025 1.jpg",
        youtubeLink: "#",
        links: [
            { label: "Drone Show Dussehra 2024 (1)", url: "https://www.instagram.com/p/DA0FFRJSsVy/" },
            { label: "Drone Show Dussehra 2024 (2)", url: "https://www.instagram.com/p/DA2iiPLy3KB/" }
        ]
    },
    {
        id: "botlabs-drone-shows",
        title: "Drone Art Shows",
        subtitle: "Botlabs",
        category: "Events & Shows",
        image: "/thumbnails/Drone Art.jpg",
        youtubeLink: "#",
        links: [
            { label: "Botlabs Drone Show 2024", url: "https://www.instagram.com/p/DA0-xPdy23i/" },
            { label: "Drone Art Long Exposure (1)", url: "https://www.instagram.com/p/CZEBCmbrybt/" },
            { label: "Drone Art Long Exposure (2)", url: "https://www.instagram.com/p/CXjVyMyPi3H/" },
            { label: "Drone Art Long Exposure (3)", url: "https://www.instagram.com/p/CXb5EXWhj2z/" },
            { label: "Drone Art Long Exposure (4)", url: "https://www.instagram.com/p/CUZNk7oPQTT/" },
            { label: "Drone Art Long Exposure (5)", url: "https://www.instagram.com/p/CUCjiHDPHlb/" },
            { label: "Drone Art Long Exposure (6)", url: "https://www.instagram.com/p/CT6IaewPxCe/" },
            { label: "Drone Art Long Exposure (7)", url: "https://www.instagram.com/p/CSZuOk0hN7m/" },
            { label: "Drone Art Long Exposure (8)", url: "https://www.instagram.com/p/CSXVYg0BKrF/" }
        ]
    },
    {
        id: "city-icons-collection",
        title: "City Icons Collection",
        subtitle: "Bangalore Club, Bowring Club, Kingfisher Towers, Cubbon Park, Kanteerava Stadium",
        category: "Cityscapes & Architecture",
        image: "/thumbnails/City Icons 4.jpg",
        youtubeLink: "#",
        links: [
            { label: "Bangalore Club", url: "https://www.facebook.com/reel/3250952615154795" },
            { label: "KSCA (1)", url: "https://www.instagram.com/p/CzdLmM0SQFy/" },
            { label: "KSCA (2)", url: "https://www.instagram.com/p/C0i6Hf4y3NV/" },
            { label: "MG Road", url: "https://www.instagram.com/p/C0vmIKqSaw3/" },
            { label: "Race Course", url: "https://www.instagram.com/p/C1_jqxkyuci/" },
            { label: "One8", url: "https://www.instagram.com/p/C2IH8BnylQi/" },
            { label: "KF Tower (1)", url: "https://www.instagram.com/p/C2G_NjpSvF1/" },
            { label: "Wonderlaa", url: "https://www.instagram.com/p/C16hccFrSxp/" },
            { label: "Shiva Temple", url: "https://www.instagram.com/p/C4PqahnSG4P/" },
            { label: "KSCA (3)", url: "https://www.instagram.com/p/C7EOrDVS8k8/" },
            { label: "KVCCC", url: "https://www.instagram.com/p/C781QYmoS1U/" },
            { label: "KF Tower (2)", url: "https://www.instagram.com/p/DDY5IvIyn_h/" },
            { label: "Ulsoor Lake", url: "https://www.instagram.com/p/DVqxy8zgFdX/" },
            { label: "City Bus Stand", url: "https://www.instagram.com/p/C3h75czSttn/" },
            { label: "Vidhan Soudha", url: "https://www.instagram.com/p/DKG4-fzyUhW/" }
        ]
    },
    {
        id: "schools-sports-tribute",
        title: "School Sports & Tributes",
        subtitle: "CHS, Cottons, JPVaswani",
        category: "Sports & Institutions",
        image: "/thumbnails/CHS School Sports.jpg",
        youtubeLink: "#",
        links: [
            { label: "Sports Day 2023", url: "https://youtu.be/-gtcHaemYOc" },
            { label: "School Sports 2023", url: "https://youtu.be/9gM34akKq6k" },
            { label: "Sports Day 2018", url: "https://youtu.be/pndy3TK8MCk" },
            { label: "A Tribute to CHS", url: "https://youtu.be/UJ4bFAhbonY" }
        ]
    },
    // --- NEW ITEMS --- //
    {
        id: "nandi-hills",
        title: "Nandi Hills",
        category: "Tourism & Gov",
        youtubeLink: "#",
        links: [
            { label: "Nandi Hills", url: "https://www.instagram.com/stories/highlights/18073296020070209/" },
            { label: "Nandi Hill Drive", url: "https://www.instagram.com/p/DL8_SixyDZH/" },
            { label: "KSTDC Staff", url: "https://www.instagram.com/p/DL6eNldSKoZ/" }
        ]
    },
    {
        id: "kia-factory",
        title: "KIA Factory",
        category: "Cityscapes & Architecture",
        youtubeLink: "#",
        links: [{ label: "KIA Factory", url: "https://youtu.be/UZ4ITd_axPs" }]
    },
    {
        id: "vande-bharat-express",
        title: "Vande Bharat Express",
        category: "Cityscapes & Architecture",
        youtubeLink: "#",
        links: [{ label: "Vande Bharat Express", url: "https://www.instagram.com/p/DNKg3NQAkpc/" }]
    },
    {
        id: "drone-fishing",
        title: "Drone Fishing",
        category: "Fine Art",
        youtubeLink: "#",
        links: [{ label: "Drone Fishing", url: "https://www.instagram.com/p/B3PmKbGnsmr/" }]
    },
    {
        id: "drone-workshops-others",
        title: "Workshops - Others",
        category: "Workshops & Education",
        youtubeLink: "#",
        links: [{ label: "Convergence Institute of Media", url: "https://www.instagram.com/p/CdDujRMKqN7/?img_index=1" }]
    }
];
