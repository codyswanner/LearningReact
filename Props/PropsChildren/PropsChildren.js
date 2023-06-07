const RedText = (props) => {
    return <div className="red"> {props.children} </div>
};

const GreenText = (props) => {
    return <div className="green"> {props.children} </div>
};

ReactDOM.render(<RedText>Hello There</RedText>, document.getElementById('outer1'));
ReactDOM.render(<GreenText>General Kenobi</GreenText>, document.getElementById('outer2'));

ReactDOM.render(
    <GreenText>
        Your saber will make a fine addition to my collectcion:
        <div><span className="red"><b>*red saber*</b></span> &amp; <span className="blue"><b><i>*blue saber*</i></b></span></div>
        <div><span className="purple"><i>*purple saber</i></span> &amp; <span><u>*green saber*</u></span></div>
    </GreenText>,
    document.getElementById('outer3')
);
