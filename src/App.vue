<template>
  <v-app light>
    <v-toolbar dark>
      <v-toolbar-title>哈利波特的購物車</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex lg4>
            <v-card class="cyan darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">第1集</div>
                      <div>數量： 
                        <span id="num">{{ number }}</span>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/public/book1.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon @click="addNumber">
                  <v-icon>add</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>remove</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex lg4>
            <v-card class="cyan darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">第1集</div>
                      <div>數量： 1</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/public/book1.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex><v-flex lg4>
            <v-card class="cyan darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">第1集</div>
                      <div>數量： 1</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/public/book1.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex><v-flex lg4>
            <v-card class="cyan darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">第1集</div>
                      <div>數量： 1</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/public/book1.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex><v-flex lg4>
            <v-card class="cyan darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">第1集</div>
                      <div>數量： 1</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/public/book1.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
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
        number: 0
      }
    },
    methods: {
      addNumber() {
        this.number ++;
      }
    }
  }
</script>
