const symptoms = {
  s1mucus: {
    desc: 'Excessive Mucus Production',
    options: ['No', 'Yes'],
    cf: [0.32, 0.32, 0.32],
  },
  s2chest: {
    desc: 'Chest tightening',
    options: ['No', 'Yes'],
    cf: [0.32, 0.32, 0.32],
  },
  s3cough: {
    desc: 'Coughing (in a day)',
    options: [
      'No',
      'Rarely',
      'Few times',
      'Continuously/Very often',
    ],
    cf: [0.15, 0.15, 0.41],
  },
  s4breathe: {
    desc: 'Trouble Breathing',
    options: [
      'No',
      'Slightly',
      'Yes, but no whistling',
      'Yes, with whistling sound',
    ],
    cf: [0.5, 0.5, 0.5],
  },
  s5attack: {
    desc: 'Attacks in a week',
    options: [
      'None',
      '1-2 days',
      '3-5 days',
      'Almost every day',
    ],
    cf: [0.5, 0.41, 0.5],
  },
  s6night: {
    desc: 'Night time attacks (in a month)',
    options: [
      'None',
      '1-2 times',
      '3-4 times',
      '>4 times',
    ],
    cf: [0.5, 0.5, 0.5],
  },
  s7sleep: {
    desc: 'Disturbance during sleep',
    options: [
      'None',
      'Minor',
      'Trouble sleeping',
    ],
    cf: [0.5, 0.5, 0.5],
  },
  s8activity: {
    desc: 'Disturbance during activity',
    options: [
      'None',
      'Minor',
      'Limited Activity',
    ],
    cf: [0.5, 0.5, 0.5],
  },
};
export default symptoms;
