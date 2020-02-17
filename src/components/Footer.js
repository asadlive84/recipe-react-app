import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="row">
                <p style={{footerStyle}}>&copy; {new Date().getFullYear()} Asaduzzaman Sohel</p>
            </div>
        )
    }
}


const footerStyle={
    borderTop:"2px solid red",
    fontSize:"20px",
    textAlign:"center",
}

export default Footer
