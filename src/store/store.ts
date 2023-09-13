import { defineStore } from 'pinia';
import { PayloadType } from "../components/standalone-elements/interface"
import axios from "axios"

export const store = defineStore('store', {
  state: () => ({
    listOfRecords:
      [{
        id: 0,
        costName: "",
        category: "",
        cost: "",
        typeOfCost: "",
        freq: "",
        starting: "",
        description: "",

      }]
  }),
  getters: {
    getFixedRecords: (state) => {
      return state.listOfRecords.filter((value) => {
        return value.typeOfCost === "fixed"
      })
    },
    getRecurrentRecords: (state) => {
      return state.listOfRecords.filter((value) => {
        return value.typeOfCost === "recurrent"
      })
    }
  },

  actions: {
    async addList(payload: PayloadType) {
      const value = { ...payload, id: this.listOfRecords.length }

      this.listOfRecords.push(value);
      try {
        let response = await axios.post(`https://5dfa0acb38678a00145f9ca2.mockapi.io/capics`, value);
        if (response) {
          console.log(response?.data)
        }
      } catch (error) {
        return { error }
      }
      console.log(payload)

    },
    editIndividualRecord(index: number, payload: PayloadType) {
      this.listOfRecords[index] = payload
    },
    deleteRecord(index: number) {
      this.listOfRecords.splice(index, 1)
    }
  }
})

