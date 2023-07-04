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
            <div class="column is-9 is-offset-3-desktop">
                <article class="prose">
                    <ContentDoc v-slot="{ doc }">
                        <h1 class="title is-size-2-desktop">{{ doc.title }}</h1>
                        <figure class="figure image">
                            <img :src="doc.cover" alt="">
                        </figure>
                        <br>
                        <div class="columns">
                            <div class="column is-7">

                                <h2 class="subtitle is-size-4-desktop is-size-5-touch">{{ doc.description }}</h2>
                            </div>
                        </div>
                        <br>
                        <ContentRenderer class="is-size-5-desktop is-size-6-touch" :value="doc" />
                    </ContentDoc>
                </article>
                <br>
                <br>
                <nuxt-link to="/work" class="title my-6 ">← Back to Projects </nuxt-link>
            </div>

        </div>
    </main>
</template>

<script setup>

const { posts } = await useAsyncData('work', () => { queryContent('work').findAll(); console.log(posts) })
</script>