import { defineStore } from 'pinia'
import EventService from '../services/EventService'

export const useEventStore = defineStore('EventStore', {
    state: ()=> ({
        events: [],
        event: {},
    }),
    actions: {
        createEvent(event) {
            return EventService.postEvent(event)
              .then(() => {
                // commit('ADD_EVENT', event)
                this.event = event
               })
              .catch(error => {
                throw error
              })
        },
        fetchEvents(){
            return EventService.getEvents()
            .then(response => {
                this.events = response.data
            })
            .catch((error) => {throw error})
        },
        fetchEvent(id) {
            // const existingEvent = this.events.find(event => event.id === id)
            // console.log({existingEvent})
            // if (existingEvent) {
            // //   commit('SET_EVENT', existingEvent)
            //     this.event = existingEvent.Target
            // } else {
              return EventService.getEvent(id)
                .then(response => {
                   this.event = response.data
                //   commit('SET_EVENT', response.data)
                })
                .catch(error => {
                  throw error
                })
            }
        //   }
    }
})