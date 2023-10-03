function validateEmail(string) {
  const [localPart, domain] = string.split("@")

  if ((localPart?.trim().length > 3) && (domain?.trim().length > 2)) {
    if (string.indexOf("@") !== -1 && string.indexOf(".") !== -1) {
      return true
    }
    return false
  }
  return false
}

/* const validateEmail = (string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailRegex.test(string)
} */

/* const validateEmail = (string) => {
    if(string.indexOf('@') === -1 || string.indexOf('.') === -1) {
        return false
    }

    return true;
} */

module.exports = validateEmail
