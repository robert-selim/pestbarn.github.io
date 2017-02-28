import React from 'react';
import { Locator } from '../components/';

const Experience = props => {
    return (
        <section>
            {props.children}
        </section>
    );
};


const Header = props => {
    return (
        <header>
            {props.children}
            {props.locator === true && <Locator />}
        </header>
    );
};

const Main = props => {
    return (
        <main>
            {props.children}
            {props.locator === true && <Locator />}
        </main>
    );
};

export { Experience, Header, Main };