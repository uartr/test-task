import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';





const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  startDatePlaceholderText: '02/12/18',

  endDatePlaceholderText: '02/12/18',

  
  customArrowIcon: ">",
  
  enableOutsideDays: true,

  daySize: 48,

  hideKeyboardShortcutsPanel: true,
  keepOpenOnDateSelect: true,

  small: false,
  readOnly: true,
  renderMonth: null,

  navPrev: "<",
  navNext: ">",
  
  weekDayFormat: "dd"  
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOnDatesChange = this.handlerOnDatesChange.bind(this);
    this.state = {
      dateDiff: 0,
      startDate: null,
      startDatePlaceholderText: '',
      endDate: null,
      focusedInput: 'startDate',
    };
  }

  handlerOnDatesChange({ startDate, endDate }) {
    let dateDiff = 0;
    if (startDate && endDate) {
      dateDiff = endDate.diff(startDate, 'days');
    }

    this.setState({ startDate, endDate, dateDiff });
  }

  render() {
    return (
      <div className="datePickerWrapper">
        <DateRangePicker
          {...this.props}    
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.handlerOnDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
        <div className="datePickerWrapper--dateDifference" >
          <span className="datePickerWrapper--dateDifference__days">Days</span>
          <span className="datePickerWrapper--dateDifference__number">{this.state.dateDiff}</span>
        </div>
      </div>
    );
  }
}

Calendar.defaultProps = defaultProps;


export default Calendar;

