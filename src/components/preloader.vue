<template>
<div class="preloaderWrapper">
  <div id="circularG">
    <div id="circularG_1" class="circularG"></div>
    <div id="circularG_2" class="circularG"></div>
    <div id="circularG_3" class="circularG"></div>
    <div id="circularG_4" class="circularG"></div>
    <div id="circularG_5" class="circularG"></div>
    <div id="circularG_6" class="circularG"></div>
    <div id="circularG_7" class="circularG"></div>
    <div id="circularG_8" class="circularG"></div>
  </div>
</div>
</template>

<script>
export default {

};
</script>

<style lang='scss'>

.preloaderWrapper{
	position: absolute;
	width: 100%,;
	height: 100%;
	background-color: #3366ff;
	opacity: 0.3;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	border-radius: 10px;
	z-index: 999;
}

#circularG{
	position:relative;
	width:54px;
	height:54px;
	margin: auto;
}

.circularG{
	position:absolute;
	background-color:rgb(0,0,0);
	width:13px;
	height:13px;
	border-radius:8px;
	animation-name:bounce_circularG;
	animation-duration:0.768s;
	animation-iteration-count:infinite;
	animation-direction:normal;
}

#circularG_1{
	left:0;
	top:22px;
	animation-delay:0.288s;
}

#circularG_2{
	left:5px;
	top:5px;
	animation-delay:0.384s;
}

#circularG_3{
	top:0;
	left:22px;
	animation-delay:0.48s;
}

#circularG_4{
	right:5px;
	top:5px;
	animation-delay:0.576s;
}

#circularG_5{
	right:0;
	top:22px;
	animation-delay:0.672s;
}

#circularG_6{
	right:5px;
	bottom:5px;
	animation-delay:0.768s;
}

#circularG_7{
	left:22px;
	bottom:0;
	animation-delay:0.864s;
}

#circularG_8{
	left:5px;
	bottom:5px;
	animation-delay:0.96s;
}


@keyframes bounce_circularG{
	0%{
		transform:scale(1);
	}

	100%{
		transform:scale(.3);
	}
}
</style>
