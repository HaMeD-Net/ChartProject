import { Select } from 'antd';
import { ChartContext } from './context/ChartContext';
import { useContext } from 'react';
import { v4 as uuid } from "uuid";


const { Option } = Select;
const SelectBox = () => {

    const { localName, setConcept } = useContext(ChartContext);

    const loadStorage = (value) => {
        const show = localStorage.getItem(value);
        setConcept(JSON.parse(show));
    }
    return (
        <Select
            showSearch
            placeholder="Select a report"
            optionFilterProp="children"
            onSelect={loadStorage}

            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {localName.map((item) => (
                <Option value={item} key={uuid()} >{item}</Option>
            )
            )}


        </Select >

    );
}
export default SelectBox





