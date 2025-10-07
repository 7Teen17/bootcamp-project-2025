type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "First Blog Post",
    date: "10-7-2025",
    description: "This is my first blog post on this website.",
    image: "blog1.png",
    imageAlt: "Image of Blog",
    slug: "first-blog-post",
  },
  {
    title: "Second Blog Post",
    date: "10-8-2025",
    description: "And this is the second post.",
    image: "blog2.png",
    imageAlt: "Image of Second Blog",
    slug: "second-blog-post",
  },
];
