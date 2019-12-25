<template>
    <footer>
        <hr>
        Copyright {{year}} -
        <a href="https://instagram.com/rd_fariz" target="_blank" rel="noopener">Instagram</a>/ 
        <a href="https://github.com/rdfariz" target="_blank" rel="noopener">Github</a>
    </footer>
</template>
<script>
export default {
    data: ()=> ({
        href: "https://github.com/rdfariz"
    }),
    computed: {
        year(){
            let year = new Date().getFullYear()
            return year
        }
    }
}
</script>