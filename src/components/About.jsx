import { useState } from "react";
import bannerImage from "../assets/prajjwal2.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: `Java Backend Developer`,
    desc1: ` As a Java Backend Developer, I specialize in creating scalable, high-performance backend systems using Core Java, Spring Framework, and Hibernate. I focus on building efficient RESTful APIs and microservices while leveraging cloud technologies like AWS and Docker. With a commitment to clean code and reliable solutions, I aim to develop maintainable systems that help businesses achieve their goals.

`,
    desc2: ``,
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
