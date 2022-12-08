import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";

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
        const sliceData = await resource;
        setEvents(sliceData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(events);
  return (
    <div className="container mx-auto py-12 text-slate-500">
      <div className="grid grid-cols-1 gap-4 lg:gap-12">
        {events &&
          events.map((ev, index) => (
            <div className="grid lg:grid-cols-3 gap-4 " key={index}>
              <img
                src={ev.ImageUrl}
                alt={ev.ImageAlt}
                className="h-[270px] w-full"
              />
              <div className="lg:col-span-2">
                <h2 className="text-[#51BED8]">{ev.MyHFTitle}</h2>
                <p className="pb-6">
                  <strong>
                    <i>{ev.MyHFDescription?.slice(3, -6)}</i>{" "}
                  </strong>
                </p>
                <p className="pb-6">
                  <small>
                    {ev?.Sections?.section[0].Content?.slice(0, 950)}
                  </small>
                </p>
                <button className=" py-2 px-4 bg-[#51BED8] text-white font-bold">
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
