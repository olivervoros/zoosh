import React from 'react'
import '../App.sass';
import {imageExists, CHECK_IF_IMAGE_EXISTS} from "../Helper";

function Poster(props) {

        return (
            typeof props.poster !== 'undefined' && CHECK_IF_IMAGE_EXISTS && imageExists(props.poster)  &&
            <div className="resultPoster">
                <p><img alt="" src={props.poster} /></p>
            </div>
        )

}

export default Poster;