<template>
        <v-app-bar
                app
                clipped-left
                >
                <v-app-bar-nav-icon @click="mini = !mini"/>
                <v-toolbar-title >Application</v-toolbar-title>
        </v-app-bar>
</template>


<script>  
export default {
  name: 'AppBar',
    data: () => ({
        mini:false,
    }),
}
</script>  
