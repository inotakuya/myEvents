import React, { useState } from "react"
import PropTypes from "prop-types"

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }
  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}></input>
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
