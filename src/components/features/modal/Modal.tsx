"use client"
import "./index.scss"
import { ReactNode, useEffect } from "react";

interface Props {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode
}

export const Modal = ({setShow, children}:Props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="window" onClick={() => setShow(false)}>
            <div className="inner">
                <div className="modal" onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}