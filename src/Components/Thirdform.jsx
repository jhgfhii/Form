import React, { useState } from "react";

const Secondform = () => {
  const [data, setData] = useState({
    first: "", last: "", email: "", contact: "", gender: "",
    english: false, math: false, physics: false, resume: null,
    url: "", ans: "", about: "", reset: "", submit: ""
  });

  const formchange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  console.log(data)

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Form in React
        </h2>

        <div className="space-y-5">
          {/* Input Fields */}
          {[
            { label: "First Name*", name: "first", type: "text", placeholder: "Enter first name" },
            { label: "Last Name*", name: "last", type: "text", placeholder: "Enter last name" },
            { label: "Email*", name: "email", type: "email", placeholder: "Enter email" },
            { label: "Contact*", name: "contact", type: "number", placeholder: "Enter contact number" },
            { label: "URL*", name: "url", type: "url", placeholder: "Enter your URL" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-lg font-semibold">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                onChange={formchange}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Gender */}
          <div>
            <p className="text-lg font-semibold mb-2">Gender*</p>
            <div className="space-x-4">
              {["male", "female", "other"].map((g) => (
                <label key={g} className="text-md">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={data.gender === g}
                    onChange={formchange}
                    className="mr-2"
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Checkbox */}
          <div>
            <p className="text-lg font-semibold mb-2">Your best subject(s)</p>
            <div className="space-x-4">
              {["english", "math", "physics"].map((s) => (
                <label key={s} className="text-md">
                  <input
                    type="checkbox"
                    name={s}
                    checked={data[s]}
                    onChange={formchange}
                    className="mr-2"
                  />
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-lg font-semibold">Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={formchange}
              className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Select Box */}
          <div>
            <label className="block text-lg font-semibold mb-1">Select your choice</label>
            <select
              name="ans"
              onChange={formchange}
              className="w-full border border-gray-300 px-4 py-2 rounded bg-gray-100 focus:outline-none"
            >
              <option value="">Select your Ans</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* About */}
          <div>
            <label className="block text-lg font-semibold mb-1">About</label>
            <textarea
              name="about"
              onChange={formchange}
              rows={4}
              placeholder="Tell us about yourself"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="reset"
              onClick={() => setData({})}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondform;

