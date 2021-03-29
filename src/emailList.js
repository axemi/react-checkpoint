import React from "react"
import EmailEntry from "./EmailEntry"

class EmailList extends React.Component {
    constructor() {
        super()
        this.state = {
            emails: [],
            status: "show-email-list"
        }
        this.openEmailState = this.openEmailState.bind(this)
    }

    //https://reactjs.org/docs/react-component.html
    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:3001/emails")
            const json = await response.json()
            this.setState({emails: json})
        } catch (error) {
            console.log(error)
        }

    }

    openEmailState(id) {
        //let email = this.state.emails.find(x => x.id = id)
        this.setState({
            ...this.state,
            status: "show-single-email",
            emailId: id
        })
    }

    searchState() {
        this.setState({
            ...this.state,
            status: "show-search-results"
        })
    }
    render() {
        let page;
        if (this.state.status === "show-single-email") {
            page = <EmailEntry email={this.state.emails[this.state.emailId-1]}/>
        }

        if (this.state.status === "show-email-list") {
            page = this.state.emails.map(email => (
                <a href="#" onClick={() => this.openEmailState(email.id)}>
                    <EmailListRow sender={email.sender} subject={email.subject} date={email.date}/>
                </a>
            ))
        }

        if (this.props.parentStatus === "show-search-results") {
            console.log("test search")
        }

        return (
            <div id="email-list">
                {page}
            </div>
        )
    }
}

let EmailListRow = (props) => {
    return (
            <div id="email-list-row">
                <div>{props.sender}</div>
                <div>{props.subject}</div>
                <div>{props.date}</div>
            </div>
    )
}
export default EmailList