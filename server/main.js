import { onPageLoad } from "meteor/server-render";
import { BrowserPolicy } from 'meteor/browser-policy';

const nonce = 'whatever';
BrowserPolicy.content.allowScriptOrigin(`nonce-${nonce}`);

WebAppInternals.setInlineScriptsAllowed(false);

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById(
    "server-render-target",
    `Server time: ${new Date}`
  );
});
