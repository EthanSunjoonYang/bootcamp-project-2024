export interface Project {
    title: string;
    description: string;
    image: string;
    slug: string;
  };

const projects: Project[] = [
    {
        title: "Ethan Yang's Portfolio Website",
        description: "A website about me!",
        image: "website.JPG",
        slug: "/",
    },
];

export default projects; 