import { DateRange } from "react-date-range";


const DatePicker = ({value, handleSelect}) => {
  return (
    <DateRange
      rangeColors={["#3f96f4"]}
      ranges={[value]}
      onChange={handleSelect}
      date={value.startDate}
      direction="vertical"
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endDate}
    />
  );
};

export default DatePicker;
