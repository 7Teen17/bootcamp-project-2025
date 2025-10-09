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

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const post = document.createElement("div");
  post.classList.add("center");

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  post.append(image);

  const title = document.createElement("h1");
  title.textContent = blog.title;
  post.append(title);

  const description = document.createElement("h2");
  description.textContent = blog.description;
  post.append(description);

  const date = document.createElement("p");
  date.textContent = blog.date;
  post.append(date);
});
