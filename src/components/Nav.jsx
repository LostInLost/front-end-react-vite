import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [click, setClick] = useState(false);
  const path = useLocation();
  const HandleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20 ">
          <Link to={'/'}>
            <li className={'my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ' + (path.pathname == '/' ? 'bg-slate-800' : '')}>Home</li>
          </Link>
          <Link to={'/projects'}>
            <li className={'my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ' + (path.pathname == '/projects' ? 'bg-slate-800' : '')}>Projects</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <nav className="bg-slate-900 ">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
          <div className="flex item-center flex-1">
            <span className="text-3xl font-bold">Lasinto.</span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to={'/'}>
                  <li className={'hover:text-fuchsia-500 transition border-b-2  border-slate-900 hover:border-fuchsia-600 cursor-pointer ' + (path.pathname == '/' ? 'border-fuchsia-600 text-fuchsia-500' : '')}>Home</li>
                </Link>
                <Link to={'/projects'}>
                  <li className={'hover:text-fuchsia-500 transition border-b-2  border-slate-900 hover:border-fuchsia-600 cursor-pointer ' + (path.pathname == '/projects' ? 'border-fuchsia-600 text-fuchsia-500' : '')}>Projects</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>{click && content}</div>

          <button className="block sm:hidden transtion" onClick={HandleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
      <div className="bg-slate-900">
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
