/* GLOBAL OBJECTS */
var navigation = {
  x: -2,
  y: 4,
  z: 7,
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  range: {
    low: 88,
    high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

// Challenge #1
function powerOn() {
  ship.powerOn = true;
}

// Challenge #2
function countModules() {
  return availableModules.length;
}

// Challenge #3
function countEssential() {
  return availableModules.filter(module => module.essential === true).length;
}

// Challenge #5
function findModuleIndex(name) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name == name) {
      return i;
    }
  }
}

/* Challenge #4
function loadModule(index) {
if (availableModules[index].essential) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
} else {
    return null;
}
}
*/

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation")); // Challenge #6

// Challenge #7
function resetLARRY() {
  for (let j = 0; j < 10; j++) {
    LARRY.quack();
  }
}

// Challenge #8
function loadModule(index) {
  availableModules[index].essential = true;
  if (availableModules[index].essential) {
    availableModules[index].enabled = true;
    ship.modules.push(availableModules[index]);
  }
}
loadModule(findModuleIndex("communication"));

// Challenge #9
function setMessage() {
  radio.message = JSON.stringify(navigation);
}
setMessage();

// Challenge #10
function activateBeacon() {
  radio.beacon = true;
}

// Challenge #11
function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}

// Challenge #12
function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

// Challenge #13
function calibrateX() {
  for (let k = 1; k < 12; k++) {
    var signal = checkSignal();
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
}

// Challenge #14
function calibrateY() {
  for (let m = 1; m < 60; m++) {
    var signal = checkSignal();
    if (signal !== undefined) {
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ() {
  for (let n = 1; n < 60; n++) {
    var signal = checkSignal();
    if (signal !== undefined) {
      navigation.z = signal;
      break;
    }
  }
}

// Challenge #15
function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

// Challenge #16
function setSpeed(speed) {
  if (parseInt(speed) >= 0) {
    navigation.speed = parseInt(speed);
  }
}

// Challenge #17
function activateAntenna() {
  ship.antenna.active = true;
}
//activateAntenna();

// Challenge #18
function sendBroadcast() {
  for (let o = 0; o < 100; o++) {
    broadcast();
  }
}
//sendBroadcast();

// Challenge #19
function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();

// Challenge #20
// th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l.
// a e i o u y
function decodeMessage(message) {
  var vowels = {
    '4': 'a',
    '3': 'e',
    '1': 'i',
    '0': 'o',
    '2': 'u',
    '5': 'y'
  };

  var finalMessage = message.replace(/[4|3|1|0|2|5]|gw|kw/g, function (s) {
    return vowels[s];
  });
  return finalMessage;
}

// Challenge #21
function returnToEarth() {
  navigation.x = parseInt(decodeMessage(broadcast('x')), 16);
  navigation.y = parseInt(decodeMessage(broadcast('y')), 16);
  navigation.z = parseInt(decodeMessage(broadcast('z')), 16);
}
returnToEarth();