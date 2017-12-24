const Vue = require('vue/dist/vue.js');
const config = require('./config');
const Tile = require('./Tile');

const template = `
<div class="board">
    <Tile v-bind:width="100" />
</div>
`;

const Board = Vue.component('Board', {
    props: ['score'],
    template: template,

});