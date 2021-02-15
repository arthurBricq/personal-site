/**
 * This function transforms a title to an id (lowercase, dash delimited)
 * @param {string} title: the title to become an id of HTML tag
 */
export function titleToId(title) {
    return title.toLowerCase().replace(/\s+/g, '-')
}