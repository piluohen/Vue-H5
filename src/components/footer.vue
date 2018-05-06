<template>
    <div class="footer" v-show="footerShow">
        <div class="footer-box clear">
            <div class="fn-left footer-left">
                <img class="footer-logo" src="../assets/img/footer-logo.png" alt="">
                <span class="footer-text">聚贸资讯APP客户端</span>
            </div>
            <a @click="showMode()" class="footer-btn fn-right">立即打开</a>
        </div>
        <download-mode v-if="modeShow"></download-mode>
    </div>
</template>

<script>
import global from '../service/global'
import { mapState } from 'vuex'
import downloadMode from '../components/downloadMode'

export default {
    data(){
        return {
            modeShow: false
        }
    },
    components: {
        downloadMode
    },
    computed: {
        ...mapState({
            footerShow: state => state.nav.footerShow
        }),
        isWeiXin(){
            return this.$store.getters.isWeiXin
        }
    },
    methods: {
        showMode(){
            if(global.isWeiXin()) {
                this.modeShow = true
            } else {
                this.$router.push({ path: 'download' })
            }
        }
        
    }
}
</script>

<style>
    .footer{
        position:fixed;
        bottom:0;
        max-width: 1080px;
        background-color: #474747;
        width:100%;
        height: 3.9rem;
        line-height:3.9rem;
        font-size:1rem;
        color:#ffffff;
        text-align:center;
        z-index:100;
        color: #ffffff
    }
    .footer-box{
        padding: 0 1.3rem;
        height: 100%;
    }
    .footer-logo{
        width: 3.1rem;
        height: 3.1rem;
        margin-right: 0.6rem;
        vertical-align: middle;
    }
    .footer-text{
        vertical-align: middle;
    }
    .footer-btn{
        background-color: #2788e8;
        padding: 0.5rem;
        line-height: initial;
        vertical-align: middle;
        margin-top: 0.8rem;
        border-radius: 0.2rem;
    }
</style>