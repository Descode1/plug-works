import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import packageJson from "./package.json" with { type:"json" };

export default [
    {
        input: "src/index.ts",
        external: [
            'react',
            'react-dom',
            'styled-components',
        ],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled'
                }
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            nodeResolve({
                preferBuiltins: false
            }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
                declaration: false,
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

    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [
            /\.css$/,
            'react',
            'react-dom', 
            'styled-components'
        ]
    }
];