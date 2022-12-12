import React, { useEffect, useState } from "react";
import { ImVideoCamera } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";


export default function Blog() {
  const navigate = useNavigate()
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
        const sliceData = await resource?.slice(5, 19);
        setblogs(sliceData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const seeMore = (id) => {
    navigate(`/blog/${id}`)
  };
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-y-12 py-12">
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
              "Jun 18",
              "Feb 2",
              "May 26",
            ];
            const year = ["2013", "2020", "2017", "2021", "2022", "2019"];
            const random = Math.floor(Math.random() * 6);
            const randomIcon = Math.floor(Math.random() * 3);

            return (
              <div className="grid grid-cols-7 gap-2" key={index}>
                <div className="px-2">
                  <p className="text-4xl text-[#4BBCD7]    hover:text-inherit hover:cursor-pointer">
                    {icon[randomIcon]}
                  </p>
                  <p className="py-2">
                    {time[random]} <br /> <span> {year[random]}</span>
                  </p>
                </div>
                <div className="col-span-6">
                  <img
                    src={item.ImageUrl}
                    alt={item.ImageAlt}
                    className="h-[300px] md:h-[400px] w-full"
                  />
                  <h2>{item.Title.slice(0, 48)}..</h2>
                  <div className="grid justify-items-end ">
                    <button
                      className=" flex items-center text-[#4BBCD7] font-bold px-4 py-2 border transition  duration-300 ease-in-out border-[#4BBCD7] hover:bg-[#4BBCD7] hover:text-white"
                      onClick={() => seeMore(item.Id)}
                    >
                      Read more <span className="mt-1 ml-1"><HiOutlineChevronDoubleRight/></span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {loading && <Loading />}
    </section>
  );
}
