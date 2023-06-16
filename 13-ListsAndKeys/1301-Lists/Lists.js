class NamesList extends React.Component {

    render() {
        var listItems = this.props.names.map(
            (name) => <li>{name}</li>
        );

        return(
            <ul className="names">{listItems}</ul>
        );
    }
}

const names = ['Hawkeye', 'Trapper', 'Radar', 'Frank', 'Hotlips'];

ReactDOM.render(<NamesList names={names} />, document.getElementById('outer'));
