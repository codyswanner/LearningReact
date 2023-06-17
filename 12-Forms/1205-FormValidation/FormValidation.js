class HotelBookingForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
        };

        this.errors = {
            name: true,
            email: true
        }
    }

    validateName = (name) => {
        if (!name || name.length < 3) {
            this.errors.name = true;
            return false;
        }

        this.errors.name = false;
        return true;
    }

    validateEmail = (email) => {
        if (!/.+@.+\..+/.test(email)) {
            this.errors.email = true;
            return false;
        }

        this.errors.email = false;
        return true;
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        if (this.errors.email) {
            alert('Invalid email address!');
            return;
        } else if (this.errors.name) {
            alert('Please enter a name of minimum 3 characters');
            return;
        }
        
        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email ID submitted: ' + this.state.emailValue);
        console.log('Name of Hotel submitted: ' + this.state.nameOfHotelValue);

        this.setState({
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels'
        });

        event.preventDefault();
    }

    render() {
        return (
            <form className="contents" onSubmit={this.handleSubmit}>
                <TextInput
                    label={"Name: "}
                    name="nameValue"
                    value={this.state.nameValue}
                    validate={this.validateName}
                    handleInputChange={this.handleInputChange}/>
                <TextInput
                    label={"Email: "}
                    name="emailValue"
                    value={this.state.emailValue}
                    validate={this.validateEmail}
                    handleInputChange={this.handleInputChange}/>
                <SelectInput
                    label={"Name of Hotel: "}
                    name="nameOfHotelValue"
                    value={this.state.nameOfHotelValue}
                    options={this.props.hotelNameOptions}
                    handleInputChange={this.handleInputChange} />

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

HotelBookingForm.defaultProps = {
    hotelNameOptions: [
        'Fantastic Hotels',
        'Wonderful Hotels',
        'Comfortable Hotels',
        'Pretentious Hotels'
    ]
};

class TextInput extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            errorMessage: ''
        };
    }
    
    handleInputChange = (event) => {
        var errorMessage = '';

        if (!this.props.validate(event.target.value)) {
            errorMessage = 'Invalid';
        }

        this.props.handleInputChange(event);

        this.setState({errorMessage: errorMessage});
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" type="text" name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
                <ErrorMessage message={this.state.errorMessage} />
            </div>
        );
    }
}

class SelectInput extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            errorMessage: ''
        };
    }

    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return(
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <select value={this.props.value} name={this.props.name} onChange={this.handleInputChange}>
                    {
                        this.props.options.map(
                            (option) => <option key={option} value={option}>{option}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="error">
                {this.props.message}
            </span>
        );
    }
}

ReactDOM.render(<HotelBookingForm/>, document.getElementById('outer'));
