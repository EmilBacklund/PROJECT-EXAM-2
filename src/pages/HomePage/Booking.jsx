import { useState } from 'react';
import MainFormComponent from './MainFormComponent';
import DatePicker from 'react-date-picker';
import RangeCalendar from './RangeCalendar';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../../styles/datePickerStyles.css';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <MainFormComponent>
        <div className='md:bg-white md:px-6 md:py-9 flex flex-col gap-2 rounded-b'>
          <div className='flex flex-col gap-2 md:flex-row'>
            <input className='input input-shadow md:flex-1' type='text' placeholder='Location' />
            <div className='flex gap-2 md:flex-1'>
              <DatePicker
                className='input input-shadow'
                value={startDate}
                onChange={setStartDate}
                format='y-MM-dd'
                minDate={new Date()}
                calendar={<RangeCalendar startDate={startDate} endDate={endDate} />}
              />
              <DatePicker
                className='input input-shadow'
                value={endDate}
                onChange={setEndDate}
                format='y-MM-dd'
                minDate={startDate}
                calendar={<RangeCalendar startDate={startDate} endDate={endDate} />}
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 md:flex-row'>
            <input className='input input-shadow' type='text' placeholder='Guests' />
            <button className='primaryBtn'>SEARCH</button>
          </div>
        </div>
      </MainFormComponent>
    </>
  );
};

export default Booking;
