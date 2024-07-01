import { defineAsyncComponent } from 'vue';

export default {
  install: (app: any) => {
    app.component(
      'ScrollableCode',
      defineAsyncComponent(() => import('./components/ScrollableCode.vue'))
    );
  },
};
