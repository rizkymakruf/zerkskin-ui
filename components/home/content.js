export default function Content() {
  return (
    <>
      {/* container */}
      <div className="-translate-y-10 md:-translate-y-32">
        {/* Headding */}
        <div className="flex lg:mx-[58px] md:mx-[58px] justify-between mb-1 lg:mb-2 lg:text-md ml-3.5">
          <div className="font-bold text-black mb-1 lg:mb-2 text-md lg:text-lg">
            Product Terlaris
          </div>
        </div>
        {/* menu */}
        <div className=" flex md:grid md:grid-cols-7 gap-2 md:gap-3 md:mx-[58px] md:overflow-hidden overflow-hidden overflow-x-scroll ml-2">
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/ml.png"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/ff.png"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/pubg.png"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/gs.png"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/valo.jpg"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/codm.jpg"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
          <div className="flex-none">
            <div className="">
              <img
                className="w-32 h-32 rounded-t-md"
                src="static/images/lol.jpg"
              />
            </div>
            <a href="#">
              <div className="bg-black bg-opacity-80 w-32 h-10 rounded-b-md flex text-white font-semibold justify-center items-center ">
                TopUp
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
