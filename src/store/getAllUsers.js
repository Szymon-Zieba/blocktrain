import { defineStore } from 'pinia'


export const useAllUsers =  defineStore({
    id: 'useAllUsers',
    state: () => {
      return {
        users: [],
      }
    },
    actions: {
      async listOfWorkers() {
        const response = await fetch('./id_adress.json')
        const data = await response.json()
        return this.users = data
      },
    }
})
