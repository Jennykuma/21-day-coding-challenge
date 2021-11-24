// Challenge #1
const parseMessage = (origin, message) => {
  return `${origin}: ${message}`
}

// Challenge #2
const generateAstronautTag = (astronaut) => {
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}