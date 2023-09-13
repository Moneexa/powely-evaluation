<script setup lang="ts">
import { store } from "../../store/store"
const myStore = store()

</script>
<template>
    <table class=" w-full border-collapse p-2 md:p-5 bg-white" v-if="myStore.getFixedRecords.length > 0">

        <tr class="text-left">
            <th class="h-5 uppercase font-bold">fixed cost (capex)</th>
            <th class="h-5 text-left uppercase">Category</th>
            <th class="h-5 text-left uppercase">Cost</th>
            <th class="h-5 text-left uppercase">Starting</th>
            <th class="h-5 text-left uppercase">Frequency</th>
            <th class="h-5 text-left uppercase"></th>


        </tr>
        <template v-for="item in myStore.getFixedRecords">
            <tr class="w-full px-3 pt-3 pb-2 my-2" id="">

                <td class=" mx-2">{{ item.costName }}</td>
                <td class=" mx-2">{{ item.category }}</td>
                <td class=" mx-2">{{ item.cost }}</td>
                <td class=" mx-2">{{ item.starting }}</td>
                <td class=" mx-2">{{ item.freq }}</td>
                <td class="mx-2"> <button class="bg-red-500 text-white">Remove</button>
                </td>
            </tr>
            <tr class="w-full px-3 pt-3 pb-2 my-2">
                <td></td>
                <td colspan="3">
                    <label class="uppercase font-bold">Description</label>
                    <textarea class="w-full">Des</textarea>
                </td>
                <td></td>
                <td></td>
            </tr>
        </template>
    </table>
    <table class="w-full border-collapse p-2 md:p-5" v-if="myStore.getRecurrentRecords.length > 0">
        <tr class="text-left">
            <th class="h-5 uppercase font-bold">Recurrent cost (capex)</th>
            <th class="h-5 text-left uppercase">Category</th>
            <th class="h-5 text-left uppercase">Cost</th>
            <th class="h-5 text-left uppercase">Starting</th>
            <th class="h-5 text-left uppercase">Frequency</th>
            <th class="h-5 text-left uppercase"></th>


        </tr>
        <tr class="w-full bg-white px-3 pt-3 pb-2 my-2" v-for=" item  in  myStore.getRecurrentRecords">

            <td class="mx-2">{{ item.costName }}</td>
            <td class="mx-2">{{ item.category }}</td>
            <td class="mx-2">{{ item.cost }}</td>
            <td class="mx-2">{{ item.starting }}</td>
            <td class="mx-2">{{ item.freq }}</td>
            <td class="mx-2"><button class="bg-red-500 text-white">Remove</button></td>
        </tr>

    </table>
</template>