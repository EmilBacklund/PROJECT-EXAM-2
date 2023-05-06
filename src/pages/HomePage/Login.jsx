import MainFormComponent from './MainFormComponent';
import CustomInput from '../../components/FormComponents/CustomInput';
import { PrimaryBtn } from '../../components/StyledButtons';

const Login = () => {
  return (
    <MainFormComponent>
      <div className="md:bg-white md:px-6 md:py-9 flex flex-col gap-2 md:flex-row rounded-b">
        <CustomInput
          flex1="md:flex-1"
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
          flex1="md:flex-1"
          type="password"
          name="password"
          placeholder="Password"
          shadow="input-shadow"
          marginTop=""
          indent="indent-4"
          height="h-12"
          display="hidden"
        />
        <PrimaryBtn name="LOGIN" width="w-full" flex1="md:flex-1" />
      </div>
    </MainFormComponent>
  );
};

export default Login;
