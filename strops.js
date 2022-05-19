// @ts-check

/**
 * Get index pairs of all substrings
 * returns { <startIndex>: <endIndex>, ... }
 *
 * @param {string} str
 * @param {string[]} substrings
 * @returns {Object}
 */
function getIndexesOfAllSubstrings(str, ...substrings) {
	const allSubstrings = {}
	for (const searchingSubstring of substrings) {
		let lastIndex = 0
		while (true) {
			const entryIndex = str.indexOf(searchingSubstring, lastIndex)
			if (entryIndex === -1) break
			lastIndex = entryIndex + searchingSubstring.length
			allSubstrings[entryIndex] = lastIndex
		}
	}
	return allSubstrings
}

/**
 * Get index pairs of all substring between A and B (not includes A and B)
 * returns { <startIndex>: <endIndex>, ... }
 *
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {Object}
 */
function getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b) {
	const allSubstrings = {}
	let lastIndex = 0
	while (true) {
		const indexA = str.indexOf(a, lastIndex) + a.length
		const indexB = str.indexOf(b, lastIndex + a.length)
		if (str.indexOf(a, lastIndex) === -1 || indexB === -1) break

		lastIndex = indexB + b.length
		allSubstrings[indexA] = indexB
	}
	return allSubstrings
}

/**
 * Get index pairs of all substrings from A to B (includes A and B)
 * returns { <startIndex>: <endIndex>, ... }
 *
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {Object}
 */
function getIndexesOfAllSubstringsFromAtoB(str, a, b) {
	const allSubstrings = {}
	let lastIndex = 0
	while (true) {
		const indexA = str.indexOf(a, lastIndex)
		const indexB = str.indexOf(b, lastIndex + a.length) + b.length
		if (indexA === -1 || str.indexOf(b, lastIndex) === -1) break

		lastIndex = indexB
		allSubstrings[indexA] = indexB
	}
	return allSubstrings
}

/**
 * Gets all substrings between A and B (not includes A and B)
 *
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {Array}
 */
function getAllSubstringsFromAtoBExclusive(str, a, b) {
	const arr = []
	const entrySlices = getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b)
	for (const startIndex in entrySlices) {
		arr.push(str.substring(Number(startIndex), entrySlices[startIndex]))
	}
	return arr
}

/**
 * Get all substrings from A to B (includes A and B)
 *
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {Array}
 */
function getAllSubstringsFromAtoB(str, a, b) {
	const arr = []
	const entrySlices = getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b)
	for (const startIndex in entrySlices) {
		arr.push(
			str.substring(
				Number(startIndex) - a.length,
				entrySlices[startIndex] + b.length
			)
		)
	}
	return arr
}

/**
 * Removes all substrings between A and B (not includes A and B)
 *
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function removeAllSubstringsFromAtoBExclusive(str, a, b) {
	let string = ''
	const deletingSlices = getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b)
	for (let i = 0; i < str.length; ) {
		if (deletingSlices[i]) {
			i = deletingSlices[i]
			continue
		}
		string += str[i]
		i++
	}
	return string
}

/**
 * Removes all substrings from A to B (includes A and B)
 *
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function removeAllSubstringsFromAtoB(str, a, b) {
	let string = ''
	const deletingSlices = getIndexesOfAllSubstringsFromAtoB(str, a, b)
	for (let i = 0; i < str.length; ) {
		if (deletingSlices[i]) {
			i = deletingSlices[i]
			continue
		}
		string += str[i]
		i++
	}
	return string
}

/**
 * Removes all substrings
 *
 * @param {string} str
 * @param {string[]} substrings
 * @returns {string}
 */
function removeAllSubstrings(str, ...substrings) {
	let string = ''
	const deletingSlices = getIndexesOfAllSubstrings(str, ...substrings)
	for (let i = 0; i < str.length; ) {
		if (deletingSlices[i]) {
			i = deletingSlices[i]
			continue
		}
		string += str[i]
		i++
	}
	return string
}

/**
 * Replaces all substrings
 *
 * @param {string} str
 * @param {string[]} substrings
 * @returns {string}
 */
function replaceAllSubstrings(str, newSubstring, ...substrings) {
	let string = ''
	const deletingSlices = getIndexesOfAllSubstrings(str, ...substrings)
	for (let i = 0; i < str.length; ) {
		if (deletingSlices[i]) {
			i = deletingSlices[i]
			string += newSubstring
			continue
		}
		string += str[i]
		i++
	}
	return string
}

// Short Aliases:
exports.getIndexes = getIndexesOfAllSubstrings
exports.getIndexesAtoBInner = getIndexesOfAllSubstringsFromAtoBExclusive
exports.getIndexesAtoB = getIndexesOfAllSubstringsFromAtoB

exports.getAtoBInner = getAllSubstringsFromAtoBExclusive
exports.getAtoB = getAllSubstringsFromAtoB

exports.removeAtoBInner = removeAllSubstringsFromAtoBExclusive
exports.removeAtoB = removeAllSubstringsFromAtoB

exports.remove = removeAllSubstrings
exports.replace = replaceAllSubstrings
