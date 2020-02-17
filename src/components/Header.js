import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="row text-center">
                    <h1>Recipe Application</h1>
                    <p>You can search with item name like: banana, rice</p>
                </div>
            </div>
        )
    }
}

export default Header
