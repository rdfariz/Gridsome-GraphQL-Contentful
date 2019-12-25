<template>
    <Layout>
        <h1>Blog From Contentful</h1>
        <div class="cardArticle" v-for="edge in $page.allContentfulBlogPost.edges" :key="edge.node.id">
            <h2 class="titleArticle">{{edge.node.title}}</h2>
            <p>{{excerpt(edge.node.description)}}</p>
            <div class="imgContainer">
                <g-image style="width: 100%" :src="edge.node.image.file.url"></g-image>
            </div>
            <br>
            <g-link :to="edge.node.path" class="btnReadMore">Read More</g-link>
        </div>
        <Pager :info="$page.allContentfulBlogPost.pageInfo" linkClass="pager"/>
    </Layout>
</template>

<page-query>
query($page: Int){
  allContentfulBlogPost(perPage: 3, page: $page) @paginate {
    pageInfo {
        totalPages,
        currentPage
    }, 
    edges {
      node {
        id
        path
        title
        description
        date
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
    metaInfo: {
        title: 'Contentful Blog'
    },
    components: {
        Pager
    },
    methods: {
        excerpt(str){
            return str.substring(0,15) + "...";
        }
    }
}
</script>