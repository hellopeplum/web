<template>
    <div>

        <div class="section columns px-2 mt-6">
            <div class="column is-5-desktop is-4-widescreen is-8-tablet is-12-mobile">
                <p class="title is-3-touch">
                    Hello, we are Peplum
                    <br>
                    <br>

                    We partner with brands to create unforgettable worlds and content that stands out.
                    <br>
                    <br>

                    Our innovative approach places emotion front and centre, allowing us to build out a unique style for
                    every story we tell.
                </p>
                <br>
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <nuxt-link to="#recent-works" class="has-text-dark is-clickable">
                                <p class="heading">WHAT WE DO</p>
                                <p class="is-size-5-tablet is-6-touch is-underlined">↓ Recent works</p>
                            </nuxt-link>

                        </div>
                        <div class="level-item">

                            <nuxt-link class="has-text-dark">
                                <p class="heading">PROJECT ENQUIRIES</p>
                                <p class="is-size-5-tablet is-6-touch is-underlined">hellopeplum@gmail.com ↗</p>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hero-work id="recent-works"/>
    </div>
</template>
<script setup></script>