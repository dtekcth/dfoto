import { defineConfig, presetTypography, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	extractors: [extractorSvelte()],
	transformers: [transformerDirectives()],
	presets: [presetUno(), presetTypography()],
	rules: [
		[
			'center',
			{
				'box-sizing': 'content-box',
				'max-width': '65ch',
				'margin-inline': 'auto',
				'padding-inline': '1.5rem'
			}
		]
	]
});
