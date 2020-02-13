<template>
        <v-app-bar
                app
                clipped-left
                >
                <v-app-bar-nav-icon @click="mini = !mini"/>
                <v-toolbar-title >Application</v-toolbar-title>
                <v-spacer ></v-spacer>
                <MenuProfile />
        </v-app-bar>
</template>


<script>  
import MenuProfile from "./MenuProfile"

export default {
  name: 'AppBar',
  components:{
          MenuProfile,
  },
    data: () => ({
        mini:false,
    }),
}
</script>  
