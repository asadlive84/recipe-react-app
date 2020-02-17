import React, { Component } from 'react'

export class Receipe extends Component {
   
    
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <h1>{this.props.title}</h1>
                    <p>Calories {this.props.calories}</p>
                    <img src={this.props.image} alt=""/>
                    <ol>
                        {this.props.ingredients.map(text=>(
                            <li>
                                {text.text}
                            </li>
                        ))}
                    </ol>

                    <ol>
                        {this.props.digest.map(text=>(
                            <li>{text.label}</li>
                        ))}
                    </ol>
                </div>
            </React.Fragment>
        )
    }
}

export default Receipe
