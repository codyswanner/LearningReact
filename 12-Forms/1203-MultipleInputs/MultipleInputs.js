class HotelBookingForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
            locationValue: 'California'
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
        console.log('Name of Hotel submitted: ' + this.state.nameOfHotelValue);
        console.log('Location submitted: ' + this.state.locationValue);

        this.setState({
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
            locationValue: 'California'
        });

        event.preventDefault();
    }

    render() {
        return(
            <form className="contents" onSubmit={this.handleSubmit}>
                <div className="label">
                    Name:
                </div>
                <textarea className="input" name="nameValue" value={this.state.nameValue} onChange={this.handleInputChange} />
                <div className="label">
                    Email ID:
                </div>
                <input className="input" name="emailValue" type="text" value={this.state.emailValue} onChange={this.handleInputChange} />
                <div className="label">
                    Name of Hotel:
                </div>
                <select name="nameOfHotelValue" value={this.state.nameOfHotelValue} onChange={this.handleInputChange} >
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Comfortable Hotels">Comfortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>

                <div className="label">
                    Location:
                </div>
                <input className="input" type="text" name="locationValue" value={this.state.locationValue} onChange={this.handleInputChange} />
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));
