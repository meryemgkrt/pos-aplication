const AuthCarousel = ({ img, title, desc }) => {
  return (
    <div className="!flex flex-col items-center justify-center h-full mb-10 ">
      <img src={img} alt="" className="w-[600px] h-[500px]" />
      <h3 className="text-4xl font-bold text-center text-white">{title}</h3>
      <p className="mt-5 text-2xl text-center text-white">{desc}</p>
    </div>
  );
};

export default AuthCarousel;
