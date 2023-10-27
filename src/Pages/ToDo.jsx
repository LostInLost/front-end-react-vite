import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid4 } from "uuid";
import { useEffect, useState } from "react";

export default function ToDo() {
  const toDoData = JSON.parse(localStorage.getItem("toDo"));
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [toDoList, setToDo] = useState(toDoData ?? []);

  const handleSubmit = () => {
    const data = {
      id: uuid4(),
      name: nama,
      date: tanggal,
      isCompleted: false
    };
    setToDo([...toDoList, data]);
    localStorage.setItem("toDo", JSON.stringify([...toDoList, data]));
  };

  const checkToDo = (id) => {
    let data = toDoList.filter((data) => data.id == id)
    let newData = toDoList.filter((data) => data.id !== id)
    data[0].isCompleted = true
    setToDo([...newData, data[0]])
  };

  const deleteToDo = async (id) => {
    const data = toDoList.filter((data) => data.id !== id);
    await setToDo(data);
  };

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex justify-center mt-3">
          <div className="flex flex-col">
            <div className="card shadow-lg px-3 py-1 w-[300px]  rounded">
              <h1 className="text-[14px] text-center font-bold">
                TO DO LIST MATA KULIAH FRONTEND
              </h1>
            </div>
            <div className="card shadow-lg px-3 py-1 w-[300px] rounded mt-3">
              <div className="">
                <h1 className="text-[14px] text-center font-thin">
                  Masukkan To Do List Anda
                </h1>
              </div>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="grid grid-cols-1 gap-5 mt-5">
                  <div className="input">
                    <label className="font-thin text-[12px] ">
                      Nama Kegiatan
                    </label>
                    <input
                      type="text"
                      value={nama}
                      required
                      onChange={(e) => setNama(e.target.value)}
                      className="rounded px-3  shadow-lg bg-slate-100 w-full outline outline-0 focus:outline-slate-300 focus:outline-2"
                    />
                  </div>
                  <div className="input">
                    <label className="font-thin text-[12px] ">
                      Tanggal Kegiatan
                    </label>
                    <input
                      type="date"
                      value={tanggal}
                      required
                      onChange={(e) => setTanggal(e.target.value)}
                      className="rounded px-3  shadow-lg bg-slate-100 w-full outline outline-0 focus:outline-slate-300 focus:outline-2"
                    />
                  </div>
                  <div className="input text-center mb-3">
                    <button className="text-center bg-blue-600 rounded text-white px-3 py-1 shadow-md shadow-blue-400">
                      Tambahkan
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="card shadow-lg px-3 py-1 w-[300px] rounded mt-3">
              <div className="">
                <h1 className="text-[14px] text-center font-thin">
                  To Do List Anda
                </h1>
              </div>
              {toDoList &&
                toDoList
                  ?.filter(data => data.isCompleted == false).map((data, i) => (
                    <>
                      <div
                        className="card shadow-md rounded bg-slate-200 p-3 m-3"
                        key={i}
                      >
                        <div className="flex flex-col">
                          <h1 className="text-[14px] font-bold text-blue-600">
                            {data.name}
                          </h1>
                          <span className="text-thin text-[12px] ">
                            ( {data.date} )
                          </span>
                          <div className="flex gap-3   ">
                            <button
                              onClick={() => checkToDo(data.id)}
                              className="px-2 bg-green-600 rounded text-white shadow-md shadow-green-600"
                            >
                              <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button
                              onClick={() => deleteToDo(data.id)}
                              className="px-2 bg-red-600 rounded text-white shadow-md shadow-red-600"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
            <div className="card shadow-lg px-3 py-1 w-[300px] rounded mt-3">
              <div className="">
                <h1 className="text-[14px] text-center font-thin">
                  List To Do yang sudah anda lakukan
                </h1>
              </div>
              {toDoList &&
                toDoList
                  ?.filter((data) => data.isCompleted == true)
                  .map((data, i) => (
                    <>
                      <div
                        className="card shadow-md rounded bg-slate-200 p-3 m-3"
                        key={i}
                      >
                        <div className="flex flex-col">
                          <h1 className="text-[14px] font-bold text-green-500">
                            {data.name}
                          </h1>
                          <span className="text-thin text-[12px] text-green-500">
                            ( {data.date} )
                          </span>
                          <div className="flex gap-3   ">
                            <button
                              onClick={() => deleteToDo(data.id)}
                              className="px-2 bg-red-600 rounded text-white shadow-md shadow-red-600"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
