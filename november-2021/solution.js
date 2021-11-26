// Challenge #1
const parseMessage = (origin, message) => {
  return `${origin}: ${message}`
}

// Challenge #2
const generateAstronautTag = (astronaut) => {
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}

// Challenge #3
const checkGaugeStatus = (gauge) => {
  return gauge.min < gauge.current && gauge.current < gauge.max
}

// Challenge #4
const switchToggle = (toggle) => {
  toggle.isOn = !toggle.isOn
  return toggle
}