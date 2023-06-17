var names = ['Alice', 'Bob', 'Charles', 'Darwin', 'Emily', 'Fiona', 'Garret'];

function Names(props) {
    var namesList = []
    for (var i = 0; i <= props.upto; i++) {

        namesList.push(props.children(i, names));
    }

    return <div>{namesList}</div>
}

function NamesList(props) {
    return (
        <Names upto={props.upto}>
            {(index, names) => <div key={index} id={index}> {names[index]} </div>}
        </Names>
    );
}

ReactDOM.render(<NamesList upto={3}/>,
document.getElementById('outer'));
