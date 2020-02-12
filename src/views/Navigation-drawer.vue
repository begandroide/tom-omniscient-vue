<template>
        
                <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                :clipped="clipped"
                permanent
                app
                class="deep-purple accent-4"
                dark
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

</template>

<script>  
export default {
        name: 'NavigationDrawer',
        data: () => ({
                clipped: true,
                fixed: false,
                mini:false,
                drawer: null,
    }),
}
</script>  
