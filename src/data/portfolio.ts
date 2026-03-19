export type PortfolioCategory =
    | "All"
    | "Tourism & Gov"
    | "Events & Shows"
    | "Sports & Institutions"
    | "Cityscapes & Architecture"
    | "Workshops & Education"
    | "Fine Art";

export interface PortfolioItem {
    id: string;
    title: string;
    subtitle?: string;
    category: PortfolioCategory;
    image?: string; // Optional: Uses a highly styled gradient placeholder if not provided
    youtubeLink: string;
    featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
    // --- FEATURED HIGHLIGHTS (Top 6 for Homepage) --- //
    {
        id: "kolli-hills",
        title: "Kolli Hills",
        category: "Tourism & Gov",
        image: "/images/projects/kolli-hills.jpg",
        youtubeLink: "#",
        featured: true
    },
    {
        id: "bangalore-metro",
        title: "Bangalore Metro",
        subtitle: "BMRCL",
        category: "Tourism & Gov",
        image: "/images/projects/bangalore-metro.jpg",
        youtubeLink: "#"
    },
    {
        id: "ksca-pitch",
        title: "KSCA Stadium",
        subtitle: "Karnataka State Cricket Association",
        category: "Sports & Institutions",
        image: "/images/projects/ksca-pitch/1.jpg",
        youtubeLink: "#"
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

    // --- REMAINDER OF THE 21 ITEMS (For Portfolio Page) --- //
    {
        id: "nhai",
        title: "NHAI Highway Expansion",
        subtitle: "National Highways Authority of India",
        category: "Tourism & Gov",
        youtubeLink: "#" // Missing image placeholder will be used
    },
    {
        id: "kstdc",
        title: "KSTDC Campaigns",
        subtitle: "Karnataka State Tourism",
        category: "Tourism & Gov",
        youtubeLink: "#"
    },
    {
        id: "isha-foundation",
        title: "Isha Foundation",
        category: "Sports & Institutions",
        youtubeLink: "#"
    },
    {
        id: "udupi-tourism",
        title: "Udupi Tourism Dept",
        category: "Tourism & Gov",
        youtubeLink: "#"
    },
    {
        id: "shivamogga-tourism",
        title: "Shivamogga Tourism Dept",
        category: "Tourism & Gov",
        youtubeLink: "#"
    },
    {
        id: "chickmagalur-tourism",
        title: "Chickmagalur Tourism Dept",
        category: "Tourism & Gov",
        youtubeLink: "#"
    },
    {
        id: "sakleshpur-tourism",
        title: "Sakleshpur Tourism Dept",
        category: "Tourism & Gov",
        youtubeLink: "#"
    },
    {
        id: "gadag-tourism",
        title: "Gadag Tourism Dept",
        category: "Tourism & Gov",
        image: "/images/projects/gadag.jpg",
        youtubeLink: "#"
    },
    {
        id: "guinness-2024",
        title: "Guinness World Record Event 2024",
        category: "Events & Shows",
        youtubeLink: "#"
    },
    {
        id: "guinness-2025",
        title: "Guinness World Record Event 2025",
        category: "Events & Shows",
        youtubeLink: "#"
    },
    {
        id: "drone-workshop-mysore-2023",
        title: "Drone Workshop 2023",
        subtitle: "Mysore University",
        category: "Workshops & Education",
        youtubeLink: "#"
    },
    {
        id: "drone-workshop-mysore-2024",
        title: "Drone Workshop 2024",
        subtitle: "Mysore University",
        category: "Workshops & Education",
        youtubeLink: "#"
    },
    {
        id: "drone-workshop-police-2025",
        title: "Police Dept Drone Workshop 2025",
        category: "Workshops & Education",
        youtubeLink: "#"
    },
    {
        id: "mysore-dussera",
        title: "Mysore Dussera Light Festival",
        category: "Events & Shows",
        youtubeLink: "#"
    },
    {
        id: "botlabs-drone-shows",
        title: "Drone Art Shows (2 Years)",
        subtitle: "Botlabs",
        category: "Events & Shows",
        youtubeLink: "#"
    },
    {
        id: "city-icons-collection",
        title: "City Icons Collection",
        subtitle: "Bangalore Club, Bowring Club, Kingfisher Towers, Cubbon Park, Kanteerava Stadium",
        category: "Cityscapes & Architecture",
        youtubeLink: "#"
    },
    {
        id: "schools-sports-tribute",
        title: "School Sports & Tributes",
        subtitle: "CHS, Cottons, JPVaswani",
        category: "Sports & Institutions",
        youtubeLink: "#"
    }
];
