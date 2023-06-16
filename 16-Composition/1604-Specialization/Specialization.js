class CustomDialog extends React.Component {
    render() {
         var color = 'green';

         if (this.props.dialogetype == "warning") {
            color = 'orange';
         } else if (this.props.dialogetype == 'error') {
            color = 'red';
         }

         return (
            <div className = {'bt bt-' + color + ' bg-' + color}>
                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
                <br/>
            </div>
         );
    }
}

class OKDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog
                    dialogetype="ok"
                    title="Success"
                    message="Your operation was completed successfully"/>
            </div>
        );
    }
}

class WarningDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog
                    dialogetype="warning"
                    title="Warning"
                    message="I've got a bad feeling about this..."/>
            </div>
        );
    }
}

class ErrorDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog
                    dialogetype="error"
                    title="Error!"
                    message="A communications diruption can only mean one thing: Invasion!"/>
            </div>
        );
    }
}



ReactDOM.render(<ErrorDialog/>, document.getElementById('outer'));
