import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import img from '../assets/profile.png';
import fuxuan from '../assets/fuxuan.jpg';
const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center h-screen">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          {' '}
          Selamat Datang di <span className="text-fuchsia-500"> Website Lasinto.</span>
        </h1>
        <p>Saya adalah seorang orang yang akan mengorangkan orang karena orang adalah orang</p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://github.com/LostInLost" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="https://www.linkedin.com/in/affansyah-hanan-windharto-588b28276/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="https://www.instagram.com/afanhanan10/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={fuxuan} className="rounded-full object-cover max-h-[400px]" height={400} width={400} alt="" />
    </div>
  );
};

export default Banner;
