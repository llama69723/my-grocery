<template>
  <div class="home">
      <div class="first-view flex">
    <div class="catch-copy">
        <h1><img class="top-logo" src="../assets/white-logo.png" alt=""></h1>
        <p class="top-text">家にある食材、きちんと管理できていますか？<br>
        食べ物をおいしいうちに使い切るための管理サービスです。</p>
        <div class="fukidashi">
            <img src="../assets/fukidashi.png" alt="">
            <h1>家にある食材、<br>
                管理できていますか？</h1>
        </div>
        <p class="mobile-p">My Groceryは食べ物をおいしいうちに使い切るための管理サービスです。</p>
        <div class="link-box flex between">
            <a @click="clickLogin()" class="green-btn flex-btn">ログイン</a>
            <a @click="clickSignUp()" class="white-btn flex-btn">新規登録</a>
        </div>
    </div>
</div>
<div class="merit-wrapper">
    <div class="merit-container flex between">
        <div class="merit-content flex column fadein">
            <img src="../assets/calender.png" alt="">
            <div class="merit-text">
                <h2>賞味期限を管理</h2>
                <p>食材を賞味期限順にリストアップ。<br>
                    「うっかり期限が切れてしまった…」<br>
                    そんな経験はもう無くなります。</p>
            </div>
        </div>  
        <div class="merit-content flex column fadein">
            <img     src="../assets/basket.png" alt="">
            <div class="merit-text" >
                <h2>買い忘れ防止</h2>
                <p>「あれ、うちに卵あったっけ？」<br>
                    買い物中でもスマホから簡単に<br>
                    冷蔵庫の中身を確認できます。</p>
            </div>
        </div>
    </div>
</div>
<div class="task-container">
    <h3 class="task-h3">解決できる課題</h3>
    <div class="white-fukidashi">
        <img src="../assets/white-fukidashi.png" alt="">
        <h3 class="mobile-h3">こんな悩みはありませんか？</h3>
    </div>
    <div class="task-wrapper flex between">
        <div class="task-block fadein">
            <p class="task-title">賞味期限切れ</p>
            <ul>
                <li>冷蔵庫の奥にある漬物、いつのだっけ？</li>
                <li>ジャガイモに芽が生えてしまった…</li>
                <li>ずっと開けてないお中元の素麺、いつ食べよう？</li>
                <li>肉や魚などの生鮮品は食中毒が心配</li>
            </ul>
            <a href="#"><img class="warp1" src="../assets/check.png" alt=""></a>
            <p class="task-number">1</p>
        </div>
        <div class="task-block fadein">
            <p class="task-title">買い忘れ</p>
            <ul>
                <li>毎回何か買い忘れてしまう</li>
                <li>いちいち買い物メモを書くのは面倒！</li>
                <li>間違えて違うものを買ってしまった</li>
                <li>買い物中に冷蔵庫の中身を確認したい</li>
            </ul>
            <a href="#"><img class="warp2" src="../assets/check.png" alt=""></a>
            <p class="task-number">2</p>
        </div>
        <div class="task-block fadein">
            <p class="task-title">買いすぎ</p>
            <ul>
                <li>気づいたら、わさびチューブが4本もあった</li>
                <li>足りないか不安でついつい買い過ぎてしまう</li>
                <li>買い過ぎて冷蔵庫に入りきらない</li>
                <li>食費を節約したいけど、上手くいかない</li>
            </ul>
            <a href="#"><img class="warp3" src="../assets/check.png" alt=""></a>
            <p class="task-number">3</p>
        </div>
        <div class="task-block fadein">
            <p class="task-title">場所が不明</p>
            <ul>
                <li>調味料を探して家中歩き回っている</li>
                <li>ストックがあるのに気づかず買い足してしまった</li>
                <li>ものが多くて取り出しづらい</li>
                <li>食材を一覧にまとめて見やすくしたい</li>
            </ul>
            <a href="#"><img class="warp4" src="../assets/check.png" alt=""></a>
            <p class="task-number">4</p>
        </div>
    </div>
</div>
<div class="details details1">
    <h4 class=" fadein"><span>1</span>.賞味期限切れ</h4>
    <div class="details-wrapper flex fadein">
        <img src="../assets/syoumikigenn.png" alt="">
        <p>食品は表示されている保存方法を守って保存しておくことが大切です。
            消費期限が過ぎた卵や肉、魚介類などを食べると食中毒の危険があります。<br>
            My Groceryは賞味期限の近い順に食材をリストアップし、
            期限内に食材を使い切ることができます。</p>
    </div>
</div>
<div class="details details2">
    <h4 class=" fadein"><span>2</span>.買い忘れ</h4>
    <div class="details-wrapper flex fadein">
        <img src="../assets/kaiwasure.png" alt="">
        <p>帰宅してから買い忘れに気づいたり、家族が同じものを買っていてむしろ余ってしまったり......。
            買い物における「うっかり」は、誰にでもあるかと思います。<br>
            My Groceryはスマホからに家にある食材を確認できるので、
            買い忘れの心配がありません。毎回買い物メモを書く作業も要りません。</p>
    </div>
</div>
<div class="details details3">
    <h4 class=" fadein"><span>3</span>.買いすぎ</h4>
    <div class="details-wrapper flex fadein">
        <img src="../assets/kaisugi.png" alt="">
        <p>「足りないといけないから…」と不安で食材を買い置きし、
            家に帰ったら同じものがすでにあった...。なんてことはありませんか？<br>
            My Groceryならスマホからに家にある食材を確認できるので、
            買い物中に不安になることはありません。食材を必要な分だけ買うことができます。</p>
    </div>
</div>
<div class="details details4">
    <h4 class=" fadein"><span>4</span>.場所が不明</h4>
    <div class="details-wrapper flex fadein">
        <img src="../assets/seiri.png" alt="">
        <p>家にある全ての食材の位置、把握していますか？食材をきちんと分類ごとに整理し、
            取り出しやすい位置に収納することで料理の効率も上がります。<br>
            My Groceryならスマホで全ての食材を一括に管理できます。
            整理整頓の新しいツールとしてお役立てください。</p>
    </div>
</div>
<div class="solution">
    <p class="arrow">↓</p>
    <div class="solution-wrapper flex fadein">
        <img src="../assets/iphone2.png" alt="">
        <div class="text-box">
            <h5><span>My Grocery</span> <br class="responsive-br1">なら<br class="responsive-br2">解決できます</h5>
            <p>サービスは無料でご利用いただけます。</p>
        </div>
    </div>
    <a class="green-btn fadein" href="#">登録する</a>
</div>
<div class="contact">
    <h6>お問い合わせ</h6>
    <form action="" class=" fadein">
        <div class="text-field flex">
            <label for="name">お名前</label>
            <input type="text" id="name" >
        </div>
        <div class="text-field flex">  
            <label for="email">メールアドレス</label>
            <input type="email" id="email">
        </div>
        <div class="text-field flex">
            <label for="text-area">お問い合わせ内容</label>
            <textarea  id="text-area" cols="30" rows="10"></textarea>
        </div>
        <div class="submit-box">
            <input class="green-btn contact-btn" type="submit">
        </div>
    </form>
</div>
  </div>
</template>

<script>
export default{
    methods: {
        clickLogin(){
            this.$router.push('/login')
        },
        clickSignUp(){
            this.$router.push('/signUp')
        },
    }
}
</script>

<style scoped>
.first-view {
    background-image: url("../assets/top-img.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
.catch-copy {
    margin: 200px 0;
    width: 40%;
    /* border: #000 1px solid; */
}
.top-logo{
    width: 90%;
    margin: auto;
}
.top-text{
    color: white;
    text-align: center;
    margin: 20px 0 80px;
    font-size: 18px;
}
.fukidashi,
.mobile-p{
    display: none;
}
.link-box{
    /* border: #000 1px solid; */
    width: 50%;
    margin: auto;
}
.flex-btn{
    width: 45%;
}
.merit-wrapper{
    position: relative;
    width: 100%;
    height: 400px;
}
.merit-container{
    position: absolute;
    top: -35%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    margin: auto;
}
.merit-content{
    width: 40%;
    /* border: #000 1px solid; */
    justify-content: center;
}
.merit-content img{
    box-sizing: border-box;
    width: 100%;
    /* border: #000 1px solid; */
}
.merit-text h2{
    text-align: center;
    margin: 10px 0;
    font-size: 25px;
    letter-spacing: 0.1em;
    color: #182410;
    opacity: 0.9;
}
.merit-text p{
    width: 100%;
    margin: auto;
    font-size: 14px;
    line-height: 2;
    /* border: #000 1px solid; */
    color: #182410;
    opacity: 0.9;
    text-align: center;
}
.task-container{
    width: 100%;
    height: 900px;
    background-color: #92DE61;
    padding-top: 40px;
}
.task-h3{
    width: 100%;
    color: #182410;
    font-size: 35px;
    letter-spacing: 0.1em;
    font-weight: normal;
    height: 70px;
    line-height: 70px;
    text-align: center;
}
.white-fukidashi{
    display: none;
}
.task-wrapper{
    width: 75%;
    height: 80%;
    margin: auto;
}
.task-block{
    width: 48%;
    height: 44%;
    background-color:rgba(255, 255, 255, 0.9);
    position: relative;
    border-radius: 20px;
}
.task-title{
    margin: 20px 30px;
    font-size: 35px;
    color: #182410;
    opacity: 0.87;
    letter-spacing: 0.1em;
}
.task-block ul{
    margin: 0 30px;
    list-style-position: inside;
    line-height: 2;
}
.task-block li{
    font-size: 15px;
    color: #182410;
    opacity: 0.87;
}
.task-block img{
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 10%;
    height: auto;
    transition: .2s;
}
.task-block img:hover{
    width: 11%;
}
.task-number{
    position: absolute;
    bottom: -23%;
    right: 2%;
    font-size: 200px;
    color: #92DE61;
}
.details{
    width: 70%;
    height: 600px;
    margin: auto;
    padding: 30px 0;
    border-bottom: #cccccc 2px dashed;
}
.details span{
    font-size: 80px;
    color: #92DE61;
    
}
.details h4{
    font-size: 50px;
    letter-spacing: 0.1em;
    color: #92DE61;
    font-weight: normal;
    padding-left: 30px;
}
.details img{
    box-sizing: border-box;
    width: 48%;
    height: auto;
}
.details p{
    box-sizing: border-box;
    width: 48%;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.05em;
    padding-left: 30px;
    color: #182410;
}
.solution{
    height: 700px;
    position: relative;
    /* border: #000 1px solid; */
}
.arrow{
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 100px;
    font-weight: bold;
    color: #92DE61;
}
.solution-wrapper{
    width: 70%;
    height: 80%;
    margin: auto;
    /* border: #000 1px solid; */
}
.solution img{
    box-sizing: border-box;
    padding: 2%;
    width: 50%;
    height: auto;
}
.text-box{
    box-sizing: border-box;
    width: 50%;
    padding-left: 2%;
    color: #182410;
    opacity: 0.87;
    letter-spacing: 0.1em;
}
.text-box h5{
    font-size: 35px;
    line-height: 1.7;
    font-weight: normal;
}
.text-box span{
    font-size: 45px;
    font-weight: bold;
    color: #92DE61;
}
.responsive-br1{
    display: none;
}
.text-box p{
    font-size: 20px;
    margin-top: 12px;
}
.solution a{
    width: 30%;
    margin: auto;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    letter-spacing: 0.1em;
    transition: .2s;
}
.solution a:hover{
    letter-spacing: 0.2em;
}
.contact{
    background-image: url(../assets/contact2.png);
    background-size: cover;
    background-repeat: repeat;
    width: 100%;
    height: 700px;
    margin-top: 100px;
    padding: 20px 0;
}
.contact h6{
    text-align: center;
    color: #fff;
    height: 50px;
    line-height: 50px;
    margin: 30px 0;
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0.1em;
}
form{
    display: block;
    margin: auto;
    width: 50%;
}
.text-field{
    padding: 15px 0;
}
label{
    box-sizing: border-box;
    color: white;
    width: 35%;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
input{
    box-sizing: border-box;
    width: 65%;
    font-size: 18px;
    line-height: 45px;
    border-radius: 20px;
    border: none;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.8);
}
textarea{
    box-sizing: border-box;
    width: 65%;
    font-size: 18px;
    line-height: 1.5;
    border-radius: 20px;
    border: none;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
}
.submit-box{
    width: 100%;
    margin-top: 30px;
}
.contact-btn{
    width: 30%;
    display: block;
    margin: auto;
    height: 50px;
    line-height: 50px;
    letter-spacing: 0.2em;
    cursor: pointer;
    background-color: #92DE61;
}
.contact-btn:hover{
    letter-spacing: 0.3em;
    background-color: #689F44;
    border: #689F44 1px solid;
}
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
    .catch-copy{
        width: 60%;
        margin: 200px 100px;
    }
    .top-logo{
        width: 70%;
    }
    .top-text{
        font-size: 15px;
    }
    .link-box{
        width: 80%;
    }
    .merit-wrapper{
        height: 380px;
    }
    .merit-container{
        top: -25%;
        width: 80%;
    }
    .merit-content{
        width: 48%;
    }
    .merit-content img{
        width: 70%;
    }
    .merit-text p{
      font-size: 12px;
    }
    .task-wrapper{
        width: 90%;
        height: 90%;
    }
    .task-block{
        height: 46%;
    }
    .task-title{
        margin-bottom: 10px;
    }
    .task-block ul{
        line-height: 1.7;
    }
    .task-block img{
        width: 15%;
    }
    .task-block img:hover{
        width: 15%;
    }
    .task-number{
        font-size: 130px;
        bottom: -15%;
    }
    .details{
        width: 80%;
        height: 500px;
    }
    .details p{
        line-height: 1.7;
        letter-spacing: normal;
    }
    .solution{
        height: 600px;
    }
    .text-box h5{
        font-size: 28px;
    }
    .text-box span{
        font-size: 40px;
    }
    .responsive-br2{
        display: none;
    }
    form{
        width: 70%;
    }
    .contact-btn{
        width: 40%;
    }
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
@media screen and (max-width: 767px){
    header img{
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    header img:hover{
        width: 75%;
    }
    .first-view{
        width: 100%;
        height: auto;
    }
    .catch-copy{
        width: 80%;
        margin: 50px 0 150px;
        top: 50%;
        left: 50%;
    }
    .top-logo,
    .top-text{
        display: none;
    }
    .fukidashi{
        display: block;
        width: 250px;
        height: 130px;
        margin: auto;
        position: relative;
    }
    .fukidashi img{
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .fukidashi h1{
        width: 100%;
        font-size: 22px;
        font-weight: normal;
        color: #182410;
        opacity: 0.87;
        text-align: center;
        position: absolute;
        top: 13%;
        left: 2%;
    }
    .mobile-p{
        display: block;
        color: white;
        text-align: left;
        width: 80%;
        margin: auto;
        padding-top: 10ox;
    }
    .link-box{
        flex-direction: column;
        width: 100%;
        margin: 20px 0 50px;
    }
    .flex-btn{
        width: 80%;
        margin: 15px 0;
    }
    .merit-wrapper{
        height: 800px;
    }
    .merit-container{
        flex-direction: column;
        width: 80%;
        top: -15%;
        left: 50%;
        transform: translateX(-50%);
    }
    .merit-content{
        width: 100%;
        margin-bottom: 30px;  
    }
    .merit-content img{
        width: 80%;
        margin: auto;
    }
    .merit-text{
        margin-bottom: 50px;
    }
    
    .task-container{
        width: 100%;
        height: 1500px;
        padding-top: 20px;
    }
    .task-h3{
        display: none;
    }
    .white-fukidashi{
        display: block;
        width: 250px;
        height: 70px;
        margin: auto;
        position: relative;
    }
    .white-fukidashi img{
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .mobile-h3{
        width: 100%;
        display: block;
        position: absolute;
        top: 20%;
        left: 54%;
        transform: translateX(-50%);
        color: white;
        font-size: 18px;
        font-weight: normal;
    }
    .task-wrapper{
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100%;
        height: 93%;
    }
    .task-block{
        width: 90%;
        height: 44%;
        margin: 10px 0;
    }
    .task-title{
        margin: 20px 20px 15px;
        font-size: 28px;
    }
    .task-block ul{
        margin: 0 20px;
        line-height: 1.7;
    }
    .task-block li{
        font-size: 14px;
    }
    .task-block img{
        width: 15%;
    }
    .task-block img:hover{
        width: 15%;
    }
    .task-number{
        bottom: -7%;
        right: 0;
        font-size: 80px;
    }
    .details{
        width: 80%;
        height: auto;
        padding: 30px 0 40px;
    }
    .details h4{
        font-size: 28px;
        padding: 0;
    }
    .details span{
        font-size: 40px;
    }
    .details-wrapper{
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .details-wrapper img{
        width: 100%;
    }
    .details-wrapper p{
        width: 100%;
        font-size: 15px;
        letter-spacing: normal;
        margin-top: 10px;
        padding: 0;
    }
    .solution{
        width: 100%;
        height: auto;
        padding: 50px 0;
    }
    .arrow{
        font-size: 70px;
        /* color: #182410; */
        opacity: 0.87;
    }
    .solution-wrapper{
        width: 80%;
        height: 100%;
        margin: auto;
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
    .text-box{
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
        text-align: center;
    }
    .text-box h5{
        font-size: 22px;
        letter-spacing: 1.5;
    }
    .text-box span{
        font-size: 38px;
    }
    .responsive-br1{
        display: inline;
    }
    .responsive-br2{
        display: none;
    }
    .text-box p{
        font-size: 12px;
    }
    .solution img{
        width: 100%;
    }
    .solution a{
        width: 80%;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        margin-top: 25px;
    }
    .contact{
        margin-top: 30px;
        height: auto;
    }
    .contact h6{
        height: 30px;
        line-height: 30px;
        font-size: 25px;
        margin: 5px 0 20px;
    }
    form{
        width: 75%;
    }
    .text-field{
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 7px 0;
    }
    label{
        width: 100%;
        font-size: 15px;
        padding: 0;
        margin-bottom: 5px;
    }
    input{
        width: 100%;
        font-size: 15px;
        line-height: 35px;
        border-radius: 15px;
    }
    textarea{
        width: 100%;
        font-size: 15px;
        line-height: 1.5;
        border-radius: 15px;
    }
    .submit-box{
        margin: 20px 0 30px;
    }
    .contact-btn{
        width: 100%;
        height: 40px;
        font-size: 18px;
    }
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
