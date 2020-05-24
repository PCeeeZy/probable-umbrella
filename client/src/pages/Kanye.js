import React from 'react';
import API from '../utils/API';

class Kanye extends React.Component{
    state = {
        quote: ""
    };

    componentDidMount() {
        console.log('component mounting')
        this.getQuote();
        console.log('get quote started')
    }

    getQuote = () => {
        API.getQuote().then(response => {
            console.log(response);
            this.setState({
                quote: response.data
            })
        })
    }

    render() {
        return (
            <>
                <h1>
                    {this.state.quote}
                </h1>
                <button onClick={() => this.getQuote()}>New Quote</button>
            </>
        )
    }
}

export default Kanye;
