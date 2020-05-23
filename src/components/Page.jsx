import React, { Component } from 'react';
import Card from "./Card";
import "../styling/Page.css";

class Page extends Component {
    render() {
        const { page } = this.props;
        return (
            <div className="pageContent">
                <div className="pageCards">
                    {page.map((card, index) => <Card card={card} key={index} />)}
                </div>
            </div>
        );
    }
}

export default Page;