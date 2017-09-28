<template>
  <v-app light>
    <v-toolbar dark>
      <v-toolbar-title>哈利波特的購物車</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex lg4 v-for="(book, index) in bookList" :key="index">
            <v-card class="cyan darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{ book.name }}</div>
                      <div class="subheading">{{ bookPrice }} 元 / 本</div>
                      
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="'/public/book'+(index+1)+'.jpg'"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-actions class="white">
                <div class="black--text">購買</div>
                <v-spacer></v-spacer>
                <v-btn icon @click="removeBook(index)">
                  <v-icon>remove</v-icon>
                </v-btn>
                <div class="black--text">{{ book.number }}</div>
                <v-btn icon :id="'addBtn'+(index+1)" @click="addBook(index)">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card>
              <v-container fluid grid-list-lg>
                <v-layout>
                  <v-flex xs6>
                    不同的書:
                  </v-flex>
                  <v-flex xs6 class="text-xs-right">
                    <div>{{ totalBookVer }}</div> 
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs6>
                    總共書本數:
                  </v-flex>
                  <v-flex xs6 class="text-xs-right">
                    <div>{{ totalBook }}</div> 
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs6>
                    總金額:
                  </v-flex>
                  <v-flex xs6 class="text-xs-right">
                    <div>{{ subTotal }}</div> 
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs6>
                    折扣後金額:
                  </v-flex>
                  <v-flex xs6 class="text-xs-right">
                    <div id="total">{{ total }}</div> 
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        bookPrice: 100,
        bookList: [
          {
            name: '第1集',
            number: 0
          },
          {
            name: '第2集',
            number: 0
          },
          {
            name: '第3集',
            number: 0
          },
          {
            name: '第4集',
            number: 0
          },
          {
            name: '第5集',
            number: 0
          }
        ],
        discount: [
          {
            ver: 0,
            rate: 1
          },
          {
            ver: 1,
            rate: 1
          },
          {
            ver: 2,
            rate: 0.95
          },
          {
            ver: 3,
            rate: 0.9
          },
          {
            ver: 4,
            rate: 0.8
          },
          {
            ver: 5,
            rate: 0.75
          }
        ]
      }
    },
    computed: {
      // 幾本不同的書
      totalBookVer () {
        let newList = this.bookList.filter(function (book) {
          return book.number > 0;
        });
        return newList.length;
      },
      // 總共書本數
      totalBook () {
        let sumBook = 0;
        this.bookList.forEach(function(book) {
          sumBook = sumBook + book.number
        });
        return sumBook;
      },
      // 總金額
      subTotal () {
        let total = 0;

        this.bookList.forEach(function(book) {
          total = total + this.bookPrice * book.number
        }, this);

        return total;
      },
      // 折扣後金額
      total () {
        let config = this.discount.filter(function(obj){
          return obj.ver === this.totalBookVer;
        }, this);

        return (config[0].ver * config[0].rate + (this.totalBook-config[0].ver)) * this.bookPrice;
      }
    },
    methods: {
      addBook(index) {
        this.bookList[index].number ++;
      },
      removeBook(index) {
        let num = this.bookList[index].number;
        this.bookList[index].number = num <= 0 ? 0 : num-1;
      }
    }
  }
</script>
