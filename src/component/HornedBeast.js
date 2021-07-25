import React from 'react';

class HornedBeast extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title} </h1>
                <p>{this.props.description} </p>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}

export default HornedBeast;