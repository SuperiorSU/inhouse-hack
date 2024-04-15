import React, { useState } from "react";

const numberofmembers = (members) => {
  let arr = [];
  for (let i = 0; i < members; i++) {
    arr.push(
      <input
        type="text"
        name={`member${i + 1}`}
        placeholder={`Member ${i + 1} Name*`}
        className="block w-full text-white p-2 mb-4 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
        required
      />
    );
  }
  return arr;
};

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    admission: "",
    batch: "",
    email: "",
    teamlead: "",
    members: "2",
  });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const members = numberofmembers(parseInt(form.members) - 1);
  return (
    <div className="flex justify-center items-center mb-10 py-7 gap-5 bg-gradient-to-b from-[#231451] to-[#04081a]">
      <div className="">
        <h2 className="text-6xl text-gray-400 font-bold p-3">Still Not<br/>Registered?</h2>
      </div>
      <div className=" bg-white/5 backdrop-blur-md py-5 h-[max-content] w-[50%] rounded-md right-0 px-5 border-2 border-gray-600">
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
            className="block w-full text-white p-2 mb-4 bg-gray-500/5 rounded-md border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
            onChange={changeHandler}
            required
          >
            <option className=" bg-black/85" value="">
              Select Batch*
            </option>
            <option className=" bg-black/85" value="uniques 2.0">
              uniques 2.0
            </option>
            <option className="bg-black/85" value="uniques 3.0">
              uniques 3.0
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
              <button className="block w-full text-white p-2 mb-4 bg-[#0b112a] hover:bg-blue-500 rounded-md focus:outline-none">
                Register
              </button>
            )}
        </form>
      </div>
    </div>
  );
};

export default Form;
