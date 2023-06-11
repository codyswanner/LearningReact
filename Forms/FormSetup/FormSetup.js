class HotelBookingForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            phoneValue: 0,
            nameOfHotelValue: 'Fantastic Hotels',
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email ID submitted: ' + this.state.emailValue);
        console.log('Phone Number submitted: ' + this.state.phoneValue);
        console.log('Name of Hotel submitted: ' + this.state.nameOfHotelValue);

        this.setState({
            nameValue: '',
            emailValue: '',
            phoneValue: 0,
            nameOfHotelValue: 'Fantastic Hotels'
        });

        event.preventDefault();
    }

    render() {
        return (
            <form className="contents" onSubmit={this.handleSubmit}>
                <TextInput label={"Name: "} name="nameValue" value={this.state.nameValue} handleInputChange={this.handleInputChange}/>
                <TextInput label={"Email: "} name="emailValue" value={this.state.emailValue} handleInputChange={this.handleInputChange}/>
                <NumberInput label={"Phone number: "} name="phoneValue" value={this.state.phoneValue} handleInputChange={this.handleInputChange}/>
                <SelectInput label={"Name of Hotel: "} name="nameOfHotelValue" value={this.state.nameOfHotelValue}
                    options={this.props.hotelNameOptions} handleInputChange={this.handleInputChange} />

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
    
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" type="text" name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

class NumberInput extends React.Component {
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" type="number" value={this.props.value} name={this.props.name} onChange={this.handleInputChange} />
            </div>
        );
    }
}

class SelectInput extends React.Component {
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

ReactDOM.render(<HotelBookingForm/>, document.getElementById('outer'));
