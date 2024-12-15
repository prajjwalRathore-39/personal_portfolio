import bannerImage from "../assets/bi1.png";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            reiciendis officiis quia dolor similique dicta? Modi deserunt ipsum
            veritatis, a error culpa quia, quibusdam vero fugit placeat,
            molestias ad consectetur!
          </p>
          <div className="icons-container space-x-5">
            <a className="px-1 py-4 w-16 h-16" href="">
              <i class="fa-brands text-3xl fa-facebook"></i>
            </a>
            <a className="px-1 py-4 w-16 h-16" href="">
              <i class="fa-brands text-3xl fa-instagram"></i>
            </a>
            <a className="px-1 py-4 w-16 h-16" href="">
              <i class="fa-brands text-3xl fa-youtube"></i>
            </a>
            <a className="px-1 py-4 w-16 h-16" href="">
              <i class="fa-brands text-3xl fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className="px-3 mt-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
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
