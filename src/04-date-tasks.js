/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
  return new Date(value);
  // throw new Error('Not im plemented');
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
  return Date.parse(value);
  // throw new Error('Not implemented');
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
  const data = new Date(date);
  data.setMonth(data.getMonth() + 1);
  data.setDate(data.getDate() - 1);
  const day = data.getDate();
  if (day === 29) return true;
  return false;
  // throw new Error('Not implemented');
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
  const stDate = new Date(startDate);
  const enDate = new Date(endDate);

  const result = enDate - stDate;
  const date = new Date(result).toISOString();

  const res = date.substring(11, 23);
  return res;
  // throw new Error('Not implemented');
}


/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {
  const data = date.toISOString();

  let hour = Number(data.substring(11, 13));
  const m = Number(data.substring(14, 16));
  if (hour > 12) {
    hour -= 12;
  }
  const alpha = 30 * hour + 0.5 * m;
  const beta = 6 * m;
  let c = (alpha - beta);
  if (c > 180) {
    c = 360 - c;
  }
  // eslint-disable-next-line no-mixed-operators
  const result = Math.abs(c) * Math.PI / 180;
  return result;
  // eslint-disable-next-line no-unreachable
  if (hour > 12) {
    switch (hour) {
      case 13:
        hour = 1;

        break;
      case 14:
        hour = 2;

        break;
      case 15:
        hour = 3;

        break;
      case 16:
        hour = 4;

        break;
      case 17:
        hour = 5;

        break;
      case 18:
        hour = 6;

        break;
      case 19:
        hour = 7;

        break;
      case 20:
        hour = 8;

        break;
      case 21:
        hour = 9;

        break;
      case 22:
        hour = 10;

        break;
      case 23:
        hour = 11;

        break;
      case 24:
        hour = 12;

        break;
      default:
        break;
    }
  }
  // throw new Error('Not implemented');
}


module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
