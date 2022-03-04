import React from "react";
import { Modal, Input } from "antd";
import { ChartContext } from "./context/ChartContext";
import { useContext, useState } from "react";

const SaveButton = ({ modalVisible, setModalVisible }) => {
    const { report, concept, setReport, localName, setConcept, setLocalName } = useContext(ChartContext)
    const [inputValue, setInputValue] = useState(null);

    const handleSaveLocal = () => {
        const localState = JSON.stringify(concept);
        setModalVisible(false)
        localStorage.setItem(inputValue, localState)
        setLocalName([...localName, inputValue]);
        setInputValue("");
        setReport([...report, concept]);

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
