import React, {Component} from 'react'
import '../App.sass';

class Spinner extends Component {

    render() {

        const { isLoading } = this.props;

        if( ! isLoading) {
            return <div></div>;
        }

        return (
           <div className="spinner round"></div>
        )
    }

}

export default Spinner;