<template>
    <Layout>
        <div v-html="$page.post.content"></div>
        <g-image :src="$page.post.coverImages"></g-image>
    </Layout>
</template>

<page-query>
query($path: String) {
  post(path: $path) {
    content,
    coverImages(width: 400)
  }
}
</page-query>