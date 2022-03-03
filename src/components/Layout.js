import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, message, Tooltip } from "antd";
import {
    BarChartOutlined,
    PieChartOutlined,
    SaveOutlined,
    CloseOutlined,
    EyeOutlined,
    FileAddOutlined
} from "@ant-design/icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { ChartContext } from "./context/ChartContext";
import Inspector from "./Inspector";
import "./Layout.css";
import SaveButton from "./SaveButton";
import Preview from "./Preview";
import SelectBox from "./SelectBox";

const { Header, Content, Sider } = Layout;

const MyLayout = () => {
    const { setSelectedChart, concept, setConcept, setResetForm } = useContext(
        ChartContext
    );

    const [modalVisible, setModalVisible] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);

    const handleSave = () => {
        setModalVisible(true);
    };
    const handlePreview = () => {
        setPreviewVisible(true);
    };
    const success = () => {
        message.success("Chart deleted successfully");
        message.config({
            duration: 0.7,
        });
    };
    const handleNew = () => {
        setConcept('');
        setResetForm(true);
    }


    const bar = {
        name: "Bar Chart",
        id: uuid(),
        key: uuid(),
        class: "bar",
        data: { Jan: "", Feb: "", Mar: "", Apr: "", May: "", Jun: "", Jul: "" },
    };
    const pie = {
        name: "Pie Chart",
        id: uuid(),
        key: uuid(),
        class: "pie",
        data: { Jan: "", Feb: "", Mar: "", Apr: "", May: "", Jun: "", Jul: "" },
    };
    const handleClick = (mykey) => {
        if (mykey === "1") {
            const chartConcept = [...concept, bar];
            return setConcept(chartConcept);
        }
        const chartConcept = [...concept, pie];
        return setConcept(chartConcept);
    };
    const handleDelete = (id) => {
        const update = concept.filter((item) => item.id !== id);
        setConcept(update);
    };
    console.log(concept);
    return (
        <Layout>
            <SaveButton
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                concept={concept}
            />
            < Preview
                previewVisible={previewVisible}
                setPreviewVisible={setPreviewVisible}
            />


            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    width: 300,
                }}
            >
                <Inspector concept={concept} />
            </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    <div className="SaveAndPreview">
                        <Tooltip placement="bottom" title="Save Report">
                            <SaveOutlined onClick={handleSave} className="save" />
                        </Tooltip>
                        {concept.length !== 0 &&
                            <>
                                <Tooltip placement="bottom" title="Preview">
                                    <EyeOutlined className="preview" onClick={handlePreview} />
                                </Tooltip>
                                <Tooltip placement="bottom" title="New">
                                    <FileAddOutlined className="new" onClick={handleNew} />
                                </Tooltip>
                            </>

                        }
                        <SelectBox />
                    </div>
                    <Link to="/report" className="report">Report</Link>
                </Header>

                <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, textAlign: "center", height: "100%" }}
                    >
                        <ul className="concept-container">
                            {concept.length !== 0 && concept.map((item) => (
                                <li
                                    id={item.id}
                                    key={item.key}
                                    onClick={() => {
                                        setSelectedChart(item);
                                    }}
                                    className={item.class}
                                >
                                    {item.name}
                                    <CloseOutlined
                                        className="delete"
                                        onClick={() => {
                                            handleDelete(item.id);
                                            success(item.class);
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </Content>
            </Layout>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    width: 300,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                    <Menu.Item
                        key="1"
                        icon={<BarChartOutlined />}
                        onClick={(e) => handleClick(e.key)}
                    >
                        Bar Chart
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={<PieChartOutlined />}
                        onClick={(e) => handleClick(e.key)}
                    >
                        Pie Chart
                    </Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    );
};
export default MyLayout;
