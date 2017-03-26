import React from 'react'
import { connect } from 'react-redux'

let DoAThing = ({ dispatch }) => {
  return (
    <div>
    </div>
  )
}
DoAThing = connect()(DoAThing)

export default DoAThing