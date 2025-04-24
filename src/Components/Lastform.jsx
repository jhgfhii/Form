import React, { useState } from "react";

const Lastform = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    language: "",
    bike: false,
    gym: false,
    book: false,
    vol: "",
    dob: "",
    file: null,
  });

  const datachange = (e) => {
    console.log(e);
    // const name = e.target.name
    // const value = e.target.value

    // const checked=e.target.checked

    const { name, value, type, checked, files } = e.target;

    setData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    // setData((prev)=>({...prev,[name]:type==="file"?files[0]:value}))
  };
  // console.log(data.name)
  // console.log(data.phone)
  // console.log(data.language)
  // console.log(data.bike)
  // console.log(data.gym)
  // console.log(data.book)
  // console.log(data.vol)
  // console.log(data.dob)
  // console.log(data.file)

  console.log(data);

  return (
    <div className="ml-80 mt-10 ">
      <div className="w-250 h-230 border-2 ml-20 bg-[#546350] border-[#546350] shadow-2xl shadow-black">
      <div className="border-2 bg-[#2C2C2C] border-[#2C2C2C] w-230 h-210 mt-10 ml-10  rounded-2xl shadow-2xl shadow-amber-900">
        <div className="text-center font-bold text-4xl mb-30 text-blue-300 underline">
          {" "}
          Forms details
        </div>
        <div className="-mt-20 text-blue-300">
        <div className="lg:ml-5 ">
          <form>
          <p className="text-2xl font-semibold lg:mt-5 lg:ml-2 mb-2"> Full Name</p>
            <input
              type="text"
              onChange={datachange}
              name="name"
              placeholder="Enter the name."
              className="mb-5 border-2 border-[#2C2C2C] rounded-4xl w-80 h-15 text-2xl bg-amber-100 lg: placeholder:text-2xl font-semibold px-4 py-2 focus:outline-none"
            />
          </form>
        </div>
        <div className="lg:ml-145 lg:-mt-30 ">
          <form>
          <p className="text-2xl font-semibold mb-2">Enter the phone no</p>
            <input
              type="number"
              onChange={datachange}
              name="phone"
              placeholder="Enter the phone no."
              className=" mb-5 border-2 border-[#2C2C2C] rounded-4xl bg-amber-100 w-80 h-15 text-2xl placeholder:text-2xl font-semibold px-4 py-2 focus:outline-none"
            />
          </form>
        </div>
        
        <div className="lg:ml-5 lg:mt-10">
        <div className="">
        <p className="mb-5 text-2xl font-semibold">
          Please select your programming languages
        </p>
          <label className="text-xl ml-2">
            <input
              type="radio"
              name="language"
              value="C"
              checked={data.language === "C"}
              onChange={datachange}
            />
            C
          </label>
        </div>
        <div>
          <label className="text-xl ml-2">
            <input
              type="radio"
              name="language"
              value="C++"
              checked={data.language === "C++"}
              onChange={datachange}
            />
            C++
          </label>
        </div>
        <div>
          <label className="text-xl ml-2">
            <input
              type="radio"
              name="language"
              value="Python"
              checked={data.language === "Python"}
              onChange={datachange}
            />
            Python
          </label>
        </div>
        </div>

        <div className="lg:ml-5 lg:mt-15">
          <p className="mb-5 mt-5 ml- text-2xl font-semibold">
            Which hobbeis would you like to do together
          </p>
          <form>
            <input
              type="checkbox"
              onChange={datachange}
              name="bike"
              id="bike"
              className=""
            />
            <label htmlFor="bike" className="text-xl ml-2">
              Bike riding
            </label>
          </form>
          <form>
            <input
              type="checkbox"
              onChange={datachange}
              name="gym"
              id="gym"
              className=""
            />
            <label htmlFor="gym" className="text-xl ml-2">
              gymming
            </label>
          </form>
          <form>
            <input
              type="checkbox"
              onChange={datachange}
              name="book"
              id="book"
              className="mb-5"
            />
            <label htmlFor="book" className="text-xl ml-2">
              Book Reading
            </label>
          </form>
          <div className="text-2xl mb-5 lg:ml-145 lg:-mt-87 ">
            <p className="font-semibold mb-5">Dispaly a range feild </p>
            <label for="vol" className="text-xl font-semibold">Volume (between 0 and 50):</label>
            <form>
              <input
                type="range"
                onChange={datachange}
                id="vol"
                name="vol"
                min="0"
                max="50"
                className=" ml-15"
              />
              {/* <input type="submit" className='border-2 bg-black text-white w-30 h-10 rounded-2xl hover:bg-blue-500 ml-5'/> */}
            </form>
          </div>
          <div className="text-2xl mb-5 lg:ml-152 lg:mt-20">
            <label for="birthday" className="font-semibold">
              Date Of Birth
            </label>
            <form>
              <input
                type="date"
                onChange={datachange}
                name="dob"
                id="birthday"
                className="border-2 border-[#2C2C2C] rounded-xl bg-amber-100 mt-5"
              />
              {/* <input type='submit' className='border-2  bg-black text-white w-30 h-10 rounded-2xl ml-5 hover:bg-blue-500'/> */}
            </form>
          </div>
          <div className="text-2xl lg:mt-30 lg:ml-">
            <p className="font-semibold mb-5 ">
              Upload a File
            </p>
            <form>
              <input
                type="file"
                onChange={datachange}
                name="file"
                className="border-2 border-[#2C2C2C] w-60 h-10 rounded-2xl bg-amber-100 text-xl "
              />
              {/* <input type='submit' className='border-2  bg-black text-white w-30 h-10 ml-5 rounded-2xl hover:bg-blue-500'/> */}
            </form>
            <input
              type="submit"
              className="border-2 mt-5  bg-black text-white w-50 h-15 ml-90 rounded-2xl hover:bg-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Lastform;
