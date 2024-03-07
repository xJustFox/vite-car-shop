<script>
import { store } from '../store.js';

export default {
    name: 'AppNotFound',
}
</script>

<template lang="">
        
    <div class="container not_found_font">
        <div class="row">
            <div class="col-12 d-flex flex-column align-items-center my-5">
                <div class="my-3">
                    <h1>404 - We lost this page</h1>
                </div>
                <div class="my-3">
                    <p>We searched hig and low but couldn't find what you're looking for. Let's find a better place for you to go.</p>
                </div>
                <div class="my-3">
                    <img class="img-fluid" src="../assets/d803ce946d83ce5fa868381c3de5b9fa.jpg" alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

h1{
    font-size: 90px;
    font-weight: 900;
}

p{
    font-size: 1.5rem;
}

</style>