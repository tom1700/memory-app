const Vue = require('vue/dist/vue.js');
const Menu = require('./Menu');

const template = `
<div class="game">
    <Menu v-bind:score="score"></Menu>
</div>
`;

const Game = Vue.component('Game', {
    template: template,
    data:() => ({
        score: 0,
    })
});