# taghelper

 >  Helper functions for creating template literal tags.

## Install

````bash
npm install --save taghelper
````

## API

### `merge`

Merges template strings and values arrays into one.

Arguments:

 1. `strings : TemplateStringsArray` — template strings.
 2. `rest : any[]` — template values.
 3. `options : IMergeOptions = {}` — [options](#imergeoptions).

Returns: `any[]` — two arrays merged into one.

### `join`

Joins both template strings and values into one string.

Arguments:

 1. `strings : TemplateStringsArray` — template strings.
 2. `rest : any[]` — template values.
 3. `options : IMergeOptions = {}` — [options](#imergeoptions) for `merge` function.
    NB: `stringify` option is useless here.

Returns: `string` — resulting string.

### `taglike`

Returns `true`, if it looks like supplied parameters
are template strings and values arrays.

Arguments:

 1. `strings : TemplateStringsArray` — template strings.
 2. `rest : any[]` — template values.

Returns: `boolean`.

### `IMergeOptions`

 *  `stringify : boolean = false` — if `true`, template values will be converted to strings.
 *  `raw : boolean = false` — if `true`, raw values of strings will be used.

## License

MIT
