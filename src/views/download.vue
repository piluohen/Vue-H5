<template>
    <div class="download">
        <img class="download-img" src="../assets/img/download.png">
        <!--<div class="download-desc-box">
            <div class="download-title">全球资讯，聚在这里</div>
            <p class="download-desc">
                聚贸资讯是全球首家工业全产业链及全服务业资讯平台，致力于为用户提供最热的行业资讯及最专业的动态分析。聚贸资讯全方位展示信息、 追踪时事热点，为用户提供可参与商业资讯与观点交流的平台。聚贸资讯依托聚贸平台大数据等全方位的服务，聚合最新最热的行业动态。
            </p>
        </div>-->
        <!--<img class="download-code" src="../assets/img/download-code.png">-->
        <button class="download-btn" type="button" @click="downloadApp()">下载APP</button>
        <download-mode v-if="modeShow"></download-mode>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import downloadMode from '../components/downloadMode'

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
    components: {
        downloadMode
    },
    created() {
        this.$store.dispatch('setHFShow', { headerShow: false, footerShow: false }),
        this.getVersion()
    },
    computed: {
        ...mapState({
            version: state => state.nav.version
        })
    },
    methods: {
        getVersion(){
            let params = {
                clientType: 0,
                updateType: 1
            }
            this.$store.dispatch('getVersion', params)
        },
        downloadApp() {
            if (isWeiXin()) {
                this.modeShow = true
            } else {
                if (/(iPhone | iPad | iOS)/i.test(navigator.userAgent)) {
                    window.location.href = 'https://itunes.apple.com/cn/app/ju-mao-hua-gong/id1233520193?mt=8'
                } else if (/(Android)/i.test(navigator.userAgent)) {
                    window.location.href = this.version[0].url + ''
                }
            }
        }
    }
}
</script>

<style>

.download {
    min-height: 100%;
    text-align: center;
    background: #ddeef9;
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
    width: 23.4rem;
    height: 31.9rem;
    margin: 7.6rem auto 5.1rem auto;
}

.download-code {
    width: 10rem;
    height: 10rem;
    margin: 1.5rem auto 3.5rem auto;
}

.download-btn {
    padding: 0.8rem 1.6rem;
    color: #ffffff;
    background: #2788e7;
    border: none;
    border-radius: 1.1rem;
    font-size: 1.8rem;
    outline: none;
    margin-bottom: 6rem;
}
</style>