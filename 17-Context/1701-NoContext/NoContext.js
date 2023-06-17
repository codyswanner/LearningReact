class ThemedBorderBackground extends React.Component {
    render() {
        return (
            <div className={'bt bt-' + this.props.theme + ' bg-' + this.props.theme}>
                {this.props.children}
            </div>
        );
    }
}

class ThemedButton extends React.Component {
    render() {
        return (
            <div>
                <button className={'button button-' + this.props.theme}>
                    {this.props.label}
                </button>
            </div>
        );
    }
}

class ThemedDialog extends React.Component {
    render() {
        return (
            <div className={'dialog dialog-' + this.props.theme}>

                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
                <br/>

                <ThemedButton theme={this.props.theme} label="OK"/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <ThemedBorderBackground theme='light'>
            Hello there!
        </ThemedBorderBackground>

        <ThemedButton theme='light' label='Click me!'/>

        <ThemedDialog theme='light' title='Ah!' message='General Kenobi!' />
    </div>,
    document.getElementById('outer')
);
