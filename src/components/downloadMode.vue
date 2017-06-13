<template>
    <div class="download-mode">
        <div class="download-mode-body">
            <img src="../assets/img/long-arrow.png" alt="">
            <div class="download-mode-body-box">
                <div class="item">
                    <span class="download-circle">1</span>
                    <span>点击右上角的</span>
                </div>
                <div class="item">
                    <span class="download-circle">2</span>
                    <span>选择在浏览器中打开</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "downloadMode"
}
</script>

<style>
.download-mode {
    position: fixed;
    z-index: 123;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    font-size: 1.6rem;
}

.download-mode-body {
    text-align: right;
    padding: 1.2rem 1rem;
}

.download-mode-body img {
    width: 5.5rem;
    height: 7.2rem;
}

.download-mode-body-box .item {
    margin-bottom: 3.2rem;
    text-align: left;
    padding-left: 7.4rem;
}

.download-circle {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.4rem;
    background: #e20e55;
    margin-right: 1.6rem;
}
</style>
