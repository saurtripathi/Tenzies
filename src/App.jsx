import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import Timer from './Timer'
import Tracker from './Tracker'
import BestEffort from './BestEffort'



export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [seconds, setSeconds] = React.useState(0)
  const [minuits, setMinuits] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [isActive, setIsActive] = React.useState(false)
  const [tracker, setTracker] = React.useState(0)
  const [totalTime, setTotalTime] = React.useState('')
  const [bestEffort, setBestEffort] = React.useState(JSON.parse(localStorage.getItem("bestEffort"))|| [])

  // const bestEffortCollection = localStorage.getItem("bestEffortCollection")

  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
      if(seconds===60){
        setMinuits(minuits => minuits + 1)
        setSeconds(0)
      }
      if(minuits===60){
        setHours(hours => hours + 1)
        setMinuits(0)
        setSeconds(0)
      }
    } else if (!isActive && seconds !== 0 && minuits !==0 && hours !==0 ) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive,tenzies,seconds,minuits,hours]);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0)
    setMinuits(0)
    setHours(0)
    setIsActive(false)
  }



 






  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      setTotalTime(`${hours}h${minuits}m${seconds}s`)
      console.log(`${hours}h${minuits}m${seconds}s`)
      const attemptTimeInSeconds = hours*60*60+minuits*60+seconds
      console.log(attemptTimeInSeconds)
      setBestEffort(bestEffort.push(attemptTimeInSeconds))
      localStorage.setItem("bestEffort", JSON.stringify(bestEffort));
      reset()
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }
 
  function rollDice() {
    setTracker(tracker + 1)
    setTotalTime('')
   if(seconds === 0 && minuits === 0 & hours === 0){
      setIsActive(!isActive)
   }

    if (!tenzies) {

      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
          die :
          generateNewDie()
      }))
    } else {
      setTracker(0)
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))
  }

  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  return (
    <>
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button
        className="roll-dice"
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
      {/* <Tracker tracker={tracker} /> */}
    </main>
          <Timer  
          isActive={isActive} 
          hours={hours} 
          minuits={minuits} 
          seconds={seconds} 
          totalTime={totalTime}
          />
          <Tracker  tracker={tracker} tenzies={tenzies} />
          <BestEffort tenzies={tenzies} />
          </>
  )
}