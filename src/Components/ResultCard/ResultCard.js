import React from 'react';

const ResultCard = (props) =>{
    const {title, authors, imageLinks} = props

    return(
        <div className="result-card">
            <p className="result-card__title">{title}</p>
            <p className="result-card__author">{authors}</p>
            <img src={imageLinks.thumbnail} alt="thumbnail" className="result-card__thumbnail"/>
        </div>
    )
}

export default ResultCard;