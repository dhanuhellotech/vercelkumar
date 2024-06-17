// import { parsePhoneNumberFromString } from 'libphonenumber-js';

// function Mobile(mobile, countrycode) {
//     this.mobile = this.filterNumber(mobile); // Corrected usage
//     this.cc = countrycode;
//     this.valid = this.validNumber();
// }

// Mobile.prototype.filterNumber = function (number) {
//     // Implement your logic to filter the mobile number here
//     // For example, you can remove non-numeric characters
//     return number.replace(/\D/g, '');
// };

// Mobile.prototype.validNumber = function () {
//     const mobileString = `${this.cc}${this.mobile}`;
//     const parsedNumber = parsePhoneNumberFromString(mobileString);
//     if (parsedNumber && parsedNumber.isValid()) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export default Mobile;
