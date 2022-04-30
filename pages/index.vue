<template>
  <div class="container">


  <c-box v-bind="mainStyles[colorMode]" w="100vw" p="4" flex-dir="column">



<c-flex align="center" w="100%">
  <c-flex align="center" justify="center">
               <CButton
            mr="3"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="open"
          >&#128736;</CButton>
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
        ЮГ Недвижимость
      </CHeading>
  </c-flex>
  </c-flex>
</c-flex>


<c-button @click="$router.push('map')" position="fixed" zIndex="999999" bottom="15px" left="calc(50% - 50px)" variant-color="green" variant="solid"  w="100px">🗺 Карта</c-button>
</c-box><hr />
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100%"
      flex-dir="column"
      justify-content="flex-start"
    >
      <c-box :p="5" shadow="md" border-width="1px">
    <c-heading>Каталог жилья</c-heading>
    <c-text :mt="4">В данном каталоге Вы можете найти жильё в любом районе г. Сочи.<br />Покупка/Аренда</c-text>
  </c-box>
    <c-flex display="flex" flexDirection="row" flexWrap="wrap" align="center">
    <CBox :key="index" v-for="(item, index) in dataJson.slice(start_slice, end_slice)">
      <c-box maxW="sm" border-width="1px" rounded="lg" overflow="hidden" margin="15px 0px" maxWidth="360px">
    <CBox maxHeight="250px" overflow="hidden">
    <c-badge rounded="full" px="2" variant-color="green" position="absolute" margin="15px" padding="5px 15px">
          {{item.category+' &bull; '+item.type}}
        </c-badge><c-image :src="item.image[0]" width="100%" /></CBox>
    <c-box p="6">
      <c-box d="flex" align-items="baseline">
        
        <c-box
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-transform="uppercase"
          ml="2"
        >
        </c-box>
      </c-box>
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
      🏡&nbsp;{{ item.location.address }}
      </c-box>
      <c-box  font-weight="bold"
        as="h4"
        line-height="tight"
        is-truncated>
      💰&nbsp;{{ prettify(item.price.value) + ' руб.'}}
      </c-box>
      {{kitcut(item.description, 150)}}
      <c-box d="flex" margin="10px 0px" justifyContent="space-between" mt="2" align-items="center">

        <NuxtLink :to="'/object/'+item['@internal-id']">
  <c-button variant-color="blue" size="md" w="100%">
    Смотреть объект ➜
  </c-button>
  </NuxtLink>
        <c-icon-button
  variant-color="vue"
  aria-label="Позвонить нам"
  size="md"
  icon="phone"
  @click="openDialog(index)"
/>
<a href="https://vk.me/yugned_ru" target="_blank">
      <c-icon-button
  variant-color="vue"
  aria-label="Написать нам"
  size="md"
  icon="email"
/>
</a>
      <c-icon-button
  variant-color="vue"
  aria-label="В избранное"
  size="md"
  icon="add"
  @click="testfunc"
/>
      </c-box>
    </c-box>
  </c-box>
  </CBox>
  <CBox m="15px">
        <c-box d="flex" w="100%" margin="10px" overflow="auto" justifyContent="space-evenly" mt="2" align-items="center">


        <c-button
  variant-color="vue"
  aria-label="Позвонить нам"
  size="md"
  m="5px"
  w="50%"
  v-for="btn in 5"
  :key="btn"
  @click="selectPage(btn)"
>{{btn}}</c-button>





      </c-box>
  </CBox>
  </c-flex>
    </CBox>
    <div>
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
          <b>Менеджер объекта:</b> {{dataJson[activeID]['sales-agent'].name}}<br>
          <b>Адрес объекта:</b> {{dataJson[activeID].location.address}}<br>
          <b>Номер объекта:</b> #{{dataJson[activeID]['@internal-id']}}<br>

        </c-alert-dialog-body>
        <c-alert-dialog-footer>
          <c-button ref="cancelRef" @click="closeDialog">
            Закрыть
          </c-button>
          <a :href="'tel:'+dataJson[activeID]['sales-agent'].phone">
          <c-button variantColor="vue"  ml="3">
            Позвонить
          </c-button>
          </a>
        </c-alert-dialog-footer>
      </c-alert-dialog-content>
    </c-alert-dialog>
    <c-modal
      :is-open="isOpen"
      :on-close="close"
    >
      <c-modal-content ref="content">
        <c-modal-header>Фильтры &bull; Сортировка</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>



      <c-select v-model="selectProperty.category" placeholder="Тип жилья">
      <option value="всекатегории">Все Категории</option>
      <option value="квартира">Квартира</option>
      <option value="участок">Земельный участок</option>
      <option value="домкоттедж">Дом / Коттедж</option>
      <option value="таунхаус">Таунхаус</option>
    </c-select><br />
      <c-select v-model="selectProperty.type" placeholder="Тип сделки">
      <option value="всетипы">Все типы</option>
      <option value="продажа">Продажа</option>
      <option value="аренда">Аренда</option>
    </c-select><br />
      <c-select v-model="selectProperty.district" placeholder="Район">
      <option value="любой">Любой</option>
      <option value="адлерский">Адлерский</option>
      <option value="лазаревский">Лазаревский</option>
      <option value="центральный">Центральный</option>
      <option value="хостинский">Хостинский</option>
    </c-select><br />
    <CBox display="flex">
    <c-input placeholder="Стоимость от" />
    <c-input placeholder="Стоимость до" />
    </CBox>



        </c-modal-body>
        <c-modal-footer>
          <c-button variant-color="blue" mr="3" @click="close">
            Сохранить
          </c-button>
          <c-button @click="close">Отмена</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
  </div>
</template>

<script lang="js">
import bridge from '@vkontakte/vk-bridge';
import MyDataJson from '../static/new.json'
import '@chakra-ui/vue'

export default {
  name: 'IndexPage',
  components: {
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      start_slice: 0,
      pageID: 1,
      end_slice: 20,
      activeID: 0,
      blank_array: [],
      selectProperty:{
        category: 'всекатегории',
        type: 'всетипы',
        district: 'любой',
      },
      filt:'всекатегории',
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
      var blank_array = []
      if(this.selectProperty.category==='всекатегории'){
        return MyDataJson
      }
      else if(this.selectProperty.category==='участок'){
        MyDataJson.forEach(obj=>{
          if(obj.category=='участок'){
            blank_array.push(obj)
          }
        })
        return blank_array
      }
      else{
        return MyDataJson
      }
    },
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    getId(id){
      var it = id+20*(this.pageID-1)
      console.log(it)
      return it
    },
    selectPage(pageNumber){
      this.start_slice = ((pageNumber-1)*20)
      this.end_slice = ((pageNumber)*20)
      this.pageID = pageNumber
      window.scrollTo(0, 0);
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
    openDialog(index) {
      this.activeID=index
      this.isOpen_2 = true
      console.log(1)
    },
    prettify(num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
        },
  kitcut(text, limit) {
      var lastSpace;
      text = text.trim();
      if( text.length <= limit) return text;
      text = text.slice( 0, limit);
      lastSpace = text.lastIndexOf(" ");
      if( lastSpace > 0) { 
        text = text.substr(0, lastSpace);
      }
      return text + "...";
  },
  testfunc(){
    bridge.send("VKWebAppAllowNotifications").then(data =>{
      console.log(data)
    })
    bridge.send("VKWebAppAddToHomeScreen").then(data => {
    console.log(data);
  })
  .catch(error => {
  });
  }
  },
  mounted(){
    bridge.subscribe((e) => console.log(e)); 
    bridge.send("VKWebAppInit", {});      
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>