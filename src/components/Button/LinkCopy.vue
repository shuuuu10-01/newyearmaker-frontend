<template>
  <div class="link-copy">
    <span @click="copy"><i class="far fa-copy"></i> URL</span>
  </div>
</template>

<script>
export default {
  methods: {
    copy(){
      this.$copyText("https://newyearmaker.netlify.app"+this.$route.path)
      .then(function(){
        alert('コピーしました')
      },function() {
        alert("コピーに失敗しました")
      })
    }
  }
}
</script>

<style scoped>
span {
  position: relative;
  background-color:  #5e5c5c;
  font-weight: 500;
  padding: 1px 8px 1px 6px;
  cursor: pointer;
  border: 2px solid #5e5c5c;
  border-radius: 3px;
  color: white;
  line-height: 30px;
  font-size: 12px;
}
span:hover {
  background-color:  #353535;
}
</style>
