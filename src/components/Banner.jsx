import bannerImage from "../assets/prajjwal.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer.",
        "Backend Developer.",
        "Problem Solver.",
        "DSA Enthusiast.",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `URL(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first-dabba */}
      <div className=" w-full  flex items-center text-white">
        {/* text */}
        <div className="w-2/3 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className=" mt-1 text-5xl font-bold">Prajjwal Rathore</h1>
          <h2 className=" mt-1 text-3xl">
            I am a <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="mt-1">
            Hi, I’m Prajjwal Rathore! I am a passionate{" "}
            <strong>
              <em>Software Engineer,</em>
            </strong>{" "}
            with experience in developing efficient and scalable solutions using
            cutting-edge technologies. I specialize in{" "}
            <strong>backend development</strong>,
            <strong> cloud technologies</strong>, and <strong>Databases</strong>
            , with a strong focus on delivering impactful solutions. Driven by
            curiosity, I thrive on learning and pushing boundaries to create
            innovative applications that solve real-world challenges. Let's
            build something amazing together!
          </p>
          <div className="icons-container space-x-5">
            <a
              className="px-1 py-4 w-16 h-16"
              href="https://github.com/prajjwalRathore-39"
              target="_blank"
            >
              <i class="fa-brands text-3xl fa-github"></i>
            </a>
            <a
              className="px-1 py-4 w-16 h-16"
              href="https://www.instagram.com/prajjwal_rathore__/"
              target="_blank"
            >
              <i class="fa-brands text-3xl fa-instagram"></i>
            </a>
            <a
              className="px-1 py-4 w-16 h-16"
              href="https://medium.com/@prajjwalrathore39"
              target="_blank"
            >
              <i class="fa-brands text-3xl fa-medium"></i>
            </a>
            <a
              className="px-1 py-4 w-16 h-16"
              href="https://www.linkedin.com/in/prajjwal-singh-rathore-63b3101b7/?originalSubdomain=in"
              target="_blank"
            >
              <i class="fa-brands text-3xl fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className="px-3 mt-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            Let's Connect!
          </a>
        </div>
      </div>

      {/* second-dabba */}
      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-5 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
