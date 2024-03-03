<footer class="footer">
  <a class="footer__link" href="https://github.com/BLYADERUINER">©BLYADERUINER</a>
</footer>

<style lang="scss">
  .footer {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    background-color: #696969;
    height: 5vh;

    &__link {
      color: #ffffff;
      font-weight: 500;
      font-size: .9em;
      padding-right: 2rem;
      transition: color ease-in-out .2s;
      
      &:hover {
        color: #dddddd;
      }
    }
  }
</style>