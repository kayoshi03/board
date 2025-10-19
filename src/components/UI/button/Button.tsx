import "./index.scss";

export const Button = ({children}:Readonly<{children: string}>) => {
  return (
    <button className="button">{children}</button>
  )
}

