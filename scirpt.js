import Countdown from './module.js'

const newYear = new Date().getFullYear()

const birthday = new Countdown(`4 December ${newYear} 18:00:00 GMT-0300`)

let section = document.querySelector('.stopwatch-container')
let congratulations = document.querySelector('.congratulations')
let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')

setInterval(() => {
  days.textContent = birthday.total.days
  hours.textContent = birthday.total.hours
  minutes.textContent = birthday.total.minutes
  seconds.textContent = birthday.total.seconds
}, 1000)

setInterval(() => {
  if (
    days.textContent == 0 &&
    hours.textContent == 0 &&
    minutes.textContent == 0 &&
    seconds.textContent == 0
  ) {
    section.classList.add('remove')
    congratulations.classList.add('isVisibility')
  }
}, 1000)
