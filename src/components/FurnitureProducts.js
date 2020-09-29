import React from 'react';
import styles from './FurnitureProducts.module.css';
import picture from '../images/picture1.png';
import pictureTwo from '../images/picture2.png';
import pictureThree from '../images/picture3.png';
import pictureFour from '../images/picture4.png';
import star from '../images/star.png';

const FurtnitureProducts = () => {
  return (
    <div className={styles.ProductsSection}>
      <div className={styles.Container}>
        <div className={styles.ProductsNavigation}>
          <button className={styles.Active}>Furniture</button>
          <button>Lighting</button>
          <button>Sofas</button>
          <button>Lounge chairs</button>
          <button>All</button>
        </div>
        <div className={styles.BackNext}>
          <button>
            <i class="fa fa-step-backward"></i> Back
          </button>
          <a>l</a>
          <button>
            Next <i class="fa fa-step-forward"></i>
          </button>
        </div>
        <div className={styles.Products}>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <div className={styles.ProductButtons}>
                <div className={styles.AddToCart}>
                  <a>
                    <i class="fa fa-shopping-cart"></i> ADD TO CART
                  </a>
                </div>
                <div className={styles.Search}>
                  <i class="fa fa-search"></i>
                </div>
                <div className={styles.Like}>
                  <i class="fa fa-heart"></i>
                </div>
                <div className={styles.Switch}>
                  <i class="fa fa-exchange"></i>
                </div>
              </div>
              <div className={styles.TagNew}>
                <a>New</a>
              </div>
              <img src={picture}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
              <div className={styles.Steal}>20%</div>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <div className={styles.TagHot}>
                <a>Hot</a>
              </div>
              <img src={pictureTwo}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <div className={styles.TagSale}>
                <a>Sale</a>
              </div>
              <img src={pictureThree}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
              <div className={styles.Steal}>20%</div>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <img src={pictureFour}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
              <div className={styles.Steal}>20%</div>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <div className={styles.TagNew}>
                <a>New</a>
              </div>
              <img src={picture}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
              <div className={styles.Steal}>20%</div>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <div className={styles.TagHot}>
                <a>Hot</a>
              </div>
              <img src={pictureTwo}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <div className={styles.TagSale}>
                <a>Sale</a>
              </div>
              <img src={pictureThree}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
              <div className={styles.Steal}>20%</div>
            </div>
          </div>
          <div className={styles.Product}>
            <div className={styles.Item}>
              <img src={pictureFour}></img>
            </div>
            <div className={styles.Info}>
              <a>Chanel</a>
              <a>Dopo Designs Woolrich Klettersack Backpack</a>
              <a>$98.00</a>
              <img src={star}></img>
              <div className={styles.Steal}>20%</div>
            </div>
          </div>
        </div>
        <div className={styles.ViewAll}>View All</div>
      </div>
    </div>
  );
};

export default FurtnitureProducts;
