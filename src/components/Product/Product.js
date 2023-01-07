import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import ProductImage from '../ProductImage/ProductImage';
import OptionColor from '../OptionColor/OptionColor';

const Product = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(
    props.sizes[0].additionalPrice
  );

  console.log(currentColor, currentSize, currentPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const title = props.title;

  const productToBasket = (e) => {
    e.preventDefault();
    return console.log(
      'Summary\n',
      '========\n',
      'Name: ',
      title,
      '\n',
      'Price: ',
      getPrice(),
      '\n',
      'Size: ',
      currentSize,
      '\n',
      'Color: ',
      currentColor
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={productToBasket}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={shortid()}>
                  <button
                    type='button'
                    className={
                      size.name && currentSize === size.name
                        ? styles.active
                        : undefined
                    }
                    onClick={() => {
                      setCurrentSize(size.name);
                      setCurrentPrice(size.additionalPrice);
                    }}>{`${size.name}`}</button>
                </li>
              ))}
            </ul>
          </div>
          <OptionColor colors={props.colors} />
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
