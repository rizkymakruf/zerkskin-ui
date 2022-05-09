import { useContext, useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("open value", open);
  }, [open]);

  return (
    <>
      <div className="absolute justify-between items-center w-full bg-black bg-opacity-70 bg-blur-30 flex md:py-3.5 md:px-20 fixed top-0 z-50">
        {/* menu */}
        <div className="flex gap-x-4 justify-center items-center z-20">
          <button onClick={() => setOpen(!open)} href="#">
            <div className="w-10 h-10 bg-white hover:bg-green-400 rounded-full justify-center items-center flex">
              <i class="fa-solid fa-bars text-black md:text-lg"></i>
            </div>
          </button>
        </div>
        {/* logo & branding */}
        <div className="flex gap-x-2">
          <div className="flex justify-center items-center gap-x-1">
            <span className="font-light text-white md:text-xl tracking-wider">
              ZERSKIN
            </span>
            <span className="text-white font-bold md:text-xl">ID</span>
          </div>
        </div>
      </div>

      {/* side content */}
      <div
        className={`duration-1000 w-2/6 h-screen bg-black bg-opacity-70 drop-shadow-lg top-0 fixed ${
          open ? "-translate-y-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 pl-8 md:pt-32 text-white text-md justify-start absolute z-50">
          <div className="flex gap-x-5">
            <div className="text-lg font-bold text-green-400 hover:text-white">
              Masuk
            </div>
            <div className="w-20 text-lg font-semibold border-2 border-green-400 text-white rounded-full text-center hover:border-white hover:text-green-400">
              Daftar
            </div>
          </div>
          <a>
            <div>TopUp</div>
          </a>
          <a>
            <div>Voucher</div>
          </a>
          <a>
            <div>Jasa Joki</div>
          </a>
          <a>
            <div>Reseller</div>
          </a>
        </div>
      </div>
    </>
  );
}
