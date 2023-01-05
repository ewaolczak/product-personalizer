import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.data.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.data.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(
    props.data.sizes[0].additionalPrice
  );

  console.log(currentColor, currentSize, currentPrice);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    return props.data.basePrice + currentPrice;
  };

  const title = props.data.title;

  const productToBasket = props => {
    return console.log(
      'Summary\n',
      '========\n',
    'Name: ', title, '\n',
    'Price: ', getPrice(), '\n',
    'Size: ', currentSize, '\n',
    'Color: ', currentColor)
  };

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
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.data.sizes.map((size) => (
                <li key={shortid()}>
                  <button
                    type='button'
                    className={
                      (currentSize === size.name && styles.active, size.name)
                    }
                    onClick={() => {
                      setCurrentSize(size.name);
                      setCurrentPrice(size.additionalPrice);
                    }}>{`${size.name}`}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.data.colors.map((color) => (
                <li key={shortid()}>
                  <button
                    type='button'
                    className={clsx(
                      prepareColorClassName(color),
                      currentColor === color && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}></button>
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              productToBasket()
            }}
            className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = { props: PropTypes.any };

export default Product;
