<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        Api result: {{ apiRes }}
      </div>
      <ul>
        <li>
          <router-Link to="/b/1">Board 1</router-Link>
        </li>
        <li>
          <router-Link to="/b/2">Board 2</router-Link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      loading: false,
      apiRes: '',
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.loading = true 

      const req = new XMLHttpRequest()

      req.open('GET', 'http://localhost:3000/health')

      req.send()

      req.addEventListener('load', () => {
        this.loading = false
        this.apiRes = {
          status: req.status,
          statusText: req .statusText,
          response: JSON.parse(req.response)
        }
      })
    }
  }
}
</script>

<style>

</style>