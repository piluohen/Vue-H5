<template>
    <div class="home">
      <news-list></news-list>
    </div>
</template>

<script>
import newsList from 'components/newsList'
export default {
    data() {
        return {
            loading:false
        }
    },
    components: {
        newsList
    },
    created(){
      this.$store.dispatch('setNavShow', { navShow: false })
      this.$store.dispatch('setHFShow', { headerShow: true , footerShow: true})
      this.$store.dispatch('getNewsListId', { newsListId:  4})
      this.$store.dispatch('setHotShow', { hotShow: false})
      this.$store.dispatch('getIndustryId', { industryId: null})
    }
}
</script>

<style>

</style>