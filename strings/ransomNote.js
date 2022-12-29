function ransomNote(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  for (let i = ransomNote.length - 1; i >= 0; i--) {
    let index = magazine.indexOf(ransomNote[i]);

    if (index === -1) {
      return false;
    } else {
      magazine = magazine.replace(magazine[index], "");
    }
  }

  console.log(ransomNote, magazine);

  return true;
}

console.log(ransomNote("aa", "ab"));
