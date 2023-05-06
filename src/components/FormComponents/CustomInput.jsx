const CustomInput = ({
  name,
  placeholder = '',
  labelName,
  type,
  display = 'block',
  marginTop = 'mt-2',
  shadow = 'shadow-sm',
  height = 'h-auto',
  indent = 'indent-1.5',
  required = ' *',
  flex1,
  position,
}) => {
  return (
    <div className={`${flex1}`}>
      <label
        htmlFor={name}
        className={`${display} block text-sm font-medium leading-6 text-gray-900 `}
      >
        {labelName}
        {required}:
      </label>
      <div className={marginTop}>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`
          ${height} ${indent} ${shadow} ${position}
          block w-full rounded-md border-0 py-1.5 text-gray-900 
          ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-secondaryOrange sm:text-sm sm:leading-6
          `}
        />
      </div>
    </div>
  );
};

export default CustomInput;
