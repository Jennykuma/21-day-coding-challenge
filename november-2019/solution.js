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
