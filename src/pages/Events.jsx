import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import parse from "html-react-parser";
export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json"
        );

        const json = await data.json();

        const resource = await json?.Result?.Resources?.all?.Resource;
        const filterData = await resource.filter((val) => val.Id !== "546");
        setEvents(filterData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-12 text-slate-500 overflow-hidden">
      <div className="grid grid-cols-1 gap-4 lg:gap-12">
        {events &&
          events.map((ev, index) => (
            <div className="grid lg:grid-cols-3 gap-4 border-b-2 " key={index}>
              <img
                src={ev.ImageUrl}
                alt={ev.ImageAlt}
                className="h-[270px] w-full"
              />

              <div className="lg:col-span-2 overflow-x-hidden h-[350px] ">
                <h2 className="text-[#51BED8]">{ev.MyHFTitle}</h2>
                <p className="pb-4">
                  <b>
                    <i>{parse(ev.MyHFDescription)}</i>
                  </b>
                </p>
                
                <div className="pb-4">
                  {parse(ev?.Sections?.section[1].Content)}
                </div>
                <button className=" py-2 px-4 mb-4 bg-[#51BED8] text-white font-bold">
                  FIND OUT MORE
                </button>
              </div>
            </div>
          ))}
      </div>

      {loading && <Loading />}
    </div>
  );
}
