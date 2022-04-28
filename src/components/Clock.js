import React from "react";
export default class Clock extends React.Component {

    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            date: new Date()
        }
    }

    componentDidMount()
    {
        this.timerId = setInterval(
            () => {
                this.tick();
            },
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render()
    {
        return(
            <div>
                <h1>Hola World</h1>
                <h5>It's {this.state.date.toLocaleTimeString()}</h5>
            </div>
        );
    }
}