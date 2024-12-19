export interface Blog {
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
        image: "sunset.JPG",
        imageAlt: "imagealt 1",
        slug: "../blog1.html",
    },
    {
        title: "Ice Spice Starbucks",
        date: "(10/23/24)",
        description: "Iced pumpskin spice chai review",
        image: "icespice.JPG",
        imageAlt: "imagealt 2",
        slug: "../blog2.html",
    },
];

export default blogs; 