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
            brands: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getCar();
        this.getBrands();
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
        },
        getBrands() {
            axios.get(`${this.store.baseUrl}/api/brands/`).then((response) => {
                this.brands = response.data.results;
            })
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-end mt-4">
                <div class="dropdown-center">
                    <a class="my-dropdown dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Brands
                    </a>
                  
                    <ul class="dropdown-menu">
                        <li v-for="(brand, index) in brands" :key="index">
                            <router-link class="my-dropdown-link" :to="{ name: 'brand-cars', params: { slug: brand.slug } }">{{brand.name}}</router-link> 
                        </li>
                    </ul>
                </div>
            </div>
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

    .my-dropdown{
        font-size: large;
        text-decoration: none;
        color: black;
        border: 1px solid $my_red;
        border-radius: 5px;
        padding: 5px;

        &:hover{
            color: $my_red;
        }
    }

    .dropdown-menu{
        height: 300px;
        overflow-y: scroll;

        .my-dropdown-link{
            text-decoration: none;
            color: black;
            padding: 0 10px;

            &:hover{
                color: $my_red;
            }
        }
    }
</style>