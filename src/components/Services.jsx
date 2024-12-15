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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              sed velit sequi amet quod at ea odit. Enim, porro sint?
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer  hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl spacw-y-4">
            <i class="  text-2xl fa-brands fa-android"></i>
            <h1 className="text-4xl">Android Development</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              sed velit sequi amet quod at ea odit. Enim, porro sint?
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full service2 shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer  hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service3 spacw-y-4">
            <i class="  text-2xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              sed velit sequi amet quod at ea odit. Enim, porro sint?
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
