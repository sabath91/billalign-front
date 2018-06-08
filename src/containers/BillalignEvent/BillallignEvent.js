import React, {Component} from 'react';
import axios from 'axios';
// import classes from './BillalignEvent.css';
import Greetings from '../../components/Greetings/Greetings';

class BillallignEvent extends Component {
    state = {
        greetings: []
    };

    componentDidMount() {
        axios.get('http://localhost:8080/hello')
            .then(response => {
                const greetings = response.data.slice(0, 1);
                const wrappedGreetings = greetings.map(g => {
                    return {
                        ...g,
                        additionalComment: 'We are working for you to develop more awesome features then just displaying ' +
                        'string... But this is gone take a while'
                    }
                });
                this.setState({greetings: wrappedGreetings});
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <Greetings greetings={this.state.greetings.greetings}
                           additionalComment={this.state.greetings.additionalComment}/>
            </div>
        )
    }

}

export default BillallignEvent;