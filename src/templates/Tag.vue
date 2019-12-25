<template>
    <Layout>
        <h2>Postingan dengan tag: {{$page.tag.id}}</h2>
        <article class="cardArticle" v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
            <h2>{{edge.node.title}}</h2>
            <p>{{edge.node.excerpt}}</p>
            <br>
            <span class="tagArticle" v-for="tag in edge.node.tags">#{{tag.id}} </span><br><br>
            <g-link :to="edge.node.path">Read More</g-link>
        </article>
    </Layout>
</template>

<page-query>
query($path: String) {
  tag(path: $path) {
    id,
    belongsTo {
      edges {
        node {
          ... on Post {
            id,
            title,
            excerpt,
            tags {
                id,
                path
            },
            path,
            coverImages(width: 400, quality: 100, blur: 1)
          }
        }
      }
    }
  }
}
</page-query>