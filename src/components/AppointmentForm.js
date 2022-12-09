function AppointmentForm() {
  return (
    <div>
      <h5 className="py-4">Appointment Form</h5>

      <form className="text-slate-500">
        <div className="grid grid-cols-1  gap-4">
          <p className="py-4">Select a Department</p>
          <select
            name="diff"
            id="diff"
            className=" p-4  bg-[#fafafa] mb-3 focus:outline-none cursor-pointer text-slate-400 border"
          >
            <option name="" id="">
              Gynacelogy
            </option>
            <option name="" id="">
              Blood Bank
            </option>
            <option name="" id="">
              Opthalmology
            </option>
            <option name="" id="">
              Oncology
            </option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="grid">
            <p className="py-4">
              Your First Name <span className="text-slate-400">(required)</span>{" "}
            </p>
            <input
              type="text"
              className="p-4    bg-[#fafafa] mb-3 focus:outline-none border"
            />
          </div>
          <div className="grid">
            <p className="py-4">
              Your Last Name <span className="text-slate-400">(required)</span>
            </p>
            <input
              type="text"
              className="p-4   bg-[#fafafa] mb-3 focus:outline-none border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid">
            <p className="py-4">
              Date of Birth <span className="text-slate-400">(required)</span>
            </p>
            <input
              type="date"
              className="p-4 w-full bg-[#FAFAFA] mb-3 focus:outline-none text-slate-400 border "
            />
          </div>
          <div className="grid">
            <p className="py-4">
              Sex <span className="text-slate-400">(required)</span>
            </p>
            <div className="grid grid-cols-3 content-start  gap-4">
              <div className="">
                <input type="radio" id="male" name="sex" value="male" />
                <label htmlFor="male" className=" ml-4">
                  Male
                </label>
              </div>
              <div>
                <input type="radio" id="female" name="sex" value="female" />
                <label htmlFor="female" className="ml-4">
                  Female
                </label>
              </div>
              <div>
                <input type="radio" id="child" name="sex" value="child" />
                <label htmlFor="child" className=" ml-4">
                  Child
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="grid">
            <p className="py-4">
              Your Email <span className="text-slate-400">(required)</span>{" "}
            </p>
            <input
              type="email"
              className="p-4    bg-[#fafafa] mb-3 focus:outline-none border"
            />
          </div>
          <div className="grid">
            <p className="py-4">
              Phone <span className="text-slate-400">(required)</span>
            </p>
            <input
              type="text"
              className="p-4   bg-[#fafafa] mb-3 focus:outline-none border"
            />
          </div>
        </div>
        <div className="grid ">
          <p className="py-4">
            Your Message <span className="text-slate-400">(required)</span>
          </p>
          <textarea
            id="message"
            name="message"
            rows="3"
            className="bg-[#fafafa] p-4 border focus:outline-none"
          >
            
          </textarea>
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
    </div>
  );
}

export default AppointmentForm;
