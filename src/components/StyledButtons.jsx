const PrimaryBtn = ({ width, name, flex1 }) => {
  return (
    <button
      className={`${width} ${flex1} h-12 bg-secondaryOrange hover:bg-[#EF6623] rounded-lg text-white font-semibold text-base transition`}
    >
      {name}
    </button>
  );
};

const SecondaryBtn = ({ width, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${width} h-12  rounded-lg text-textBlack font-bold border-2 border-[#88D8B0] hover:text-textBlack hover:bg-[#88D8B0] transition-all duration-300 `}
    >
      {name}
    </button>
  );
};

export { PrimaryBtn, SecondaryBtn };
