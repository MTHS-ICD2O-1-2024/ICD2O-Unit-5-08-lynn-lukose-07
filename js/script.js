// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: apr 2025
// This file contains the JS functions for index.html

"use strict"

// This function keeps on subtracting until the number you are left with is smaller that the number you are dividing by
function calculate() {
  // input
  let dividend = parseFloat(document.getElementById("firstNumber").value)
  const secondUserInput = parseFloat(document.getElementById("secondNumber").value)
  let number = 0
  const answer = dividend

  // process
  while (true) {
    number++
    dividend = dividend - secondUserInput
    if (dividend < secondUserInput) {
      break
    }
  }
  // output
  document.getElementById("result").innerHTML =
    + answer + ' ÷ ' + secondUserInput + ' = ' + number + ' R ' + dividend
}