import React, { useContext } from "react";
import { Modal } from "antd";
import "./Preview.css";
import MyChart from "./MyChart";
import { ChartContext } from "./context/ChartContext";


const Preview = ({ previewVisible, setPreviewVisible }) => {
    const { concept } = useContext(ChartContext);

    return (
        <>
            <Modal
                title="The Preview Of Charts"
                centered
                visible={previewVisible}
                onOk={() => setPreviewVisible(false)}
                onCancel={() => setPreviewVisible(false)}
                okButtonProps={{ disabled: true }}
                className="modalPreview"
            >

                {concept.length !== 0 && concept.map((item) =>
                    <MyChart chartData={item.data} chartType={item.class} />
                )}
            </Modal>
        </>
    );
};

export default Preview;
