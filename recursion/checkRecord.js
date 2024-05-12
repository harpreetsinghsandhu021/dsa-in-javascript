function checkRecord(s) {
  // based on the string, I need to validate whether or not
  // the student is eligible for award or not

  let absentCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absentCount++;
    }

    if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
      return false;
    }
  }

  if (absentCount >= 2) return false;

  return true;
}

// console.log(checkRecord("AA"));

// now we`ll solve the same problem using recursion

function checkRecord2(s) {
  // based on the string, I need to validate whether or not
  // the student is eligible for award or not
  // we know that the two base cases are
  // 1. that there should not be more than 2 absent in total
  // 2. there should be no 3 late consecutilvely
  // let`s just write base conditions first

  return recordRecursion(s);
}

function recordRecursion(s, index = 0, absentCount = 0, lateCount = 0) {
  if (absentCount > 1) return false;
  if (lateCount >= 3) return false;
  if (index === s.length) {
    return true;
  }

  const currChar = s[index];

  if (currChar === "A") {
    absentCount++;
    lateCount = 0;
  } else if (currChar === "L") {
    lateCount++;
  } else {
    lateCount = 0;
  }

  return recordRecursion(s, index + 1, absentCount, lateCount);
}

console.log(checkRecord2("LLLALL"));
