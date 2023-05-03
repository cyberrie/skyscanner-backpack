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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectionType, setSelectionType] = useState(null);

  //config as date range
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: null,
    startDate: null,
    endDate: null,
    selectionType: false,
  });

  const handleDateSelect = (date) => {
    // If there's no start date yet, set the start date to the selected date.
    if (!startDate) {
      setStartDate(date);
      setSelectionConfiguration({
        ...selectionConfiguration,
        type: CALENDAR_SELECTION_TYPE.range,
        startDate: date,
        endDate: null,
      });
    }
    // If there's a start date but no end date, check if the selected date is within the range.
    // If so, set the end date to the selected date. Otherwise, reset the start date to the selected date.
    else if (!endDate) {
      if (date >= startDate) {
        setSelectionConfiguration({
          ...selectionConfiguration,
          endDate: date,
        });
      } else {
        setStartDate(date);
        setSelectionConfiguration({
          ...selectionConfiguration,
          startDate: date,
          endDate: null,
        });
      }
    }
    // If there's both a start date and an end date and the selected date is outside of the range,
    // reset the selection to only the start date.
    else {
      setStartDate(date);
      setEndDate(null);
      setSelectionConfiguration({
        ...selectionConfiguration,
        endDate: null,
        startDate: date,
        type: CALENDAR_SELECTION_TYPE.range,
      });
    }
  };

  return (
    <>
      {/* calendar */}
      <table>
        <caption>Calendar</caption>
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
          selectionType={selectionType}
          selectionConfiguration={selectionConfiguration}
        />
      </table>
    </>
  );
};

export default Calendar;
