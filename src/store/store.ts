import { defineStore } from 'pinia';

interface PayloadType {
  costName: "";
  category: "";
  cost: 0;
  typeOfCost: "";
  freq: "";
  starting: "";
  description: "";

}
export const store = defineStore('store', {
  state: () => ({
    listOfRecords:
      [{
        costName: "",
        category: "",
        cost: 0,
        typeOfCost: "",
        freq: "",
        starting: "",
        description: "",

      }]
  }),
  actions: {
    addList(payload: PayloadType) {
      this.listOfRecords.push(payload);

    },
    editIndividualRecord(index: number, payload: PayloadType) {
      this.listOfRecords[index] = payload
    },
    deleteRecord(index: number) {
      this.listOfRecords.splice(index, 1)
    }
  }
})

