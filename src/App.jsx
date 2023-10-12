import { useState } from "react"


export default function App() {

  const [theme, setTheme] = useState('light');

  const click = () => {
    if (theme === 'light') {
      document.documentElement.style.transition = 'all 150ms';
      document.documentElement.classList.add('dark');
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light';

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark';

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme');
  }

  function Button(props) {
    return (
      <button onClick={() => click()} className="transition duration-200 ease-in-out rounded-full bg-blue-400 text-white p-2 hover:bg-blue-300 hover:-translate-y-1 active:scale-150 md:bg-blue-700">
        {props.text}
      </button>
    );
  }

  return (
    <>
      <div className="dark:bg-slate-800">
        <div className="flex justify-center dark:text-white">Hello World</div>
        <div className="flex justify-center dark:text-white  p-3" >
          <button onClick={() => click()}  className="transition duration-200 ease-in-out rounded-full bg-blue-400 text-white p-2 hover:bg-blue-300 hover:-translate-y-1 active:scale-150 md:bg-blue-700">
            Dark Mode
          </button>
          <Button text="Buy Now"></Button>
        </div>
      </div>
    </>
  );
}