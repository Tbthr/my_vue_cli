<template>
  <div>
    <!--   所有的元素必须在根结点下  -->
    <h1>个人信息</h1>
<!--    {{ $route.params.id }}-->
    {{id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "userProfile",
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由器前！");
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("进入路由器后～");
    next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/static/mock/data.json'
      }).then(function (res) {
        console.log(res);
      });
    }
  }
}
</script>

<style scoped>

</style>
