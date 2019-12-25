<template>
    <article class="cardArticle" :key="id">
        <h2>{{title}}</h2>
        <p>{{excerpt}}</p>
        <g-image :src="coverImages"></g-image>
        <br><br>
        <g-link :to="tag.path" class="tagArticle" v-for="tag in tags">#{{tag.id}} </g-link><br><br>
        <g-link :to="path">Read More</g-link>
    </article>
</template>
<script>
export default {
    props: {
        id: String,
        title: String,
        excerpt: String,
        coverImages: Object,
        tags: Array,
        path: String
    }
}
</script>