/// <reference types="react" />
import * as React from "react";
export interface HomeProps {
    name: string;
    age: number;
}
export default class Home extends React.Component<HomeProps, {}> {
    render(): JSX.Element;
}
