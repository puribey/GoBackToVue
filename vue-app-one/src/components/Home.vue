<template>
  <v-container fluid>
  	<v-layout row wrap >
      <v-flex xs12>
      	<v-carousel>
      	  <v-carousel-item 
      	  v-for="meetup in meetups" 
      	  v-bind:src="meetup.imgURL"
      	  @click="onLoadMeetup(meetup.id)" 
      	  :key="meetup.id">
      	  	<div class="carousel__title">{{ meetup.title }}</div>
      	  </v-carousel-item>
      	</v-carousel>
      </v-flex>
  	</v-layout>
  	<v-layout row wrap mt-4>
  	  <v-flex xs12 sm6 class="text-xs-center text-sm-right">
  	  	<v-btn large class="cyan darken-1" dark router to="/meetups">Explore Meetups</v-btn>
  	  </v-flex>
  	  <v-flex xs12 sm6 class="text-xs-center text-sm-left">
  	  	<v-btn large class="teal darken-1" dark router to="/meetup/new">Organize Meetup</v-btn>
  	  </v-flex>
  	</v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
.carousel__title {
	position: absolute;
	width: 100%;
	top:0;
	height: 50px;
	background-color: rgba(0,0,0,0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	color: #f5f5f5;
}
	
</style>
