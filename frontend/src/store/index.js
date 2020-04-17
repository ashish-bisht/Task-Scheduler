import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {}
  },
  mutations: {
    ADD_EVENT (state, task) {
      state.tasks.push(task)
    },
    SET_TASKS (state, tasks) {
      state.tasks = tasks
    },
    SET_TASK (state, task) {
      state.task = task
    }
  },
  actions: {
    createTask ({ commit }, task) {
      EventService.postTask(task)
      commit('ADD_TASK', task)
    },

    fetchTasks ({ commit }) {
      EventService.getTasks()
        .then(response => {
          console.log(response.data)
          commit('SET_TASKS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    fetchTask ({ commit }, id) {
      EventService.getTask(id)
        .then(response => {
          console.log(response.data)
          commit('SET_TASK', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  modules: {}
})
