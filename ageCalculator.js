const ageCalculator = function (name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return name + ' is ' + age + ' years old.'
}
console.log(ageCalculator('Stephen', 1989, 2023))
