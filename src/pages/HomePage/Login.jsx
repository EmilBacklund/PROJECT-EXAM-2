import MainFormComponent from './MainFormComponent';
import CustomInput from '../../components/FormComponents/CustomInput';

const Login = () => {
  return (
    <MainFormComponent>
      <div className="md:bg-white md:px-6 md:py-9 flex flex-col gap-2 md:flex-row rounded-b">
        <CustomInput
          className="md:flex-1"
          type="email"
          name="email"
          placeholder="Email"
          shadow="input-shadow"
          marginTop=""
          indent="indent-4"
          height="h-12"
          display="hidden"
        />
        <CustomInput
          className="md:flex-1"
          type="password"
          name="password"
          placeholder="Password"
          shadow="input-shadow"
          marginTop=""
          indent="indent-4"
          height="h-12"
          display="hidden"
        />
        <button className="primaryBtn">LOGIN</button>
      </div>
    </MainFormComponent>
  );
};

export default Login;
