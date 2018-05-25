import React from "react"
import ReactDom from "react-dom"
import Header from "./components/Header"
import './scss/app.scss'


class HelloMessage extends React.Component {
	render() {
		return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
            </div>
        </div>
	}
}

let App = document.getElementById("app")

ReactDom.render(<HelloMessage name="Daniel" />, App)
