<template>
    <div class="download">
        <img class="download-img" src="../assets/img/download.png">
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