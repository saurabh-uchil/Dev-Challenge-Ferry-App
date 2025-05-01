import { FunctionComponent, ReactElement } from "react"
import "../css/Earnings.css"

type Props = {
    terminalEarnings: number,
}

export const Earnings: FunctionComponent<Props> = (props: Props): ReactElement => {
    const workerEarnings = 0.1 * props.terminalEarnings;
    return(
        <>
        <div className="stats">
        <h5>Terminal Earnings: ${props.terminalEarnings}</h5>
        <h5>Worker Earnings: ${workerEarnings}</h5>
        </div>
        </>
    )
}