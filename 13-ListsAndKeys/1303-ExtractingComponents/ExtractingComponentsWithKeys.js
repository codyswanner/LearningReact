class Name extends React.Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

class NamesList extends React.Component {
    render() {
        var listItems = Object.keys(this.props.names).map(
            (key, index) => <Name key={key} name={names[key]} />
        );

        return(
            <ul className="names">{listItems}</ul>
        );
    }
}

const names = {
    'id1': 'Hawkeye',
    'id2': 'Trapper',
    'id3': 'Radar',
    'id4': 'Frank',
    'id5': 'Hotlips'
};

ReactDOM.render(<NamesList names={names} />, document.getElementById('outer1'));