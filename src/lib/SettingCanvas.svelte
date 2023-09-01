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
    inline-size: 3.5em;
    outline: none;
  }

  .setting__input-color {
    padding-left: 1.5rem;
  }

  .setting__input-height {
    padding-left: 1rem;
  }

  .setting__input-width {
    padding-left: .7rem;
  }

  .setting__button {
    margin-top: 3rem;
  }
</style>