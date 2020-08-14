import PropTypes from "prop-types"
import React from "react"
const OperationLog = ({ operationLog }) => {
  return (
    <>
      <tr>
        <td>{operationLog.description}</td>
        <td>{operationLog.operatedAt}</td>
      </tr>
    </>
  )
}
OperationLog.propTypes = {
  operationLog: PropTypes.shape({
    description: PropTypes.string,
    operatedAt: PropTypes.string,
  }),
}
export default OperationLog
