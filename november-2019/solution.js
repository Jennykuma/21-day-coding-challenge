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
    if(stations[idx][1] >= 20 && (stations[idx][2] != 'restaurant')) {
      appropriateStations.push(stations[idx][0]);
    }
  }
  return appropriateStations;
}

