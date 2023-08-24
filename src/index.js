import san from "san";
import { Button } from "santd";
import "santd/dist/santd.css";
import "./index.css";

const App = san.defineComponent({
  initData() {
    return {
      date: null,
      loading: false
    };
  },
  components: {
    "s-button": Button
  },
  enterLoading() {
    this.data.set("loading", { delay: 1000 });
  },
  template: `<div style="width: 400px; margin: 100px auto;">
              <s-button type="primary" loading="{{loading}}" on-click="enterLoading">
                Click me!
              </s-button>
    </div>`
});

const app = new App();
app.attach(document.body);
