
export interface Artist {
  id: string;
  name: string;
  slug: string;
  styles: string[];
  bio: string;
  portfolio: string[];
  avatar: string;
  contacts: {
    instagram?: string;
    email?: string;
    website?: string;
  };
  acceptingCommissions: boolean;
  year: string;
  major: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Maya Chen",
    slug: "maya-chen",
    styles: ["Digital Art", "Character Design", "Anime"],
    bio: "Senior studying Digital Art with a passion for character design and storytelling. I love creating vibrant worlds and memorable characters that tell stories.",
    portfolio: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500"
    ],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    contacts: {
      instagram: "https://instagram.com/mayachen_art",
      email: "maya.chen@vcu.edu"
    },
    acceptingCommissions: true,
    year: "Senior",
    major: "Digital Art"
  },
  {
    id: "2",
    name: "Jordan Rivera",
    slug: "jordan-rivera",
    styles: ["Abstract", "Acrylic", "Mixed Media"],
    bio: "Junior exploring abstract expressionism through bold colors and unconventional materials. My work reflects the energy and chaos of modern life.",
    portfolio: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500"
    ],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    contacts: {
      instagram: "https://instagram.com/jordanrivera_abstract",
      email: "jordan.rivera@vcu.edu",
      website: "https://jordanriveraart.com"
    },
    acceptingCommissions: false,
    year: "Junior",
    major: "Painting & Printmaking"
  },
  {
    id: "3",
    name: "Alex Thompson",
    slug: "alex-thompson",
    styles: ["Photography", "Portrait", "Street Art"],
    bio: "Sophomore photographer capturing the authentic moments of Richmond life. I believe every person has a story worth telling through my lens.",
    portfolio: [
      "https://images.unsplash.com/photo-1510414696678-2415ad8474aa"
    ],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    contacts: {
      instagram: "https://instagram.com/alexthompson_photo"
    },
    acceptingCommissions: true,
    year: "Sophomore",
    major: "Photography & Film"
  },
  {
    id: "4",
    name: "Zoe Martinez",
    slug: "zoe-martinez",
    styles: ["Sculpture", "Installation", "Ceramics"],
    bio: "Senior sculptor working with sustainable materials to create thought-provoking installations about environmental consciousness.",
    portfolio: [
      "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
    ],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    contacts: {
      email: "zoe.martinez@vcu.edu",
      website: "https://zoemartinezsculpture.com"
    },
    acceptingCommissions: true,
    year: "Senior",
    major: "Sculpture + Extended Media"
  },
  {
    id: "5",
    name: "Sam Park",
    slug: "sam-park",
    styles: ["Illustration", "Graphic Design", "Logo Design"],
    bio: "Junior illustrator and graphic designer specializing in brand identity and editorial illustration. I love solving visual problems with creative solutions.",
    portfolio: [
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0?w=500"
    ],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    contacts: {
      instagram: "https://instagram.com/sampark_design",
      email: "sam.park@vcu.edu"
    },
    acceptingCommissions: true,
    year: "Junior",
    major: "Graphic Design"
  }
];
