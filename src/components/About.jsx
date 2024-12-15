import { useState } from "react";
import bannerImage from "../assets/bi2.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: `Java Backend Developer`,
    desc1: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                dicta modi suscipit culpa libero `,
    desc2: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi deserunt odit nesciunt consectetur voluptatum dolores
                quis quae fugiat, iusto error voluptates. Officiis rem
                distinctio consequatur quo rerum! Quibusdam, minus esse.`,
    actionButton: {
      title: "Read More..",
      link: "/remore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 py-16">
        <h1 className=" text-center pb-16 text-4xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image-container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={bannerImage}
              alt="Prajjwal Singh Rathore"
            />
          </div>
          {/* text-container */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-4xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <br />
              <a
                href={data.actionButton.link}
                className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg"
              >
                {data.actionButton.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
