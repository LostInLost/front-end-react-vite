import { useState } from 'react';
import Swal from 'sweetalert2';

export default function FormDua() {
  const [nama, setNama] = useState('');
  const [noHp, setNoHp] = useState('');
  const [npm, setNpm] = useState('');
  const [tingkat, setTingkat] = useState('');
  const [semester, setSemester] = useState('');
  const [email, setEmail] = useState('');
  const [departemen, setDepartemen] = useState('');
  const [tempat, setTempat] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [alamat, setAlamat] = useState('');
  const [pasPhoto, setPasPhoto] = useState(null);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    // didOpen: (toast) => {
    //   toast.addEventListener('mouseenter', Swal.stopTimer)
    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
    // }
  });
  const onSumbit = (e) => {
    e.preventDefault();
    if (!pasPhoto)
      return Swal.fire({
        icon: 'error',
        title: 'Berkas Wajib Diupload!',
      });
    Swal.fire({
      icon: 'success',
      title: 'Berhasil Dibuat!',
      html:
        `
        <p>Nama : ${nama}</p>` +
        `<p>Email : ${email}</p>` +
        `<p>No HP : ${noHp} </p>` +
        `<p>NPM : ${npm} </p>` +
        `<p>Tempat/Tanggal Lahir : ${tempat + '/' + tanggalLahir}</p>` +
        `<p>Alamat : ${alamat}</p>` +
        `<p>Tingkat/Semester : ${tingkat}/${semester}</p>`,
      imageUrl: URL.createObjectURL(pasPhoto),
      imageHeight: 300,
      imageWidth: 200,
    });
  };

  const onChangeFile = (e) => {
    setPasPhoto(e.target.files[0]);
    if (!e.target.files[0])
      return Toast.fire({
        icon: 'error',
        title: 'File not uploaded!',
      });
    return Toast.fire({
      icon: 'success',
      title: 'File Uploaded!',
    });
  };
  return (
    <>
      <body className=" bg-slate-200 h-screen">
        <div className="flex justify-center py-3">
          <div className="shadow-lg p-5 rounded bg-white w-[500px]">
            <div className="mb-3">
              <h1 className="font-poppins text-xl">Form Page</h1>
            </div>
            <form action="" onSubmit={onSumbit}>
              <div className="grid grid-cols-2 gap-3">
                <div className="input">
                  <div className="flex flex-col">
                    <label htmlFor="#nama " className="font-poppins">
                      Email
                    </label>
                    <input
                      required
                      placeholder="Ketik disini..."
                      id="Nama"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>

                <div className="input">
                  <div className="flex flex-col">
                    <label htmlFor="#nama " className="font-poppins">
                      Nama
                    </label>
                    <input
                      required
                      id="nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Ketik disini..."
                      type="text"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input ">
                  <div className="flex flex-col">
                    <label htmlFor="#alamat" className="font-poppins">
                      NPM
                    </label>
                    <input
                      required
                      placeholder="Ketik disini..."
                      id="Nama"
                      value={npm}
                      onChange={(e) => setNpm(e.target.value)}
                      type="text"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input ">
                  <div className="flex flex-col">
                    <label htmlFor="#no-hp" className="font-poppins">
                      No. HP
                    </label>
                    <input
                      required
                      placeholder="Ketik disini..."
                      id="Nama"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      type="text"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="col-span-2 w-full">
                  <h3 className="font-poppins">Tempat/Tanggal Lahir</h3>
                </div>

                <div className="col-span-2">
                  <div className="flex">
                    <input
                      required
                      id="Tempat"
                      value={tempat}
                      onChange={(e) => setTempat(e.target.value)}
                      type="text"
                      placeholder="Tempat"
                      className="transition ease-in-out duration-300 
                      w-full
                    rounded-l-md outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-[5px]"
                    />
                    <input
                      required
                      id="tanggal-lahir"
                      value={tanggalLahir}
                      onChange={(e) => setTanggalLahir(e.target.value)}
                      type="date"
                      placeholder="Tempat"
                      className="transition ease-in-out duration-300 
                      p-1
                    rounded-r-md outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    w-full
                    "
                    />
                  </div>
                </div>

                {/* <input
                    type="text"
                    className="transition ease-in-out duration-300 
                    rounded-l-md outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1 "
                  />
                  <input
                    type="text"
                    className="transition ease-in-out duration-300 
                    rounded-r-md outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                  /> */}

                <div className="input col-span-2">
                  <div className="flex flex-col">
                    <label htmlFor="#alamat" className="font-poppins">
                      Alamat
                    </label>
                    <textarea
                      id="alamat"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Ketik disini..."
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    resize-none
                    p-1"
                    />
                  </div>
                </div>

                <div className="col-span-2 mt-5 ">
                  <h3 className="font-poppins">Tingkat/Semester</h3>
                </div>

                <div className="col-span-2">
                  <div className="flex">
                    <input
                      required
                      id="tingkat"
                      value={tingkat}
                      onChange={(e) => setTingkat(e.target.value)}
                      type="text"
                      placeholder="Tingkat"
                      className="transition ease-in-out duration-300 
                      w-full
                    rounded-l-md outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-[5px]"
                    />
                    <input
                      required
                      id="tanggal-lahir"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      type="text"
                      placeholder="Semester"
                      className="transition ease-in-out duration-300 
                      p-1
                    rounded-r-md outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    w-full
                    "
                    />
                  </div>
                </div>
                <div className="input col-span-2">
                  <div className="flex flex-col">
                    <label htmlFor="pas-photo">Pas Foto</label>
                    <div className="flex justify-center">
                      <img src={pasPhoto ? URL.createObjectURL(pasPhoto) : null} className={(pasPhoto ? 'w-[200px] h-[200px] ' : '') + 'object-cover rounded-full'} alt="" />
                    </div>
                    <input
                      required
                      type="file"
                      onChange={onChangeFile}
                      accept="image/*"
                      id="pas-photo"
                      placeholder="Ketik disini..."
                      className="block font-poppins file:rounded-full
                      file:border-0
                      file:px-3
                      file:py-1
                      file:bg-blue-100
                      file:text-blue-600
                      file:font-semibold
                      hover:file:cursor-pointer
                      hover:file:bg-blue-200
                      mt-3
                      "
                    />
                  </div>
                </div>
                <div className="col-span-2 mt-3">
                  <div className="flex justify-center">
                    <button
                      className="
                        hover:bg-blue-500
                        bg-blue-700
                        py-1
                        px-3
                        rounded-md
                        text-white
                        "
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className="
                      ml-3
                        hover:bg-blue-500
                        bg-blue-700
                        py-1
                        px-3
                        rounded-md
                        text-white
                        "
                      type='reset'
                      onClick={() => setPasPhoto(null)}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
