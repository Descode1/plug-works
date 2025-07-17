import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import packageJson from "./package.json" with { type:"json" };

export default [
    // JavaScript bundle
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
                declaration: false, // Disable declarations here
                outDir: "./dist",
                rootDir: "./src",
            }),
            postcss({
                extensions: [".css"], 
                inject: true,
                extract: false
            })
        ],
    },
    // TypeScript declarations bundle
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/]
    }
];