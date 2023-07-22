function capitaliseString(string) {
  const firstLetter = string.charAt(0);
  return firstLetter.toUpperCase() + string.slice(1);
}

module.exports = capitaliseString;
