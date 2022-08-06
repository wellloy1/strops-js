// @ts-check

/**
 * Finds index pairs of all substrings which match to arguments from  '...substringsToFind'.
 * Returns { startIndex: endIndex, ... }
 *
 * @param {string} sourceString
 * @param {string[]} substringsToFind
 * @returns {Object}
 */
function getIndexes(sourceString, ...substringsToFind) {
	const allSubstrings = {}
	for (const substringToFind of substringsToFind) {
		let lastIndex = 0
		while (true) {
			const entryIndex = sourceString.indexOf(substringToFind, lastIndex)
			if (entryIndex === -1) break
			lastIndex = entryIndex + substringToFind.length
			allSubstrings[entryIndex] = lastIndex
		}
	}
	return allSubstrings
}

/**
 * Finds index pairs of all substring between A and B (not including A and B)
 * Returns { startIndex: endIndex, ... }
 *
 * @param {string} sourceString
 * @param {string} a
 * @param {string} b
 * @returns {Object}
 */
function getIndexesAtoBInner(sourceString, a, b) {
	const allSubstrings = {}
	let lastIndex = 0
	while (true) {
		const indexA = sourceString.indexOf(a, lastIndex) + a.length
		const indexB = sourceString.indexOf(b, lastIndex + a.length)
		if (sourceString.indexOf(a, lastIndex) === -1 || indexB === -1) break

		lastIndex = indexB + b.length
		allSubstrings[indexA] = indexB
	}
	return allSubstrings
}

/**
 * Finds index pairs of all substrings from A to B (including A and B).
 * Returns { startIndex: endIndex, ... }
 *
 * @param {string} sourceString
 * @param {string} a
 * @param {string} b
 * @returns {Object}
 */
function getIndexesAtoB(sourceString, a, b) {
	const allSubstrings = {}
	let lastIndex = 0
	while (true) {
		const indexA = sourceString.indexOf(a, lastIndex)
		const indexB = sourceString.indexOf(b, lastIndex + a.length) + b.length
		if (indexA === -1 || sourceString.indexOf(b, lastIndex) === -1) break

		lastIndex = indexB
		allSubstrings[indexA] = indexB
	}
	return allSubstrings
}

/**
 * Finds all substrings between A and B (not including A and B)
 *
 * @param {string} sourceString
 * @param {string} a
 * @param {string} b
 * @returns {Array}
 */
function getAtoBInner(sourceString, a, b) {
	const arr = []
	const entrySlices = getIndexesAtoBInner(sourceString, a, b)
	for (const startIndex in entrySlices) {
		arr.push(
			sourceString.substring(Number(startIndex), entrySlices[startIndex])
		)
	}
	return arr
}

/**
 * Finds all substrings from A to B (including A and B)
 *
 * @param {string} sourceString
 * @param {string} a
 * @param {string} b
 * @returns {Array}
 */
function getAtoB(sourceString, a, b) {
	const arr = []
	const entrySlices = getIndexesAtoBInner(sourceString, a, b)
	for (const startIndex in entrySlices) {
		arr.push(
			sourceString.substring(
				Number(startIndex) - a.length,
				entrySlices[startIndex] + b.length
			)
		)
	}
	return arr
}

/**
 * Removes all substrings which match to arguments from '...substringsToRemove'
 *
 * @param {string} sourceString
 * @param {string[]} substringsToRemove
 * @returns {string}
 */
function remove(sourceString, ...substringsToRemove) {
	let string = ''
	const removingSlices = getIndexes(sourceString, ...substringsToRemove)
	for (let i = 0; i < sourceString.length; ) {
		if (removingSlices[i]) {
			i = removingSlices[i]
			continue
		}
		string += sourceString[i]
		i++
	}
	return string
}

/**
 * Removes all substrings between A and B (not including A and B)
 *
 * @param {string} sourceString
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function removeAtoBInner(sourceString, a, b) {
	let string = ''
	const removingSlices = getIndexesAtoBInner(sourceString, a, b)
	for (let i = 0; i < sourceString.length; ) {
		if (removingSlices[i]) {
			i = removingSlices[i]
			continue
		}
		string += sourceString[i]
		i++
	}
	return string
}

/**
 * Removes all substrings from A to B (including A and B)
 *
 * @param {string} sourceString
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function removeAtoB(sourceString, a, b) {
	let string = ''
	const removingSlices = getIndexesAtoB(sourceString, a, b)
	for (let i = 0; i < sourceString.length; ) {
		if (removingSlices[i]) {
			i = removingSlices[i]
			continue
		}
		string += sourceString[i]
		i++
	}
	return string
}

/**
 * Replaces all substrings which match to arguments from ...substringsToReplace
 *
 * @param {string} sourceString
 * @param {string} newSubstring
 * @param {string[]} substringsToReplace
 * @returns {string}
 */
function replace(sourceString, newSubstring, ...substringsToReplace) {
	let string = ''
	const removingSlices = getIndexes(sourceString, ...substringsToReplace)
	for (let i = 0; i < sourceString.length; ) {
		if (removingSlices[i]) {
			i = removingSlices[i]
			string += newSubstring
			continue
		}
		string += sourceString[i]
		i++
	}
	return string
}

module.exports = {
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
