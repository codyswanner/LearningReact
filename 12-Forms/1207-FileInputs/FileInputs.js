class FileInput extends React.Component {

    constructor(props) {
        super(props);

        this.fileInputRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var filename = this.fileInputRef.current.files[0].name;
        
        console.log('File uploaded: ', filename);
    }

    render() {
        return (
            <form className="contents" onSubmit={this.handleSubmit}>
                <label>
                    Select a file to upload: <br/><br/>
                    <input type="file" ref={this.fileInputRef} />
                </label>
                <br/>
                <button className="button" type="submit">Upload</button>
            </form>
        );
    }
}

ReactDOM.render(<FileInput/>, document.getElementById('outer'));
