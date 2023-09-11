<script>
  let colorValue = '#ffffff';
  let canvasHeight = 400;
  let canvasWidth = 600;
</script>

<section class="setting">
  <h2 class="setting__title">Настройка холста</h2>
  <form class="setting__form">
    <div class="setting__container">
      <label class="setting__label" for="setting-color">Цвет холста:</label>
      <input class="setting__input-color" id="setting-color" type="color" bind:value={colorValue} /> 
    </div>
    <div class="setting__container">
      <label class="setting__label" for="setting-height">Высота холста:</label>
      <input class="setting__input-size" id="setting-height" type="number" bind:value={canvasHeight} />
    </div>
    <div class="setting__container">
      <label class="setting__label" for="setting-width">Ширина холста:</label>
      <input class="setting__input-size" id="setting-width" type="number" bind:value={canvasWidth} />
    </div>
    <div class="setting__info-container">
      <span class="setting__info">height = min: 400px; max: 900px;</span>
      <span class="setting__info">width = min: 600px; max: 1440px;</span>
    </div>
    <button class="setting__button" type="submit">Применить</button>
  </form>
</section>

<style lang="scss">
  .setting {
    --angle: 0deg;
    border: 5px solid transparent;
    border-image: linear-gradient(var(--angle), rgba(155,64,150,1) 0%, rgba(255,134,134,1) 50%,  rgba(255,229,71,1) 100%);
    border-image-slice: 1;
    animation: BorderRotate linear 9s infinite;
    margin: 0 auto;
    min-width: 45%;
    padding: 1.2rem;
    box-shadow: 1px 1px 25px #a1a1a1;
    background-color: #ffffff;
    backdrop-filter: blur(15px);

    // Заголовок
    &__title {
      font-size: 2em;
      text-align: center;
    }

    // Форма
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5rem 0 .5rem;
      gap: 1rem;
    }

    // Контейнер ярлыка и инпута
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 250px;
    }

    // Ярлык
    &__label {
      flex: 1;
      font-size: 1.1em;
      line-height: 1.5rem;
      font-weight: 500;
    }

    // Цвет холста
    &__input-color {
      appearance: none;
      cursor: pointer;
      height: 2rem;
      inline-size: 5.25em;

      &::-webkit-color-swatch {
        border-radius: 1rem;
        border: 2px solid #777777;
      }

      &::-moz-color-swatch {
        border-radius: 1rem;
        border: 2px solid #777777;
      }
    }

    // Размер холста
    &__input-size {
      text-align: center;
      inline-size: 4.8em;
      padding: .1rem .3rem;
      outline: 2px solid #777777;
      transition: outline .3s ease-in-out;
      margin-right: .2rem;

      &:focus {
        outline: 2px solid #ff8686;
      }
    }

    // Контейнер с инфой о размерах
    &__info-container {
      display: flex;
      flex-direction: column;
      margin-top: .4rem;
      gap: .5em;
    }

    // Текст с инфо 
    &__info {
      color: #9c9b9b;
      font-size: .6em;
      font-weight: 500;
      text-align: left;
    }

    // Кнопка подтверждения
    &__button {
      font-weight: 500;
      color: #ffffff;
      margin-top: 3rem;
      padding: .7rem;
      background: linear-gradient(90deg, rgba(155,64,150,1) 0%, rgba(255,134,134,1) 50%,  rgba(255,229,71,1) 100%);
      border-radius: 1.2em;
      transition: all .2s linear;

      &:hover {
        transform: translateY(-0.3rem);
      }
    }
  }

  // переменная для goog api
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
</style>