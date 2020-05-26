<template>
    <header>
        <a href="#"><img src="../assets/black-logo.png" alt=""></a>
    </header>
</template>

<script>

</script>

<style scoped>
header{
    background-color:white;
    width: 100%;
    height: 80px;
    /* border: #000 1px solid; */
    position: relative;
}
header img{
    width: 20%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    transition: .2s;
}
header img:hover{
    width: 21%;
}

@media screen and (max-width: 768px){
     header img{
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    header img:hover{
        width: 75%;
    }
}
</style>