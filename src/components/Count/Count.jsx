import style from './Count.module.css';
import {useState} from 'react';

export const Count = (props) => {
    // eslint-disable-next-line react/prop-types
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  }

  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount} disabled={count === 1}>-</button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>+</button>
    </div>
  );
};