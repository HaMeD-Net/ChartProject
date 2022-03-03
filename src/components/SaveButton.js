import React from "react";
import { Modal, Input } from "antd";
import { ChartContext } from "./context/ChartContext";
import { useContext, useState } from "react";

const SaveButton = ({ modalVisible, setModalVisible, concept }) => {
    const { reportName, setReportName, report, setReport } = useContext(ChartContext)
    const [inputValue, setInputValue] = useState()

    const handleSaveLocal = () => {
        const localState = JSON.stringify(concept);
        setModalVisible(false)
        setReportName([...reportName, inputValue])
        localStorage.setItem(inputValue, localState)
        setInputValue("");
        const updatedReport = [...report, concept]
        setReport(updatedReport);
        console.log("report: ", report);

    }

    return (
        <>
            {modalVisible && (
                <Modal
                    style={{ direction: "ltr" }}
                    title="Save Chart's Data..."
                    centered
                    visible={modalVisible}
                    onOk={handleSaveLocal}
                    onCancel={() => setModalVisible(false)}
                >
                    <p>type a name to save</p>
                    <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </Modal>
            )}
        </>
    );
};
export default SaveButton;
