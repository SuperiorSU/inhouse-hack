import axios from "axios";
import React, { useEffect, useState } from "react";

const numberofmembers = (members , changeHandler) => {
  let arr = [];
  for (let i = 0; i < members; i++) {
    arr.push(
      <input
        type="text"
        name={`member${i + 1}`}
        onChange={changeHandler}
        placeholder={`Member ${i + 1} Name*`}
        className="block w-full text-white p-2 mb-4 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
        required
      />
    );
  }
  return arr;
};

function Form() {
  const [form, setForm] = useState({
    name: "",
    admission: "",
    batch: "",
    email: "",
    teamlead: "",
    members: "2",
    member1: "",
    member2: "",
    member3: "",
  });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };
  const submitFunction=  async () => {
    console.log(form)
    await axios.post("http://127.0.0.1:4000/api//addUser",form).then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // useEffect(()=>{
  //   submitFunction()
  // }, [form]);
  // console.log(form);
  
    
  const members = numberofmembers(parseInt(form.members) - 1 , changeHandler);
  return (
    <div id="contact" className="flex justify-center flex-wrap items-center mb-10 py-7 gap-5 bg-gradient-to-b from-[#04081add] to-[#04081a] px-3">
      <div className="">
        <h2 className="lg:text-6xl md:text-6xl font-serif sm:text-6xl text-4xl font-bold text-gray-400 p-3">Still Not<br/>Registered?</h2>
      </div>
      <div className=" bg-white/5 backdrop-blur-md my-5 py-5 sm:py-0 sm:my-0 h-[max-content] w-[100%] sm:w-[50%] rounded-md right-0 px-5 border-2 border-gray-600">
        <form>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="Name*"
            className="block w-full text-white p-2 mb-4 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="admission"
            onChange={changeHandler}
            placeholder="Admission No.*"
            className="block w-full text-white p-2 mb-4 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
          <select
            name="batch"
            className="block w-full text-white p-2 mb-4 bg-gray-500/5 rounded-sm border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
            onChange={changeHandler}
            required
          >
            <option className=" bg-black/85 py-3" value="">
              Select Batch*
            </option>
            <option className=" bg-black/85 py-3" value="uniques 2.0">
              uniques 2.0
            </option>
            <option className="bg-black/85 py-3" value="uniques 3.0">
              uniques 3.0
            </option>
            <option className="bg-black/85 py-3" value="uniques 3.0">
              Super60
            </option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            onChange={changeHandler}
            className="block w-full text-white p-2 mb-4 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              name="teamlead"
              placeholder="Team Lead*"
              onChange={changeHandler}
              className="block w-full text-white p-2 mb-4 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
            <select
              name="members"
              className="w-[90px] block  text-white p-2 mb-4 bg-gray-500/5 rounded-md border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
              onChange={changeHandler}
              required
            >
              <option className=" bg-black/85" value="2">
                2 <span className="text-sm">(including lead)</span>
              </option>
              <option className="bg-black/85" value="3">
                3 <span className="text-sm">(including lead)</span>
              </option>
              <option className="bg-black/85" value="4">
                4 <span className="text-sm">(including lead)</span>
              </option>
            </select>
          </div>
          {
            // Members
            members.map((member) => member)
          }
          {form.name &&
            form.admission &&
            form.batch &&
            form.email &&
            form.teamlead &&
            form.members && (
              <button onClick={submitFunction} className="block w-full text-white p-2 mb-4 bg-[#0b112a] hover:bg-blue-500 rounded-md focus:outline-none">
                Register
              </button>
            )}
        </form>
      </div>
    </div>
  );
};
export default Form;
