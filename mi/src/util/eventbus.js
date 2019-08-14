import Vue from 'vue';
const eventBus = new Vue();

export default {
    $emit(eventName, data) {
        eventBus.$emit(eventName, data);
    },
    $on(eventName, fn) {
        eventBus.$on(eventName, fn);
        return function() {
            eventBus.$off(eventName, fn)
        }
    }
}
