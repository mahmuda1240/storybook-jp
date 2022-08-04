import React from 'react';
import Button from './Button';

const buttonClicked = e => {
    e.preventDefault();
    alert("Hello");
}
export default{
    title: 'atoms/Button',
    component: Button
}

export const text = () => <Button>Basic Button</Button>
export const functionButton = () => (
    <Button onClick={buttonClicked}>Function Button</Button>
);
export const linkedButton = () => <Button href="/route">Linked Button</Button>