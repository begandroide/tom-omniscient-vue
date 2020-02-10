<template>
        <span>
                <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                :clipped="clipped"
                permanent
                app
                >
                        <v-list>
                                <v-list-item link 
                                                        router exact
                                                        key="home"
                                                        to="/">
                                        <v-list-item-action>
                                                <v-icon>mdi-home</v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                                <v-list-item-title>Inicio</v-list-item-title>
                                        </v-list-item-content>
                                </v-list-item>
                                <v-list-item link>
                                        <v-list-item-action>
                                                <v-icon>mdi-settings</v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                                <v-list-item-title>Settings</v-list-item-title>
                                        </v-list-item-content>
                                </v-list-item>
                                <v-list-item link
                                                        router exact key="logout" to="/login">
                                        <v-list-item-action>
                                                <v-icon>mdi-logout</v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                                <v-list-item-title>Cerrar sesión</v-list-item-title>
                                        </v-list-item-content>
                                </v-list-item>
                        </v-list>
                </v-navigation-drawer>

                <v-app-bar
                        app
                        clipped-left
                        >
                        <v-app-bar-nav-icon @click="mini = !mini"/>
                        <v-toolbar-title >Application</v-toolbar-title>
                </v-app-bar>
                <router-view />  
                <v-footer app>
                        <span>&copy; 2019</span>
                </v-footer>
  </span>
</template>

<script>  
  
export default {
  name: 'Layout',
  components:{
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
