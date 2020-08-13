import "bootstrap/dist/css/bootstrap.min.css"
import React, { useReducer } from "react"
import reducer from "../reducers"
import EventForm from "./EventForm"
import Events from "./Events"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch}></EventForm>
      <Events state={state} dispatch={dispatch}></Events>
    </div>
  )
}

export default App
