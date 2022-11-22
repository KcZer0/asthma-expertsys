const pertanyaan = [
  'Excessive mucus production',
  'Coughing happens once in a while in a day',
  'Trouble breathing (accompanied with or without whistling sound)',
  'Chest tightening',
  'Attacks happen less than or once in a week',
  'Night-time attack happens less than twice in a month',
  'No disturbance during sleep',
  'No disturbance during activity',
  'Coughing happens a few times in a day',
  'Trouble breathing with whistling sound',
  'Attacks happen more than once in a week',
  'Night-time attack happens around twice in a month',
  'A minor disturbance during sleep',
  'A minor disturbance during activity',
  'Coughing continuously',
  'Attacks happen almost every day in a week',
  'Night-time attack happens between 3 or 6 times in a month',
  'Trouble while sleeping',
  'Limited activity',
];

const jawaban = [
  {
    value: 'dy',
    label: 'Definitely Yes',
  },
  {
    value: 'my',
    label: 'Maybe Yes',
  },
  {
    value: 'u',
    label: 'Unsure',
  },
  {
    value: 'mn',
    label: 'Maybe No',
  },
  {
    value: 'dn',
    label: 'Definitely No',
  },
];

export { pertanyaan, jawaban };
