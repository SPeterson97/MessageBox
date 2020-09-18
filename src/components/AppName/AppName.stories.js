import React from 'react';
import AppName from './AppName';

export default {
    title: 'Example/AppName',
    component: AppName,
};

const Template = (args) => <AppName {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
    size:100,
};