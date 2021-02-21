<template>
    <div class="vendor-filter__masonry__col">


        <div class="vendor-filter__masonry__label">
            {{name}}
        </div>

        <div
            class="vendor-filter__masonry__item flex nowrap"
            v-for="item in array"
            :key="item.id"
        >

            <img
                class="vendor-filter__masonry__img"
                :src="item.thumbnailUrl"
                alt=""
            />

            <img
                class="vendor-filter__masonry__img action click"
                :src="require(`@/static/img/${favoriteIcon(item.id)}.svg`)"
                alt=""
                @click="handleFavorite(item.id)"
            />

            <div class="nowrap">
                {{item.title}}
            </div>

        </div>


    </div>
</template>

<script src="./script.js"></script>
<style lang="scss">
@import './style.scss';
</style>
