<script>
  import { setCanvasToHidden } from '$lib/stores/canvas_setting';

  export let canvas_visible;

  const handleLogoClick = () => {
    let confirmReturn = false;

    confirmReturn = confirm('Go back to the canvas setting ?');

    if (confirmReturn) {
      setCanvasToHidden();

      localStorage.clear();
    }
  };
</script>

<button on:click={handleLogoClick} disabled={!canvas_visible}>
  <img
    class="header__logo"
    src="/logo.png"
    alt="Логотип Web-Sketcher"
  />
</button>

<style lang="scss">
  @import './index.scss';
</style>