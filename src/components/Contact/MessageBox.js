import React from "react";

export default function MessageBox() {
  return (
    <>
      <h2 className="pb-6 text-gray-700">Give us a message</h2>

      <form className="text-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-3">
          <div className="grid">
            <p className="py-3">
              Your First Name <span className="text-slate-400">(required)</span>{" "}
            </p>
            <input
              type="text"
              className="p-3    bg-[#fafafa] focus:outline-none border"
            />
          </div>
          <div className="grid">
            <p className="py-4">
              Your Email <span className="text-slate-400">(required)</span>
            </p>
            <input
              type="email"
              className="p-4   bg-[#fafafa] focus:outline-none border"
            />
          </div>
        </div>
        <div className="grid ">
          <p className="py-4">
            Subject <span className="text-slate-400">(required)</span>
          </p>
          <input
            type="text"
            className="p-4   bg-[#fafafa] focus:outline-none border"
          />
        </div>
        <div className="grid ">
          <p className="py-4">
            Your Message <span className="text-slate-400">(required)</span>
          </p>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="bg-[#fafafa] p-4 border focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#4BBCD7] px-6 py-3 text-white rounded"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}
