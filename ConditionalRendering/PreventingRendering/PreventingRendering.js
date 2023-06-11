class Warning extends React.Component {
    render() {
        if (!this.props.warn) {
            return null;
        }

        return (
            <div className="comment">
                <span className="photo">
                    <img src="images/warning.jpeg"/>
                </span>
                <span className="message">
                    I've got a bad feeling about this...
                </span>
            </div>
        );
    }
}

class Display extends React.Component {
    state = {
        warn: false
    }

    toggle = () => {
        this.setState(function(prevState) {
            return {
                warn: !prevState.warn
            }
        });
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.toggle}>
                    {this.state.warn ? 'Hide' : 'Show'}
                </button>
                <Warning warn={this.state.warn} />
            </div>
        );
    }
}

ReactDOM.render(<Display />, document.getElementById('outer'));
