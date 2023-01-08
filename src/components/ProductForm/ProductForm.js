import React from 'react';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';

const ProductForm = (props) => {
  const title = props.title;

  const getPrice = () => {
    return props.basePrice + props.currentPrice;
  };

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
      props.currentSize,
      '\n',
      'Color: ',
      props.currentColor
    );
  };

  return (
    <form onSubmit={productToBasket}>
      <OptionSize
        sizes={props.sizes}
        size={props.size}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        price={props.price}
        additionalPrice={props.additionalPrice}
        setCurrentPrice={props.setCurrentPrice}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductForm;
