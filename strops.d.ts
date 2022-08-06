/**
 * Finds index pairs of all substrings which match to arguments from  '...substringsToFind'.
 * Returns { startIndex: endIndex, ... }
 */
declare function getIndexes(
	sourceString: string,
	...substringsToFind: string[]
): {}

/**
 * Finds index pairs of all substrings from A to B (including A and B).
 * Returns { startIndex: endIndex, ... }
 */
declare function getIndexesAtoB(sourceString: string, a: string, b: string): {}

/**
 * Finds index pairs of all substring between A and B (not including A and B)
 * Returns { startIndex: endIndex, ... }
 */
declare function getIndexesAtoBInner(
	sourceString: string,
	a: string,
	b: string
): {}

/**
 * Finds all substrings from A to B (including A and B)
 */
declare function getAtoB(sourceString: string, a: string, b: string): string[]

/**
 * Finds all substrings between A and B (not including A and B)
 */
declare function getAtoBInner(
	sourceString: string,
	a: string,
	b: string
): string[]

/**
 * Removes all substrings which match to arguments from '...substringsToRemove'
 */
declare function remove(
	sourceString: string,
	...substringsToRemove: string[]
): string

/**
 * Removes all substrings between A and B (not including A and B)
 */
declare function removeAtoBInner(
	sourceString: string,
	a: string,
	b: string
): string

/**
 * Removes all substrings from A to B (including A and B)
 */
declare function removeAtoB(sourceString: string, a: string, b: string): string

/**
 * Replaces all substrings which match to arguments from '...substringsToReplace' with 'newSubstring'
 */
declare function replace(
	sourceString: string,
	newSubstring: string,
	...substringsToReplace: string[]
): string

export {
	getIndexes,
	getIndexesAtoB,
	getIndexesAtoBInner,
	getAtoB,
	getAtoBInner,
	remove,
	removeAtoBInner,
	removeAtoB,
	replace,
}
