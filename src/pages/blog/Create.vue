<template>
    <layout :showFooter="true">
        <h1>Create your article</h1>
        <input type="text" placeholder="Title Article">
        <br><br>
        <textarea cols="30" rows="10"></textarea>
        <br>
        <button type="submit">Submit</button>
    </layout>
</template>
<script>
export default {
    metaInfo: {
        title: 'Create Article'
    }
}
</script>