<template>
<body>
<div class="wrap">
    <div class="top-container flex column">
        <h1>食材リスト</h1>
        <div class="link-wrapper flex around">
            <div class="link flex column">
                <div class="link-img flex column">
                    <img src="../assets/green-refrigerator.png" alt="">
                    <img class="active" src="../assets/white-refrigerator.png" alt="">
                </div>
                <p>冷蔵庫</p>
                <a href="#"></a>
            </div>
            <div class="link flex column">
                <div class="link-img flex">
                    <img src="../assets/green-broccoli.png" alt="">
                    <img class="active" src="../assets/white-broccoli.png" alt="">
                </div>
                <p>野菜室</p>
                <a href="#"></a>
            </div>
            <div class="link flex column">
                <div class="link-img flex">
                    <img src="../assets/green-ice.png" alt="">
                    <img class="active" src="../assets/white-ice.png" alt="">
                </div>
                <p>冷凍庫</p>
                <a href="#"></a>
            </div>
            <div class="link flex column">
                <div class="link-img flex">
                    <img src="../assets/green-spoon.png" alt="">
                    <img class="active" src="../assets/white-spoon.png" alt="">
                </div>
                <p>常温</p>
                <a href="#"></a>
            </div>
        </div>
        <div class="add">
            <p><span>+</span> 登録</p>
            <a href="#"></a>
        </div>
    </div>
    <div class="contents-wrapper flex">
        <div class="food-block">
            <div class="food-wrapper flex column">
                <div class="food-img">
                    <img src="../assets/milk.jpg" alt="">
                </div>
                <p class="name">牛乳</p>
                <p class="date">2020/05/23</p>
                <a class="delete" href="#"><img src="../assets/delete.png" alt=""></a>
                <div class="edit flex">
                    <img src="../assets/edit.png" alt="">
                    <p>編集</p>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="page-container flex">
        <div class="add mobile-add">
            <p><span>+</span> 登録</p>
            <a href="#"></a>
        </div>
        <div class="page-wrapper flex between">
            <a class="arrow" href="#"><img src="../assets/before.png" alt=""></a>
            <p>1 / 1</p>
            <a class="arrow" href="#"><img src="../assets/next.png" alt=""></a>
        </div>
    </div>
</div>
</body>
</template>

<script>

</script>

<style scoped>
body{
    height: auto;
    width: 100%;
}
.wrap{
    width: 100%;
    height: 100%;
}
.top-container{
    width: 80%;
    height: auto;
    margin: auto;
    position: relative;
    padding: 50px 0 40px;   
}
.top-container h1{
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0.1em;
    color: #182410;
    opacity: 0.87;
    margin-bottom: 10px;
}
.link-wrapper{
    width: 40%;
}
.link{
    width: 20%;
    height: auto;
    border-radius: 20px;
    position: relative;
    color: #182410;
    transition:  .2s;
}
.link:hover{
    border: none;
    background-color: #92DE61;
    color: white;
}
.link-img{
    width: 80%;
    max-width: 100px;
    height: 100px;
    position: relative;
}
.link-img img{
    width: 100%;
    height: auto;
}
.active{
    width: 80%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: .2s;
}
.link:hover .active{
    opacity: 1;
}
.link p{
    font-size: 16px;
    letter-spacing: 0.1em;
    text-align: center;
    opacity: 0.87;
    margin-top: 15px;
}
.link a,
.add a,
.edit a{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
}
.add{
    position: absolute;
    right: 15%;
    bottom: 15%;
    width: 120px;
    height: 50px;
    line-height: 50px;
    border: #182410 1px solid;
    border-radius: 30px;
    opacity: 0.87;
    color: #182410;
    transition: 0.3s;
}
.add:hover{
    background-color: #182410;
    color: white;
}
.add p{
    text-align: center;
    font-size: 20px;
    letter-spacing: 0.2em;
}
.add span{
    font-size: 25px;
}
.contents-wrapper{
    width: 80%;
    height: auto;
    margin: auto;
    align-items: flex-start;
    justify-content: flex-start;
}
.food-block{
    box-sizing: border-box;
    width: 20%;
    height: 33%;
    padding: 10px 30px 60px;
}
.food-wrapper{
    border: #92DE61 1px solid;
    border-radius: 20px;
    position: relative;
}
.food-img{
    width: 100%;
    height: auto;
    padding: 5px 0;
}
.food-img img{
    width: 60%;
    height: auto;
    margin: auto;
}
.name,
.date{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #182410;
    opacity: 0.87;
}
.delete{
    position: absolute;
    width: 16%;
    height: auto;
    top: 5%;
    right: 5%;
    transition: .2s;
}
.delete:hover{
    width: 18%;
}
.edit{
    position: absolute;
    bottom: -25%;
    width: 50%;
    background-color: #92DE61;
    border-radius: 10px;
    padding: 5px 0;
    transition: .2s;
}
.edit:hover{
    background-color: #689F44;
}
.edit:hover p{
    letter-spacing: 0.3em;
    font-size: 13px;
}
.edit img{
    width: 15%;
}
.edit p{
    font-size: 12px;
    color: white;
    letter-spacing: 0.2em;
    margin-left: 10px;
}
.page-container{
    width: 80%;
    height: auto;
    margin: auto;
    padding: 70px;
}
.mobile-add{
    display: none;
}
.page-wrapper{
    width: 20%;
    height: auto;   
}
.arrow{
    width: 15%;
    transition: 0.2s;
}
.arrow:hover{
    opacity: 0.8;
    width: 16%;
}
.page-wrapper p{
    color: #182410;
    opacity: 0.87;
    font-size: 20px;
}
@media screen and (max-width: 1024px){
    body{
        height: auto;
    }
    .link-wrapper{
        width: 60%;
    }
    .add{
        bottom: 12%;
        right: 3%;
        height: 40px;
        line-height: 40px;
        width: 100px;
    }
    .add p{
        font-size: 15px;
    }
    .add span{
        font-size: 20px;
    }
    .food-block{
        width: 25%;
        height: auto;
        padding: 10px 20px 40px;
    }
    .edit{
        padding: 3px 0;
    }
    .edit p{
        font-size: 10px;
    }
    .page-wrapper{
        width: 40%;
    }
    .arrow{
        width: 12%;
    }
}
@media screen and (max-width: 767px){
    .wrap{
        overflow: hidden;
    }
    .top-container{
        width: 90%;
        padding: 30px 0 20px;
    }
    .top-container h1{
        font-size: 22px;
    }
    .link-wrapper{
        width: 100%;
    }
    .link{
        width: 22%;
    }
    .link p{
        font-size: 13px;
        margin-top: 5px;
    }
    .link-img{
        height: 80px;
    }
    .add{
        position: static;
        width: 50%;
        height: 35px;
        line-height: 35px;
        border-radius: 20px;
        margin-top: 20px;
    }
    .add p{
        font-size: 15px;
        letter-spacing: 0.3em;
    }
    .add span{
        font-size: 20px;
    }
    .contents-wrapper{
        width: 90%;
    }
    .food-block{
        width: 50%;
        padding: 10px 10px 50px;
    }
    .edit{
        width: 60%;
        padding: 3px 0;
    }
    .edit p{
        font-size: 11px;
    }
    .page-container{
        width: 50%;
        flex-direction: column;
        padding: 10px 0 70px;
    }
    .mobile-add{
        display: block;
        margin-bottom: 70px;
        width: 80%;
    }
    .page-wrapper{
        width: 100%;
    }
}
</style>