import React from "react"


class EmailEntry extends React.Component {

    render(){
        return (
            <div id="email-entry">
                <div>Id: {this.props.email.id}</div>
                <div>From: {this.props.email.sender}</div>
                <div>To: {this.props.email.recipient}</div>
                <div>Subject: {this.props.email.subject}</div>
                <div>Date: {this.props.email.date}</div>
                <div>Body: {this.props.email.message}</div>
            </div>
        )
    }

}

export default EmailEntry