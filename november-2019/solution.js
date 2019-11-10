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
  if(name === 'Tim') {
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
    if((stations[idx][1] >= 20) && (stations[idx][2] != 'restaurant')) {
      appropriateStations.push(stations[idx][0]);
    }
  }
  return appropriateStations;
}

// challenge #6
const voterTurnout = (voter_signatures, voter_ids) => {
  if(voter_signatures.length !== voter_ids.length) { return false; }
    
  for(let i = 0; i < voter_ids.length; i++) {
    if(voter_ids[i] !== voter_signatures[i]) {
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
