import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  return {
    open: {
      app: "Google Chrome",
    },
    port: options.port,
    historyApiFallback: true,
  };
};
