const Vue = require('vue/dist/vue.js');

const template = `
<div
    class="tile"
    v-bind:style="tileSize"
    ref="tile"
>
Tile
</div>
`;

const Tile = Vue.component('Tile', {
    props: ['width'],
    template: template,
    computed: {
        tileSize: function() {
            return {
                width: `${this.width}px`,
                height: `${this.width}px`
            }
        }
    }
});