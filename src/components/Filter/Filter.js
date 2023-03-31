import { updateFilter } from 'components/Redux/contactsSlice';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = e => {
    const filterValue = e.target.value;
    dispatch(updateFilter(filterValue));
  }
    return (
      <div>
        <label className={css.filterLabel}>Find contacts by Name </label>
        <input
          className={css.filterName}
          type="text"
          name="filter"
          placeholder="Enter filter"
          onChange={onInputChange}
        />
      </div>
    );
  }


