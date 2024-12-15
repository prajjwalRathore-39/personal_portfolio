import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl font-bold text-center">My Expertise</h1>

        {/* box-section */}
        <div
          style={{
            backgroundImage: `URL(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white  text-center justify-center">
            {/* text-container */}
            <div className="w-2/3 space-y-3">
              {" "}
              <h1 className="text-4xl font-semibold">
                {" "}
                I love these{" "}
                <em>
                  <strong>technologies</strong>
                </em>
              </h1>
              <p>
                Technology is the backbone of innovation, enabling developers
                like me to build robust, scalable, and cutting-edge solutions.
                The tools and frameworks I’ve explored form the pillars of my
                expertise and passion in the software development landscape.
              </p>
              <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills-container */}
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Hibernate
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                ORM tool
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Spring Boot framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                NextJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                EC2
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                AWS Cloud
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Linux
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Docker
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full  hover:bg-orange-500 cursor-pointer">
                Kubernetes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
