<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Details_car',
    data(){
        return{
            store,
            car: [],
        }
    },
    created(){
        this.getDetailsCar();
    },
    methods:{
        getDetailsCar(){
            axios.get(`${this.store.baseUrl}/api/cars/${this.$route.params.slug}`).then((response)=>{
                this.car = response.data.results
            });
        },
        getImage() {
            let image;
            if (this.car.image != null) {
                image = `${this.store.baseUrl}/storage/${this.car.image}`;
            }
            else {
                image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
            }

            return image;
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row my-5">
            <div class="col-6">
                <div class="card h-100 px-3">
                    <h1 class="text-center">{{ car.model }}</h1>
                    <h4 v-if="car.brand != null" class="text-center my-grey">{{car.brand.name}}</h4>
                    <hr>
                    <ul class="list-unstyled d-flex justify-content-between my-ul mt-2">
                        <li>
                            <i class="fa-solid fa-road"></i>
                            {{car.kilometers}} Km
                        </li>
                        <li>
                            <i class="fa-solid fa-calendar"></i>
                            {{car.year}} 
                        </li>
                        <li>
                            <i class="fa-solid fa-gas-pump"></i>
                            {{car.fuel_type}} 
                        </li>
                    </ul>
                    <div class="d-flex justify-content-center align-items-center my-3">
                        <span class="text-uppercase my-grey fs-3">Price:</span>
                        <span class="fs-2 ms-3">{{car.price}} €</span>
                    </div>
                    <h4>Features:</h4>
                    <div class="col-12">
                        <ul class="list-unstyled d-flex justify-content-between mt-3">
                            <li>
                                <i class="fa-solid fa-palette"></i>
                                Color: {{car.color}}
                            </li>
                            <li>
                                <i class="fa-solid fa-truck-pickup"></i>
                                Engine Size: {{ car.engine_size }}
                            </li>
                            <li>
                                <i class="fa-solid fa-car-side"></i>
                                Transmission: {{ car.transmission }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-12">
                        <ul class="list-unstyled d-flex justify-content-between mt-3">
                            <li>
                                <i class="fa-solid fa-car-side"></i>
                                Type: <span v-if="car.brand">{{ car.brand.car_type }}</span>
                                
                            </li>
                            <li>
                                <i class="fa-solid fa-gas-pump"></i>
                                Fuel Type: {{car.fuel_type}} 
                            </li>
                            <li>
                                <div v-if="car.optional != null">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    Optional: <span class="me-2" v-for="(optional, index) in car.optional" :key="index">{{ optional.name }} </span>       
                                </div>
                                <div v-else>
                                    <i class="fa-solid fa-circle-plus"></i>
                                    Optional: Nessuno
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card h-100">
                    <img :src="getImage()" alt="" class="img-fluid">
                </div>
            </div>

            <div class="col-12 mt-3">
                <h3>Description:</h3>
                <p>{{car.description}}</p>
                <h5>Contact us:</h5>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-phone me-2"></i>
                    
                    <div v-if="car.brand">{{car.brand.phone_num}}</div>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-envelope me-2"></i>
                    <span>carshop.online@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .my-grey{
        color: #b2b2b2;
    }
    
    .my-ul{
        background-color: #f5f5f5;

    }
        i{
            color: $my_red;
        }
        li{
            font-size: 20px;
        }
    

    
</style>