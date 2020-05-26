<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 
'./components/Header.vue'
import Footer from
'./components/Footer.vue'

export default{
    components:{
        Header,
        Footer
    }
}
</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1.6;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    cursor: pointer;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

html{
    height: 100%;
}


a{
    text-decoration: none;
    display: block;
}
img{
    width: 100%;
    height: 100%;
    display: block;
}
p{
    display: block;
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.between{
    justify-content: space-between;
}
.around{
    justify-content: space-around;
}
.column{
    flex-direction: column;
}
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.green-btn{
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #92DE61;
    color: white;
    border: #92DE61 1px solid;
    border-radius: 5px;
    transition: .2s;
}
.green-btn:hover{
    background-color: #689F44;
    border: #689F44 1px solid;
    letter-spacing: 0.1em;
}
.white-btn{
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    border: white 1px solid;
    border-radius: 5px;
    transition: .2s;
}
.white-btn:hover{
    background-color: rgba(255, 255, 255, 0.8);
    color: #182410;
    letter-spacing: 0.1em;
    
}
/* .fadein{
    opacity: 0;
    transform: translate(0, 50px);
    transition: all 1500ms;
}
.fadein.scrollin{
    opacity: 1;
    transform: translate(0, 0);
} */
body{
  height: 100%;
}
</style>
