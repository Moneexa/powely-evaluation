<script setup lang="ts">
import { reactive } from 'vue';
const formValues = reactive({
    costName: "",

})
function handleSubmit(event: Event) {
    event.preventDefault()

}
</script>

<template>
    <div class="d-flex flex-column align-items-start">
        <div class="uppercase text-bold">other capex and opex cost</div>

        <div class="bg-brown d-flex flex-sm-column flex-md-row  card px-3 pt-2 pb-1 my-2">
            <div class="d-flex align-items-center">
                <form @submit=handleSubmit>
                    <div class="text-">new cost name</div>
                    <input v-model="formValues.costName" />

                </form>
            </div>
            <div>

            </div>
        </div>

    </div>
</template>