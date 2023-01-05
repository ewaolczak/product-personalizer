import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = (props) => {
  const [currentColor, setCuurentColor] = useState(props.data.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.data.sizes[0].name);
  const [currentPrice, setCuurentPrice] = useState(
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

  const productToBasket = {
    Name: props.data.title,
    Price: getPrice(),
    Size: currentSize,
    Color: currentColor
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
                      (size.name, currentSize === size.name && styles.active)
                    }
                    onClick={() => {
                      setCurrentSize(size.name);
                      setCuurentPrice(size.additionalPrice);
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
                    button
                    type='button'
                    className={clsx(
                      prepareColorClassName(color),
                      currentColor === color && styles.active
                    )}
                    onClick={() => setCuurentColor(color)}></button>
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={Window.call.apply((e) => {
              e.preventDefault();
              console.log(
                'Summary',
                '\n',
                '==========================',
                '\n',
                productToBasket
              );
            })}
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
