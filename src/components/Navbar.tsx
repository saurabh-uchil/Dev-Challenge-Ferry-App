import {  FunctionComponent, ReactElement } from "react";

type Props = {
  title: string
}
export const Navbar: FunctionComponent<Props> = (props: Props): ReactElement => {
  return(
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
    </nav>
  )
}