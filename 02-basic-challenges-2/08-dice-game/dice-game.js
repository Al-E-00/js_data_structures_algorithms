function diceGameSimulation(numSimulations) {
  const finalResult = []

  for (let i = 0; i < numSimulations; i++) {
    randomNum1 = rollDice()
    randomNum2 = rollDice()
    const sum = randomNum1 + randomNum2
    let result = ""

    switch (sum) {
      case 7:
      case 11: {
        result = "win"
        break
      }
      case 2:
      case 3:
      case 12: {
        result = "lose"
        break
      }
      default: {
        result = "roll again"
      }
    }

    finalResult.push({
      dice1: randomNum1,
      dice2: randomNum2,
      sum: sum,
      result: result,
    })
  }

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1
  }

  return finalResult
}

module.exports = diceGameSimulation
