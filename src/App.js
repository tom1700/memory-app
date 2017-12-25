requirejs.config({
    paths: {
        Vue: '../lib/vue'
    }
});

requirejs(['Vue', './Game'], function(Vue) {
    const app = new Vue({
        el: '.app'
    });
});