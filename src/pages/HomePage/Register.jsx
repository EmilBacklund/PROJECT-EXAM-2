import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import MainFormComponent from './MainFormComponent';

const Register = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120); // Set the minimum date to 120 years ago
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 1); // Set the maximum date to last yea

  return (
    <>
      <MainFormComponent>
        <div className='md:bg-white md:px-6 md:py-9 flex flex-col gap-2 rounded-b'>
          <div className='flex flex-col gap-2 md:flex-row'>
            <input className='input input-shadow' type='text' placeholder='First Name' />
            <input className='input input-shadow' type='text' placeholder='Last Name' />
            <input className='input input-shadow' type='email' placeholder='Email' />
          </div>
          <div className='flex flex-col gap-2 md:flex-row'>
            <input className='input input-shadow' type='password' placeholder='Password' />
            <div className='relative w-full'>
              <DatePicker
                className='input input-shadow'
                value={birthDate}
                onChange={setBirthDate}
                format='y-MM-dd'
                minDate={minDate}
                maxDate={maxDate}
                placeholder='Birthday'
                onFocus={() => setShowDate(true)}
              />
              {!showDate && (
                <div className='absolute inset-0 input leading-[48px] text-[#8e8e8e] pointer-events-none'>
                  Birthday
                </div>
              )}
            </div>
            <button className='primaryBtn'>Register</button>
          </div>
        </div>
      </MainFormComponent>
    </>
  );
};

export default Register;
