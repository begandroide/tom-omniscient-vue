<template>
        <span>
                <NavigationDrawer/>
                <AppBar/>
                <router-view />  
                <v-footer app>
                        <span>&copy; 2019</span>
                </v-footer>
  </span>
</template>

<script>  

import AppBar  from "./AppBar";
import NavigationDrawer from "./Navigation-drawer";

export default {
  name: 'Layout',
  components:{
          AppBar,
          NavigationDrawer
  },
    data: () => ({
        clipped: true,
        fixed: false,
        mini:false,
        drawer: null,
    }),
}
</script>  

<style scoped>
.container{
        height:100%;
}
</style>
