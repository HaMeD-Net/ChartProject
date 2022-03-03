import { useContext } from "react";
import { ChartContext } from "./context/ChartContext";

const Report = () => {
    const { report } = useContext(ChartContext)

    const Show = () => {
        if (report.length === 0)
            return <div>There is nothing to show</div>
        else
            return JSON.stringify(report)
    }
    return (<div>

        <Show />


    </div >)
}
export default Report;