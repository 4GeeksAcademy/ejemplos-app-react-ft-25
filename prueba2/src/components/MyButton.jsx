//import React from 'react'
import PropTypes from 'prop-types'

export const MyButton = ({ type, className, text }) => {
    return <button type={type} className={className}>{text}</button>
}

MyButton.defaultProps = {
    type: 'submit'
}

MyButton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}