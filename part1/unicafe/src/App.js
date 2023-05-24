import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Title = ({ text }) => <h1>{text}</h1>

  const [value, setValue] = useState(10)


  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <Title text={"Give Feedback"} />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Title text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

export default App
