const Services = () => {
  return (
    <>
      <div className="main-container py-16">
        <h1 className="text-4xl font-bold underline text-center">
          My Services
        </h1>
        <div className="services-container space-x-5 px-6 flex mt-12">
          <div className=" cursor-pointer  hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 spacw-y-4">
            <i class="  text-2xl fa-solid fa-code"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Web Development Crafting seamless, user-friendly websites with
              dynamic functionality and responsive designs. Expertise in
              <em>
                <strong>front-end</strong>
              </em>
              ,{" "}
              <em>
                <strong>back-end</strong>
              </em>
              , and{" "}
              <em>
                <strong>full-stack</strong>
              </em>{" "}
              development to deliver innovative web solutions.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          {/* <div className="cursor-pointer  hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl spacw-y-4">
            <i class="  text-2xl fa-brands fa-android"></i>
            <h1 className="text-4xl">Android Development</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              sed velit sequi amet quod at ea odit. Enim, porro sint?
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full service2 shadow-lg">
              Check
            </button>
          </div> */}
          <div className="cursor-pointer  hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service3 spacw-y-4">
            <i class="text-4xl fa-brands fa-java"></i>
            <h1 className="text-4xl">Java Development</h1>
            <p>
              Building robust, scalable, and efficient applications using{" "}
              <em>
                <strong>Core Java</strong>
              </em>
              ,{" "}
              <em>
                <strong>Spring Framework</strong>
              </em>
              , and{" "}
              <em>
                <strong>Hibernate</strong>
              </em>
              . Expertise in object-oriented programming, web services, and
              enterprise-level solutions.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
