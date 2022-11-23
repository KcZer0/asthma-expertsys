const symptoms = [
  {
    name: 's1mucus',
    desc: 'Excessive Mucus Production',
    options: ['No', 'Yes'],
    cf: 0.32,
  },
  {
    name: 's2chest',
    desc: 'Chest tightening',
    options: ['No', 'Yes'],
    cf: 0.32,
  },
  {
    name: 's3cough',
    desc: 'Coughing (in a day)',
    options: [
      'No',
      'Once in a while',
      'Few times',
      'Continuously/Very often',
    ],
    cf: 0.237,
  },
  {
    name: 's4breathe',
    desc: 'Trouble Breathing',
    options: [
      'No',
      'Slightly',
      'Yes, but no whistling',
      'Yes, with whistling sound',
    ],
    cf: 0.5,
  },
  {
    name: 's5attack',
    desc: 'Attacks in a week',
    options: [
      'None',
      '1-2 days',
      '3-5 days',
      'Almost every day',
    ],
    cf: 0.5,
  },
  {
    name: 's6night',
    desc: 'Night time attacks (in a month)',
    options: [
      'None',
      '1-2 times',
      '3-4 times',
      '>4 times',
    ],
    cf: 0.5,
  },
  {
    name: 's7sleep',
    desc: 'Disturbance during sleep',
    options: [
      'None',
      'Minor',
      'Trouble sleeping',
    ],
    cf: 0.5,
  },
  {
    name: 's8activity',
    desc: 'Disturbance during activity',
    options: [
      'None',
      'Minor',
      'Limited Activity',
    ],
    cf: 0.5,
  },
];
export default symptoms;
