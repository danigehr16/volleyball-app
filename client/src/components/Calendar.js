import React from "react";
// import dateFns from "date-fns";
import {addDays, addDate, addWeeks, addMonths, addYears} from "date-fns";
// import addDate from "date-fns/fp/addDate";
// import addWeeks from "date-fns/fp/addWeeks";
// import addMonths from "date-fns/fp/addMonths";
// import addYears from "date-fns/fp/addYears";




// class Calendar extends React.Component {
//     state = {
//         currentMonth: new Date(),
//         selectedDate: new Date()
//     };
//     renderHeader() {
//         const dateFormat = "MMMM YYYY";

//         return (
//             <div className="header row flex-middle">
//                 <div className="col col-start">
//                     <div className="icon" onClick={this.prevMonth}>
//                         chevron_left
//                     </div>
//                 </div>
//                 <div classname="col col-center">
//                     <span>{addDates.format(this.state.currentMonth, dateFormat)}</span>
//                 </div>
//                 <div className="col col-end" onClick={this.nextMonth}>
//                     <div className="icon">chevron_right</div>
//                 </div>
//             </div>
//         );

//     }

//     renderDays() { 
//         const dateFormat = "dddd";
//         const days = [];

//         let startDate = addDays.startOfWeek(this.state.currentMonth);

//         for(let i =0; i<7; i++){
//             days.push(
//                 <div className="col col-center" key={i}>
//                     {addDays(startDate, i), dateFormat}
//                 </div>
//             );
//         }

//         return <div className="days row">{days}</div>;
//     }

//     renderCells() { 
//         const { currentMonth, selectedDate } = this.state;
//     const monthStart = subDays.startOfMonth(currentMonth);
//     const monthEnd = subDays.endOfMonth(monthStart);
//     const startDate = subDays.startOfWeek(monthStart);
//     const endDate = subDays.endOfWeek(monthEnd);

//     const dateFormat = "D";
//     const rows = [];

//     let days = [];
//     let day = startDate;
//     let formattedDate = "";

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         formattedDate = addDay.format(day, dateFormat);
//         const cloneDay = day;
//         days.push(
//           <div
//             className={`col cell ${
//               !dateFns.isSameMonth(day, monthStart)
//                 ? "disabled"
//                 : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
//             }`}
//             key={day}
//             onClick={() => this.onDateClick(addDay.parse(cloneDay))}
//           >
//             <span className="number">{formattedDate}</span>
//             <span className="bg">{formattedDate}</span>
//           </div>
//         );
//         day = addDay.addDays(day, 1);
//       }
//       rows.push(
//         <div className="row" key={day}>
//           {days}
//         </div>
//       );
//       days = [];
//     }
//     return <div className="body">{rows}</div>;
//   }

//     onDateClick = day => {
//         this.setState({
//             selectedDate: day
//           });
//      };

//     nextMonth = () => { 
//       // setCurrentDate(addMonths(currentDate, 1));
//         this.setState({
//             currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
//           });
//     };

//     prevMonth = () => { 
//       // setCurrentDate(subMonths(currentDate, 1));
//         this.setState({
//             currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
//           });
//     };

//     render() {
//         return (
//             <div className="calendar">
//                 {this.renderHeader()}
//                 {this.renderDays()}
//                 {/* {this.renderCells()} */}
//             </div>
//         ); 
//     }
// }




// export default Calendar;