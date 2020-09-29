import React from "react";

export default function NavigationLink({text, href}) {
    return (
        <a
            href={href}
            key={href}
            className={"p-2 gray-600"}
        >
            {text}
        </a>
    )
}
