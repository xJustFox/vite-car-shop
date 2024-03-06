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
        <div class="col-4 mt-5">
            <div class="card">
                <img :src="getImage()" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="text-center text-capitalize">{{car.model}}</h4>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
    
</style>