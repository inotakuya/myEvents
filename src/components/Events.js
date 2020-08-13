import React, { useContext } from "react"
import Event from "./Event"
import PropTypes from "prop-types"
import AppContext from "../contexts/AppContext"

const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext)
  return (
    <>
      <div>{value}</div>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  )
}

Events.propTypes = {
  state: PropTypes.array,
  dispatch: PropTypes.func,
}
export default Events
