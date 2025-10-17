export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "The Creation of Color Jumper",
    date: "10-7-2025",
    description: "How the idea was born for my mobile game.",
    image: "public/bootsplash.png",
    imageAlt: "Image of Color Jumper",
    slug: "color-jumper",
  },
  {
    title: "My Idea for a New App",
    date: "10-8-2025",
    description: "A new app idea I have; maybe one day I'll make it.",
    image: "public/musicnote.webp",
    imageAlt: "Image of New App",
    slug: "new-app",
  },
  {
    title: "Calculus 3 Class",
    date: "10-11-2025",
    description: "What we have learned so far in Calculus 3.",
    image: "public/calc3.webp",
    imageAlt: "Image of Taylor Series",
    slug: "calculus-3",
  },
  {
    title: "Milestone 1 of Hack4Impact",
    date: "10-13-2025",
    description: "My thoughts and experiences with Milestone 1.",
    image: "public/milestone1.png",
    imageAlt: "Image of Third Blog",
    slug: "milestone-1",
  },
];

export default blogs;
