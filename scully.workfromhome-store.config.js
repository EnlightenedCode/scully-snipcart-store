import { setPluginConfig, ScullyConfig, prod } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/plugins/google-analytics';

const defaultPostRenderers = [];

if (prod) {
  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-#########-1' });
  defaultPostRenderers.push(GoogleAnalytics);
}

exports.config = {
  projectRoot: "./src",
  projectName: "workfromhome-store",
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
        type: 'json',
        productId: {
            url: 'https://scully-snipcart-api.netlify.app/products.json',
            property: 'id'
        }
    }
  }
};