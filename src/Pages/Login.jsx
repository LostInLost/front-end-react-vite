import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function TextField({type}) {
  //     return (
  //         <input type={type} required value={email} onChange={(e) => setEmail(e.target.value)} className="mx-3 my-1 outline outline-1 w-[200px]" />
  //     )
  // }
  const Button = ({ children, type }) => {
    return (
      <button
        type={type}
        className={
          "transition transition-150 ease-in-out bg-blue-600 rounded-lg p-1 text-white hover:bg-blue-500 "
        }
      >
        {children}
      </button>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selamat! Anda login sebagai ${email}`);
  };
  return (
    <>
      <div className="container mx-auto font-mono">
        <div className="flex justify-start">
          <h5>Already registered? Login here</h5>
        </div>
        <div className="flex">
          <div className="flex flex-col outline outline-2 outline-slate-500 bg-blue-700 my-3 w-[500px] h-[200px]">
            <div className="flex justify-end my-1 mx-1">Email</div>
            <div className="flex justify-end mx-1 my-1">Password</div>
          </div>
          <div className="flex flex-col outline outline-2 outline-slate-500 my-3 w-[500px] h-[200px]">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <div>
                  <input
                    type={"email"}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mx-3 my-1 outline outline-1 w-[200px]"
                  />
                </div>
                <div>
                  <input
                    type={"password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mx-3 my-1 outline outline-1 w-[200px]"
                  />
                </div>
                <div className="flex">
                  <div>
                    <input
                      id="chkbox"
                      type="checkbox"
                      className="bg-slate-400 hover:bg-slate-500 mx-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="chkbox">Save my Email and Password</label>
                  </div>
                </div>
                <div className="flex mx-3">
                  <div className="mx-1">
                    <Button type="submit">Continue</Button>
                  </div>
                  <div className="mx-1">
                    <Button type="reset">Reset </Button>
                  </div>
                </div>
                <div>
                  <p>
                    Not have account yet?{" "}
                    <Link
                      to={"/register"}
                      className="text-blue-500 hover:text-blue-400"
                    >
                      <u>Register</u>
                    </Link>{" "}
                    Here
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
