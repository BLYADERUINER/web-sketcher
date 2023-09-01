<script>
  let colorValue = '#ffffff';
</script>

<section class="setting">
  <h2 class="setting__title">Настройка холста</h2>
  <form class="setting__form">
    <label>
      Цвет холста:
      <input class="setting__input setting__input-color" type="color" bind:value={colorValue} /> 
    </label>
    <label>
      Высота холста:
      <input class="setting__input setting__input-height" type="number" />
    </label>
    <label>
      Ширина холста:
      <input class="setting__input setting__input-width" type="number" />
    </label>
    <span class="setting__info">инфа по мин и макс значению</span>
    <button class="setting__button" type="submit">Применить</button>
  </form>
</section>

<style lang="scss">
  .setting {
    border: 1px solid black;
    border-radius: 1.5rem;
    margin: 0 auto;
    min-width: 45%;
    padding: 1.2rem;
  }

  .setting__title {
    font-size: 2rem;
    text-align: center;
  }

  .setting__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0 .5rem;
    gap: .9rem;
  }

  .setting__input {
    margin: 0;
    border: none;
    background-color: transparent;
    outline: none;
  }

  .setting__input-color {
    inline-size: 4em;
    padding-left: 1.8rem;
  }

  .setting__input-height {
    inline-size: 4.8em;
    padding-left: 1.6rem;
  }

  .setting__input-width {
    inline-size: 5.1em;
    padding-left: 1.6rem;
  }

  .setting__info {
    margin-top: .6rem;
    font-size: .5em;
  }

  .setting__button {
    margin-top: 3rem;
  }
</style>