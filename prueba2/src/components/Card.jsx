//import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
    return (
        <div className="card mb-1">
            <img src={props.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: 'Lorem Ipsum',
    url: 'https://placehold.co/400x250',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde cum harum quos veritatis deleniti eius mollitia fugit odit consequatur maxime expedita.'
}

Card.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string

} 
