import { Select } from 'antd';
import { ChartContext } from './context/ChartContext';
import { useContext } from 'react';

const { Option } = Select;
const SelectBox = () => {

    const { localName, setConcept } = useContext(ChartContext);

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    function loadStorage(value) {
        const show = localStorage.getItem(value);
        console.log("localStorage: ", JSON.parse(show));
        setConcept(JSON.parse(show));
    }
    return (
        <Select
            showSearch
            placeholder="Select a report"
            optionFilterProp="children"
            onSelect={loadStorage}
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {localName.map((item) => (
                <Option value={item} >{item}</Option>
            )
            )}


        </Select >

    );
}
export default SelectBox





