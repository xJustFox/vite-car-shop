<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            footerLinks: [
                {
                    name: 'home',
                    label: 'Home',
                },
                {
                    name: 'cars',
                    label: 'Shop',
                },
                {
                    name: '',
                    label: 'About Us',
                },
            ],
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
                <div class="col-4 d-flex py-5">
                    <div class="col-6 text-white">
                        <h5>Services</h5>
                        <hr class="hr_footer">
                        <ul class="list-unstyled">
                            <li><a class="text-decoration-none" href="#">Terms & Conditions</a></li>
                            <li><a class="text-decoration-none" href="#">Privacy Policy</a></li>
                            <li><a class="text-decoration-none" href="#">Design</a></li>
                            <li><a class="text-decoration-none" href="#">Development</a></li>
                        </ul>
                        <h5 class="mt-5">Contact Us</h5>
                        <hr class="hr_footer">
                        <ul class="list-unstyled">
                            <li><a class="text-decoration-none" href="#">Email</a></li>
                            <li><a class="text-decoration-none" href="#">Location</a></li>
                        </ul>
                    </div>
                    <div class="col-6 text-white">
                        <h5>Site</h5>
                        <hr class="hr_footer">
                        <ul class="list-unstyled text-white">
                            <li v-for="link, index in footerLinks">
                                <router-link class="text-decoration-none" :to="{ name: link.name }">{{ link.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Subscribe section -->
                <div class="col-4 d-flex justify-content-end py-5 text-white">
                    <div>
                        <h5>Get in touch</h5>
                        <div class="my-3">
                            <a class="text-white" href="">
                                <i class="fab fa-facebook p-2 me-2"></i>
                            </a>
                            <a class="text-white" href="">
                                <i class="fab fa-twitter p-2 me-2"></i>
                            </a>
                            <a class="text-white" href="">
                                <i class="fab fa-linkedin-in p-2 me-2"></i>
                            </a>
                        </div>
                        <div class="mt-5">
                            <h5 class="pb-3">Subscribe</h5>
                            <div class="d-flex">
                                <input type="email" class="form-control rounded me-3 pe-5 " id="newsletter" placeholder="Enter email address">
                                <button class="rounded sub_btn text-white px-4" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="text-white">

                <!-- Copyright -->
                <div class="col-12 d-flex justify-content-center my-3 text-white">
                    <span>&#169 Made with &#9829 by Team 7</span>
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

    .sub_btn{
        background-color: $my_red;
        border-color: $my_red;
    }

    i{
        border: 1px solid;
        border-radius: 50%;
    }

    a, i{
        color: white;
        text-decoration: none;

        &:hover{
            color: $my_red;
        }
    }

    .hr_footer{
        width: 50%;
    }
}

</style>