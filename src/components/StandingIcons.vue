<template>
  <div>
    <h1 class="mx-5">Standing Icons</h1>
    <div class="flex justify-center flex-wrap">
      <div v-for="(e, i) in data" :key="i">
        <div class="standing-icon" :style="{'--accent-color': e.color}"><i :class="e.iconName"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          color: '#00C3C8',
          iconName: 'fa-brands fa-codepen'
        },
        {
          color: '#03A5B3',
          iconName: 'fa-brands fa-html5'
        },
        {
          color: '#2091A4',
          iconName: 'fa-brands fa-css3'
        },
        {
          color: '#2F7499',
          iconName: 'fa-brands fa-js'
        },
        {
          color: '#cfce51',
          iconName: 'fa-solid fa-banana'
        },
        {
          color: '#cccb47',
          iconName: 'fa-solid fa-pineapple'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css');
*, *::before, *::after { padding: 0; box-sizing: border-box }
html, body { min-height: 100% }
body { padding: 5rem; display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; background-color: hsl(200 30% 80%) }
h1{ text-align: center; font-family: system-ui }

.standing-icon{
  width: 10rem;
  aspect-ratio: 1;
  --back-size: 1.5rem;
  --touch-shadow-height: 1rem;
  --front-shadow-offset: .25rem;
  margin-inline: var(--back-size);
  margin-bottom: calc(var(--back-size) + var(--touch-shadow-height));

  background-color: #F9FAF9;
  background-image: linear-gradient(to top right, transparent, rgb(0 0 0 / .125));
  border-radius: 50%;

  box-shadow:
    inset 0.125rem -0.125rem 0.25rem rgb(0 0 0 / .125),
    inset -0.25rem 0.25rem 0.25rem rgb(255 255 255 / .25);
  /*     -0.25rem 0.25rem 0.25rem rgb(0 0 0 / .25); */
  position: relative;

  display: grid;
  place-items: center;
  padding: 1rem;
  font-size: 4rem;
  color: var(--accent-color);
}

.standing-icon::before, .standing-icon::after { content: ""; position: absolute; z-index: -1 }

/* back */
.standing-icon::after{
  inset: calc(var(--back-size) * -1);
  background-color: var(--accent-color);

  background-image: radial-gradient(
    circle at calc(50% - var(--front-shadow-offset)) calc(50% + var(--front-shadow-offset)),
    rgb(0 0 0 / .25) calc(50% - var(--front-shadow-offset)), transparent calc(50% + var(--front-shadow-offset) * 2)
  );
  border-radius: 50%;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}

/* touch-shadow */
.standing-icon::before{
  position: absolute;
  height: calc(var(--touch-shadow-height) * 2);
  inset-inline: 0;
  top: calc(100% + var(--back-size) - var(--touch-shadow-height));
  background-image: radial-gradient(ellipse 50% 50%, rgb(0 0 0 / .75), transparent 75%);
  filter: blur(5px);
}

</style>
