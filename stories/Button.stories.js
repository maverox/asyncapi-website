import React from 'react';
import Button from '../components/buttons/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
    buttonSize: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    icon: { control: 'object' },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },

  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});

Default.args = {
  text: 'Default btn',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Button with icon',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>,
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  text: 'Button with icon left',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>,
  iconPosition: 'left',
};

export const WithLink = Template.bind({});
WithLink.args = {
  text: 'Button with link',
  href: 'https://www.google.com',
};

export const Small = Template.bind({});

Small.args = {
  text: 'Small btn',
  buttonSize: 'small',
};

export const secondary = Template.bind({});
secondary.args = {
  text: 'Secondary btn',
  bgClassName: 'bg-gray-400',
  textClassName: 'text-white',
};
