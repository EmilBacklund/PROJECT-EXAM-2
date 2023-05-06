import { useState } from 'react';
import MainFormComponent from './MainFormComponent';
import DatePicker from 'react-date-picker';
import RangeCalendar from './RangeCalendar';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../../styles/datePickerStyles.css';
import CustomInput from '../../components/FormComponents/CustomInput';
import { PrimaryBtn } from '../../components/StyledButtons';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <MainFormComponent>
        <div className="md:bg-white md:px-6 md:py-9 flex flex-col gap-2 rounded-b">
          <div className="flex flex-col gap-2 md:flex-row">
            <CustomInput
              flex1="md:flex-1"
              type="text"
              name="location"
              placeholder="Location"
              shadow="input-shadow"
              marginTop=""
              indent="indent-4"
              height="h-12"
              display="hidden"
            />
            <div className="flex gap-2 md:flex-1">
              <DatePicker
                className="input input-shadow"
                value={startDate}
                onChange={setStartDate}
                format="y-MM-dd"
                minDate={new Date()}
                calendar={
                  <RangeCalendar startDate={startDate} endDate={endDate} />
                }
              />
              <DatePicker
                className="input input-shadow"
                value={endDate}
                onChange={setEndDate}
                format="y-MM-dd"
                minDate={startDate}
                calendar={
                  <RangeCalendar startDate={startDate} endDate={endDate} />
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <CustomInput
              flex1="md:flex-1"
              type="text"
              name="guests"
              placeholder="Guests"
              shadow="input-shadow"
              marginTop=""
              indent="indent-4"
              height="h-12"
              display="hidden"
            />
            <PrimaryBtn width="w-full" name="SEARCH" flex1="md:flex-1" />
          </div>
        </div>
      </MainFormComponent>
    </>
  );
};

export default Booking;
