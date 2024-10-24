<template>
	<div class="background-container">
		<div class="top">
			<ul class="loginbar clearboth container">
				<li><a href="index.html">Minecraft<span>: Story Mode</span></a></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<p class="error">Minecraft</p>
		<p class="error">：Story Mode</p>


		<div class="content">
			<h2>The game has just begun</h2>
			<p class="text">
				If you want to get rich, plant trees first
				——Player
				In order to survive and develop in the game, players need to obtain resources through logging, mining,
				hunting, etc., and create weapons and tools through the synthesis system.
			</p>

			<p class="links">
				<ul>
				<li><a id="button" href="https://www.minecraft.net/zh-hant/download">Click to download</a></li>
				<li><router-link to="/minecraft2">Plot story</router-link></li>
				<li><router-link to="/minecraft3">Characters</router-link></li>
				<li><router-link to="/minecraft4">Promotional video</router-link></li>
			</ul>
			</p>
		</div>

	</div>
</template>

<script>
export default {
	name: 'home'
}
</script>


<style scoped>
.text {
	white-space: pre-wrap;
}

* {
	margin: 0;
	padding: 0;
}

a:active {
	position: relative;
	top: 1px;
}


.background-container {
	background: url("@/assets/photo/MIN.jpg")no-repeat center center fixed;
	/*Image for the full size image background. */
	height: 100vh;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	/*CSS3 for the fullscreen image background*/
}

body {
	font-family: 'Helvetica Neue';
	width: auto;
	margin: 0 auto 100px auto;
	/*	background: #C9D0F5 /*373A4D*!/;*/
}

p.error {
	color: #000;
	text-shadow: #fff 0 1px 0;
	text-align: center;
	font: 900 10em helvetica neue;
}

.content {
	margin: auto;
	padding: 30px 40px 40px 40px;
	width: 570px;
	color: #030303;
	background-image: -moz-linear-gradient(90deg, rgba(217, 236, 241, 0.70) 0%, rgba(173, 218, 232, 0.76) 93.26%, rgba(178, 237, 234, 1.00) 100%);
	background-image: -o-linear-gradient(90deg, rgba(217, 236, 241, 0.70) 0%, rgba(173, 218, 232, 0.76) 93.26%, rgba(178, 237, 234, 1.00) 100%);
	background-image: linear-gradient(0deg, rgba(217, 236, 241, 0.70) 0%, rgba(173, 218, 232, 0.76) 93.26%, rgba(178, 237, 234, 1.00) 100%);
	border: 1px solid #6BACAD;
	box-shadow: 0px 1px rgba(255, 255, 255, 0.4), 0 3px 8px #000000;
	border-radius: 6px;
	font: 16px;
	line-height: 25px;
	font-weight: 300;
	text-shadow: #000 0 1px 0;
}

.content h2 {
	text-transform: uppercase;
	text-align: center;
	padding-bottom: 20px;
}

form {
	height: 40px;
}

.inputform {
	font: 12px;
	border: none;
	padding: 10px;
	width: 300px;
	margin: 15px 0 0 75px;
}

.button {
	width: 100px;
	margin-top: 1px;
	height: 33px;
	border: none;

	text-shadow: #fff 0 1px 0;
	background-image: -moz-linear-gradient(top, #ffffff, #aaa);
	background-image: -o-linear-gradient(top, #ffffff, #aaa);
	background-image: -webkit-linear-gradient(top, #ffffff, #aaa);
	background-image: linear-gradient(top, #ffffff, #aaa);
	box-shadow: inset 0px 1px rgba(255, 255, 255, 1);
}

p.links {
	margin: 24px 0 0 0;
	text-align: center;
}

p.links a {
	color: #000000;
	margin-left: 15px;
	margin-right: 15px;
}

p.links a:hover {
	text-decoration: none;
	text-shadow: 0 0 5px #BDF0F3;
}

/* 登录 注册界面 */
#bg-box {
	position: relative;
	width: 100%;
	height: 100vh;
}



.rigister-form {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 360px;
	height: 400px;
	padding: 0 20px;
	background-color: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.137);
	transform: translate(-50%, -50%);
}

.rigister-form h2 {
	margin: 70px 0 40px;
	text-align: center;
}

.login-form h2 {
	margin: 50px 0 40px;
}

.rigister-form label,
.rigister-form input {
	display: inline-block;
}

.rigister-form label {
	width: 25%;
	text-align: right;
}

.rigister-form input {
	width: 70%;
	height: 30px;
	outline: none;
	border: 1px solid #09d2fe;
}

.account-bar {
	margin-bottom: 10px;
}

.account-bar input {
	padding-left: 5px;
	box-sizing: border-box;
}

.account-bar input:hover {
	border: 2px solid #09d2fe;
}

.submit-bar {
	margin: 40px 0;
	text-align: center;
}

.submit-bar input {
	width: 120px;
	color: #fff;
	cursor: pointer;
	background-color: #09d2fe;
}

.submit-bar input:hover {
	background-color: #0ac6f0;
}

.submit-bar input:first-child {
	margin-right: 20px;
}

/* 顶部 */
.top {
	background-color: rgb(233, 210, 255);
	top: 0;
	left: 0;
	width: 100%;
}

.loginbar li {
	float: right;
	height: 35px;
	font-size: 14px;
	color: black;
	line-height: 35px;
}

.loginbar li:first-child {
	float: left;
	font-weight: 900;
	font-size: 20px;
	color: black;
	line-height: 35px;
}

.loginbar li:first-child span {
	color: black;
}

.loginbar li a:hover {
	text-decoration: underline;
}

.loginbar li:first-child a:hover {
	text-decoration: none;
}
</style>
