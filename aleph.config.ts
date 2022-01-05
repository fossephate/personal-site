import type { Config } from "aleph/types";
// import windicss from "https://deno.land/x/aleph_plugin_windicss@v0.0.2/plugin.ts";
import tailwindcss from "https://deno.land/x/calmery_chan_aleph_plugin_tailwindcss/plugin.ts";

export default <Config>{
  plugins: [tailwindcss],
};
