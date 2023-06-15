class Message extends React.Component {
    constructor(props) {
        super(props)
        this.className = 'border plain-message';
    }

    render() {
        return (
            <div className={this.className}>
                {this.props.message}
            </div>
        );
    }
}


class SuccessMessage extends Message {
    constructor(props) {
        super(props);
        this.className = this.className + ' success-message';
    }

    render() {
        return (
            <div>
                {super.render()}
            </div>
        );
    }
}

class FailureMessage extends Message {
    constructor(props) {
        super(props);
        this.className = this.className + ' error-message';
    }

    render() {
        return (
            <div>
                {super.render()}
            </div>
        );
    }
}


class Dialog extends React.Component {

    render() {
        return (
            <div>
                <Message message="A plain message"/>
                <SuccessMessage message="A success message!"/>
                <FailureMessage message="You fail!"/>
            </div>
        );
    }
}


ReactDOM.render(<Dialog/>, document.getElementById('outer'));
