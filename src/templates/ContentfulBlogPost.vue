<template>
    <Layout>
        <article class="cardArticle">
            <h2>{{$page.contentfulBlogPost.title}}</h2>
            <div class="imgContainer" style="width: 60%; height: 100%; background: #f0f0f0; position: relative; overflow: hidden">
                <g-image style="width: 100%" :src="$page.contentfulBlogPost.image.file.url"></g-image>
                {{$page.contentfulBlogPost.image.title}}    
            </div>
            <p v-html="$page.contentfulBlogPost.description"></p>
        </article>
    </Layout>
</template>

<page-query>
query($path: String) {
  contentfulBlogPost(path: $path) {
    id,
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
</page-query>