<template>
<div class="home">
        <div class="login-container">
            <img src="../assets/login-img.png" alt="">
            <div class="form-wrapper">
                <h1>ログイン</h1>
                <form action="">
                    <div class="text-field">
                        <label for="email">メールアドレス</label>
                        <input type="email" id="email">
                    </div>
                    <div class="text-field">
                        <label for="password">パスワード</label>
                        <input type="password" id="password">
                    </div>
                    <div class="submit-box">
                        <button class="green-btn login-btn">ログイン</button>
                        <button class="green-btn login-btn sign-up">新規登録</button>
                    </div>
                </form>
            </div>
        </div>
</div>
</template>

<script>

</script>

<style scoped>
body{
    height: 900px;
    width: 100%;
}
.login-container{
    position: relative;
    height: 100%;
    width: 100%;
}
.login-container img{
    position: absolute;
    height: 100%;
}
.form-wrapper{
    position: absolute;
    width: 22%;
    height: auto;
    top: 50%;
    right: 15%;
    transform: translate(0, -50%);
}
.form-wrapper h1{
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    color: #92DE61;
    margin-bottom: 40px;
}
.text-field{
    margin: 15px 0;
}
label{
    width: 100%;
    text-align: left;
    font-size: 12px;
    color: #182410;
    opacity: 0.87;
}
input{
    box-sizing: border-box;
    width: 100%;
    font-size: 15px;
    line-height: 40px;
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    border: #92DE61 1px solid;
}
.submit-box{
    margin-top: 60px;
}
.login-btn{
    width: 100%;
    display: block;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    box-sizing: border-box;
    margin-top: 20px;
}
.sign-up{
    background-color: white;
    color: #92DE61;
}
.sign-up:hover{
    background-color: white;
    color: #182410;
    opacity: 0.87;
    border: #182410 1px solid;
}
@media screen and (max-width: 1024px){
    body{
        height: 550px;
    }
    .form-wrapper{
        width: 25%;
        right: 12%;
    }
    .form-wrapper h1{
        font-size: 22px;
        margin-bottom: 30px;
    }
    .text-field{
        margin: 8px 0;
    }
    label{
        font-size: 10px;
    }
    input{
        font-size: 10px;
        line-height: 30px;
        height: 30px;
        border-radius: 5px;
    }
    .submit-box{
        margin-top: 40px;
    }
    .login-btn{
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        margin-top: 20px;
    }
}
@media screen and (max-width: 767px){
    body{
        height: 450px;
    }
    .login-container img{
        display: none;
    }
    .form-wrapper{
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>