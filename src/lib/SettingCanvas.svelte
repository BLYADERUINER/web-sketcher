<script>
  let colorValue = '#ffffff';
  let canvasHeight = 400;
  let canvasWidth = 600;
</script>

<section class="setting">
  <h2 class="setting__title">Настройка холста</h2>
  <form class="setting__form">
    <label class="setting__label">
      Цвет холста:
      <input class="setting__input setting__input-color" type="color" bind:value={colorValue} /> 
    </label>
    <label class="setting__label">
      Высота холста:
      <input class="setting__input setting__input-height" type="number" bind:value={canvasHeight} />
    </label>
    <label class="setting__label">
      Ширина холста:
      <input class="setting__input setting__input-width" type="number" bind:value={canvasWidth} />
    </label>
    <span class="setting__info">min: 400px; max: 1440px;</span>
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
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  .setting__title {
    font-size: 2em;
    text-align: center;
  }

  .setting__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0 .5rem;
    gap: .9rem;
  }

  .setting__label {
    display: flex;
    align-items: center;
    font-size: 1.1em;
    line-height: 1.5rem;
    font-weight: 500;
  }

  .setting__input {
    margin: 0;
    border: none;
    background-color: transparent;
    transition: all .2s ease-in-out;
    outline: 2px solid transparent;
    border-radius: 2rem;
  }

  .setting__input-color {
    cursor: pointer;
    appearance: none;
    height: 1.6rem;
    inline-size: 4em;
    padding: .1rem .5rem 0 .5rem;
    margin-left: 1rem;
  }

  .setting__input-height {
    inline-size: 4.8em;
    padding: .1rem .3rem;
    margin-left: 1.5rem;
  }

  .setting__input-width {
    inline-size: 5.1em;
    padding: .1rem .3rem;
    margin-left: 1.5rem;
  }

  .setting__input-width:focus,
  .setting__input-height:focus {
    outline: 2px solid #ff8686;
  }

  .setting__info {
    color: #9c9b9b;
    margin-top: .6rem;
    font-size: .7em;
    font-weight: 500;
  }

  .setting__button {
    font-weight: 500;
    color: #ffffff;
    margin-top: 3rem;
    padding: .7rem;
    background: linear-gradient(90deg, rgba(155,64,150,1) 0%, rgba(255,134,134,1) 50%,  rgba(255,229,71,1) 100%);
    border-radius: 1.2em;
    transition: all .2s linear;
  }

  .setting__button:hover {
    transform: translateY(-0.3rem);
  }

</style>