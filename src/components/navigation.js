import React from "react";
import NavigationLink from "./navigation-link";

export default function Navigation() {
    const links = [
        {text: 'Home', href: '/'},
        {text: 'About', href: '/about'},
        {text: 'Music', href: '/music'}
    ];

    return (
        <nav className={"m-auto"}>
            {
                links.map((link) => <NavigationLink href={link.href} text={link.text} />)
            }
        </nav>
    )
}
