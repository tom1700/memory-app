const Vue = require('vue/dist/vue.js');

const template = `
<div class="menu">
    Your score is: {{score}}
</div>
`;

const Board = Vue.component('Board', {
    props: ['score'],
    template: template
});