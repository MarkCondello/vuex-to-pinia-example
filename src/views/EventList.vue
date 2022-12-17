<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from '../stores/EventStore'
export default {
  components: {
    EventCard
  },
  setup(){
    const EventList = useEventStore()
    return { EventList }
  },
  created() {
    this.EventList.fetchEvents()
    .catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
    // this.$store.dispatch('fetchEvents').catch(error => {
    //   this.$router.push({
    //     name: 'ErrorDisplay',
    //     params: { error: error }
    //   })
    // })
  },
  computed: {
    events() {
      // return this.$store.state.events
      return this.EventList.events
    }
  }
}
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
