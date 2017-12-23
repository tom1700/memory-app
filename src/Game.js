const Vue = require('vue/dist/vue.js');
const Menu = require('./Menu');
const Board = require('./Board');

const template = `
<div class="game">
    <Menu score="{{score}}"></Menu>
    <Board></Board>
</div>
`;

const Game = Vue.component('Game', {
    template: template,
    data: {
        score: 0,
    }
});