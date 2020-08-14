import "bootstrap/dist/css/bootstrap.min.css"
import React, { useReducer, useEffect } from "react"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers"
import EventForm from "./EventForm"
import Events from "./Events"
import OperationLogs from "./OperationLogs"

const APP_KEY = "appWithRedux"

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm></EventForm>
        <Events></Events>
        <OperationLogs></OperationLogs>
      </div>
    </AppContext.Provider>
  )
}

export default App
