import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import Presentation from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});