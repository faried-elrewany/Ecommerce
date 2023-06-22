function Carousal({ imgSrc }) {
  return (
    <a
      href="#"
      className=" flex justify-center  items-center h-[170px] w-[200px] overflow-hidden group bg-slate-300"
    >
      <img
        src={imgSrc}
        alt=""
        class="h-3/4 w-3/4 object-contain object-center transition duration-500 group-hover:scale-105 "
      />
    </a>
  );
}

export default Carousal;
