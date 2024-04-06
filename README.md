# itertools

[![jsr](https://img.shields.io/jsr/v/%40lambdalisue/itertools?logo=javascript&logoColor=white)](https://jsr.io/@lambdalisue/itertools)
[![denoland](https://img.shields.io/github/v/release/lambdalisue/deno-itertools?logo=deno&label=denoland)](https://github.com/lambdalisue/deno-itertools/releases)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/itertools/mod.ts)
[![Test](https://github.com/lambdalisue/deno-itertools/actions/workflows/test.yml/badge.svg)](https://github.com/lambdalisue/deno-itertools/actions/workflows/test.yml)

A TypeScript port of Python's awesome [itertools] standard library.

This is an standalone version of [nvie/itertools.js] for using under the [Deno]
environment.

[Deno]: https://deno.land/
[itertools]: https://docs.python.org/3/library/itertools.html
[more-itertools]: https://pypi.org/project/more-itertools/
[nvie/itertools.js]: https://github.com/nvie/itertools.js

## Example

```typescript
import { enumerate } from "https://deno.land/x/itertools@$MODULE_VERSION/mod.ts";

console.log([...enumerate(["hello", "world"])]);
// [0, 'hello'], [1, 'world']
```

This module provides more functions ported from Python's builtin functions,
[itertools], [more-itertools], and more. In other words, all functions provided
by the original [nvie/itertools.js].

See
[API documentation](https://doc.deno.land/https/deno.land/x/itertools/mod.ts)
for more details.

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.

The original license is written in [LICENSE.orig](./LICENSE.orig).
