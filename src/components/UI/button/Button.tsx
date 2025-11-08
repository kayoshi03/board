import { ReactNode } from "react";
import "./index.scss";

interface Props {
  children: ReactNode,
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({children, click}:Props) => {
  return (
    <button onClick={click} className="button">{children}</button>
  )
}

