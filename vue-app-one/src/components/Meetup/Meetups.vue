<template>
  <v-container>
  	<v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-3">
  	  <v-flex xs12>
  	  	<v-card class="info">
  	  	  <v-container>
  	  	  	<v-layout>
  	  	  	  <v-flex xs5 sm4 md3>
  	  	  	  	<v-card-media
  	  	  	  	  :src="meetup.imgURL"
  	  	  	  	  height="130px"
  	  	  	  	  cover>
  	  	  	  	</v-card-media>
  	  	  	  </v-flex>
  	  	  	  <v-flex xs7 sm8 md9>
  	  	  	  	<v-card-title>
  	  	  	      <div>
	  	  	  	  	<h5 class="white--text mb-0">{{ meetup.title }}</h5>
	  	  	  	  	<p>{{ meetup.date | date}}</p>
  	  	  	  	  </div>
  	  	  	  	</v-card-title>
  	  	  	  	<v-card-actions style="padding:0;">
  	  	  	  	  <v-btn flat :to="'/meetups/' + meetup.id">
  	  	  	  	  	<v-icon left light>arrow_forward</v-icon>
  	  	  	  	  	View Meetup
  	  	  	  	  </v-btn>
  	  	  	  	</v-card-actions>
  	  	  	  </v-flex>
  	  	  	</v-layout>
  	  	  </v-container>
  	  	</v-card>
  	  </v-flex>
  	</v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
