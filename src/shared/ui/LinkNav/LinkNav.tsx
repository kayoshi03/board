"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import "./index.scss";

type Props = {
    href: string;
    title: string;
}

export const LinkNav:FC<Props> = ({href, title}) => {
    let selector = "link";
    const pathname = usePathname();
    const isActive = pathname === href;
    if(isActive) {
        selector = "link link__active";
    }
    return (
        <Link className={selector} 
            href={href}
        >
            {title}
        </Link>
    )
}