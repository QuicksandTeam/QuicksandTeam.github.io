import { defineClientConfig } from "@vuepress/client";
import Presentation from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});