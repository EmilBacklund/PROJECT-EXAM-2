import MainFormComponent from "./MainFormComponent";
import CustomInput from "../../components/FormComponents/CustomInput";
import { PrimaryBtn } from "../../components/StyledButtons";
import { useState, useEffect } from "react";
import { setItem } from "../../utils/storage";
import { setSelectedView } from "../../store/modules/displayedHomepageViewSlice";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../../store/modules/authenticationSlice";
import loginUser from "../../api/loginUserApi";

const Login = ({ email, password }) => {
  const [localEmail, setLocalEmail] = useState(email);
  const [localPassword, setLocalPassword] = useState(password);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLocalEmail(email);
    setLocalPassword(password);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: localEmail,
      password: localPassword,
    };

    try {
      const response = await loginUser(user, "POST");
      setErrorMessage("");

      if (response.accessToken) {
        setItem("token", response.accessToken);
        setItem("user", {
          name: response.name,
          avatar: response.avatar,
          email: response.email,
          venueManager: response.venueManager,
        });

        dispatch(setSelectedView("Booking"));
        dispatch(setAuthentication(true));
      } else {
        setErrorMessage(response.data.errors[0].message);
      }
    } catch (error) {
      setErrorMessage(error.response.data.errors[0].message);
    }
  };
  return (
    <MainFormComponent onSubmit={handleSubmit}>
      <div className="rounded-b md:bg-white md:px-6  md:py-9">
        <div className="flex flex-col gap-2 md:flex-row">
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
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
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
            value={localPassword}
            onChange={(e) => setLocalPassword(e.target.value)}
          />
          <PrimaryBtn name="LOGIN" width="w-full" flex1="md:flex-1" />
        </div>
        {errorMessage && (
          <p className="mt-2 text-sm font-bold text-primaryRed">
            {errorMessage}
          </p>
        )}
      </div>
    </MainFormComponent>
  );
};

export default Login;
