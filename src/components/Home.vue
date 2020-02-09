<template>
        <v-container>
        ESO
        </v-container>
</template>
<script>
        export default {
                name: 'Home',
                props: {
                },
                methods:{
                        logout(){
                                this.$store.commit('logout');
                        }
                }
        }
</script>