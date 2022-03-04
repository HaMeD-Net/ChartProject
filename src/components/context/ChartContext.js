import React, { createContext, useState } from "react";

export const ChartContext = createContext();

const { Provider } = ChartContext;

const ChartProvider = ({ children }) => {
    const [selectedChart, setSelectedChart] = useState(null);
    const [report, setReport] = useState([])
    const [concept, setConcept] = useState([]);
    const [resetForm, setResetForm] = useState(false)
    const [localName, setLocalName] = useState([])

    return (
        <Provider value={{ selectedChart, concept, report, resetForm, localName, setLocalName, setResetForm, setReport, setConcept, setSelectedChart }}>
            {children}
        </Provider>
    );
};

export default ChartProvider;
