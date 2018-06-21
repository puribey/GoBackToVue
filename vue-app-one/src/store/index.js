import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imgURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968h681',
        title: 'Tokyo',
        id: 'kfjsdkfabsdkjbf',
        date: '2017-07-17'
      },
      { imgURL: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/01/19/16/an113699853ec12mc-kyoto-jap.jpg?w968h681',
        title: 'Kyoto',
        id: 'qlwjewlnfklsnfnjfa',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'jfdnskjfb',
      registeredMeetups: ['dfnkjsndkjgn']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imgURL: payload.imgURL,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
