import banner from '../../assets/banner.jpg'

export default function Banner() {
  return (
    <div className=" border-b-4 border-[#4BBCD7] h-[280px] md:h-[604px] relative">
      <img
        className="h-[276px] md:h-[600px] w-full "
        src={banner}
        alt="BannerPhoto"
      />
      <div className="absolute px-4 top-[45px] md:top-[200px] md:left-12 lg:left-32 lg:top-[220px] ">
        <div className=" text-slate-500 md:w-3/4 lg:w-3/6">
          <h1>WE DO THE BEST PRACTICE</h1>
          <p className="py-4 tracking-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            neque ratione quibusdam modi accusantium ducimus numquam ex esse,
            soluta magni. Laboriosam excepturi consequuntur iure officia,
            voluptas aliquid. Neque, iusto repudiandae.
          </p>
          <button className="border-2 border-[#4BBCD7]  w-2/6 p-2 font-bold hover:bg-[#4BBCD7] hover:border-white hover:text-white">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
}
