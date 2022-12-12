import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import notFoundImg from '../assets/404.jpg'
const NotFound = () => {
   const navigate = useNavigate()
   const goBack = ()=>{
      navigate(-1)
   }
  return (
    <div className="grid justify-items-center content-center h-screen relative">
      <img src={notFoundImg} alt="not_foundImg" className="h-screen w-full" />
      <div className="absolute left-5 top-5">
        <Link to="/">
          <h1>
            <Link to="/">
              SOUL <span className="text-[#d5083f]">MEDIC</span>
            </Link>
          </h1>
        </Link>
      </div>
      <button className="absolute bottom-20 px-4 py-2 rounded-md  bg-sky-500 text-white font-bold hover:bg-cyan-600" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

export default NotFound