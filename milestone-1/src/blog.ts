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
    title: "The College Life",
    date: "(10/21/24)",
    description: "My experience in college so far",
    image: "../sunset.JPG",
    imageAlt: "imagealt 1",
    slug: "../blog1.html",
  },
  {
    title: "Ice Spice Starbucks",
    date: "(10/23/24)",
    description: "Iced pumpskin spice chai review",
    image: "../icespice.JPG",
    imageAlt: "imagealt 2",
    slug: "../blog2.html",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const a = document.createElement("a");
  p.innerText = blog.description;
  h1.innerText = blog.title + " " + blog.date;
  img.setAttribute("src", blog.image);
  a.setAttribute('href', blog.slug);
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);
  blogContainer?.appendChild(a);
  blogContainer?.appendChild(div);
  a.appendChild(div);
  blogContainer?.classList.add('blogContainer')
  img.classList.add('img');
  p.classList.add("blogP")
  h1.classList.add("blogH")
  a.classList.add("blogA")
  div.classList.add("blogD")
});


