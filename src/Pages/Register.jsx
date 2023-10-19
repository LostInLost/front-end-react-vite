import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Button = ({ children, type }) => {
    return (
      <button type={type} className={'transition transition-150 ease-in-out bg-blue-600 rounded-lg p-1 text-white hover:bg-blue-500 '}>
        {children}
      </button>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selamat! Anda berhasil terdaftar sebagai ${email}`);
  };

  return (
    <>
      <div className="container mx-auto font-mono">
        <div className="flex justify-start">
          <h5>Already registered? Login here</h5>
        </div>
        <div className="flex">
          <div className="flex flex-col outline outline-2 outline-slate-500 bg-blue-700 my-3 w-[500px] ">
            <div className="flex justify-end my-1 mx-1">Your Name</div>
            <div className="flex justify-end mx-1 my-1">E-mail ID</div>
            <div className="flex justify-end mx-1 my-1">Alternate E-mail ID</div>
            <br />
            <div className="flex justify-end mx-1 my-1 mt-3">Your Phone</div>
            <div className="flex justify-end mx-1 my-1">Mobile Phone</div>
            <div className="flex justify-end mx-1 my-1">Your Portal Address</div>
            <div className="flex justify-end mx-1 mt-[105px] my-1">Your Portal Address</div>
            <div className="flex justify-end mx-1 my-1">Password</div>
            <div className="flex justify-end mx-1 my-1">Re-Password</div>
          </div>
          <div className="flex flex-col outline outline-2 outline-slate-500 my-3 w-[800px] ">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <div>
                  <input type={'text'} required value={name} onChange={(e) => setName(e.target.value)} className="mx-3 my-1 outline outline-1 w-[200px]" />
                </div>
                <div>
                  <input type={'email'} required value={password} onChange={(e) => setPassword(e.target.value)} className="mx-3 my-1 outline outline-1 w-[200px]" />
                </div>
                <div>
                  <input type={'email'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[200px]" />
                </div>
                <div className="flex justify-start mx-3 my-1">Country Code----------------------City Code------------------Phone Number</div>
                <div className="flex">
                  <div>
                    <input type={'text'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[220px]" />
                  </div>
                  <div>
                    <input type={'text'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[220px]" />
                  </div>
                  <div>
                    <input type={'text'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[220px]" />
                  </div>
                </div>
                <div>
                  <input type={'text'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[220px]" />
                </div>
                <div>
                  <textarea name="" id="" cols="10" rows="5" className="mx-3 my-1 outline outline-1 w-[220px]"></textarea>
                </div>
                <div>
                  <select name="" id="" className="mx-3 my-1 outline outline-1 w-[220px]">
                    <option value="#">-----Select One----</option>
                    <option value="1">Babat</option>
                    <option value="2">Kediri</option>
                    <option value="3">Sidoarjo</option>
                  </select>
                </div>
                <div>
                  <input type={'password'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[220px]" />
                </div>
                <div>
                  <input type={'password'} required  onChange={''} className="mx-3 my-1 outline outline-1 w-[220px]" />
                </div>
                <div className="flex">
                  <div>
                    <input id="chkbox" type="checkbox" className="bg-slate-400 hover:bg-slate-500 mx-3" />
                  </div>
                  <div>
                    <label htmlFor="chkbox">I accept the <Link className='text-blue-600'><u>Terms of Use</u></Link></label>
                  </div>
                </div>
                <div className="flex mx-3">
                  <div className="mx-1">
                    <Button type="submit">Continue&gt;&gt;</Button>
                  </div>
                  <div className="mx-1">
                    <Button type="reset">Reset </Button>
                  </div>
                </div>
                <div>
                  <p>
                    Already have account?{' '}
                    <Link to={'/'} className="text-blue-500 hover:text-blue-400">
                      <u>Login</u>
                    </Link>{' '}
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
