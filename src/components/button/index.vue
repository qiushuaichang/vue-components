<script setup name="Button">
import { ref, onMounted } from 'vue';

/* const props = defineProps({
	starsCount: {
		type: [Number, String],
		default: () => 800,
	},
	distance: {
		type: [Number, String],
		default: () => 800,
	},
}); */

//星星实体
// const star = ref();

/* onMounted(() => {
	let starArr = star.value;
	starArr.forEach((item) => {
		let speed = 0.1 + Math.random() * 1;
		let thisDistance = props.distance + Math.random() * 300;
		item.style.transformOrigin = `0 0 ${thisDistance}px`;
		item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() * 360}deg) rotateX(${
			Math.random() * -50
		}deg) scale(${speed},${speed})`;
	});
}); */
</script>

<template>
	<div class="btn">
		<slot></slot>
	</div>
</template>

<style scoped>
    .btn{
        display: inline-block;
        padding: 6px 10px;
        background-color: aquamarine;
        color: #fff;
        font-size: 16px;
        border-radius: 6px;
    }
</style>

