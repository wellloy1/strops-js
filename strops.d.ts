declare function getIndexesOfAllSubstrings(
	str: string,
	...substrings: string[]
): {}
declare function getIndexesOfAllSubstringsFromAtoBExclusive(
	str: string,
	a: string,
	b: string
): {}
declare function getIndexesOfAllSubstringsFromAtoB(
	str: string,
	a: string,
	b: string
): {}
declare function getAllSubstringsFromAtoBExclusive(
	str: string,
	a: string,
	b: string
): string[]
declare function getAllSubstringsFromAtoB(
	str: string,
	a: string,
	b: string
): string[]
declare function removeAllSubstringsFromAtoBExclusive(
	str: string,
	a: string,
	b: string
): string
declare function removeAllSubstringsFromAtoB(
	str: string,
	a: string,
	b: string
): string
declare function removeAllSubstrings(
	str: string,
	...substrings: string[]
): string
declare function replaceAllSubstrings(
	str: string,
	newSubstring: string,
	...substrings: string[]
): string

export {
	getIndexesOfAllSubstrings as getIndexes,
	getIndexesOfAllSubstringsFromAtoBExclusive as getIndexesAtoBInner,
	getIndexesOfAllSubstringsFromAtoB as getIndexesAtoB,
	getAllSubstringsFromAtoBExclusive as getAtoBInner,
	getAllSubstringsFromAtoB as getAtoB,
	removeAllSubstringsFromAtoBExclusive as removeAtoBInner,
	removeAllSubstringsFromAtoB as removeAtoB,
	removeAllSubstrings as remove,
	replaceAllSubstrings as replace,
}
