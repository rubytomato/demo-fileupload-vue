<template>
  <v-content class="cards page">
    <slot name="nav"></slot>
    <div style="max-width: 500px; margin: 20px auto;" class="grey lighten-3">
      <v-card>
        <v-container fluid style="min-height: 0; text-align: left;" grid-list-lg>
          <transition-group name="card-anim">
            <v-layout row wrap v-for="(item, index) in items" v-bind:key="index">
              <component v-bind:is="cardType(item)" v-bind:item="item" />
            </v-layout>
          </transition-group>
        </v-container>
      </v-card>
      <!-- button -->
      <v-container fluid style="min-height: 0;">
        <v-layout row>
          <v-flex xs6>
            <v-btn color="success" v-on:click="addList">More</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn color="warning" v-on:click="removeList">Remove</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <slot name="footer"></slot>
  </v-content>
</template>

<script>
import NormalCard from '@/components/NormalCard'
import ImageCard from '@/components/ImageCard'

export default {
  name: 'Cards',
  components: {
    'normal-card': NormalCard,
    'image-card': ImageCard
  },
  data () {
    return {
      itemMaster: [],
      items: [],
      itemIndex: 0
    }
  },
  mounted () {
    this.itemMaster = [
      { title: 'ゼルダの伝説', description: '任天堂から発売されたゲームソフト。ゼルダの伝説シリーズの一作目にあたる。', color: 'green darken-4' },
      { title: 'リンクの冒険', description: '任天堂より昭和62年1月14日に発売されたファミリーコンピュータ ディスクシステム用アクションアドベンチャーゲーム。', color: 'light-green darken-4' },
      { title: 'ゼルダの伝説 神々のトライフォース', description: '平成3年11月21日に任天堂から発売されたスーパーファミコン用ゲームソフト。', color: 'green accent-4' },
      { title: 'ゼルダの伝説 夢をみる島', description: '任天堂から平成5年6月6日に発売されたゲームボーイ用アクションアドベンチャーゲーム。', color: 'orange darken-4' },
      { title: 'ゼルダの伝説 時のオカリナ', description: '平成9年11月21日に任天堂より発売されたNINTENDO64（N64）用アクションアドベンチャーゲーム、アクションRPG。', color: 'lime darken-4' },
      { title: 'ゼルダの伝説 ムジュラの仮面', description: '任天堂より平成12年4月27日に発売されたNINTENDO64用3DアクションRPG。', color: 'deep-purple darken-4' }
    ]
    this.items.push(this.itemMaster[0])
    this.items.push(this.itemMaster[1])
    this.itemIndex = this.items.length
  },
  methods: {
    addList () {
      if (this.itemMaster.length > this.itemIndex) {
        this.items.push(this.itemMaster[this.itemIndex++])
      }
    },
    removeList () {
      this.items.splice(--this.itemIndex, 1)
    },
    cardType (item) {
      if (item.image) {
        return ImageCard
      } else {
        return NormalCard
      }
    }
  }
}
</script>

<style scoped>
.card-anim-enter-active {
  animation: fadeInUp .7s;
  animation-delay: .4s;
  opacity: 0;
}

.card-anim-leave-active {
  animation: fadeInUp .7s reverse;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  60% {
    opacity: .3;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
