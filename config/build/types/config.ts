export type BuildMode = "production" | "development";

export type BuildEnv = {
  port: number;
  mode: BuildMode;
};

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export type BuildOptions = {
  paths: BuildPaths;
  mode: BuildMode;
  port: number;
  isDev: boolean;
};
