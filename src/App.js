import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate.")
  })

  useEffect(() => {
    console.log("This is like componentDidMount")
  }, [])

  useEffect(() => {
    console.log("This callback is for name only.")
  }, [name])

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })}></input>
    </>
  )
}

App.defaultProps = {
  name: "",
  price: 1000,
}

App.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
}

export default App
