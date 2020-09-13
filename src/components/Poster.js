import React, {Component} from 'react'
import '../App.sass';
import {imageExists, CHECK_IF_IMAGE_EXISTS} from "../Helper";

class Poster extends Component {

    render() {

        const { poster } = this.props;

        return (
            typeof poster !== 'undefined' && CHECK_IF_IMAGE_EXISTS && imageExists(poster)  &&
            <div className="resultPoster">
                <p><img alt="" src={poster} /></p>
            </div>
        )
    }

}

export default Poster;