class Warning extends React.Component {
    render() {
        return(
            <div className="comment">
                <span className="photo">
                    <img src="images/warning.jpeg"/>
                </span>
                <span className="message">
                    Something wasn't right, you might need to debug
                </span>
            </div>
        );
    }
}

class Ok extends React.Component {
    render() {
        return(
            <div className="comment">
                <span className="photo">
                    <img src="images/ok.jpeg"/>
                </span>
                <span className="message">
                    Everything looks good, please carry on!
                </span>
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello!</h1>
                {
                    (this.props.warning && <Warning />) ||
                    (<Ok />)
                }
            </div>
        );
    }
}

ReactDOM.render(<Display warning={true} />, document.getElementById('outer'));
