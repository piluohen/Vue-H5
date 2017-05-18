<template>
    <div class="download">
        <img class="download-img" src="../assets/img/download.png">
        <div class="download-desc-box">
            <div class="download-title">全球资讯，聚在这里</div>
            <p class="download-desc">
                聚贸资讯是全球首家工业全产业链及全服务业资讯平台，致力于为用户提供最热的行业资讯及最专业的动态分析。聚贸资讯全方位展示信息、 追踪时事热点，为用户提供可参与商业资讯与观点交流的平台。聚贸资讯依托聚贸平台大数据等全方位的服务，聚合最新最热的行业动态。
            </p>
        </div>
        <img class="download-code" src="../assets/img/download-code.png">
        <button class="download-btn" type="button" @click="downloadApp()">直接下载</button>
        <div class="download-mode" v-if="modeShow">
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
    </div>
</template>

<script>
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
export default {
    data() {
        return {
            modeShow: false
        }
    },
    created() {
        this.$store.dispatch('setHFShow', { headerShow: false, footerShow: false })
    },
    methods: {
        downloadApp() {
            if (isWeiXin()) {
                this.modeShow = true
            } else {
                if (/(iPhone | iPad | iOS)/i.test(navigator.userAgent)) {
                    window.location.href = 'https://itunes.apple.com/cn/app/ju-mao-hua-gong/id1233520193?mt=8'
                } else if (/(Android)/i.test(navigator.userAgent)) {
                    window.location.href = 'http://m.jumorenews.com/mobile_download/jmzx_app_1.0.0.apk'
                }
            }

        }
    }
}
</script>

<style>

.download {
    text-align: center;
}

.download-desc-box {
    padding: 0 2.2rem;
    font-size: 1.2rem;
    line-height: 2.2rem;
}

.download-title {
    color: #4092ea;
}

.download-desc {
    color: #343434;
    text-align: justify;
    margin: 0;
}

.download-img {
    width: 15.5rem;
    height: 7rem;
    margin: 4rem auto 1rem auto;
}

.download-code {
    width: 10rem;
    height: 10rem;
    margin: 1.5rem auto 3.5rem auto;
}

.download-btn {
    width: 23.4rem;
    height: 3.4rem;
    line-height: 3.4rem;
    color: #ffffff;
    background: #2788e7;
    border: none;
    border-radius: 1.7rem;
    font-size: 1.6rem;
    outline: none;
}
</style>