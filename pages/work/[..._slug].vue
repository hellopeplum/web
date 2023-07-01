<template>
    <main class="section px-0">
        <div class="columns">
            <!-- <div class="column is-4">
                <div class="is-sticky">

                    <figure class="image has-background-secondary is-rounded  is-128x128">
                        <img src="" class="is-rounded" alt="">
                    </figure>
                    <br>
                    <p class="heading">BADASS DESIGNER</p>
                    <p class="title is-size-5">
                        Dhruv Saxena
                    </p>
                </div>
                </div> -->
            <div class="column is-8 is-offset-4-desktop">
                <article class="prose">
                    <ContentDoc v-slot="{ doc }">
                        <h1 class="title is-size-2-desktop">{{ doc.title }}</h1>
                        <figure class="figure image is-16by9">
                            <img :src="doc.cover" alt="">
                        </figure>
                        <br>
                        <h2 class="subtitle">{{ doc.description }}</h2>
                        br
                        <!-- <ContentRenderer :value="doc" /> -->
                    </ContentDoc>
                </article>

            </div>
        </div>
    </main>
</template>

<script setup>

const { posts } = await useAsyncData('work', () => { queryContent('work').findAll(); console.log(posts) })
</script>