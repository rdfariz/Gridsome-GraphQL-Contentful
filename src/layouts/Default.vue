<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog/">Static Blog</g-link>
        <g-link class="nav__link" to="/contentful/">Contentful Blog</g-link>
      </nav>
    </header>
    <slot/>
    <Footer v-if="showFooter"/>    
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '~/components/Footer.vue'

export default {
  props: {
    showFooter: Boolean
  },
  components: {
    Footer
  }  
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}


.cardArticle {
  width: 100%;
  height: 100%;
  border: 1.5px solid #f0f0f0;
  position: relative;
  margin: 20px 0px;
  padding: 10px 20px 30px 20px;
}

.titleArticle {
  background: #f6f6f6;
  padding: 10px 20px;
  border-left: 5px solid #5f2ee7;
}

.imgContainer {
  width: 100%;
  height: 100%;
  max-height: 400px;
  background: #f6f6f6;
  position: relative;
  overflow: hidden;
}

.tagArticle {
  background: #f0f0f0;
  padding: 10px 20px;
  margin-right: 5px;
  text-decoration: none;
}

.btnReadMore {
  padding: 10px 20px;
  margin: 10px 0px;
  text-decoration: none;
  color: #ffffff;
  background: #2a9b55;
}

.pager {
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
