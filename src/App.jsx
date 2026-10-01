import { useState } from 'react';
import './App.css';

function ProductCard({ name, price, category }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <article className="product-card">
      <div className="product-card__topline">
        <span className="product-card__marker" aria-hidden="true" />
        <span className="product-card__eyebrow">Товар</span>
      </div>

      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__price">
        {price.toLocaleString('ru-RU')} <span>₽</span>
      </p>

      <div className="product-card__category" aria-live="polite">
        {isVisible ? category : '\u00a0'}
      </div>

      <div className="product-card__actions">
        <div className="quantity" aria-label={`Количество: ${count}`}>
          <button
            className="quantity__button"
            type="button"
            aria-label={`Уменьшить количество товара «${name}»`}
            onClick={() => setCount((currentCount) => Math.max(0, currentCount - 1))}
          >
            −
          </button>
          <span className="quantity__value" aria-live="polite">{count}</span>
          <button
            className="quantity__button quantity__button--add"
            type="button"
            aria-label={`Увеличить количество товара «${name}»`}
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            +
          </button>
        </div>

        <button
          className="product-card__info-button"
          type="button"
          aria-expanded={isVisible}
          onClick={() => setIsVisible((visible) => !visible)}
        >
          {isVisible ? 'Скрыть информацию' : 'Показать информацию'}
        </button>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="catalog">
      <header className="catalog__header">
        <p className="catalog__caption">Практика React · 03</p>
        <h1>Карточки товаров</h1>
        <p className="catalog__description">Выберите количество и откройте категорию товара.</p>
      </header>

      <section className="product-grid" aria-label="Список товаров">
        <ProductCard name="Наушники Studio" price={7490} category="Электроника" />
        <ProductCard name="Рюкзак City" price={5290} category="Аксессуары" />
        <ProductCard name="Термокружка" price={1890} category="Для дома" />
      </section>

      <footer className="catalog__footer">
        <span>МАГАЗИН</span>
        <span>3 товара</span>
      </footer>
    </main>
  );
}

export default App;