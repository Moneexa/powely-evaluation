<script setup lang="ts">
import { store } from "../../store/store"
const myStore = store()
const records = myStore.listOfRecords
const fixedRecords = records.map((value) => {
    if (value.typeOfCost === "fixed") {
        return value
    }
})
const recurrentRecords = records.map((value) => {
    if (value.typeOfCost === "recurrent") {
        return value
    }
})


</script>
<template>
    <table class=" w-full border-collapse p-2 md:p-5" v-if="myStore.listOfRecords.map((value) => {
        if (value.typeOfCost === 'fixed') { return value }
    }).length > 0">
        <thead>
            <tr class="text-left">
                <th class="h-5 uppercase font-bold">fixed cost (capex)</th>
                <th class="h-5 text-left uppercase">Category</th>
                <th class="h-5 text-left uppercase">Cost</th>
                <th class="h-5 text-left uppercase">Starting</th>
                <th class="h-5 text-left uppercase">Frequency</th>

            </tr>
        </thead>
        <tbody class="w-full">
            <tr v-for="item in myStore.listOfRecords.map((value) => {
                if (value.typeOfCost === 'fixed') { return value }
            })" class="w-full bg-white flex  px-3 pt-3 pb-2 my-2">

                <td class=" mx-2">{{ item?.costName }}</td>
                <td class=" mx-2">{{ item?.category }}</td>
                <td class=" mx-2">{{ item?.cost }}</td>
                <td class=" mx-2">{{ item?.starting }}</td>
                <td class=" mx-2">{{ item?.freq }}</td>
                <td class="mx-2"> <button class="bg-red-500 text-white">Remove</button>
                </td>
            </tr>
        </tbody>
    </table>
    <table class="w-full border-collapse p-2 md:p-5" v-if="myStore.listOfRecords.map((value) => {
        if (value.typeOfCost === 'recurrent') { return value }
    }).length > 0">
        <thead>
            <tr class="text-left">
                <th class="h-5 uppercase font-bold">Recurrent cost (capex)</th>
                <th class="h-5 text-left uppercase">Category</th>
                <th class="h-5 text-left uppercase">Cost</th>
                <th class="h-5 text-left uppercase">Starting</th>
                <th class="h-5 text-left uppercase">Frequency</th>

            </tr>
        </thead>
        <tbody class="w-full">
            <tr class="w-full flex bg-white px-3 pt-3 pb-2 my-2" v-for="item in myStore.listOfRecords.map((value) => {
                if (value.typeOfCost === 'recurrent') { return value }
            })">

                <td class="mx-2">{{ item?.costName }}</td>
                <td class="mx-2">{{ item?.category }}</td>
                <td class="mx-2">{{ item?.cost }}</td>
                <td class="mx-2">{{ item?.starting }}</td>
                <td class="mx-2">{{ item?.freq }}</td>
                <td class="mx-2"><button class="bg-red-500 text-white">Remove</button></td>
            </tr>
        </tbody>
    </table>
</template>