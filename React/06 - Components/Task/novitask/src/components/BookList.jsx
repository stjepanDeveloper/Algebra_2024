import { Component } from "react"
import BookComponent from "./BookComponent";

export default class ClassComponent extends Component {
    render(){
        return (<div>
        <BookComponent />
        <BookComponent />
        <BookComponent />
        </div>)
        
    }
}