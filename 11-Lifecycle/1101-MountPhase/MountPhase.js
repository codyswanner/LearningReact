class Employees extends React.Component {

    constructor(props) {
        super(props);

        console.log('1. constructor', props.initialNames);

        this.state = {
            names: props.initialNames,
            mounted: false
        };

        window.addEventListener('mountedEvent', function() {
            console.log('Invoked when the component has mounted');
            this.setState((prevState) => {
                var names = prevState.names.concat();

                names.push('Hawkeye');
                names.push('Trapper');
                names.push('Radar');
                names.push('Frank');
                names.push('Hotlips');
                names.push('Klinger');

                return {
                    names: names
                };
            });

            this.setState({mounted: true})

        }.bind(this));
    }

    render () {
        console.log('2. render');

        var index = 0;
        return (
            <div>
                <div>
                    {this.state.names.map(
                        (name) => <div className="employee" key={index++}>
                            {name}
                            </div>
                    )}
                </div>
                <div>
                    {this.state.mounted ? 'Component mounted' : 'Component not yet mounted'}
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('3. componentDidMount');

        setTimeout(function() {
            window.dispatchEvent(new Event('mountedEvent'));
        }, 5000);
    }
}

ReactDOM.render(<Employees initialNames={['Colonel Blake', 'Father Mulcahy']}/>, document.getElementById('outer'));