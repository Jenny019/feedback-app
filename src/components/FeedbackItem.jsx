import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({ item }) {

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => {}} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => {}} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
    
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem