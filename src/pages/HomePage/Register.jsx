import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import MainFormComponent from './MainFormComponent';
import CustomInput from '../../components/FormComponents/CustomInput';
import { PrimaryBtn } from '../../components/StyledButtons';
import reusableAxiosComponent from '../../api/reusableAxiosComponent';
import { useDispatch } from 'react-redux';
import { setSelectedView } from '../../store/modules/displayedHomepageViewSlice';
import { setCarouselIndex } from '../../store/modules/carouselIndexSlice';

const Register = ({ onRegisterSuccess }) => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [order, setOrder] = useState(1);
  const dispatch = useDispatch();

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120); // Set the minimum date to 120 years ago
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 1); // Set the maximum date to last yea

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      firstname,
      lastname,
      email,
      password,
      birthDate,
    };

    try {
      const response = await reusableAxiosComponent(user, 'register', 'POST');
      console.log(response);

      if (order === 1) {
        dispatch(setSelectedView('Login'));
        setOrder(2);
      } else if (order === 2) {
        dispatch(setCarouselIndex(0));
        setOrder(3);
      } else if (order === 3) {
        await onRegisterSuccess(email, password);
        setOrder(1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MainFormComponent onSubmit={handleSubmit}>
        <div className="md:bg-white md:px-6 md:py-9 flex flex-col gap-2 rounded-b">
          <div className="flex flex-col gap-2 md:flex-row">
            <CustomInput
              flex1="md:flex-1"
              type="text"
              name="firstName"
              placeholder="First Name"
              shadow="input-shadow"
              marginTop=""
              indent="indent-4"
              height="h-12"
              display="hidden"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <CustomInput
              flex1="md:flex-1"
              type="text"
              name="lastName"
              placeholder="Last Name"
              shadow="input-shadow"
              marginTop=""
              indent="indent-4"
              height="h-12"
              display="hidden"
              onChange={(e) => setLastname(e.target.value)}
            />
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="relative w-full flex-1">
              <DatePicker
                className="input input-shadow z-30"
                value={birthDate}
                onChange={setBirthDate}
                format="y-MM-dd"
                minDate={minDate}
                maxDate={maxDate}
                placeholder="Birthday"
                onFocus={() => setShowDate(true)}
              />
              {!showDate && (
                <div className="absolute inset-0 input leading-[48px] text-[#8e8e8e] pointer-events-none">
                  Birthday
                </div>
              )}
            </div>
            <PrimaryBtn name="Register" width="w-full" flex1="md:flex-1" />
          </div>
        </div>
      </MainFormComponent>
    </>
  );
};

export default Register;
