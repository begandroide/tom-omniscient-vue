<template>
<v-app>
    <v-content>
      <router-view />  
    </v-content>
  </v-app>

  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Login v-if="!isLoggedIn" />
    <Home v-else />
  </div> -->
</template>

<script>

export default {
  name: 'App',
  // app initial state  
    data: () => {  
      return {  
        currentRoute: window.location.pathname,
      }  
    },
}
</script>

<style>
#app {
  font-family: Lobster,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
