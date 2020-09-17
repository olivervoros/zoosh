import React from 'react'
import '../App.sass';

function Spinner(props) {

        if( ! props.isLoading) {
            return <div></div>;
        }

        return (
           <div className="spinner round"></div>
        )

}

export default Spinner;