<template>
  <div class="container">

  <c-box v-bind="mainStyles[colorMode]" w="100vw" p="4" flex-dir="column">



<c-flex align="center" w="100%">
  <c-flex align="center" justify="center">
                
                        <CButton
                        @click="$router.go(-1)"
            mr="3"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
          >  ❮</CButton>
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="toggleColorMode"
          />
  <c-flex align="flex-start">
     <CHeading text-align="left" as="h3" size="lg">
        🏠 ЮГ Недвижимость
      </CHeading>
  </c-flex>
  </c-flex>
</c-flex>




</c-box><hr />

    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100%"
      flex-dir="column"
      justify-content="flex-start"
    >
    <c-flex margin="15px" display="flex" flexDirection="row" flexWrap="wrap" align="center">
    <c-grid d="flex" w="100%" h="300px" overflowY="hidden" overflow="auto" template-columns="repeat(5, 1fr)" gap="6">
  <!--  <CBox position="absolute" @click="swiper=false" d="flex" w="100%" justifyContent="center" alignItems="center" h="300px">
  <c-image v-show="swiper" src="https://sportpark.varyag.net/upload/medialibrary/df6/df63782bababee1262aeaac690e4b637.gif" style="opacity:0.7" w="130px" />
  </CBox> -->
  <c-box minWidth="fit-content" :key="index" v-for="(img, index) in dataJson[0].image">
  
  <c-image h="300px" :src="img" />
  </c-box>
</c-grid>
<br />
  </c-flex>
  <hr>
      <c-box d="flex" margin="10px" justifyContent="space-evenly" mt="2" align-items="center">


        <c-icon-button
  variant-color="vue"
  aria-label="Позвонить нам"
  size="md"
  icon="phone"
  w="33%"
  @click="openDialog"
/>
<div style="width:33%;">
<a href="https://vk.me/yugned_ru" target="_blank">
  <c-icon-button
  variant-color="vue"
  aria-label="Написать нам"
  size="md"
  icon="email"
  w="100%"
/></a>
</div>
      <c-icon-button
  variant-color="vue"
  aria-label="В избранное"
  size="md"
  icon="add"
  w="33%"
/>
      </c-box>
<CBox margin="10px">
<c-box
        mt="1"
        font-weight="semibold"
        as="h4"
        line-height="tight"
        is-truncated
        display="flex"
        columnGap="5px"
        justifyContent="flex-start"
        flexWrap="nowrap"
        alignItems="center"
      >
      🏡&nbsp;{{ getCoordinates }}
      </c-box>
      <c-box  font-weight="bold"
        as="h4"
        line-height="tight"
        is-truncated>
      💰&nbsp;{{ prettify(dataJson[0].price.value) + ' руб.'}}
      </c-box>
      {{dataJson[0].description, 150}}
  </CBox>
  <CBox m="10px" borderRadius="10px">
  <div id="map" style="width: 100%; height: 400px"></div>
  </CBox>
    </CBox>
    <c-alert-dialog
      :is-open="isOpen_2"
      :least-destructive-ref="$refs.cancelRef"
      :on-close="closeDialog"
    >
      <c-alert-dialog-overlay />
      <c-alert-dialog-content>
        <c-alert-dialog-header font-size="lg" font-weight="bold">
          Звонок менеджеру
        </c-alert-dialog-header>
        <c-text as="cite" m="0px 15px">При звонке сообщите номер или адрес объекта</c-text><hr>
        <c-alert-dialog-body>
          <b>Менеджер объекта:</b> {{dataJson[0]['sales-agent'].name}}<br>
          <b>Адрес объекта:</b> {{dataJson[0].location.address}}<br>
          <b>Номер объекта:</b> #{{dataJson[0]['@internal-id']}}<br>

        </c-alert-dialog-body>
        <c-alert-dialog-footer>
          <c-button ref="cancelRef" @click="closeDialog">
            Закрыть
          </c-button>
          <a :href="'tel:'+dataJson[0]['sales-agent'].phone">
          <c-button variantColor="vue"  ml="3">
            Позвонить
          </c-button>
          </a>
        </c-alert-dialog-footer>
      </c-alert-dialog-content>
    </c-alert-dialog>
  </div>
</template>

<script lang="js">
import bridge from '@vkontakte/vk-bridge';
import MyDataJson from '../../static/new.json'
import '@chakra-ui/vue'

export default {
  name: 'ObjectPage',
  components: {
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      swiper: true,
      selectProperty:{
        category: '',
        type: '',
      },
      isOpen: false,
      isOpen_2: false,
      property: {
          imageUrl: "https://bit.ly/2Z4KKcF",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern home in city center in the heart of historic Los Angeles",
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4,
        },
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    dataJson(){
      const found_names = MyDataJson.filter(v => v['@internal-id'] == this.$route.params.id);
      console.log(found_names)
      return found_names
    },
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    },
    getCoordinates(){
      try{
        var address = this.dataJson[0].location['locality-name'] + ',' + this.dataJson[0].location.address
        return address
      }
      catch{
        return ''
      }
      
    },
  },
  methods: {
   initMap() {

    var address = this.getCoordinates
    var geocoder = ymaps.geocode(address);
    geocoder.then(
        function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            var placemark = new ymaps.Placemark(coordinates, {
                    'hintContent': address,
                    'balloonContent': address
                }, {
                    'preset': 'islands#redDotIcon'
                });
              var myMap = new ymaps.Map("map", {
                center: coordinates,
                zoom: 12,
            });
            myMap.geoObjects.add(placemark);
        }
    );
 
},
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    closeDialog() {
      this.isOpen_2 = false
    },
    openDialog() {
      this.isOpen_2 = true
    },
    prettify(num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
        },
    
  kitcut(text, limit) {
      var lastSpace;
      text = text.trim();
      if( text.length <= limit) return text;
      text = text.slice( 0, limit); // тупо отрезать по лимиту
      lastSpace = text.lastIndexOf(" ");
      if( lastSpace > 0) { // нашлась граница слов, ещё укорачиваем
        text = text.substr(0, lastSpace);
      }
      return text + "...";
  }
  },
  mounted(){
    ymaps.ready(this.initMap);
    console.log(this.dataJson[this.$route.params.id])
  }
}
</script>
