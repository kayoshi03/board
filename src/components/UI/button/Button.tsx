import "./index.scss";

interface Props {
  children: string,
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({children, click}:Props) => {
  return (
    <button onClick={click} className="button">{children}</button>
  )
}

