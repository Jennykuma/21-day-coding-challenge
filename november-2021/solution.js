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

// Challenge #5
const addJobToAstronaut = (astronaut, job) => {
  astronaut.job = job
  return astronaut
}

// Challenge #6
const addAstronautToRoster = (roster, astronaut) => {
  roster.push(astronaut)
  return roster
}

// Challenge #7
const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  return {
    temperature: Math.round((temperature - 32) * 5/9),
    windSpeed: Math.round(windSpeed / 2.237),
    windDirection,
    condition
  }
}

// Challenge #8
const countActiveAstronauts = (roster) => {
  return roster.length
}
