function MainButton({ color, bg, cN, arrowColor, hover, text }) {
  return (
    <a
      className={`text-[15px]  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative cursor-pointer ml-2 ${hover} `}>
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] ${arrowColor}`}></i>
    </a>
  );
}

export default MainButton;
