import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Links extends Component {
    render() {
        const { link, title } = this.props;

        return (
            <div>
                <Link to={link}>github</Link>
            </div>
        );
    }
}

export default Links;