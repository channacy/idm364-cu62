<script>
    import banner from "/Users/channacyun/UniQuely/UniQuely/src/assets/UniQuely.png"
</script>

<div class="banner-container h-96 carousel carousel-vertical rounded-box">
    <img id="main-banner" alt="UniQuely welcome banner" src={banner}>
</div>

<style>
.banner-container{
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

#main-banner{
    width: 100%;
    height: auto;
    overflow: scroll;
    object-fit: cover;
}
</style>