import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelector';
import css from './Filter.module.css'

export function Filter() {
const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.container}>
      <input className={css.contacts__input} type="text" placeholder='Contacts search...' value={filter} onChange={e => dispatch(changeFilter(e.target.value))} name= "filter" />
    </div>
  )
}