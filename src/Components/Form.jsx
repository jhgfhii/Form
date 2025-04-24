import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  console.log("name-->>",name,phone,email,country)

  const NameHandle = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const PhoneHandle = (e) => {
    const value = e.target.value;
    setPhone(value);
  };
  const EmailHandle = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const CountryHandle = (e) => {
    const value = e.target.value;
    setCountry(value);
  };

 

  return (
    <div>
      <div className="m-50 mr-50 border-2 border-[#E5E5E5] w-90 h-130 bg-[#E5E5E5] rounded-3xl">
        <div className="border-2 rounded-full size-16 bg-white mt-7 ml-10">
          <p className="text-red-500 font-bold mt-2 ml-3">UIUX</p>
          <div className="text-[#686868] font-bold ml-3">Trend</div>
        </div>
        <div className="flex justify-center -mt-15 ml-5 text-5xl font-bold text-[#686868]">
          Form-B
        </div>
        <form>
          {" "}
          <div className="ml-5 mt-5 text-2xl font-bold text-[#686868]">
            Name*
            <div>
              <input
                type="text"
                onChange={NameHandle}
                className="mb-2 border-2 rounded-4xl"
              ></input>
            </div>
          </div>
        </form>

        <form>
          {" "}
          <div className="ml-5 text-2xl font-bold text-[#686868]">
            Phone*
            <div>
              <input
                type="number"
                onChange={PhoneHandle}
                className="mb-2 border-2 rounded-4xl"
              ></input>
            </div>
          </div>
        </form>

        <form>
          {" "}
          <div className="ml-5 text-2xl font-bold text-[#686868]">
            Email*
            <div>
              <input
                type="email"
                onChange={EmailHandle}
                className="mb-2 border-2 rounded-4xl"
              ></input>
            </div>
          </div>
        </form>

        <form>
          {" "}
          <div className="ml-5 mb-4 text-2xl font-bold text-[#686868]">
            Country
            <div>
              <input
                onChange={CountryHandle}
                className="border-2 rounded-4xl"
                type="text"
              ></input>
            </div>
          </div>
        </form>
        <div>
          <button className="text-white bg-black font-bold text-2xl border-2 ml-15 w-60 h-20  rounded-4xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
