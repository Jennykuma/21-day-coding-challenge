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