class Company extends React.Component{
    render() {
        return(
            <div className="company">
                <div>Company: {this.props.companyName}</div>

                <Employee {...this.props} tenure="2 years"/>
                <Activites {...this.props}/>
            </div>
        );
    }
}


class Employee extends React.Component{
    render() {
        return(
            <div className="employee">
                <div>
                    Name: {this.props.employeeName}
                </div>
                <div>
                  Designation: {this.props.desgination}  
                </div>
                <div>
                    Tenure: {this.props.tenure}
                </div>
            </div>
        );
    }
}


class Activites extends React.Component{
    render() {
        return(
            <div className="activities">
                <div>
                    Committees: {this.props.committees}
                </div>
                <div>
                    Forums: {this.props.forums}
                </div>
            </div>
        );
    }

}



ReactDOM.render(<Company 
    companyName="SkillSoft"
    employeeName="John"
    desgination="Analyst"
    committees="Performance Review, Data Insights"
    forums="StackOverflow, DataHelper"/>, document.getElementById("react-props-spread"));
