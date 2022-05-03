const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 't', 'v', 'w'];
const vowel = ['a', 'e', 'i', 'o', 'u'];
const specials = ['ch', 'sh', 'x', 'z', 's'];


function stringEndsWithAny(string, matches) {
    for (const match of matches) {
        if (string.endsWith(match)) {
            return true;
        }
    }
}

/**
 * Pluralize a verb
 * @param {string} verb 
 */
function pluralize(string) {
    if (string.endsWith('a')) {
        return string + 's';
    }

    if (string.endsWith('e')) {
        return string + 's';
    }

    if (string.endsWith('o')) {
        return string + 's';
    }

    if (string.endsWith('i')) {
        return string + 'es';
    }

    if (string.endsWith('u')) {
        return string + 'es';
    }

    if (string.endsWith('y')) {
        return string.slice(0, -1) + 'ies';
    }

    if (string.endsWith('s')) {
        return string + 'es';
    }

     if (string.endsWith('x')) {
        return string + 'es';
    }

    if (string.endsWith('z')) {
        return string + 'es';
    }

    if (string.endsWith('ch')) {
        return string + 'es';
    }

    if (string.endsWith('sh')) {
        return string + 'es';
    }

    if (stringEndsWithAny(string, consonant)) {
        return string + 's'
    }
}

export { pluralize }