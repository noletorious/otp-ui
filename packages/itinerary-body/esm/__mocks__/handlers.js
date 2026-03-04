import { http } from "msw";
import mapillary from "./mapillary.json";

// This faked endpoint will always return the same ID
export default [http.get("https://graph.mapillary.com/images", function () {
  return new Response(JSON.stringify(mapillary));
})];
//# sourceMappingURL=handlers.js.map