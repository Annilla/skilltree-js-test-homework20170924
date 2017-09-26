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
                      <div class="subheading">{{ book.price }} 元 / 本</div>
                      
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
                <v-btn icon @click="addBook(index)">
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
                    總金額:
                  </v-flex>
                  <v-flex xs6 class="text-xs-right">
                    0
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
        bookList: [
          {
            name: '第1集',
            number: 0,
            price: 100
          },
          {
            name: '第2集',
            number: 0,
            price: 100
          },
          {
            name: '第3集',
            number: 0,
            price: 100
          },
          {
            name: '第4集',
            number: 0,
            price: 100
          },
          {
            name: '第5集',
            number: 0,
            price: 100
          }
        ]
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
