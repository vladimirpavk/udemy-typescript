import * as React from "react";

export interface HomeProps {
    name: string,
    age: number
}

export default class Home extends React.Component<HomeProps, {}>{

    render(){
        return(
            <div>
                Hellao there, {this.props.name}, you are {this.props.age}, right ?
            </div>
        )
    }
}