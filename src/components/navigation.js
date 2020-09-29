import React from "react";
import NavigationLink from "./navigation-link";

export default function Navigation() {
    const links = [
        {text: 'Home', href: '/'},
        {text: 'About', href: '/about'},
        {text: 'Music', href: '/music'}
    ];

    return (
        <div className={"bg-green-700 border-t-4 border-green-900 p-3 w-full"}>
            <div className={"m-auto flex flex-row justify-between text-white text-2xl w-2/3"}>
                <h1>Timothy Long</h1>
                <nav>
                {
                    links.map((link) => <NavigationLink href={link.href} text={link.text} />)
                }
                </nav>
            </div>
        </div>
    )
}
