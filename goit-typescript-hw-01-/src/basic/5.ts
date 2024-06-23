enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (
    day === DayOfWeek.Monday ||
    day === DayOfWeek.Tuesday ||
    day === DayOfWeek.Wednesday ||
    day === DayOfWeek.Thursday ||
    day === DayOfWeek.Friday
  ) {
    return false
  } else {
    return true
  }
}
console.log(isWeekend(DayOfWeek.Sunday))

// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isWeekend(DayOfWeek.Friday))
