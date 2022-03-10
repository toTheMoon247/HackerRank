function maxTraillingDiff(arr) {
  const diffToMyLeft = calcDiffToMyLeft(arr);
  const traillingDiffs = calcTraillingDiffs(diffToMyLeft);
  const maxTraillingDiffs = findMax(traillingDiffs);

  if (maxTraillingDiffs === 0) {
    return -1;
  }
  return maxTraillingDiffs;
}

//////////////////////////////////// Helpers //////////////////////////////

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}
function calcDiffToMyLeft(arr) {
  let diffToMyLeft = new Array(arr.length).fill(0);
  diffToMyLeft[0] = 0;
  for (let i = 1; i < diffToMyLeft.length; i++) {
    diffToMyLeft[i] = arr[i] - arr[i - 1];
  }

  return diffToMyLeft;
}

function calcTraillingDiffs(diffToMyLeft) {
  let traillingDiffs = new Array(diffToMyLeft.length).fill(0);
  traillingDiffs[0] = 0;
  for (let i = 1; i < traillingDiffs.length; i++) {
    traillingDiffs[i] =
      diffToMyLeft[i - 1] > 0
        ? diffToMyLeft[i] + diffToMyLeft[i - 1]
        : diffToMyLeft[i];
  }

  return traillingDiffs;
}

module.exports = maxTraillingDiff;