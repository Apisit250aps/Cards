import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
// import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";

createApp(App).use(Flicking).mount('#app');


function onbeforeunload() {
    if (!confirm("คุณต้องการรีเฟรชหน้าเว็บนี้หรือไม่?")) {
        return false;
    }
}

window.onbeforeunload = onbeforeunload;