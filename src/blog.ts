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
    image: "number1.webp",
    imageAlt: "Image of Blog",
    slug: "first-blog-post",
  },
  {
    title: "Second Blog Post",
    date: "10-8-2025",
    description: "And this is the second post.",
    image: "number2.webp",
    imageAlt: "Image of Second Blog",
    slug: "second-blog-post",
  },
  {
    title: "Third Blog Post",
    date: "10-13-2025",
    description: "And this is the third post.",
    image: "number3.webp",
    imageAlt: "Image of Third Blog",
    slug: "third-blog-post",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const post = document.createElement("a");
  post.href = "blog/" + blog.slug + ".html";
  post.classList.add("blog-post");

  const image = document.createElement("img");
  image.classList.add("blog-img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  post.append(image);

  const blogText = document.createElement("div");
  blogText.classList.add("blog-text");

  const title = document.createElement("h1");
  title.textContent = blog.title;
  blogText.append(title);

  const description = document.createElement("h2");
  description.textContent = blog.description;
  blogText.append(description);

  const date = document.createElement("p");
  date.textContent = blog.date;
  blogText.append(date);

  post.append(blogText);

  blogContainer?.append(post);
});
