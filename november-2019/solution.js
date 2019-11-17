const volunteers = [
    'Sally',
    'Jake',
    'Brian',
    'Hamid'
  ];

const neighbourhoods = [
    'Central Valley',
    'Big Mountain',
    'Little Bridge',
    'Bricktown',
    'Brownsville',
    "Paul's Boutique",
    'Clay Park',
    'Fox Nest'
];

// Challenge #1
const doorToDoor = (volunteers, neighbourhoods) => {
    return (neighbourhoods.length / volunteers.length);
}

// challenge #2
const interviewAnswer = (topic) => {
  switch(topic) {
    case "arts funding":
      return "We'll have to get creative!";
    case "economy":
      return "Time is money.";
    case "transportation":
      return "It's going to be a long road, so we better get moving.";
    default:
      return "QUACK!";
  }
}

// challenge #3
const castVote = (name, votes) => {
  if (name === 'Tim') {
    votes[0]++;
  } else if (name === 'Sally') {
    votes[1]++;
  } else {
    votes[2]++;
  }
  
  return votes;
}

// challenge #4
const registerToVote = (name, unregisteredVoters) => {
  unregisteredVoters = unregisteredVoters.filter(x => x !== name);
  return unregisteredVoters;
}

// challenge #5
const chooseStations = (stations) => {
  let appropriateStations = [];
  for(let idx = 0; idx < stations.length; idx++) {
    if ((stations[idx][1] >= 20) && (stations[idx][2] != 'restaurant')) {
      appropriateStations.push(stations[idx][0]);
    }
  }
  return appropriateStations;
}

// challenge #6
const voterTurnout = (voter_signatures, voter_ids) => {
  if (voter_signatures.length !== voter_ids.length) { return false; }
    
  for(let i = 0; i < voter_ids.length; i++) {
    if (voter_ids[i] !== voter_signatures[i]) {
      return "FRAUD!";
    }
  }
  return "All clear, we can count the votes!";
}

// challenge #7
const termTopics = (interviews) => {
  var topicCount = {
    'smart city': 0,
    'arts funding': 0,
    'transportation': 0
  };
    
  for(let i = 0; i < interviews.length; i++) {
    if (topicCount[interviews[i]] !== undefined) {
      ++topicCount[interviews[i]];
    }
  }
  
  return Object.values(topicCount);
}

// challenge #8
const smartGarbage = (trash, bins) => {
    ++bins[trash];
    return bins;
}

// challenge #9
const carPassing = (cars, speed) => {
  var currentCar = {
    'time': Date.now(),
    'speed': speed
  };
  cars.push(currentCar);
  return cars;
}

// challenge #10
const whereCanIPark = (spots, vehicle) => {
  const regular = ['R'];
  const small = ['R', 'S'];
  const motorcycle = ['R', 'S', 'M'];
  
  for(let row = 0; row < spots.length; row++) {
    for(let col = 0; col < spots[row].length; col++) {
      if (vehicle === 'regular' && regular.includes(spots[row][col])) {
        return [col, row];
      } else if (vehicle === 'small' && small.includes(spots[row][col])) {
        return [col, row];
      } else if(vehicle === 'motorcycle' && motorcycle.includes(spots[row][col])) {
        return [col, row];
      }
    }
  }
  return false;
}

// challenge #11
const busTimes = buses => {
  var busTimesObj = {};
  for(const bus in buses) {
    busTimesObj[bus] = (buses[bus].distance / buses[bus].speed);
  }
  return busTimesObj;
}

// challenge #12
const checkAir = function (samples, threshold) {
  let cleanCounter = 0;
  let pollutedCounter = 0;
  for(let i = 0; i < samples.length; i++) {
    if (samples[i] === 'clean') { cleanCounter++; }
    else { pollutedCounter++; }
  }
  if(pollutedCounter / samples.length > threshold) {
    return "Polluted";
  }
  return "Clean";
}

// challenge #13
const lightsOn = function(lights) {
  return lights.map(light => light.on = true);
}

const lightsOff = function(lights) {
  return lights.map(light => light.on = false);
}

const toggleLights = function(lights, lightsAreOn) {
  return lights.map(light => light.on = !lightsAreOn);
}

// challenge #14
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let price = 1;
  price += distanceTraveled * 0.25;
    
  if(numberOfPeople >= 30) {
    price += 0.25;
  }
    
  return '$' + price.toFixed(2);
}

// challenge #15
const finalPosition = (moves) => {
  let position = [0,0];
  for(let i = 0; i < moves.length; i++) {
    if(moves[i] === 'north') { position[1]++; }
    else if (moves[i] === 'south') { position[1]--; }
    else if (moves[i] === 'west') { position[0]--; }
    else if (moves[i] === 'east') { position[0]++; }
  }
  return position;
}

// challenge #16
const festivalColours = color1 => {
  let splitComplementaryColours = [0,0];
  splitComplementaryColours[0] = color1 + 150;
  splitComplementaryColours[1] = color1 + 210;
  return splitComplementaryColours.sort();
}

// challenge #17
const judgeVegetable = (vegetables, metric) => {
  let highest = 0;
  let idx = 0;
  for(let i = 0; i < vegetables.length; i++) {
    if(vegetables[i][metric] > highest) {
      highest = vegetables[i][metric];
      idx = i;
    }
  }
  return vegetables[idx].submitter;
}
