<template>
  <v-container>
  	<v-layout row>
  	  <v-flex xs12 sm6 offset-sm3>
  	  	<h4>Create new meetup</h4>
  	  </v-flex>
  	</v-layout>
	<v-layout row>
  	  <v-flex xs12>
  	  	<form @submit.prevent.onCreateMeetup>
  	  	 <v-layout row>
  	  	   <v-flex xs12 sm6 offset-sm3>
  	  	   	<v-text-field
  	  	   	  name="title"
  	  	   	  label="Title"
  	  	   	  id="title"
  	  	   	  v-model="title"
  	  	   	  required
  	  	   	>
  	  	   	</v-text-field>
  	  	   </v-flex>
  	  	 </v-layout>
  	  	 <v-layout row>
  	  	   <v-flex xs12 sm6 offset-sm3>
  	  	   	<v-text-field
  	  	   	  name="location"
  	  	   	  label="Location"
  	  	   	  id="location"
  	  	   	  v-model="location"
  	  	   	  required
  	  	   	>
  	  	   	</v-text-field>
  	  	   </v-flex>
  	  	 </v-layout>
  	  	 <v-layout row>
  	  	   <v-flex xs12 sm6 offset-sm3>
  	  	   	<v-text-field
  	  	   	  name="imgURL"
  	  	   	  label="Image-url"
  	  	   	  id="imgURL"
  	  	   	  v-model="imgURL"
  	  	   	  required
  	  	   	>
  	  	   	</v-text-field>
  	  	   </v-flex>
  	  	 </v-layout>
  	  	 <v-layout row>
  	  	   <v-flex xs12 sm6 offset-sm3>
  	  	     <img :src="imgURL" height="150px">
  	  	   </v-flex>
  	  	 </v-layout>
  	  	 <v-layout row>
  	  	   <v-flex xs12 sm6 offset-sm3>
  	  	   	<v-text-field
  	  	   	  name="description"
  	  	   	  label="Desciption"
  	  	   	  id="description"
  	  	   	  v-model="description"
  	  	   	  multi-line
  	  	   	  required
  	  	   	>
  	  	   	</v-text-field>
  	  	   </v-flex>
  	  	 </v-layout>
  	  	 <v-layout row>
  	  	   <v-flex xs12 sm6 offset-sm3>
  	  	     <v-btn :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
  	  	   </v-flex>
  	  	 </v-layout>
  	  	</form>
  	  </v-flex>
  	</v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imgURL: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imgURL !== '' &&
          this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imgURL: this.imgURL,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>
