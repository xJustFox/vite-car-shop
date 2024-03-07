<script>
export default {
    name: 'Home',
    components: {
    }
}
</script>

<template>

    <!-- Jumbotron section -->
    <div class="jumbo_bg">
        <div class="h-100 d-flex justify-content-center align-items-center">
            <h1 class="fw-bold test">The Car Shop</h1>
        </div>
    </div>

    <!-- 40/60 section -->
    <div class="container my-5">
        <div class="row">
            <h2 class="text-center fw-medium">The Car Shop a name, a guarantee!</h2>
            <div class="col-8 my-5 d-flex align-items-center">
                <p class="fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ex ipsum consectetur aperiam delectus quos vel magni accusantium quae, error exercitationem, quia inventore. Est dolorum officiis aliquid sint reprehenderit distinctio
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi quidem provident obcaecati ducimus cupiditate unde dolore eveniet explicabo delectus magni asperiores dolorem minus reprehenderit, repellat, sunt excepturi voluptate alias!
                </p>
            </div>
            <div class="col-3 my-5">
                <img class="img-fluid rounded" src="../assets/seller.jpeg" alt="seller">
            </div>
            <div class="col-3 my-5">
                <img class="img-fluid rounded" src="../assets/keys.jpg" alt="seller">
            </div>
            <div class="col-8 my-5 d-flex align-items-center">
                <p class="fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ex ipsum consectetur aperiam delectus quos vel magni accusantium quae, error exercitationem, quia inventore. Est dolorum officiis aliquid sint reprehenderit distinctio.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab incidunt, non sunt et accusantium recusandae, illo repudiandae fuga doloremque esse facere officiis tenetur possimus at error consectetur iste, voluptatum sit.
                </p>
            </div>
        </div>
    </div>


    <!-- Text section -->
    <div class="container my-5">
        <div class="row">
            <div class="col-12">
                <h2 class="p-5 text-center fw-medium">
                    Find the car of your dreams with The Car Shop, the largest car classifieds website in Europe!
                </h2>
                <p class="px-5">

                    A warm welcome to The Car Shop, the largest online platform in Europe for the car market!
                    <br>
                    <br>
                    View offers from the car dealer near you, along with those from 43,000 other dealers across Europe. <b>The Car Shop's virtual car fleet is huge, among more than 1.5 million vehicles, you will certainly find what could become your next purchase.</b> Whether it's used or new cars, eco-sustainable cars or powerful sports cars, thanks to The Car Shop, you will quickly find the car of your desires at affordable prices.
                    <br>
                    <br>
                    In our online car market you can find used or new cars in just a few clicks, with exactly the characteristics you were looking for and always with direct contact with sellers or dealers. <b>Our motto is: you decide what you find!</b> You always decide where and how to search, thanks to the search criteria you set, such as your favorite brand, model, type of fuel, colour, interior, of course the price and much more.
                    <br>
                    <br>
                    For over 20 years The Car Shop has been making its knowledge of cars available to you.
                    <br>
                    <br>
                    Whatever your request, you will find the answer with us: modern or vintage cars, small cars or luxury sedans, sports cars, electric or hybrid cars, motorcycles or 3-wheeled vehicles, and much more. <b>Just take a look at our magazine, our guide or the car data sheets.</b>
                    <br>
                    <br>
                    In case you are not only looking for the car of your dreams, but also the optimal financing method, with the vast range of services offered by The Car Shop, you will be able to find personalized formulas tailored to your needs, for loans and leasing, without stress and with an overview of all the most important details.
                </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.jumbo_bg{
    height: calc(100vh - 80px);
    background-color: $my_black;
    background-image: url(../assets/vpxzypif90gfhivkwteo.avif);
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 3px solid $my_black;
    
    h1{
        font-size: 100px;
        text-shadow: 1px 1px $my_black;
        padding: 20px 50px;
    }

    .test{
        border: 5px solid $my_red;
    }
}
</style>