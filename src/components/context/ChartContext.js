import React, { createContext, useState } from "react";

export const ChartContext = createContext();

const { Provider } = ChartContext;

const ChartProvider = ({ children }) => {
    const [selectedChart, setSelectedChart] = useState(null);
    const [report, setReport] = useState([])
    const [concept, setConcept] = useState([]);
    const [reportName, setReportName] = useState([])
    const [resetForm, setResetForm] = useState(false)

    return (
        <Provider value={{ selectedChart, concept, reportName, report, resetForm, setResetForm, setReport, setConcept, setSelectedChart, setReportName }}>
            {children}
        </Provider>
    );
};

export default ChartProvider;
