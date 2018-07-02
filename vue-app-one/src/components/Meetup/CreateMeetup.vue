<template>
  <v-container>
  	<v-layout row>
  	  <v-flex xs12 sm6 offset-sm3>
  	  	<h4>Create new meetup</h4>
  	  </v-flex>
  	</v-layout>
	<v-layout row>
  	  <v-flex xs12>
  	  	<form @submit.prevent="onCreateMeetup">
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
          <v-flex xs12 sm12 offset-sm3>
            <h4>Choose your date and time</h4>
           </v-flex>
         </v-layout>
         <v-container fluid grid-list-xs>
            <v-layout row justify-center>
              <v-flex sm3 offset-sm3>
                <v-date-picker v-model="date"></v-date-picker>
								<p>{{ date }}</p>
              </v-flex>
              <v-flex>
                <v-time-picker v-model="time" format="24hr"></v-time-picker>
								<p>{{ time }}</p>
              </v-flex>
            </v-layout>
         </v-container>
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
        description: '',
        date: new Date(),
        time: new Date()
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imgURL !== '' &&
          this.description !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
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
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>
