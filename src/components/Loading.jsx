import loading from '../assets/spinner/loading-97.gif'

export const Loading = () => {
  return (
    <div className="grid content-center justify-items-center">
      <img src={loading} alt="loading_gif" className='h-[200px] mb-6' />
    </div>
  );
}
