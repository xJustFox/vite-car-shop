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
            <div class="col-12 col-md-6">
                <div class="card">
                    <img :src="getImage()" alt="" class="img-card">
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="px-3">
                    <h1 class="">{{ car.model }}</h1>
                    <h4 v-if="car.brand != null" class="my-grey">{{car.brand.name}}</h4>
                    <hr>
                    <ul class="list-unstyled d-flex justify-content-between my-ul mt-5">
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
                    <div class="d-flex align-items-center my-5">
                        <span class="text-uppercase my-grey fs-3">Price:</span>
                        <span class="fs-2 ms-3">{{car.price}} €</span>
                    </div>
                    <hr>

                    <div class="col-12">
                        <h3>Description:</h3>
                        <p>{{car.description}}</p>
                        <h5>Contact us:</h5>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm me-2"><i class="fa-solid fa-phone"></i></button>
                            <div v-if="car.brand">{{car.brand.phone_num}}</div>
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm me-2"><i class="fa-solid fa-envelope"></i></button>
                            <span>carshop.online@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card my-5">
                    <ul class="list-unstyled d-flex justify-content-between mt-3 px-3">
                        <li>
                            <i class="fa-solid fa-car-side"></i>
                            <span class="my-grey ms-2">Type:</span> <span v-if="car.brand">{{ car.brand.car_type }}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-palette"></i>
                            <span class="my-grey ms-2">Color:</span> {{car.color}}
                        </li>
                        <li>
                            <i class="fa-solid fa-truck-pickup"></i>
                            <span class="my-grey ms-2">Engine Size:</span> {{ car.engine_size }}
                        </li>
                        <li>
                            <i class="fa-solid fa-car-side"></i>
                            <span class="my-grey ms-2">Transmission:</span> {{ car.transmission }}
                        </li>
                    </ul>
                    <div v-if="car.optional != null" class="my-2 px-3">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span class="my-grey ms-2">Optional:</span> <span class="me-2" v-for="(optional, index) in car.optional" :key="index">{{ optional.name }} </span>       
                    </div>
                    <div v-else>
                        <i class="fa-solid fa-circle-plus"></i>
                        <span class="my-grey ms-2">Optional: Nessuno</span>
                    </div>
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

    .img-card {
        box-shadow: 5px 5px 5px 5px grey;
    }
    
    .my-ul{
        background-color: #f5f5f5;

        li{
            font-size: 20px;
        }
    }
    
    i{
        color: $my_red;
    }
    
    button{
        background-color: $my_red;
        color: #fff;
        margin: 10px 0;

        i{
            color: #fff;
        }

        &:hover{
            opacity: 0.5;
            background-color: $my_red;
        }
    }
    
</style>