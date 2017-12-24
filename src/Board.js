const Vue = require('vue/dist/vue.js');
const Tile = require('./Tile');

const template = `
<div class="board" ref="board">
    <Tile
        v-for="tile in tiles"
        :tile="tile"
        :key="tile.key"
        :height="tileHeight"
        :flex="tileFlexBasis"
        :tileClicked="tileClicked"
    />
</div>
`;

const Board = Vue.component('Board', {
    props: ['score', 'horizontalAmount', 'tiles', 'tileClicked'],
    template: template,
    mounted: function() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.getBoardWidth);
            this.getBoardWidth()
        });
    },
    data: function() {
        return {
            boardWidth: 0,
        };
    },
    methods: {
        getBoardWidth: function() {
            this.boardWidth = this.$refs.board.clientWidth;
        }
    },
    computed: {
        tileHeight: function() {
            return Math.floor(this.boardWidth / this.horizontalAmount);
        },
        tileFlexBasis: function() {
            return Math.floor(100 / this.horizontalAmount);
        }
    }
});