import asthma from '@/data/asthma-desc';

/**
 * Determine which type of asthma
 *
 * @param {float[]} input
 *   Array of input values
 *
 * @return {{result: boolean, cf: float}}
 *   True/False whether user have asthma
 */
const asthmaType = (input, cfs) => {
  const sz = input.length;

  // combine certainty factor
  function comb(cf1, cf2) {
    return cf1 + cf2 * (1 - cf1);
  }

  // cf of P1,P2,P3
  const P = [0, 0, 0];

  // symptom 1-2 (2-option)
  for (let i = 0; i < 2; ++i) {
    if (input[i] > 0)
      for (let k = 0; k < 3; ++k) {
        // - All 3 types (k)
        P[k] = comb(P[k], cfs[i][k]);
      }
  }

  // symptom 3-6 (4-option)
  for (let i = 2; i < 6; ++i) {
    let inp = input[i];

    if (inp > 0) {
      P[0] = comb(P[0], cfs[i][0]);
    }
    if (inp > 1) {
      P[1] = comb(P[1], cfs[i][1]);
    }
    if (inp > 2) {
      P[2] = comb(P[2], cfs[i][2]);
    }
  }

  // symptom 7-8 (4-option)
  for (let i = 6; i < sz; ++i) {
    let inp = input[i];

    // Symptom 7-8 can't be used to increase believe of type-1
    // Because "no disturbance", applies for not-asthma

    // if (inp == 0) {
    //   P[0] = comb(P[0], cfs[i][0]);
    // }

    if (inp > 0) {
      P[1] = comb(P[1], cfs[i][1]);
    }
    if (inp > 1) {
      P[2] = comb(P[2], cfs[i][2]);
    }
  }

  // Threshold
  const thresh = 0.85;

  // if P > thresh, it's the probable type
  let type = null;
  for (let k = 0; k < 3; ++k) {
    if (P[k] > thresh) type = k;
  }

  return {
    type,
    info: asthma[type],
    prob: P,
  };
};
export default asthmaType;
