<script>
	let fire = false;
	let fireSound;
	const fireBullet = () => {
			fire = !fire;
			fireSound.play();
			
			setTimeout(() =>{
					fire= false;
					fireSound.pause();
					fireSound.currentTime = 0;
			}, 500)
		
	}
</script>
<code>Click on the green gun to fire!</code>


<div class="gun" on:click={fireBullet}>
	<div class="bullet" class:fire={fire} class:reload={!fire}></div>
</div>



<audio src=https://www.myinstants.com/media/sounds/m4a1_single-kibblesbob-8540445.mp3 preload=auto bind:this={fireSound} controls>
	<track kind="captions"/>
</audio>

<a href="https://www.youtube.com/playlist?list=PLm_Qt4aKpfKi7J6Jc2OR7YLz1hEhC_4Mc" target="_blank">Checkout Svelte playlist</a>

<style>
	audio {
		display: none;
	}
	.gun {
		margin: 100px;
		position: relative;
		cursor: pointer;
		width: 100px;
		height: 60px;
		border-top: 20px solid;
		border-left: 35px solid;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 55px;
	}
	.bullet {
		position: absolute;
		top: -12px;
		width: 10px;
		height: 5px;
		background-color: gray;
		border-top-right-radius: 100%;
		border-bottom-right-radius: 100%;
		border-left: 2px solid black;
		z-index: -1;
	}
	.fire {
		transition: transform 500ms;
		transform: translateX(1000px)
	}
	.reload {
		transition: transform 0.001s;
	}
	a {
		font-size: 0.8rem
	}
</style>