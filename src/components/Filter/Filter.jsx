import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};
