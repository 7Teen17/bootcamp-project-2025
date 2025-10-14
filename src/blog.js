var blogs = [
    {
        title: "The Creation of Color Jumper",
        date: "10-7-2025",
        description: "How the idea was born for my mobile game.",
        image: "img/bootsplash.png",
        imageAlt: "Image of Color Jumper",
        slug: "color-jumper",
    },
    {
        title: "My Idea for a New App",
        date: "10-8-2025",
        description: "A new app idea I have; maybe one day I'll make it.",
        image: "img/musicnote.webp",
        imageAlt: "Image of New App",
        slug: "new-app",
    },
    {
        title: "Calculus 3 Class",
        date: "10-11-2025",
        description: "What we have learned so far in Calculus 3.",
        image: "img/calc3.webp",
        imageAlt: "Image of Taylor Series",
        slug: "calculus-3",
    },
    {
        title: "Milestone 1 of Hack4Impact",
        date: "10-13-2025",
        description: "My thoughts and experiences with Milestone 1.",
        image: "img/milestone1.png",
        imageAlt: "Image of Third Blog",
        slug: "milestone-1",
    },
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var post = document.createElement("a");
    post.href = "blog/" + blog.slug + ".html";
    post.classList.add("blog-post");
    var image = document.createElement("img");
    image.classList.add("blog-img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    post.append(image);
    var blogText = document.createElement("div");
    blogText.classList.add("blog-text");
    var title = document.createElement("h1");
    title.textContent = blog.title;
    blogText.append(title);
    var description = document.createElement("h2");
    description.textContent = blog.description;
    blogText.append(description);
    var date = document.createElement("p");
    date.textContent = blog.date;
    blogText.append(date);
    post.append(blogText);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(post);
});
