const Vue = require('vue/dist/vue.js');
const Menu = require('./Menu');
const Board = require('./Board');
const config = require('./config');

const template = `
<div class="game">
    <Menu v-bind:score="score" />
    <Board :horizontalAmount="horizontalAmount" :tiles="tiles"/>
</div>
`;

const Game = Vue.component('Game', {
    template: template,
    data: () => ({
        score: 0,
        visible: 0,
        horizontalAmount: config.horizontalAmount,
        tiles: config.tiles,
    }),
    methods: {

    }
});