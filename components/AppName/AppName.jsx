import React, {Component} from "react";
import PropTypes from "prop-types";

import styles from "./AppName.styles.js";

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
                <span className="appName" width={this.props.size} >
                    MessageBox
                </span>
                <style jsx>{`
                    .appName {
                        font-size: ${this.props.size}px;
                    }
                    `}
                    {styles}
                </style>
            </React.Fragment>
        );
    }
}

/**
 * Defines the props accepted by AppName
 */
AppName.defaultProps = {
    size: 10,
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
