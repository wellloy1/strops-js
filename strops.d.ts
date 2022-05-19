/**
 * Get index pairs of all substrings
 * returns { <startIndex>: <endIndex>, ... }
 */
declare function getIndexesOfAllSubstrings(
	str: string,
	...substrings: string[]
): {}

/**
 * Get index pairs of all substrings between A and B (not includes A and B)
 * returns { <startIndex>: <endIndex>, ... }
 */
declare function getIndexesOfAllSubstringsFromAtoBExclusive(
	str: string,
	a: string,
	b: string
): {}

/**
 * Get index pairs of all substrings from A to B (includes A and B)
 * returns { <startIndex>: <endIndex>, ... }
 */
declare function getIndexesOfAllSubstringsFromAtoB(
	str: string,
	a: string,
	b: string
): {}

/**
 * Gets all substrings between A and B (not includes A and B)
 */
declare function getAllSubstringsFromAtoBExclusive(
	str: string,
	a: string,
	b: string
): string[]

/**
 * Get all substrings from A to B (includes A and B)
 */
declare function getAllSubstringsFromAtoB(
	str: string,
	a: string,
	b: string
): string[]

/**
 * Removes all substrings between A and B (not includes A and B)
 */
declare function removeAllSubstringsFromAtoBExclusive(
	str: string,
	a: string,
	b: string
): string

/**
 * Removes all substrings from A to B (includes A and B)
 */
declare function removeAllSubstringsFromAtoB(
	str: string,
	a: string,
	b: string
): string

/**
 * Removes all substrings
 */
declare function removeAllSubstrings(
	str: string,
	...substrings: string[]
): string

/**
 * Replaces all substrings
 */
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
