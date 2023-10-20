import { useState } from "react";
import Swal from "sweetalert2";
export default function FormSatu() {
    const [nama, setNama] = useState('');
    const [noHp, setNoHp] = useState('');
    const [noPekerja, setNoPekerja] = useState('');
    const [noRumah, setNoRumah] = useState('');
    const [noKantor, setNoKantor] = useState('')
    const [unit, setUnit] = useState('')
    const [departemen, setDepartemen] = useState('')
    const [tempat, setTempat] = useState('')
    const [tanggalLahir, setTanggalLahir] = useState('')
    const [alamat, setAlamat] = useState('')
    const [pasPhoto, setPasPhoto] = useState(null)
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
      })
    const onSumbit = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Berhasil Dibuat!',
            html: 
                `
                <p>Nama : ${nama}</p>` +
                `<p>No Pekerja : ${noPekerja}</p>` +
                (!noHp == false ? `<p>No HP : ${noHp} </p>` : '') +
                (!noRumah == false ? `<p>No Rumah : ${noRumah} </p>` : '') +
                (!noKantor == false ? `<p>No HP : ${noKantor} </p>` : '') +
                `<p>Unit : ${unit} </p>` +
                `<p>Departemen : ${departemen} </p>` +
                `<p>Tempat, Tanggal Lahir : ${tempat + ', ' + tanggalLahir}</p>` +
                `<p>Alamat : ${alamat}</p>`,
            imageUrl: URL.createObjectURL(pasPhoto),
        })
    }

    const onChangeFile = (e) => {
        setPasPhoto(e.target.files[0])
        if (!e.target.value) return Toast.fire({
            icon: 'error',
            title: 'File not uploaded!'
        })
        return Toast.fire({
            icon: 'success',
            title: 'File Uploaded!'
        })
    }
  return (
    <>
      <body className=" bg-slate-200 h-screen">
        <div className="flex justify-center py-3">
          <div className="shadow-lg p-5 rounded bg-white w-[500px]">
            <div className="mb-3">
              <h1 className="font-poppins text-xl">Form Page</h1>
            </div>
            <form action="" onSubmit={onSumbit}>
              <div className="grid grid-cols-2 ">
                <div className="input">
                  <div className="flex flex-col">
                    <label htmlFor="#no_pekerja " className="font-poppins">
                      No Pekerja
                    </label>
                    <input
                    placeholder="Ketik disini..."
                      id="no_pekerja"
                      value={noPekerja}
                      onChange={(e) => setNoPekerja(e.target.value)}
                      type="text"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>

                <div className="input ml-5">
                  <div className="flex flex-col">
                    <label htmlFor="#nama " className="font-poppins">
                      Nama
                    </label>
                    <input
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
                <h3 className="font-poppins text-lg mt-5 col-span-2">
                  No. Telepon
                </h3>
                <div className="input">
                  <div className="flex flex-col">
                    <input
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
                      id="no_hp"
                      placeholder="Hp."
                      type="number"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input ml-5">
                  <div className="flex flex-col">
                    <input
                      id="no_rumah"
                      value={noRumah}
                      onChange={(e) => setNoRumah(e.target.value)}
                      placeholder="Rumah"
                      type="number"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input mt-5 col-span-2">
                  <div className="flex flex-col">
                    <input
                      id="kantor"
                      value={noKantor}
                      onChange={(e) => setNoKantor(e.target.value)}
                      placeholder="Kantor"
                      type="number"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input mt-5">
                  <div className="flex flex-col">
                    <label htmlFor="#unit " className="font-poppins">
                      Unit
                    </label>
                    <input
                      id="unit"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
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
                <div className="input ml-5 mt-5">
                  <div className="flex flex-col">
                    <label htmlFor="#departemen " className="font-poppins">
                      Departemen
                    </label>
                    <input
                      id="departemen"
                      value={departemen}
                      onChange={(e) => setDepartemen(e.target.value)}
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
                <div className="col-span-2 mt-5 ">
                  <h3 className="font-poppins">Tempat, Tanggal Lahir</h3>
                </div>
                <div className="input">
                  <div className="flex flex-col">
                    <input
                      id="Tempat"
                      value={tempat}
                      onChange={(e) => setTempat(e.target.value)}
                      type="text"
                      placeholder="Tempat"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input ml-5">
                  <div className="flex flex-col">
                    <input
                      id="tanggal-lahir"
                      value={tanggalLahir}
                      onChange={(e) => setTanggalLahir(e.target.value)}
                      type="date"
                      placeholder="Tempat"
                      className="transition ease-in-out duration-300 
                    rounded outline outline-[1px] 
                    outline-slate-300 focus:outline-sky-600 drop-shadow-md 
                    focus:drop-shadow-lg
                    p-1"
                    />
                  </div>
                </div>
                <div className="input mt-5 col-span-2">
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
                <div className="input mt-5 col-span-2">
                  <div className="flex flex-col">
                    <label htmlFor="pas-photo">Pas Foto</label>
                    <img src={pasPhoto ? URL.createObjectURL(pasPhoto) : null } alt="" />
                    <input
                      type="file"
                      onChange={onChangeFile}
                      accept="image/*"
                      id="pas-photo"
                      placeholder="Ketik disini..."
                      className="block font-poppins file:rounded-full
                      file:border-0
                      file:p-1
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
