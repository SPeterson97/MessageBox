import React, {Component} from "react";
import PropTypes from "prop-types";

import styles from "./Login.styles.js";

class Login extends Component {
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
                <style jsx>{}
                    {styles}
                </style>
            </React.Fragment>
        );
    }
}

/**
 * Defines the props accepted by Login
 */
Login.defaultProps = {
};

/**
 * Types accepted for each prop
 */
Login.propTypes = {
};

export default Login;
