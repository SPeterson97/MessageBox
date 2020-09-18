#!/bin/bash

################### CONSTANTS ##################
read -r -d '' COMPONENT << DONE
import React, {Component} from "react";
import PropTypes from "prop-types";

import styles from "./$1.styles.js";

class $1 extends Component {
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
                <style jsx>{`
                    `}
                    {styles}
                </style>
            </React.Fragment>
        );
    }
}

/**
 * Defines the props accepted by $1
 */
$1.defaultProps = {
};

/**
 * Types accepted for each prop
 */
$1.propTypes = {
};

export default $1;
DONE

read -r -d '' STYLES << DONE
export default \`
\`;
DONE

read -r -d '' STORY << DONE
import React from 'react';
import $1 from './$1';

export default {
    title: 'Example/$1',
    component: $1,
};

const Template = (args) => <$1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    size:100,
};
DONE

###############################################

#################### SCRIPT ###################

mkdir "$PWD/components/$1"
cd "$PWD/components/$1"

echo "$COMPONENT" > $1.jsx
echo "$STYLES" > $1.styles.js
echo "$STORY" > $1.stories.js

###############################################