const Vue = require('vue/dist/vue.js');

const template = `
<div
    class="tile"
    v-bind:style="tileSize"
>
    <div class="content overlayed">Tile</div>
</div>
`;

const Tile = Vue.component('Tile', {
    props: ['height', 'flex'],
    template: template,
    computed: {
        tileSize: function() {
            return {
                ['flex-basis']: `${this.flex}%`,
                height: `${this.height}px`
            }
        }
    }
});