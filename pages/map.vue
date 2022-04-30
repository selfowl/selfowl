<template>
  <div class="container">

  <c-box v-bind="mainStyles[colorMode]" w="100vw" p="4" flex-dir="column">



<c-flex align="center" w="100%" >
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
   <div id="map" style="width: 100%; height: 100vh"></div>
    </CBox>
    
  </div>
</template>

<script lang="js">
import bridge from '@vkontakte/vk-bridge';
import MyDataJson from '../static/new.json'
import '@chakra-ui/vue'

export default {
  name: 'MapPage',
  components: {
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
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
      return MyDataJson
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
        var d = []
        var data = this.dataJson
      try{
          data.forEach(el => {
              d.push({cordss: el.location['locality-name'] + ',' + el.location.address, id: el['@internal-id']})
          })
        console.log(d)
        return d.slice(0,10)
      }
      catch{
        return ''
      }
      
    },
  },
  methods: {
   initMap() {

    var myMap = new ymaps.Map("map", {
                center: [43.585472, 39.723098],
                zoom: 12,
            });
            var searchArr = this.getCoordinates;

searchArr.forEach(function(item) {
    ymaps.geocode(item.cordss, {
    results: 1
}).then(function (res) {
        const dayaPlacemark = MyDataJson.filter(v => v['@internal-id'] == item.id)[0];
        var firstGeoObject = res.geoObjects.get(0),
            coords = firstGeoObject.geometry.getCoordinates();
            console.log(coords)
        myMap.geoObjects.add(new ymaps.Placemark(coords, {
            balloonContent: `
            <div class="placemarkBlockView">
            <img src="${dayaPlacemark.image[0]}" width="150px" />
            <h5><b>${dayaPlacemark.price.value + 'руб.'}</b></h5>
            <h6>${dayaPlacemark.location['locality-name'] + ',' + dayaPlacemark.location.address}</h6>
              <a href="/object/${dayaPlacemark['@internal-id']}">
            <c-button variantColor="vue"  ml="3">
            Смотреть объект
          </c-button></a>
            </div>
            `
        }, {
            preset: 'islands#blueHomeIcon'
        }));
    });
});
    
 
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
    this.getCoordinates
    ymaps.ready(this.initMap);
    // console.log(this.dataJson[this.$route.params.id])
  }
}
</script>
<style>
.placemarkBlockView{
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    flex-wrap: wrap;
}
.placemarkBlockView>img{
    border-radius: 5px;
}
</style>