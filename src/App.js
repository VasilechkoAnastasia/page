import React from 'react';
import './App.css';
import SliderMain from './components/SliderMain.js';

const App = () => {
  const products = [{ id: 1, title: 'ПОДУШКИ', subtitle: 'спальня кімната вітальня', price: '12$', tag: 'TOP', image: 'Rectangle\ 28.png' },
  { id: 2, title: 'КОВДРА', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 27.png' },
  { id: 3, title: 'ЛІЖКО', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 26.png' }];

  const sliderImages1 = [
    "/slider1.png",
    "/slider2.png",
    "/slider3.png",
    "/slider4.png",
    "/slider5.png",
    "/slider6.png",
    "/slider7.jpg",
    "/slider8.jpg",
    "/slider9.jpg",
    "/slider10.jpg",
  ];

  const sliderImages2 = [
    "/slider11.jpg",
    "/slider12.jpg",
    "/slider13.jpg",
    "/slider14.jpg",
    "/slider15.jpg",
    "/slider16.jpg",
    "/slider17.jpg",
    "/slider18.jpg",
    "/slider19.jpg",
    "/slider20.jpg",
  ];

  return (
    <div className="app">
      <div className="strip">
        <div className="scroll">
          <p class="text">#вседлядому #швидкотазручно #buy_now #вседлядому #швидкотазручно #buy_now #вседлядому #швидкотазручно #buy_now</p>
        </div>
      </div>

      <div className="user-actions">
        <nav>
          <div className="header-left">
            <a className="action-button" href="#">☰<br></br>Меню</a>
            <img src="./Union.png" />
            <a className="action-button" href="#"> Товари</a>
            <a className="action-button" href="#"> Книги</a>
            <a className="action-button" href="#"> Дизайн</a>
          </div>

          <div className="header-right">
            <a className="action-button" href="#"><img src="./uil_user.png" /> Київ</a>
            <a className="action-button" href="#"><img src="./uil_user_profile.png" /> Привіт! Увійдіть В Систему</a>
            <a className="action-button" href="#"><img src="./basket_for_shopping.png" /><img src="./like.png" /></a>
          </div>
        </nav>
      </div>
      <header>
        <div className="search-bar">
          <img src="./Group.png" className="search-icon" />
          <input type="text" placeholder="Пошук" />
        </div>
      </header>

      <div className="wrap">
        <main>
          <section className="first-main-section">
            <div className="content">
              <div className="left-content">
                <h1 className="main-maintext">ВСЕ ДЛЯ ДОМУ</h1>
                <div className="cta-buttons">
                  <button className="cta-primary">СТВОРИТИ АКАУНТ ТА ПОЧАТИ!</button>
                  <button className="cta-secondary">КАТАЛОГ&#9662;</button>
                </div>
                <div className="product-cards">
                  {products.map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="product-tag">{product.tag}</span>
                      </div>
                      <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>{product.subtitle}</p>
                        <span className="product-price">{product.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="promo-text">
                  ЛОВИ МОМЕНТ! Знижки до <strong>60%</strong> на вибрані категорії товарів!
                </p>
              </div>
            </div>
          </section>




          <section className="second-main-section">
            <p className="title-section-main">ЗНАЙДИ ТЕ, ШО ШУКАЄШ!</p>
            <div className="promo">
              <div className="row">
                <div className="card">
                  <img src="PhotoSecondSection1.png" />
                  <div className="bar">
                    <span>НАША НОВА КОЛЛЕКЦІЯ</span>
                    <img src="./button for slider.png" />
                  </div>
                </div>
                <div className="card">
                  <img src="PhotoSecondSection2.png" />
                  <div className="bar">
                    <span>НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ</span>
                    <img src="./button for slider.png" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="card full">
                  <img src="PhotoSecondSection3.png" style={{ width: '1480px' }} />
                  <div className="bar right">
                    <img src="./button for slider.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>




          <section className="third-main-section">
            <p className="title-section-main">РЕКОМЕНДАЦІЇ</p>
            <SliderMain images={sliderImages1} />
            <p className="title-section-main">НАЙКРАЩІ НАБОРИ</p>
            <SliderMain images={sliderImages2} />
          </section>




          <section className="four-main-section">
            <p className="title-section-main">НОВИНКИ</p>
            <div className="gallery-grid">
              <img src="four-sections-photo1.png" className="four-sections-photo1" />
              <img src="four-sections-photo2.png" className="four-sections-photo2" />
              <img src="four-sections-photo3.png" className="four-sections-photo3" />
              <img src="four-sections-photo4.png" className="four-sections-photo4" />
            </div>
          </section>



          <section className="five-main-section">
            <p className="title-section-main">КАТАЛОГ</p>

            <div className="catalog-grid">
              <div className="catalog-item">
                <img src="five-section-katalog1.png" className="catalog-image" />
                <p className="catalog-title">ДИВАН</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog2.png" className="catalog-image" />
                <p className="catalog-title">КРІСЛО ДЕКОРАТИВНЕ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog3.png" className="catalog-image" />
                <p className="catalog-title">СОФА</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog4.png" className="catalog-image" />
                <p className="catalog-title">КОМОД</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog5.png" className="catalog-image" />
                <p className="catalog-title">КРІСЛО ВІДПОЧИНКОВЕ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog6.png" className="catalog-image" />
                <p className="catalog-title">СТІЛ ПИСЬМОВИЙ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog7.png" className="catalog-image" />
                <p className="catalog-title">СТІЛ КУТОВИЙ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog8.png" className="catalog-image" />
                <p className="catalog-title">КРІСЛО З ПОДУШКАМИ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog9.png" className="catalog-image" />
                <p className="catalog-title">СТІЛ ОБІДНІЙ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog10.png" className="catalog-image" />
                <p className="catalog-title">ДИВАН КОМПАКТНИЙ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog11.png" className="catalog-image" />
                <p className="catalog-title">ТАБУРЕТ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog12.png" className="catalog-image" />
                <p className="catalog-title">КРІСЛО КОМПАКТНЕ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog13.png" className="catalog-image" />
                <p className="catalog-title">КРІСЛО СТИЛЬНЕ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog14.png" className="catalog-image" />
                <p className="catalog-title">СОФА-ЛІЖКО</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog15.png" className="catalog-image" />
                <p className="catalog-title">КРІСЛО ЕЛЕГАНТНЕ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog16.png" className="catalog-image" />
                <p className="catalog-title">ДИВАН ДВОМІСНИЙ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog17.png" className="catalog-image" />
                <p className="catalog-title">СТІЛЕЦЬ ЖУРНАЛЬНИЙ</p>
              </div>
              <div className="catalog-item">
                <img src="five-section-katalog18.png" className="catalog-image" />
                <p className="catalog-title">СТІЛ ЖУРНАЛЬНИЙ</p>
              </div>
            </div>
          </section>


          <section className="six-main-section">
            <p className="title-section-main">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</p>
            <div className="masonry-grid">
              <div className="image-grid">
                <div className="image-wrapper">
                  <img src="six-section-idea1.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="six-section-idea2.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="six-section-idea3.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="six-section-idea4.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper central">
                  <img src="six-section-idea5.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="six-section-idea6.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
              </div>
            </div>
          </section>

          <section className="seven-main-recomendation">
            <p className="title-section-main">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</p>
            <div className="title-strip">
              <span className="title-strip-item">КАРТИНИ</span>
              <span className="title-strip-item">ЛЮСТРА</span>
              <span className="title-strip-item">ЛАМПА</span>
              <span className="title-strip-item">КОРЗИНА ДЛЯ БІЛИЗНИ</span>
              <span className="title-strip-item">ПЛЕДИ</span>
              <span className="title-strip-item">МАТРАЦ</span>
              <span className="title-strip-item">СТЕЛАЖ</span>
              <span className="title-strip-item">КИЛИМ</span>
              <span className="title-strip-item">ДЕКОРАТИВНІ РОСЛИНИ</span>
              <span className="title-strip-item">РУШНИК</span>
              <span className="title-strip-item">ШАФА</span>
            </div>
            <div className="masonry-grid">
              <div className="image-grid">
                <div className="image-wrapper">
                  <img src="seven-main-recomendation1.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="seven-main-recomendation2.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="seven-main-recomendation3.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="seven-main-recomendation4.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper central">
                  <img src="seven-main-recomendation5.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
                <div className="image-wrapper">
                  <img src="seven-main-recomendation6.png" />
                  <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
                </div>
              </div>
            </div>
            <div className="title-strip">
              <span className="title-strip-item">ШТОРИ</span>
              <span className="title-strip-item">ДЗЕРКАЛО</span>
              <span className="title-strip-item">ВАЗА</span>
              <span className="title-strip-item">ГОДИННИК</span>
              <span className="title-strip-item">ПОЛИЦІ</span>
              <span className="title-strip-item">ПОДУШКИ</span>
              <span className="title-strip-item">СВІЧКИ</span>
              <span className="title-strip-item">ДЕКОР</span>
              <span className="title-strip-item">ПОСТІЛЬНА БІЛИЗНА</span>
              <span className="title-strip-item">КУХОННИЙ ПОСУД</span>
              <span className="title-strip-item">КУХОННА МИЙКА</span>
            </div>
          </section>


          <section className="eight-main-section">
            <p className="title-section-main">ВАЖЛИВА ІНФОРМАЦІЯ</p>
            <div className="info-card">
              <div className="info-card-image">
                <img src="eight-main-cards1.png" />
              </div>
              <div className="info-card-text">
                <h3 className="info-card-title">ВАЖЛИВА ІНФОРМАЦІЯ</h3>
                <p className="info-card-description">
                У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
                </p>
              </div>
            </div>
          </section>
        </main>







      </div>
      ... <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-column">
              <h3 className="footer-column-title highlighted">Головна</h3>
              <ul className="footer-column-list">
                <li><a href="#link1">Все для дому</a></li>
                <li><a href="#link2">Знайди те, шо шукаєш!</a></li>
                <li><a href="#link3">Рекомендації</a></li>
                <li><a href="#link4">Найкращі набори</a></li>
                <li><a href="#link5">Новинки</a></li>
                <li><a href="#link6">Каталог</a></li>
                <li><a href="#link7">Ідеї для оформлення</a></li>
                <li><a href="#link8">Додаткові рекомендації</a></li>
                <li><a href="#link9">Важлива інформація</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Дизайн</h3>
              <ul className="footer-column-list">
                <li><a href="#link1">Створи дизайн своєї мрії</a></li>
                <li><a href="#link2">Варіанти оформлення</a></li>
                <li><a href="#link3">Поради</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Кімнати</h3>
              <ul className="footer-column-list">
                <li><a href="#link1">Кімнати</a></li>
                <li><a href="#link2">Товари</a></li>
                <li><a href="#link3">Інформація</a></li>
                <li><a href="#link4">Каталог</a></li>
                <li><a href="#link5">Ідеї для оформлення</a></li>
                <li><a href="#link6">Ідеї для оформлення</a></li>
                <li><a href="#link5">Затишні набори</a></li>
                <li><a href="#link6">Додатково</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Заголовок підрозділу</h3>
              <ul className="footer-column-list">
                <li><a href="#link1">Зміст підтеми</a></li>
                <li><a href="#link2">Зміст підтеми</a></li>
                <li><a href="#link3">Зміст підтеми</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Заголовок підрозділу</h3>
              <ul className="footer-column-list">
                <li><a href="#link1">Зміст підтеми</a></li>
                <li><a href="#link2">Зміст підтеми</a></li>
                <li><a href="#link3">Зміст підтеми</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <div className="footer-icons">
                <a href="#social1"><img src="instagram-icon.png"/></a>
                <a href="#social2"><img src="twitter-icon.png" /></a>
                <a href="#social3"><img src="telegram-icon.png"/></a>
                <img src="visa-icon.png" />
                <img src="mastercard-icon.png" />
                <img src="maestro-icon.png" />
                <img src="paypal-icon.png" />
                <img src="applepay-icon.png" />
              </div>
            </div>

            <div className="footer-bottom-right">
              <ul className="footer-bottom-links">
                <li><a href="#link1">Товари</a></li>
                <li><a href="#link2">Книги</a></li>
                <li><a href="#link3">Дизайн</a></li>
                <li><a href="#link4">Місто</a></li>
                <li><a href="#link5">Вхід</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-button">
          <a href="#top">
            <img src="button for slider.png" alt="Scroll to top" />
          </a>
        </div>
      </footer>
    </div>
  );
};
export default App;

