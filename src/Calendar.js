import React, { useState } from "react";
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";
import BpkInput, {
  INPUT_TYPES,
} from "@skyscanner/backpack-web/bpk-component-input";
import format from "date-fns/format";
import moment from "moment";

//format date and days in the week as per calendar docs
const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");
const daysOfWeek = [
  {
    name: "Sunday",
    nameAbbr: "Sun",
    index: 0,
    isWeekend: true,
  },
  {
    name: "Monday",
    nameAbbr: "Mon",
    index: 1,
    isWeekend: false,
  },
  {
    name: "Tuesday",
    nameAbbr: "Tue",
    index: 2,
    isWeekend: false,
  },
  {
    name: "Wednesday",
    nameAbbr: "Wed",
    index: 3,
    isWeekend: false,
  },
  {
    name: "Thursday",
    nameAbbr: "Thu",
    index: 4,
    isWeekend: false,
  },
  {
    name: "Friday",
    nameAbbr: "Fri",
    index: 5,
    isWeekend: false,
  },
  {
    name: "Saturday",
    nameAbbr: "Sat",
    index: 6,
    isWeekend: true,
  },
];

const Calendar = () => {
  //define states
  //date
  const [selectedDate, setSelectedDate] = useState(null);

  //config as date range
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.range,
    startDate: null,
    endDate: null,
  });

  //date range states
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  //handle input change
  const handleInputChange = (event) => {
    setSelectedDate(moment(event.target.value, "DD-MM-YYYY").toDate());
  };

  return (
    <div>
      {/* input */}
      <BpkInput
        id="dateInput"
        name="date"
        type={INPUT_TYPES.text}
        value={selectedDate ? moment(selectedDate).format("DD-MM-YYYY") : ""}
        onChange={handleInputChange}
      />
      {/* calendar */}
      <BpkCalendar
        id="calendar"
        onDateSelect={handleDateSelect}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        daysOfWeek={daysOfWeek}
        weekStartsOn={1}
        changeMonthLabel="Change month"
        nextMonthLabel="Next month"
        previousMonthLabel="Previous month"
        selectionConfiguration={setSelectionConfiguration}
      />
    </div>
  );
};

export default Calendar;
