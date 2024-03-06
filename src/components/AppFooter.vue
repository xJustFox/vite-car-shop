<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            
        }
    },
}
</script>

<template lang="">

    <footer>
        <div class="container">
            <div class="row">

                <!-- Logo -->
                <div class="col-4 py-5 d-lg-block d-md-block d-sm-block d-none">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <img class="img-fluid" src="../assets/logo.png" alt="">
                    </div>
                </div>

                <!-- Links section -->
                <div class="col-4 py-5">
                    <div class="col-6 text-white">
                        <h5>Services</h5>
                        <ul class="list-unstyled">
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                            <li>Services</li>
                        </ul>
                        <h5>Contact Us</h5>
                        <ul class="list-unstyled text-white">
                            <li>Services</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div class="col-6 text-white">
                        <h5>Company</h5>
                        <ul class="list-unstyled text-white">
                            <li>Services</li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>

                <!-- Subscribe section -->
                <div class="col-4 d-flex justify-content-end py-5 text-white">
                    <div class="">
                        <h5>Get in touch</h5>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <h5>Subscribe</h5>
                        
                    </div>
                </div>

            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

footer{
    background-color: $my_black;

    img{
        width: 50%
    }
}

</style>