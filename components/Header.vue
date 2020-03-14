<template>
  <div class="zg-header">
    <a href="https://zigmund.online">
      <img src="/images/logo.svg">
    </a>
  </div>
</template>
<style>
.zg-header {
    text-align: center;
    padding: 32px 0
}

.zg-header._with-border {
    border-bottom: 1px solid hsla(0, 0%, 87.1%, .5);
    padding: 20px
}

.zg-header__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media screen and (max-width:780px) {
    .zg-header {
        padding: 22px 0;
        border-bottom: 1px solid #dedede
    }
    .zg-header._with-border {
        border-bottom: 0;
        padding: 20px
    }
    .zg-section-header {
        margin-top: 10px
    }
}
</style>
