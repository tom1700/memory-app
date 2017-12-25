const Vue = require('vue/dist/vue.js');
const constants = require('./constants');

const template = `
<div
    class="tile"
    v-bind:style="tileSize"
    v-on:click="tileClicked(tile)"
>
    <div :class="{ content: true, overlayed: !tile.visible }">
        <div class="sentence" v-if="tile.type === tileType.SENTENCE">
            {{tile.name}}
        </div>
        <div
            class="image"
            v-if="tile.type === tileType.IMAGE"
            :style="{ backgroundImage: imagePath }"
        />
    </div>
</div>
</div>
`;

const Tile = Vue.component('Tile', {
    props: ['height', 'flex', 'tile', 'tileClicked'],
    template: template,
    data: () => ({
        tileType: constants.tileType,
    }),
    computed: {
        tileSize: function() {
            return {
                ['flex-basis']: `${this.flex}%`,
                height: `${this.height}px`
            }
        },
        imagePath: function() {
            return `url(resources/${this.tile.imageSrc})`
        }
    }
});