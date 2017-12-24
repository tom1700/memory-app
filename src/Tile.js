const Vue = require('vue/dist/vue.js');
const constants = require('./constants');

const template = `
<div
    class="tile"
    v-bind:style="tileSize"
>
    <div class="content">
        <div class="sentence"v-if="tile.type === tileType.SENTENCE">
            {{tile.name}}
        </div>
        <div v-if="tile.type === tileType.IMAGE" >
            {{tile.name}} image
        </div>
    </div>
</div>
</div>
`;

const Tile = Vue.component('Tile', {
    props: ['height', 'flex', 'tile'],
    template: template,
    data: () => ({
        tileType: constants.tileType
    }),
    computed: {
        tileSize: function() {
            return {
                ['flex-basis']: `${this.flex}%`,
                height: `${this.height}px`
            }
        }
    }
});