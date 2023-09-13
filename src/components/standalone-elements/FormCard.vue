<script setup lang="ts">
import { reactive } from 'vue';
import { store } from '../../store/store';
import { PayloadType } from "../standalone-elements/interface"
const formValues: PayloadType = reactive({

    costName: "",
    category: "",
    cost: "",
    typeOfCost: "",
    freq: "",
    starting: "",
    description: "",


})
function handleSubmit(event: Event) {
    event.preventDefault()
    const myStore = store()
    const obj = Object.assign({}, formValues)
    myStore.addList(obj)

    console.log(formValues)

}
</script>

<template>
    <div class="flex flex-col items-start">
        <h5 class="uppercase font-bold">other capex and opex cost</h5>
        <div class="bg-white flex-column px-3 pt-3 pb-2 my-2 w-full">
            <div class="flex md:flex-row items-start">
                <form @submit="handleSubmit" class="flex flex-col md:flex-row items-center grow gap-2 justify-evenly">
                    <div class="flex flex-col">
                        <div class="uppercase font-bold">new cost name</div>
                        <input v-model="formValues.costName" class="border border-0 focus:outline-none" />
                    </div>
                    <div class="flex flex-col">
                        <div class="uppercase font-bold">Category</div>
                        <select v-model="formValues.category" class="border border-0 focus:outline-none">
                            <option value="Above ground">Above ground</option>
                            <option value="Below ground">Below ground</option>
                            <option value="Marketing">Marketing</option>
                            <option value="People">People</option>
                            <option value="Operations">Operations</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <div class="uppercase font-bold">cost</div>
                        <input v-model="formValues.cost" class="border border-0 focus:outline-none" placeholder="EUR" />
                    </div>
                    <div class="flex flex-col">
                        <div class="uppercase font-bold"> Type of Cost</div>
                        <div class="flex">
                            <button type="button"
                                class="uppercase focus:bg-green-500 focus:text-white focus:outline-none rounded-full py-0.5 px-3"
                                @click="() => {
                                    formValues.typeOfCost = 'fixed'
                                }">Fixed</button>
                            <button type="button"
                                class="uppercase  focus:bg-green-500 focus:text-white focus:outline-none rounded-full"
                                @click="() => { formValues.typeOfCost = 'recurrent' }">Recurrent</button>
                        </div>
                    </div>
                    <div class="d-flex flex-col">
                        <div class="uppercase font-bold">Frequency</div>
                        <select v-model="formValues.freq" class="border border-0 focus:outline-none">
                            <option value="hourly">Hourly</option>
                            <option value="Monthly">Monthly ground</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Annually">Anually</option>
                        </select>
                    </div>
                    <button type="submit" class="px-6 py-1 bg-yellow-500 w-100">ADD</button>

                </form>
            </div>
            <div class="mt-2 md:ml-6">
                <div>Recommended costs</div>
                <div class="flex flex-row flex-wrap grow gap-4">
                    <div>Sewage</div>
                    <div>Offive</div>
                    <div>This</div>
                    <div>That</div>
                </div>
            </div>
        </div>
    </div>
</template>