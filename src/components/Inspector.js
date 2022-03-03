import React, { useEffect, useContext } from "react";
import { Form, Input, Button } from "antd";
import { ChartContext } from "./context/ChartContext";
import "./Inspector.css";

const Inspector = () => {
    const { concept, selectedChart, setConcept, resetForm, setResetForm } = useContext(ChartContext);
    const [form] = Form.useForm();

    useEffect(() => {
        if (!selectedChart) return {};
        form.setFieldsValue(selectedChart.data);
    }, [selectedChart]);

    const onFinish = (values) => {
        console.log(values);
        const updatedConcept = concept.map((item) =>
            selectedChart.id === item.id ? { ...item, data: values } : item
        );
        setConcept(updatedConcept);
        form.resetFields();
        setResetForm(false)
    };
    if (resetForm)
        form.resetFields();

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Jan"
                    name="Jan"
                    rules={[{ required: true, message: "Please input your field!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Feb"
                    name="Feb"
                    rules={[{ required: true, message: "Please input your field!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mar"
                    name="Mar"
                    rules={[{ required: true, message: "Please input your field!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Apr"
                    name="Apr"
                    rules={[{ required: true, message: "Please input your field!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="May"
                    name="May"
                    rules={[{ required: true, message: "Please input your field!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Jun"
                    name="Jun"
                    rules={[{ required: true, message: "Please input your field!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Inspector;
