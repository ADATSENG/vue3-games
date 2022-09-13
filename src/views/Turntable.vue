<template>
  <div class="turntable">
    <div class="sx-list">
<div class="sx-container">
      <div
        class="sx"
        :class="[`sx-${index}`, item.selected || item.pick ? 'sel' : '']"
        v-for="(item, index) in cards"
        :key="item.label"
      >
        <div class="normal-img" :class="item.name"></div>
        <div class="active-img" :class="item.name"></div>
      </div>

  <div v-if="!isRolling" class="turntableheader" @click="startRoll">START</div>
    </div>
        </div>
  

     

  </div>
</template>

<script>
import { ref } from 'vue';

import { FILTER_TYPES,  randomSX } from '@/common/utils/constant';

export default {
  setup() {

    const cards = ref([]);
    const isRolling = ref(false);

    FILTER_TYPES.sx.data.forEach((sx, index) => {
      cards.value.push({
        label: sx,
        name: FILTER_TYPES.sx.dataPY[index],
        selected: false,
        pick: false,
      });
    });

    const reset = ()=>{

      cards.value.forEach((item)=>{
          item.selected = false
            item.pick = false
      })
    }



    const startRoll = () => {
      reset()
      let sxResult = randomSX(3);
      let times = -1;
      let lastCardIndex = 0;
      let done = false
      isRolling.value= true



      let roll = () => {
        setTimeout(() => {
         
          times++;
          const round = Math.floor(times / 12);

          if (!done) {
            const selected = sxResult[round];

            const cardIndex = times % 12;
            if (cards.value[cardIndex].label === selected) {
              
              cards.value[cardIndex].pick = true;
              if (round === 2) {
                done = true;
                isRolling.value= false



              }
            }
            cards.value[lastCardIndex].selected = false;
            cards.value[cardIndex].selected = true;

            lastCardIndex = cardIndex;


          }

          roll();
        }, 110);
      };

      roll();

    };
    return {
      cards,
      isRolling,
      startRoll,
    };
  },
};
</script>


<style lang="scss">
.turntable {
  position: relative;

    background-image: url(@/assets/static/images/background.png);
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
    height: 46.82vw;


}
.turntableheader {
    position: absolute;

   width: 8.80vw;
     height: 8.80vw;
  cursor: move;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #eded5b;
  border-radius:50%;
  color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.12vw;

}
.sx-container{
  width: 49.31vw;
    margin: 0 auto;

    height: 46.82vw;
    position: relative;
}
.sx-list {

  height: 100%;

  .sx {

        width: 11.24vw;
    height: 11.24vw;
position: absolute;
    .normal-img,
    .active-img {
      height: 100%;
      max-width: 100%;
      background: 0 0 / 100% 100%;
    }
    .active-img {
    &.shu {
        background-image: url(@/assets/static/images/selected/Aquarius.png);
      }
      &.niu {
        background-image: url(@/assets/static/images/selected/Aries.png);
      }
      &.hu {
        background-image: url(@/assets/static/images/selected/Cancer.png);
      }
      &.tu {
        background-image: url(@/assets/static/images/selected/Capricorn.png);
      }
      &.long {
        background-image: url(@/assets/static/images/selected/Gemini.png);
      }
      &.she {
        background-image: url(@/assets/static/images/selected/Leo.png);
      }
      &.ma {
        background-image: url(@/assets/static/images/selected/Libra.png);
      }
      &.yang {
        background-image: url(@/assets/static/images/selected/Pisces.png);
      }
      &.hou {
        background-image: url(@/assets/static/images/selected/Sagittarius.png);
      }
      &.ji {
        background-image: url(@/assets/static/images/selected/Scorpio.png);
      }
      &.gou {
        background-image: url(@/assets/static/images/selected/Taurus.png);
      }
      &.zhu {
        background-image: url(@/assets/static/images/selected/Virgo.png);
      }
    }
    .normal-img {
      &.shu {
        background-image: url(@/assets/static/images/Aquarius.png);
      }
      &.niu {
        background-image: url(@/assets/static/images/Aries.png);
      }
      &.hu {
        background-image: url(@/assets/static/images/Cancer.png);
      }
      &.tu {
        background-image: url(@/assets/static/images/Capricorn.png);
      }
      &.long {
        background-image: url(@/assets/static/images/Gemini.png);
      }
      &.she {
        background-image: url(@/assets/static/images/Leo.png);
      }
      &.ma {
        background-image: url(@/assets/static/images/Libra.png);
      }
      &.yang {
        background-image: url(@/assets/static/images/Pisces.png);
      }
      &.hou {
        background-image: url(@/assets/static/images/Sagittarius.png);
      }
      &.ji {
        background-image: url(@/assets/static/images/Scorpio.png);
      }
      &.gou {
        background-image: url(@/assets/static/images/Taurus.png);
      }
      &.zhu {
        background-image: url(@/assets/static/images/Virgo.png);
      }
    }
    &.sx-1,
    &.sx-2,
    &.sx-3,
    &.sx-0 {
      top: 0vw;
    }
    &.sx-4,
    &.sx-11 {

       top: 11.86vw;
    }
    &.sx-5,
    &.sx-10 {

       top: 23.72vw;
    }
    &.sx-6,
    &.sx-7,
    &.sx-8,
    &.sx-9 {

      top: 35.46vw;
    }
    &.sx-0,
    &.sx-11,
    &.sx-9,
    &.sx-10 {

           left: 0;
    }
    &.sx-1,
    &.sx-8 {

       left: 12.55vw;
    }
    &.sx-2,
    &.sx-7 {

        left: 25.09vw;
    }
    &.sx-3,
    &.sx-4,
    &.sx-5,
    &.sx-6 {

       left: 37.89vw;
    }
  }
}
.sx-list .normal-img,
.rgb-list .normal-img {
  display: block;
}
.sx-list .active-img,
.rgb-list .active-img {
  display: none;
}
.sx-list .sel .normal-img,
.rgb-list .sel .normal-img {
  display: none;
}
.sx-list .sel .active-img,
.rgb-list .sel .active-img {
  display: block;
}

</style>
