import { useState } from 'react';
import { useSwitch } from '../../hooks';
import { calculateDiscountedPrice, mergeStyles } from '../../utilities';
import { ProductCardProps } from './types';
import styles from './styles.module.css';


function ProductSlide({ data }: ProductCardProps) {
  const [, showImages, hideImages] = useSwitch();
  const [imageSrc, setImageSrc] = useState(data.thumbnail);

  const resetImageSrc = () => setImageSrc(data.thumbnail);

  console.log(data)

  return (
    <div
      onMouseEnter={showImages}
      onMouseLeave={hideImages}
      className={styles['product']}
    >

      <div className='v-stack gap-2 capitalize'>
          <div className='v-stack gap-1 z-10'>
            {data.images.map((src: string, idx: number) => (
              <img
                onMouseEnter={() => setImageSrc(src)}
                onMouseLeave={resetImageSrc}
                className={styles['product-thumbnail']}
                key={src}
                src={src}
                alt={`${data.title} ${idx}`}
              />
            ))}
          </div>
      </div>

      <img
        className={styles['product-img']}
        src={imageSrc}
        alt={`${data.title} thumbnail`}
      />
    </div>
  );
}
ProductSlide.displayName = 'Product Slide';

export default ProductSlide;
