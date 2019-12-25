<template>
    <layout :showFooter="false">
        <h1>Static Blog</h1>
        <div class="cardArticle" v-for="edge in $page.allPost.edges" :key="edge.node.id">
            <h2 class="titleArticle">{{edge.node.title}}</h2>
            <p>{{edge.node.excerpt}}</p>
            <span>Tag: <g-link :to="tag.path" class="tagArticle" v-for="tag in edge.node.tags">#{{tag.id}} </g-link></span><br><br>
            <div class="imgContainer">
                <g-image style="width: 100%" :src="edge.node.coverImages"></g-image>
            </div>
            <br>
            <g-link :to="edge.node.path" class="btnReadMore">Read More</g-link>
        </div>
        <Pager :info="$page.allPost.pageInfo" linkClass="pager"/>
    </layout>
</template>

<page-query>
query($page: Int){
  allPost(perPage: 3, page: $page) @paginate {
    pageInfo {
        totalPages,
        currentPage
    }, 
    edges {
      node {
        id,
        title,
        excerpt,
        tags {
            id,
            path
        },
        path,
        coverImages
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
    metaInfo: {
        title: 'Static Blog'
    },
    components: {
        Pager
    }
}
</script>