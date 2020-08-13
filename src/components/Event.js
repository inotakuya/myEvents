import React from "react"
import PropTypes from "prop-types"
const Event = ({ dispatch, event }) => {
  const id = event.id
  const handleClickDeleteButton = () => {
    dispatch({ type: "DELETE_EVENT", id })
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  )
}
Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  dispatch: PropTypes.func,
}

export default Event
