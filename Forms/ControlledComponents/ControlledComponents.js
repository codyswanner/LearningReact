class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: ''
        };

        // Reminder: if you do not use arrow notation for methods, you must use a line like the one below to bind to instance:
        // this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleEmailChange = (e) => {
        this.setState({emailValue: e.target.value});
    }

    handleSubmit = (e) => {
        console.log('Email address submitted: ' + this.state.emailValue);

        alert('Email submitted: ' + this.state.emailValue);

        this.setState({emailValue: ''});

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="label">
                        Email Address: 
                    </div>
                    <input className="input" type="text" value={this.state.emailValue} onChange={this.handleEmailChange} />
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
};

ReactDOM.render(<EmailForm/>, document.getElementById('outer'));
