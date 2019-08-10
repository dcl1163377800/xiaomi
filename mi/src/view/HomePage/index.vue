<template>
    <div id="app">

        <header>宇宙第一帅</header>
        <main></main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    html {
    font-size: -webkit-calc(100vw/7.5);
    font-size: calc(100vw / 7.5);
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    li {
    list-style: none;
    }
    img {
    vertical-align: top;
    }
    a {
    text-decoration: none;
    }
    #app {
    width: 100vw;
    height: 100vh;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
         header{
            height: 2.5rem;
            background: red;
            text-align: center;
        }
         main{
            flex: 1;
            overflow-y: auto;
            background: blue;
            
        }
        footer{
            height: 2.5rem;
            background: yellow;
        }
    }
   
   
  
</style>


