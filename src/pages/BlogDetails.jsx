import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
const BlogDetails = () => {
  const { topicId } = useParams();

  const [blog, setblog] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=${topicId}`
        );

        const json = await data.json();
        const resource = await json?.Result?.Resources?.Resource;
        setblog(resource);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [topicId]);

  return (
    <div className="container mx-auto">
      <div className="py-12 text-slate-600">
        {blog &&
          blog.map((item, index) => {
            const subTitle = item?.Sections.section[1]?.Content;
            return (
              <div key={index}>
                <img
                  src={item.ImageUrl}
                  alt={item.ImageAlt}
                  className="h-[300px] md:h-[700px] w-full"
                />
                <h2>{item.Title}</h2>
                <div>{parse(subTitle)}</div>
                
              </div>
            );
          })}
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default BlogDetails;
