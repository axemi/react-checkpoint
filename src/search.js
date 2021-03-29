import React from "react"

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    //props - emails to filter
        //  - text to find
    onInput(text) {
        let emails = this.props.emails.filter(email => email.subject.contains(text))
        this.props.parentStatus("show-search-results")
        return emails
    }
    render() {
        return (
        <div id="search-section">
            <form id="search-form">
                <input type="text" placeholder="Search..."/>
            </form>
        </div>
        )
    }
}

export default Search