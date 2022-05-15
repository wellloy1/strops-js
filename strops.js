// Get index pairs of all substrings
// returns <object>, key: startIndex, value: endIndex
function getIndexesOfAllSubstrings (str, ...substrings) {
	const allSubstrings = {}
	for (let searchingSubstring of substrings) {
		let lastIndex = 0
		while (true) {
			let entryIndex = str.indexOf(searchingSubstring, lastIndex)
			if (entryIndex == -1) break
			lastIndex = entryIndex + searchingSubstring.length
			allSubstrings[entryIndex] = lastIndex	
		}	
	}	
	return allSubstrings
}	

// Get all index slices of all substring between A and B (default: inclusive)
// returns <object> <key: startIndex, value: endIndex>
function getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b) {
	const allSubstrings = {}
	let lastIndex = 0
	while (true) {
		let a_index = str.indexOf(a, lastIndex) + a.length
		let b_index = str.indexOf(b, lastIndex + a.length)
		if (str.indexOf(a, lastIndex) == -1 || b_index == -1) break

		lastIndex = b_index + b.length
		allSubstrings[a_index] = b_index	
	}	
	return allSubstrings
}

// Get all index slices of all substring from A to B (includes A and B)
// returns <object> <key: startIndex, value: endIndex>
function getIndexesOfAllSubstringsFromAtoB(str, a, b) {
	const allSubstrings = {}
	let lastIndex = 0
	while (true) {
		let a_index = str.indexOf(a, lastIndex)
		let b_index = str.indexOf(b, lastIndex + a.length) + b.length
		if (a_index == -1 || str.indexOf(b, lastIndex) == -1) break

		lastIndex = b_index
		allSubstrings[a_index] = b_index	
	}	
	return allSubstrings
}

// Get all substrings between A and B (not includes A and B)
// returns <array>
function getAllSubstringsFromAtoBExclusive(str, a, b) {
	const arr = []
	const entrySlices = getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b)
		for (let startIndex in entrySlices) {
			arr.push(str.substring(startIndex, entrySlices[startIndex]))
		}	
	return arr
}

// Get all substrings from A to B (includes A and B)
// returns <array>
function getAllSubstringsFromAtoB(str, a, b) {
	const arr = []
	const entrySlices = getIndexesOfAllSubstringsFromAtoBExclusive(str, a, b)
		for (let startIndex in entrySlices) {
			arr.push(str.substring(startIndex - a.length, entrySlices[startIndex] + b.length))
		}	
	return arr
}

// Removes all substrings between A and B (not includes A and B)
// returns <string>
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

// Removes all substrings from A to B (includes A and B)
// returns <string>
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

// Removes all substrings
// returns <string>
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

// Replaces all substrings
// returns <string>
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
