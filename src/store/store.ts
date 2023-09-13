import { defineStore } from 'pinia';
import { PayloadType } from "../components/standalone-elements/interface"

export const store = defineStore('store', {
  state: () => ({
    listOfRecords:
      [{
        costName: "",
        category: "",
        cost: "",
        typeOfCost: "",
        freq: "",
        starting: "",
        description: "",

      }]
  }),
  actions: {
    addList(payload: PayloadType) {
      this.listOfRecords.push(payload);
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

