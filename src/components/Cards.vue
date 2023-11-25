<template>
  <div class="container">
    <Flicking :options="{ align: 'center' }">
      <div class="panel" v-for="(item, index) in useCards" :key="index" >
        <div class="cards" :class="{ 'card-sign-r': item.sign % 2 == 0, 'card-sign-b': item.sign % 2 == 1 }">
          <div class="back-cards" @click="($event) => { $event.target.hidden = true; }"></div>
          <div class="letter-head letter">
            <b>{{ item.letter }}</b>
          </div>
          <div class="sign">
            <i v-if="(item.sign == 1)" class="bi bi-suit-club-fill card-sign"></i>
            <i v-if="(item.sign == 2)" class="bi bi-suit-diamond-fill card-sign"></i>
            <i v-if="(item.sign == 3)" class="bi bi-suit-heart-fill card-sign"></i>
            <i v-if="(item.sign == 4)" class="bi bi-suit-spade-fill card-sign"></i>
          </div>
          <div class="letter-foot letter">
            <b>{{ item.letter }}</b>
          </div>
        </div>
      </div>
    </Flicking>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import Flicking from "@egjs/vue3-flicking";

export default defineComponent(
  {
    name: "cards",
    data() {
      return {
        letter: new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"),
        sign: [1, 2, 3, 4],
        cards: [],
        useCards: []

      };
    },
    mounted() {

      for (let l of this.letter) {
        for (let s of this.sign) {
          let c = new Object({
            "letter": l,
            "sign": s,
            "show": false
          });
          this.cards.push(c);
        }
      }

      for (let i = 0; i <= this.cards.length; i++) {
        const index = Math.floor(Math.random() * this.cards.length);

        if (this.useCards.indexOf(this.cards[index]) === -1) {
          this.useCards.push(this.cards[index]);
        }
      }

      console.log(this.useCards)

    },
    components: {
      Flicking
    }
  }
);

</script>

<style scoped>
.panel {
  width: 95%;
  height: 100%;
  box-shadow: 0 .25rem 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem .5rem
}

.cards {
  z-index: 0;
  width: 100%;
  height: 80dvh;
  position: relative;
}


.back-cards {
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: pink; */
  border-radius: .75rem;
  border: #000000 solid 1px;
  background: radial-gradient(circle at top, transparent 14%, #000000 15%, #000000 19%, transparent 20%), radial-gradient(circle at bottom, transparent 14%, #000000 15%, #000000 19%, transparent 20%), radial-gradient(circle at right, transparent 14%, #000000 15%, #000000 19%, transparent 20%), radial-gradient(circle at left, transparent 14%, #000000 15%, #000000 19%, transparent 20%), radial-gradient(circle at center, #000000 25%, transparent 26%), radial-gradient(circle at bottom left, #000000 12%, transparent 13%), radial-gradient(circle at bottom right, #000000 12%, transparent 13%), radial-gradient(circle at top left, #000000 12%, transparent 13%), radial-gradient(circle at top right, #000000 12%, transparent 13%);
  background-size: 2em 2em;
  background-color: #ffffff;
  opacity: 1
}

.sign {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  font-size: 100px;
}

.letter {
  font-size: 36px;
}

.letter-head {
  position: absolute;
  top: 0%;
  left: 0%;
}

.letter-foot {
  position: absolute;
  bottom: 0%;
  right: 0%;
  transform: rotate(180deg);
}

.card-sign-r {
  color: red;
}

.card-sign-b {
  color: black;
}
</style>