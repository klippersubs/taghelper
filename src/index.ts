/**
 * Options for `merge` function.
 * @see merge
 */
export interface IMergeOptions {
    /**
     * If `true`, template values will be converted to strings.
     */
    stringify? : boolean;

    /**
     * If `true`, raw values of strings will be used.
     */
    raw? : boolean;
}

/**
 * Merge template strings and values arrays into one.
 * @param {string[]} strings — template strings.
 * @param {Array} rest — template values.
 * @param {IMergeOptions} [options] — options.
 * @returns {Array} — two arrays merged into one.
 */
export function merge (strings : TemplateStringsArray, rest : any[], options : IMergeOptions = {}) : any[] {
    const buff : any[] = [];

    strings.forEach((item : any, index : number) => {
        buff.push(options.raw ? item.raw : item);

        if (index < rest.length) {
            buff.push(options.stringify ? '' + (rest[ index ] as string) : rest[ index ]);
        }
    });

    return buff;
}

/**
 * Joins both template strings and values into one string.
 * @param {string[]} strings — template strings.
 * @param {Array} rest — template values.
 * @param {IMergeOptions} [options] — options for `merge` function. NB: `stringify` option is useless here.
 * @returns {string} — resulting string.
 * @see merge
 */
export function join (strings : TemplateStringsArray, rest : any[], options : IMergeOptions = {}) : string {
    return merge(strings, rest, options).join('');
}

/**
 * Returns `true`, if it looks like supplied parameters are template strings and values arrays.
 * @param {string[]} strings — template strings.
 * @param {Array} rest — template values.
 * @returns {boolean}
 */
export function taglike (strings : TemplateStringsArray | any, rest : any[]) : boolean {
    return Array.isArray(strings) && Array.isArray(rest);
}
