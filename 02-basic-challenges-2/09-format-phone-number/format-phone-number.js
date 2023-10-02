function formatPhoneNumber(numbersArr) {
    const areaCode = numbersArr.slice(0, 3).join('');
    const prefix = numbersArr.slice(3, 6).join('');
    const lineNumber = numbersArr.slice(6).join('');

    return `(${areaCode}) ${prefix}-${lineNumber}`
}

/* function formatPhoneNumber(numbersArr) {
   const formatted = numbersArr.join('');

    return `(${formatted.substring(0, 3)}) ${formatted.substring(3, 6)}-${formatted.substring(6)}`
}
 */

/* const formatPhoneNumber = (numbersArr) =>
  `(${numbersArr.slice(0, 3).join("")}) ${numbersArr
    .slice(3, 6)
    .join("")}-${numbersArr.slice(6).join("")}` */

module.exports = formatPhoneNumber
