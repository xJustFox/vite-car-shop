<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navLinks: [
                {
                    name: 'home',
                    label: 'Home',
                },
                {
                    name: 'shop',
                    label: 'Shop',
                },
                
            ],
        };
    },
}
</script>

<template>

    <div class="hr_bg">
        <div class="container">
            <div class="row">

                <!-- Logo -->
                <div class="col-4">
                    <img class="img_logo py-2" src="../assets/logo.png" alt="">
                </div>


                <div class="col-4">

                </div>
                
                <div class="col-4">

                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.hr_bg{
    background-color: #161d20;
    height: 80px;

    .img_logo{
        height: 80px;
        width: auto;
    }

}

</style>