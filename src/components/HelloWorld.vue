<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is a paragraph.
    </p>
    <h3>Header3 - 1</h3>
    <ul>
      <li>list item 1</li>
      <li>list item 2</li>
    </ul>
    <h3>Header3 - 2</h3>
    <ul>
      <li>list item 1</li>
      <li>list item 2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
