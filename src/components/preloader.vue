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
  
}
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
		-o-border-radius:8px;
		-ms-border-radius:8px;
		-webkit-border-radius:8px;
		-moz-border-radius:8px;
	animation-name:bounce_circularG;
		-o-animation-name:bounce_circularG;
		-ms-animation-name:bounce_circularG;
		-webkit-animation-name:bounce_circularG;
		-moz-animation-name:bounce_circularG;
	animation-duration:0.768s;
		-o-animation-duration:0.768s;
		-ms-animation-duration:0.768s;
		-webkit-animation-duration:0.768s;
		-moz-animation-duration:0.768s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
}

#circularG_1{
	left:0;
	top:22px;
	animation-delay:0.288s;
		-o-animation-delay:0.288s;
		-ms-animation-delay:0.288s;
		-webkit-animation-delay:0.288s;
		-moz-animation-delay:0.288s;
}

#circularG_2{
	left:5px;
	top:5px;
	animation-delay:0.384s;
		-o-animation-delay:0.384s;
		-ms-animation-delay:0.384s;
		-webkit-animation-delay:0.384s;
		-moz-animation-delay:0.384s;
}

#circularG_3{
	top:0;
	left:22px;
	animation-delay:0.48s;
		-o-animation-delay:0.48s;
		-ms-animation-delay:0.48s;
		-webkit-animation-delay:0.48s;
		-moz-animation-delay:0.48s;
}

#circularG_4{
	right:5px;
	top:5px;
	animation-delay:0.576s;
		-o-animation-delay:0.576s;
		-ms-animation-delay:0.576s;
		-webkit-animation-delay:0.576s;
		-moz-animation-delay:0.576s;
}

#circularG_5{
	right:0;
	top:22px;
	animation-delay:0.672s;
		-o-animation-delay:0.672s;
		-ms-animation-delay:0.672s;
		-webkit-animation-delay:0.672s;
		-moz-animation-delay:0.672s;
}

#circularG_6{
	right:5px;
	bottom:5px;
	animation-delay:0.768s;
		-o-animation-delay:0.768s;
		-ms-animation-delay:0.768s;
		-webkit-animation-delay:0.768s;
		-moz-animation-delay:0.768s;
}

#circularG_7{
	left:22px;
	bottom:0;
	animation-delay:0.864s;
		-o-animation-delay:0.864s;
		-ms-animation-delay:0.864s;
		-webkit-animation-delay:0.864s;
		-moz-animation-delay:0.864s;
}

#circularG_8{
	left:5px;
	bottom:5px;
	animation-delay:0.96s;
		-o-animation-delay:0.96s;
		-ms-animation-delay:0.96s;
		-webkit-animation-delay:0.96s;
		-moz-animation-delay:0.96s;
}



@keyframes bounce_circularG{
	0%{
		transform:scale(1);
	}

	100%{
		transform:scale(.3);
	}
}

@-o-keyframes bounce_circularG{
	0%{
		-o-transform:scale(1);
	}

	100%{
		-o-transform:scale(.3);
	}
}

@-ms-keyframes bounce_circularG{
	0%{
		-ms-transform:scale(1);
	}

	100%{
		-ms-transform:scale(.3);
	}
}

@-webkit-keyframes bounce_circularG{
	0%{
		-webkit-transform:scale(1);
	}

	100%{
		-webkit-transform:scale(.3);
	}
}

@-moz-keyframes bounce_circularG{
	0%{
		-moz-transform:scale(1);
	}

	100%{
		-moz-transform:scale(.3);
	}
}
</style>