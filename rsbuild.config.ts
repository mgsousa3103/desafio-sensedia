import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components';

export default defineConfig({
    plugins: [pluginReact(), pluginStyledComponents()],
    html: {
        template: './src/index.html',
    },
});
