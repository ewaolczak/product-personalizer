import React from 'react'
import shortid from 'shortid'
import styles from './OptionSize.module.scss'


const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes?.map((size) => (
                <li key={shortid()}>
                  <button
                    type='button'
                    className={
                      size.name && props.currentSize === size.name
                        ? styles.active
                        : undefined
                    }
                    onClick={() => {
                      props.setCurrentSize(size.name);
                      props.setCurrentPrice(size.additionalPrice);
                    }}>{`${size.name}`}</button>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default OptionSize
