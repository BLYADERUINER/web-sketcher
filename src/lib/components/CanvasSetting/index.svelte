<script>
  import { setStoreCanvasSetting } from '$lib/stores/canvas_setting';

  let setting = {
    background_color: "#ffffff",
    width: 1200,
    height: 600,
    canvas_visible: true,
  };

  const handleSettingForCanvas = () => setStoreCanvasSetting(setting);
</script>

<section class="setting">
  <h2 class="setting__title">Настройка холста</h2>
  <form class="setting__form" on:submit|preventDefault={handleSettingForCanvas}>
    <div class="setting__container">
      <label class="setting__label" for="setting-color">
        Цвет холста:
      </label>
      <input
        class="setting__input-color"
        id="setting-color"
        type="color"
        bind:value={setting.background_color}
      /> 
    </div>
    <div class="setting__container">
      <label class="setting__label" for="setting-height">
        Высота холста:
      </label>
      <input
        class="setting__input-size"
        id="setting-height"
        type="number"
        bind:value={setting.height}
        min=400
        max=1080
      />
    </div>
    <div class="setting__container">
      <label class="setting__label" for="setting-width">
        Ширина холста:
      </label>
      <input
        class="setting__input-size"
        id="setting-width"
        type="number"
        bind:value={setting.width}
        min=600
        max=1920
      />
    </div>
    <div class="setting__info-container">
      <span class="setting__info">height = min: 400px; max: 1080px;</span>
      <span class="setting__info">width = min: 600px; max: 1920px;</span>
    </div>
    <button class="setting__button" type="submit">
      Применить
    </button>
  </form>
</section>

<style lang="scss">
  @import './index.scss';
</style>