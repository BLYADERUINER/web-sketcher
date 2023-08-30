<script>
  import "../styles.scss";
  import SettingCanvas from '$lib/SettingCanvas.svelte';
</script>

<header class="header">
  <div class="title">
    <img class="title__logo" src="/logo.png" alt="logo"/>
    <h1 class="title__text">
      Welcome to Web-Sketcher
    </h1>
  </div>
</header>

<SettingCanvas />

<style lang="scss">
  .header {
    height: 20vh;
    background-size: 100%;
    background: linear-gradient(90deg, rgba(233, 30, 99, 1) 0%, rgba(103, 58, 183, 1) 100%);
    background-size: 150%;
    animation: gradient ease-in-out 6s infinite alternate;
  }

  .title {
    text-align: center;
    width: 100vw;
    overflow: hidden;
  }

  .title__logo {
    position: absolute;
    top: 15px;
    left: 30px;
    width: 120px;
    height: 150px;
    z-index: 1;
    animation: RotateLogo 6s linear infinite alternate;
  }

  .title__text {
    position: relative;
    margin: 50px 0 0;
    text-transform: uppercase;
    font-size: 50px;
    color: #ffffff;
    text-shadow:
                0 1px #808d93,
                -1px 0 #cdd2d5,
                -1px 2px #808d93,
                -2px 1px #cdd2d5,
                -2px 3px #808d93,
                -3px 2px #cdd2d5,
                -3px 4px #808d93,
                -4px 3px #cdd2d5,
                -4px 5px #808d93,
                -5px 4px #cdd2d5,
                -5px 6px #808d93,
                -6px 5px #cdd2d5,
                -6px 7px #808d93,
                -7px 6px #cdd2d5,
                -7px 8px #808d93,
                -8px 7px #cdd2d5;
    animation: TextMover 15s linear infinite alternate-reverse;
  }


  @keyframes RotateLogo {
    from {
      transform: rotate(30deg);
    }
    to {
      transform: rotate(-30deg);
    }
  }

  @keyframes TextMover {
    from {
      transform: translateX(-20%);
    }
    to {
      transform: translateX(30%);
    }
  }

  @keyframes gradient {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
</style>