import React, { useState } from "react";

const Secondform = () => {
  const [data, setData] = useState({
    first: "",
    last: "",
    email: "",
    contact: "",
    gender: "",
    english: false,
    math: false,
    physics: false,
    resume: null,
    url: "",
    ans: "",
    about: "",
    reset: "",
    submit: "",
  });
  const formchange = (e) => {
    // console.log(e)

    const { name, value, type, checked, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  console.log(data, "i am data");
  return (
    <div className="ml-80 mt-10 text-[#2a3636] ">
      <div className="border-2 w-190 h-255 mt-10 ml-10 shadow-2xl border-white shadow-blue-400 rounded-3xl">
        <div className="text-3xl font-bold text-green-400 ml-70 mt-10 mb-10">
          Form in React
        </div>
        <div className="ml-5 text-xl">
          <div className=" font-semibold mb-2">
            <p>First Name*</p>
            <form>
              <input
                type="text"
                name="first"
                onChange={formchange}
                placeholder="Enter first Name"
                className="border-2 w-180 h-8 border-[#8a9494]"
              />
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Last Name*</p>
            <form>
              <input
                type="text"
                onChange={formchange}
                name="last"
                placeholder="Enter last Name"
                className="border-2 w-180 h-8 border-[#8a9494]"
              />
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Email id*</p>
            <form>
              <input
                type="email"
                onChange={formchange}
                name="email"
                placeholder="Enter email id"
                className="border-2 w-180 h-8 border-[#8a9494]"
              />
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Contact*</p>
            <form>
              <input
                type="number"
                onChange={formchange}
                name="contact"
                placeholder="Enter phone no."
                className="border-2 w-180 h-8 border-[#8a9494]"
              />
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Gender*</p>
            <form className="ml-45">
              <label className="text-xl ml-2">
                <input
                  type="radio"
                  onChange={formchange}
                  name="gender"
                  value="male"
                  checked={data.gender === "male"}
                />
                Male
              </label>
              <label className="text-xl ml-20">
                <input
                  type="radio"
                  name="gender"
                  onChange={formchange}
                  value="female"
                  checked={data.gender === "female"}
                />
                Female
              </label>
              <label className="text-xl ml-20">
                <input
                  type="radio"
                  name="gender"
                  onChange={formchange}
                  value="other"
                  checked={data.gender === "other"}
                />
                Other
              </label>
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Your best Subject</p>
            <form className="ml-45">
              <label className="text-xl ml-2">
                <input
                  type="checkbox"
                  name="english"
                  onChange={formchange}
                  value="english"
                />
                English
              </label>
              <label className="text-xl ml-20">
                <input
                  type="checkbox"
                  name="math"
                  onChange={formchange}
                  value="math"
                />
                Math
              </label>
              <label className="text-xl ml-20">
                <input
                  type="checkbox"
                  name="physics"
                  onChange={formchange}
                  value="physics"
                />
                Physics
              </label>
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Upload Resume</p>
            <form>
              <input
                type="file"
                onChange={formchange}
                name="resume"
                placeholder=""
                className="border-2 w-180 h-8 border-[#8a9494]"
              />
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Enter URL*</p>
            <form>
              <input
                type="url"
                onChange={formchange}
                name="url"
                placeholder="Enter url"
                className="border-2 w-180 h-8 border-[#8a9494] "
              />
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <p>Select your choice</p>
            <form>
              <select
                id="select-box"
                // value={selectedOption}
                onChange={formchange}
                className="border-2 w-180 h-8 bg-[#b8bfbf] focus:outline-none"
              >
                <option value="">Select your Ans</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </form>
          </div>
          <div className="text-xl font-semibold mb-2">
            <form>
              <label className="">About</label>
              <textarea
                name="about"
                onChange={formchange}
                rows={4}
                placeholder="Tell us about yourself"
                className="w-180 border border-[#8a9494] rounded px-4 py-2 focus:outline-none"
              />
            </form>
          </div>
          <div className="text-xl font-semibold">
            <p>Submit or Reset</p>
          </div>
          <div className="flex flex-wrap">
            <input
              type="reset"
              onChange={formchange}
              onClick={() => setData({})}
              name="reset"
              className="border-2 mt-5  bg-green-400 text-white w-50 h-15 ml-10 border-[#8a9494]  rounded-2xl hover:bg-blue-500"
            />
            <input
              type="submit"
              onChange={formchange}
              name="submit"
              className="border-2 -mt-15  bg-green-400 text-white w-50 h-15 ml-100 border-[#8a9494] rounded-2xl hover:bg-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Secondform;
