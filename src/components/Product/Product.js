import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = (props) => {
  const [currentColor, setCuurentColor] = useState(props.data.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.data.sizes[0].name);

  console.log(currentColor, currentSize);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.data.t}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.data.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.data.title}</h2>
          <span className={styles.price}>Price: {props.data.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.data.sizes.map(size => 
              <li key={shortid()}>
                <button type='button' className={styles.active}>{`${size.name}`}</button>
              </li>
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li>
                <button
                  type='button'
                  className={clsx(styles.colorBlack, styles.active)}
                />
              </li>
              <li>
                <button type='button' className={clsx(styles.colorRed)} />
              </li>
              <li>
                <button type='button' className={clsx(styles.colorWhite)} />
              </li>
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = { props: PropTypes.any };

export default Product;
