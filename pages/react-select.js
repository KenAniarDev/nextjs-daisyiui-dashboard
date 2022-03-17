import { useState } from 'react';
import DashboardContainer from '../components/DashboardContainer';
import Creatable from 'react-select/creatable';

const roles = [
  { label: 'admin', value: 1 },
  { label: 'student', value: 2 },
  { label: 'tutor', value: 3 },
  { label: 'guardian', value: 4 },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'gray',
    padding: 10,
  }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   // width: 500,
  // }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default function ReactSelect() {
  const [role, setRole] = useState([]);
  const [tagInputValue, setTagInputValue] = useState('');
  const [tagValue, setTagValue] = useState('');

  const handleChange = (field, value) => {
    switch (field) {
      case 'roles':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (event) => {
    if (!tagInputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setTagValue([...tagValue, createOption(tagInputValue)]);
        setTagInputValue('');

        event.preventDefault();
        break;

      default:
        break;
    }
  };

  const createOption = (label) => ({
    label,
    value: label,
  });

  const handleInputChange = (value) => {
    setTagInputValue(value);
  };
  return (
    <DashboardContainer>
      <div>
        <label>Role(s)</label>
        <Creatable
          isClearable
          isMulti
          onChange={(value) => handleChange('roles', value)}
          options={roles}
          value={role}
        />
      </div>
      <div className=''>
        <label>Tag(s)</label>
        <Creatable
          isClearable
          isMulti
          components={{ DropdownIndicator: null }}
          inputValue={tagInputValue}
          menuIsOpen={false}
          onChange={(value) => handleChange('tags', value)}
          placeholder='Type something and press enter...'
          onKeyDown={handleKeyDown}
          onInputChange={handleInputChange}
          value={tagValue}
        />
      </div>

      <button className='btn' onClick={() => console.log(role)}>
        Submit
      </button>
    </DashboardContainer>
  );
}
