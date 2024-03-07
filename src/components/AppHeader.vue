<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            flagActive: 0,
            navLinks: [
                {
                    name: 'home',
                    label: 'Home',
                },
                {
                    name: 'cars',
                    label: 'Shop',
                },
                {
                    name: 'about-us',
                    label: 'About Us',
                },
            ],

            loginLinks: [
                {
                    name: '',
                    label: 'Login',
                },
                {
                    name: '',
                    label: 'Register',
                },
            ]
        };
    },
    methods:{
        getActiveLink(index){
            this.flagActive = index
        }
    }
}
</script>

<template>

    <div class="hr_bg">
        <div class="container-fluid px-5">
            <div class="row">

                <!-- Logo section -->
                <div class="col d-lg-block d-md-block d-sm-block d-none">
                    <img class="img_logo py-2 img-fluid" src="../assets/logo.png" alt="">
                </div>

                <!-- Navbar section -->
                <div class="col d-flex align-items-center justify-content-center ">
                    <ul class="list-unstyled d-flex m-0">
                        <li class="px-2" v-for="link, index in navLinks">
                            <router-link :class="this.flagActive == index ? 'active-link' : ''" class="link" :to="{ name: link.name }" @click="getActiveLink(index)">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </div>

                <!-- Login section -->
                <div class="col d-flex align-items-center justify-content-end ">
                    <ul class="list-unstyled d-flex m-0 d-lg-flex d-md-flex d-sm-flex d-none">
                        <li class="px-2" v-for="link, index in loginLinks">
                            <router-link class="link" :to="{ name: link.name }">{{ link.label }}</router-link>
                        </li>
                    </ul>
                    <div class="dropdown">
                        <i class="fas fa-bars px-2 text-white d-lg-none d-md-none d-sm-none d-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>

                        <ul class="dropdown-menu">
                            <li v-for="link, index in loginLinks">
                                <router-link class="link dropdown-item" :to="{ name: link.name }">{{ link.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.hr_bg{
    background-color: $my_black;
    height: 80px;

    .img_logo{
        height: 80px;
        width: auto;
    }

}

.link{
    color: white;
    text-decoration: none;

    &:hover{
        color: $my_red;
    }
}

.active-link{
    color: $my_red;
}
</style>