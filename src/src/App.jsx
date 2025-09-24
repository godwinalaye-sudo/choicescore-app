import React, { useState } from 'react'

export default function App() {
  const [alerts, setAlerts] = useState([])

  const handleClick = (type) => {
    setAlerts([...alerts, `New ${type} event triggered!`])
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Choicescore App</h1>
      <p>Select a notification type:</p>
      <button onClick={() => handleClick('Goal')}>Goal</button>
      <button onClick={() => handleClick('Corner')}>Corner</button>
      <button onClick={() => handleClick('Foul')}>Foul</button>
      <button onClick={() => handleClick('Save')}>Save</button>
      <button onClick={() => handleClick('Throw-in')}>Throw-in</button>
      <button onClick={() => handleClick('Yellow Card')}>Yellow Card</button>
      <button onClick={() => handleClick('Red Card')}>Red Card</button>

      <h2>Alerts:</h2>
      <ul>
        {alerts.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  )
}