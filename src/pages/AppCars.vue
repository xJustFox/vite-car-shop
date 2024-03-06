<script>
    import CarsCard from '../components/CarsCard.vue';
    import { store } from '../store.js';
    import axios from 'axios';

export default {
    name: 'AppCars',
    components:{
        CarsCard
    },
    data(){
        return {
            store,
            cars: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getCar();
    },
    methods:{
        getCar(page) {
            axios.get(`${this.store.baseUrl}/api/cars`, {
                params: {
                    page: page
                }
            }).then((response) => {
                this.cars = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <CarsCard v-for="car, index in cars" :key="index" :car="car"/>
        </div>
        <div class="row my-5">
            <div class="d-flex justify-content-center">
                <div>
                    <button :class="currentPage == 1 ? 'disabled' : 'btn'" @click=" getCar(currentPage - 1)"
                        class="btn"><i class="fa-solid fa-chevron-left"></i></button>
                </div>
                <div>
                    <button :class="currentPage == lastPage ? 'disabled' : 'btn'" @click="getCar(currentPage + 1)"
                        class="btn"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
    button{
        background-color: $my_red;
        margin: 0 10px;

        &:hover{
            opacity: 0.5;
            background-color: $my_red;
        }
    }
</style>