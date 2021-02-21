<template>
    <div class="vendor-filter">


        <div class="vendor-filter__header">
            <div class="vendor-filter__title flex">
                Фильтр:
                <div
                    @click="changeType(types.TYPE_ALBUM)"
                    class="vendor-filter__name"
                >
                    По альбомам
                </div>
                <div
                    @click="changeType(types.TYPE_FAVORITE)"
                    class="vendor-filter__name"
                >
                    Избранное
                </div>
            </div>
        </div>



        <div class="vendor-filter__scroll-wrap">
            <div class="vendor-filter__scroll no-scrollbar">
                <div class="vendor-filter__list">

                    <div class="vendor-filter__masonry">

                        <GroupItems
                            v-for="(arr, key) in array"
                            :key="`label_${key}`"
                            :array="arr"
                            :name="key"
                        />

                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script src="./script.js"></script>
<style lang="scss">
@import './style.scss';
</style>
