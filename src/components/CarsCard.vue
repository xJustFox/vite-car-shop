<script>
import {store} from '../store.js';
export default {
    name: 'CarsCard',
    props: {
        car: Object
    },
    data(){
        return{
            store,
        }
    },
    methods: {
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
    },
}
</script>

<template lang="">
        <div class="col-4 mt-4">
            <div class="card h-100">
                <img :src="getImage()" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="text-center text-capitalize">{{car.model}}</h4>
                    <p v-if="car.brand != null" class="text-center my-grey">{{car.brand.name}}</p>
                </div>
                <ul class="list-unstyled d-flex justify-content-center mx-3 p-1">
                    <li>
                        <i class="fa-solid fa-calendar my-color"></i>
                        {{car.year}}
                    </li>
                    <li class="px-4">
                        <i class="fa-solid fa-gauge-high my-color"></i>
                        {{car.kilometers}} Km
                    </li>
                    <li class="text-capitalize">
                        <i class="fa-solid fa-gas-pump my-color"></i>
                        {{car.fuel_type}}
                    </li>
                </ul>
                <div class="d-flex justify-content-between align-items-center mt-3 mx-3">
                    <span class="text-uppercase my-grey fs-3">Price:</span>
                    <span>{{car.price}} €</span>
                </div>
                <hr class="mx-3">
                <button class="mx-3 btn text-uppercase">dettaglio prodotto</button>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .card{
        .card-img-top{
            height: 300px;
        }
        ul{
            background-color: #f5f5f5;
        }

        .my-grey{
            color: #b2b2b2;
        }

        .my-color{
            color: $my_red;
        }

        button{
            background-color: $my_red;
            color: #fff;
            margin: 10px 0;

            &:hover{
                opacity: 0.5;
            }
        }
    }
</style>