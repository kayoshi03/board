import "./index.scss";

const Button = ({children}:Readonly<{children: string}>) => {
  return (
    <button className="button">{children}</button>
  )
}

export default Button;