class Message extends React.Component {

    render() {
        return (
            <div className={'border plain-message ' + this.props.cssClass}>
                {this.props.message}
            </div>
        );
    }
}

class SuccessMessage extends React.Component {

    render() {
        return(
            <Message {...this.props} cssClass='success-message'/>
        )
    }
}

class FailureMessage extends React.Component {

    render() {
        return(
            <Message {...this.props} cssClass='error-message'/>
        )
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <div>
                <Message message="A plain message"/>
                <SuccessMessage message="It's over Anakin, I have the high ground!"/>
                <FailureMessage message="I HATE YOU"/>
            </div>
        );
    }
}

ReactDOM.render(<Dialog/>, document.getElementById('outer'));
