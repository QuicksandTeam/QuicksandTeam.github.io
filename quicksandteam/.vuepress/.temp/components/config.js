import { useStyleTag } from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import FontIcon from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import Badge from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import PDF from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-components/lib/client/components/PDF";
import YouTube from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-components/lib/client/components/YouTube";
import BackToTop from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("Badge", Badge);
    app.component("PDF", PDF);
    app.component("YouTube", YouTube);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});