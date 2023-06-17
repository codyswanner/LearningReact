class Counter extends React.Component {
    state = {
        counter:0
    };

    incrementCount = (e) => {
        e.preventDefault()

        var increment = 1;
        if (e.shiftKey) {
            increment = 10;
        }
        if (e.altKey) {
            increment = 100;
        }
        if (e.ctrlKey) {
            increment = 1000;
        }

        console.log("event: " + e)

        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + increment
            }
        });
    };

    decrementCount = (e) => {
        e.preventDefault()

        var decrement = 1;
        if (e.shiftKey) {
            decrement = 10;
        }
        if (e.altKey) {
            decrement = 100;
        }
        if (e.ctrlKey) {
            decrement = 1000;
        }

        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter - decrement
            }
        });
    };

    render() {
        return (
            <div>
                <div className="box">
                    {this.state.counter}
                </div>
                <button className="button" onClick={this.incrementCount}>
                    +
                </button>
                <button className="button" onClick={this.decrementCount}>
                    -
                </button>
                <div>
                    (Try with shift and alt keys!)
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('outer'));
