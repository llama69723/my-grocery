<template>
    <footer>
        <div class="footer-wrapper flex between">
            <p>Copyright © 2020 Akari Nemoto All Rights Reserved.</p>
            <div class="footer-nav">
                <ul class="flex around">
                    <li class="top-btn">TOP</li>
                    <li><a href="#">ログイン</a></li>
                    <li class="none"><a href="#">新規登録</a></li>
                </ul>
            </div>
            <img class="mobile-logo" src="../assets/white-logo.png" alt="">
        </div>
    </footer>
</template>

<script>

</script>

<style scoped>
footer{
    width: 100%;
    height: 100px;
    background-color: #182410;
    opacity: 0.9;
    color: white;
}
footer p{
    width: 30%;
    font-size: 12px;
    line-height: 100px;
    padding-left: 40px;
}
.footer-nav{
    width: 30%;
    /* border: #fff 1px solid; */
    height: 50px;
}
.footer-nav li{
    box-sizing: border-box;
    width: 30%;
    text-align: center;
    line-height: 50px;
    list-style: none;
    border-radius: 5px;
    font-size: 18px;
    transition: .2s;
    color: white; 
    /* border: #fff 1px solid; */
}
.footer-nav li:hover{
    letter-spacing: 0.1em;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
}
.footer-nav a{
    color: white; 
}
.mobile-logo{
    display: none;
}

@media screen and (max-width: 1024px){
    footer{
        height: auto;
    }
    footer p{
        width: 40%;
        font-size: 10px;
        padding-left: 20px;
    }
    .footer-nav{
        width: 45%;
        height: 50px;
    }
    .footer-nav li{
        font-size: 11px;
    }
}
@media screen and (max-width: 768px){
    footer{
        height: auto;
        padding: 20px 0 10px;
    }
    .footer-wrapper{
        width: 100%;
        height: 100%;
        flex-direction: column-reverse;
        justify-content: center;
        flex-wrap: nowrap;
        position: relative;   
    }
    .mobile-logo{
        display: block;
        width: 70%;
        height: auto;
    }
    .footer-nav{
        width: 100%;
        height: auto;
        flex-direction: column;
        justify-content: center;
        margin: 20px 0 10px;
    }
    .footer-nav li{
        box-sizing: border-box;
        width: 60%;
        height: 54px;
        line-height: 40px;
        padding: 7px 0;
        margin: 10px 0;
        border: #fff 1px dashed;   
    }
    .none{
        border: none;
    }
    footer p{
        top: 50px;
        width: 100%;
        padding: 0;
        margin-top: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }
}
</style>