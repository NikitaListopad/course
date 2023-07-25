import './RickMortyMain';
import {useEffect, useState} from "react";
import {getPerson} from "../../services/rick-morty-services";
import {useParams} from "react-router-dom";

export const Card = ({item}) => {

    const {name, image, episode, location, species} = item;

    const {cardId} = useParams();

    console.log(cardId)


        return (
            <div className="http-card-container">
                <img src={image} alt={`${name} image`} className="http-card-image"/>
                <div className="http-card-description">
                    <h1 className="http-card-title">
                        {name}
                    </h1>
                    <div className="http-card-section">
                        <span className='card-species-circle'></span>{species}
                    </div>
                    <div className="http-card-section">
                        <p className='card-text-grey'>Last known location:</p>
                        {location.name}
                    </div>
                    <div className="http-card-section">
                        <p className='card-text-grey'>Last seen in:</p>
                        {episode}
                    </div>
                </div>
            </div>
        )
}