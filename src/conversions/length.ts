/**
 * Conversions for time.
 * @private
 */
export const length = [
	{aliases: ['meter', 'metre', 'm'], ratio: 1},
	{aliases: ['petameter', 'petameters', 'Pm'], ratio: 1e15},
	{aliases: ['terameter', 'terameters', 'Tm'], ratio: 1e12},
	{aliases: ['gigameter', 'gigameters', 'Gm'], ratio: 1e9},
	{aliases: ['megameter', 'megameters', 'Mm'], ratio: 1e6},
	{aliases: ['kilometer', 'kilometers', 'km'], ratio: 1e3},
	{aliases: ['hectometer', 'hectometers', 'hm'], ratio: 1e2},
	{aliases: ['decameter', 'decameters', 'dam'], ratio: 1e1},
	{aliases: ['decimeter', 'decimeters', 'dm'], ratio: 0.1},
	{aliases: ['centimeter', 'centimeters', 'cm'], ratio: 0.01},
	{aliases: ['millimeter', 'millimeters', 'mm'], ratio: 0.001},
	{aliases: ['micrometer', 'micrometers', 'μm'], ratio: 0.000001},
	{aliases: ['nanometer', 'nanometers', 'nm'], ratio: 1e-9},
	{aliases: ['picometer', 'picometers', 'pm'], ratio: 1e-12},
	{aliases: ['femtometer', 'femtometers', 'fm'], ratio: 1e-15}
] as const;
