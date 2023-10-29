import { useNavigate } from "react-router";

const Projects = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col flex-wrap gap-8 content-center max-md:hidden">
          <div className="title mx-auto">
            <h1 className="text-[36px] text-white font-bold">
              Ini adalah <label className="text-fuchsia-500">Project</label> yang sudah saya buat.
            </h1>
          </div>
          <div className="flex flex-wrap gap-5 mx-auto ">
            <div>
              <button onClick={() => navigate('/login')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Login
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/register')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Register
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/formsatu')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Formulir Satu
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/formdua')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Formulir Dua
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/todo')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form To Do
              </button>
            </div>
          </div>
        </div>

        {/* Mobile  */}
        <div className="grid grid-cols-1 gap-8 px-5 content-center md:hidden">
          <div className="">
            <h1 className="text-[24px] text-center text-white font-bold">
              Ini adalah <label className="text-fuchsia-500">Project</label> yang sudah saya buat.
            </h1>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            <div>
              <button onClick={() => navigate('/login')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Login
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/register')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Register
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/formsatu')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Formulir Satu
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/formdua')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form Formulir Dua
              </button>
            </div>
            <div>
              <button onClick={() => navigate('/todo')} className="transition outline outline-1 outline-fuchsia-500 rounded text-white px-3 py-1 hover:bg-fuchsia-500">
                Form To Do
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
