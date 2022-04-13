"use strict";

const firstName = (firstName) => firstName.toUpperCase();
const lastName = (lastName) => lastName.toLowerCase();

// console.log(firstName("tokyo"));
// console.log(lastName("AIDA"));

exports.firstName = firstName;
exports.lastName = lastName;
