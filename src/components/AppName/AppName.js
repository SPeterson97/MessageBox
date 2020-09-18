import React, {Component} from "react";
import PropTypes from "prop-types";

import "./AppName.css";

class AppName extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the component
     */
    render() {
        return (
            <React.Fragment>
                <span className="appName test" width={this.props.size} >
                    MessageBox
                </span>
                <style jsx>{`
                    .appName {
                        ${this.props.size ? `font-size: ${this.props.size}px` : ""}
                    }
                    `}
                </style>
                
            </React.Fragment>
        );
    }
}

/**
 * Defines the props accepted by AppName
 */
AppName.defaultProps = {
    size: undefined,
}

/**
 * Types accepted for the name
 */
AppName.propTypes = {
    /**
     * The font size of the text
     */
    size: PropTypes.number,
}

export default AppName;
