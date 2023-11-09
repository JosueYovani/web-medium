const feeds = [
  {
    id: "001",
    img_cover:
      "https://miro.medium.com/v2/resize:fit:700/0*GLCTpKGyLmPpudPy.png",
    title: "The Netflix Effect",
    description:
      "Despite receiving scant coverage, the biggest business stories last week were Netflix and Meta’s quarterly earnings. The numbers",
    content: "",
    date_feed: "Nov 2",
    author: {
      name: "Scott Galloway",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/1*UmXe4ATjCtj3OENRaZnIpw.jpeg",
      books: ["1"],
    },
    published: {
      category: "",
      img_brand: "",
    },
    topics: ["No Mercy No Malice"],
    claps: 5,
    time_read: 9,
    member_story: false,
    comments: [],
  },
  {
    id: "008",
    img_cover:
      "https://miro.medium.com/v2/resize:fit:700/1*bmcUlaL3lEvm9DOhdvULcQ.jpeg",
    title: "What I’m Reading on the Rise of Artificial Intelligence",
    description:
      "Earlier this week, President Biden issued an executive order on artificial intelligence — a breakthrough technology that has the...",
    content: "",
    date_feed: "Nov 3",
    author: {
      name: "Barack Obama",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/1*AwBz4NW9_M45J-sBlmH-lA.png",
      books: ["1"],
    },
    published: {
      category: "",
      img_brand: "",
    },
    topics: [],
    claps: 5,
    time_read: 2,
    member_story: false,
    comments: [{ comment: "hola" }, { comment: "koder" }],
  },
  {
    id: "007",
    img_cover:
      "https://miro.medium.com/v2/resize:fit:700/1*lgWp1uYIo4i4Y62dBBhGvA.png",
    title: "How I scaled Amazon’s Load Generator to run on 1000s of machines",
    description: "Moving from a single-host process to a distributed system",
    content: "",
    date_feed: "Oct 25",
    author: {
      name: "Carlos Arguelles",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/1*DUjBSZ8vCnqtthWwHubL9A.png",
      books: [],
    },
    published: {
      category: "",
      img_brand: "",
    },
    topics: ["Amazon"],
    claps: 5,
    time_read: 8,
    member_story: false,
    comments: [],
  },
  {
    id: "006",
    img_cover: "https://miro.medium.com/v2/resize:fit:700/0*5hJgvT1vt6PZRMd3",
    title: "Earworms and Anhedonia",
    description: "Musings on a musical haunting",
    content: "",
    date_feed: "Oct 18",
    author: {
      name: "Meredith Rodriguez",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/0*fHBQqjAMfAyJamtM.jpg",
      books: [],
    },
    published: {
      category: "The Riff",
      img_brand:
        "https://miro.medium.com/v2/resize:fit:700/1*dG_T_tBLzdhZU-45_5r_NQ.png",
    },

    topics: ["Music"],
    claps: 5,
    time_read: 6,
    member_story: true,
    comments: [],
  },
  {
    id: "005",
    img_cover:
      "https://miro.medium.com/v2/resize:fit:700/1*IraA41cyapCYG2vMH2Tvxw.png",
    title: "How might we build trust in an untrusting world?",
    description:
      "Considering the challenge of polarization in digital societies",
    content: "",
    date_feed: "Oct 21",
    author: {
      name: "Richard Gingras",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/0*RMm9-Ve-PGeAt4rT.jpg",
      books: [],
    },
    published: {
      category: "",
      img_brand: "",
    },
    topics: ["Polarization"],
    claps: 5,
    time_read: 10,
    member_story: false,
    comments: [],
  },
  {
    id: "004",
    img_cover:
      "https://miro.medium.com/v2/resize:fit:700/1*2RRtiHusrykTmfM7FcUffw.jpeg",
    title: "What We Think About When We Think About Red Lobster",
    description: "The comfort of chain restaurants",
    content: "",
    date_feed: "Oct 22",
    author: {
      name: "Adeline Dimond",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/1*c7aVx5yznXS4_CMNvjGZiA@2x.jpeg",
      books: [],
    },
    published: {
      category: "Sybarite",
      img_brand:
        "https://miro.medium.com/v2/resize:fit:700/1*ROtLAgltIdICq2DTRUMKqg.jpeg",
    },

    topics: ["Read Lobster"],
    claps: 4,
    time_read: 27,
    member_story: true,
    comments: [],
  },
  {
    id: "003",
    img_cover: "https://miro.medium.com/v2/resize:fit:700/0*dZJ-oQFBgymsAleq",
    title: "18 Life Lessons I’d Give My 18-Year-Old Self",
    description:
      "Dating success, making friends, money and dealing with assholes…",
    content: "",
    date_feed: "Oct 6",
    author: {
      name: "Scott H. Young",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/2*88Qdf_PKsdTYMipqHcYWtA.jpeg",
      books: ["1"],
    },
    published: {
      category: "Mind Cafe",
      img_brand:
        "https://miro.medium.com/v2/resize:fill:20:20/1*8ndrLe4Ldljn8ba1A-FbFA.png",
    },

    topics: ["Self"],
    claps: 3,
    time_read: 5,
    member_story: true,
    comments: [],
  },
  {
    id: "002",
    img_cover:
      "https://miro.medium.com/v2/resize:fit:700/1*vXJTInWAy3Gu1kOJNm-c-Q.png",
    title: "React render multiple layouts with react-router-dom v6",
    description:
      "Step-by-step guide to render multiple layouts in React using the new react-router-dom version 6.",
    content: "",
    date_feed: "Jan 31",
    author: {
      name: "Najm Eddine Zaga",
      avatar:
        "https://miro.medium.com/v2/resize:fit:700/1*d8qtMz8dfIvQD8GHlAiCRA.png",
      books: [],
    },
    published: {
      category: "",
      img_brand: "",
    },
    topics: [],
    claps: 2,
    time_read: 9,
    member_story: false,
    comments: [],
  },
];

export default feeds;
