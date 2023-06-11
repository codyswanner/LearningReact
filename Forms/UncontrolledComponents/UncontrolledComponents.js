class HotelBookingForm extends React.Component {

    constructor(props) {
        super(props);

        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.nameOfHotelRef = React.createRef();
    }

    handleSubmit = (event) => {
        console.log('Name submitted: ' + this.nameRef.current.value);
        console.log('Email submitted: ' + this.emailRef.current.value);
        console.log('Name of Hotel submitted: ' + this.nameOfHotelRef.current.value);

        event.preventDefault();
    }

    render() {
        return (

            <form className="contents" onSubmit={this.handleSubmit}>
                <div className="label">
                    Name: 
                </div>
                <input className="input" type="text" ref={this.nameRef} />

                <div className="label">
                    Email: 
                </div>
                <input className="input" type="text" ref={this.emailRef} />
                
                <div className="label">
                    Name of Hotel: 
                </div>
                <select ref={this.nameOfHotelRef} defaultValue="Comfortable Hotels">
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Comfortable Hotels">Comfortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<HotelBookingForm/>, document.getElementById('outer'));
