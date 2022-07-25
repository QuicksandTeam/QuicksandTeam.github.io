import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWHintPopup from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-pwa2/lib/client/components/SWHintPopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWHintPopup,
    
  ],
});