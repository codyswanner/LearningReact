const ThemeContext = React.createContext('light');

class ThemedBorderBackground extends React.Component{
    render() {
        return (
            <div className={'bt bt-' + this.context + ' bg-' + this.context}>
                {this.props.children}
            </div>
        );
    }
}

ThemedBorderBackground.contextType = ThemeContext;

class ThemedButton extends React.Component {
    render() {
        return(
            <div>
                <button className={'button button-' + this.context}>
                    {this.props.label}
                </button>   
            </div>
        );
    }
}

ThemedButton.contextType = ThemeContext;

class ThemedDialog extends React.Component {
    render() {
        return(
            <div className={'dialog dialog-' + this.context}>

                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
                <br/>

                <ThemedButton label="OK"/>
            </div>
        );
    }
}

ThemedDialog.contextType = ThemeContext;


ReactDOM.render(
    <div>
        <ThemeContext.Provider value='dark'>
            <ThemedBorderBackground>
                Hello there!
            </ThemedBorderBackground>

            <ThemedButton label='Click me!'/>

            <ThemedDialog title='Ah!' message='General Kenobi!' />
        </ThemeContext.Provider>
    </div>,
    document.getElementById('outer')
);
