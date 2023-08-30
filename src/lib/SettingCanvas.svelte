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
      Ширина холста:
      <input class="setting__input setting__input-width" type="number" />
    </label>
    <label>
      Высота холста:
      <input class="setting__input setting__input-height" type="number" />
    </label>
    <button class="setting__button" type="submit">Применить</button>
  </form>
</section>

<style lang="scss">
  .setting {
    border: 1px solid black;
    border-radius: 20px;
    margin: 50px auto;
    max-width: 45%;
    padding: 20px;
  }

  .setting__title {
    text-align: center;
  }

  .setting__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .setting__input {
    margin: 0px;
    border: none;
    background-color: transparent;
    inline-size: 35px;
    outline: none;
  }
</style>