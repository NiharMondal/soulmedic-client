import React, { useEffect, useState } from "react";
import { ImVideoCamera } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Loading } from "../Loading";

export default function Blog() {
  const navigate = useNavigate();
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://health.gov/myhealthfinder/api/v3/topicsearch.json"
        );

        const json = await data.json();
        const resource = await json?.Result?.Resources?.Resource;
        const sliceData = await resource?.slice(5, 8);
        setblogs(sliceData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const seeMore = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <React.Fragment>
      <h1>From The Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  py-12 ">
        {blogs &&
          blogs.map((item, index) => {
            const icon = [
              <ImVideoCamera />,
              <BiMessageDetail />,
              <BsSoundwave />,
            ];
            const time = [
              "Nov 22",
              "Jan 30",
              "Mar 13",
            ];
            const year = ["2013", "2020", "2017", ];
            const random = Math.floor(Math.random() * 3);
            

            return (
              <div className="grid grid-cols-6 gap-x-1" key={index}>
                <div className="px-2">
                  <p className="text-4xl text-[#4BBCD7] hover:text-inherit hover:cursor-pointer">
                    {icon[random]}
                  </p>
                  <p className="py-2">
                    {time[random]} <br /> <span> {year[random]}</span>
                  </p>
                </div>
                <div className="col-span-5">
                  <img
                    src={item.ImageUrl}
                    alt={item.ImageAlt}
                    className="h-[300px] md:h-[200px] w-full"
                  />
                  <h2>{item.Title.slice(0, 20)}..</h2>
                  <div className="grid justify-items-end ">
                    <button
                      className=" flex items-center text-[#4BBCD7] font-bold px-4 py-2 border transition  duration-300 ease-in-out border-[#4BBCD7] hover:bg-[#4BBCD7] hover:text-slate-200"
                      onClick={() => seeMore(item.Id)}
                    >
                      Read more{" "}
                      <span className="mt-1 ml-1">
                        <HiOutlineChevronDoubleRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {loading && <Loading />}
    </React.Fragment>
  );
}
