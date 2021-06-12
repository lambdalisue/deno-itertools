# itertools

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/itertools)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/itertools/mod.ts)
[![Test](https://github.com/lambdalisue/itertools-deno/actions/workflows/test.yml/badge.svg)](https://github.com/lambdalisue/itertools-deno/actions/workflows/test.yml)

A TypeScript port of Python's awesome [itertools][itertools] standard library.

This is an standalone version of [nvie/itertools.js][nvie/itertools.js] for
using under the [Deno][Deno] environment.

[Deno]: https://deno.land/
[itertools]: https://docs.python.org/3/library/itertools.html
[more-itertools]: https://pypi.org/project/more-itertools/
[nvie/itertools.js]: https://github.com/nvie/itertools.js

## Example

```typescript
import { enumerate } from "https://deno.land/x/itertools/mod.ts";

console.log([...enumerate(["hello", "world"])]);
// [0, 'hello'], [1, 'world']
```

This module provides more functions ported from Python's builtin functions,
[itertools][itertools], [more-itertools][more-itertools], and more. In other
words, all functions provided by the original
[nvie/itertools.js][nvie/itertools.js].

See
[API documentation](https://doc.deno.land/https/deno.land/x/itertools/mod.ts)
for more details.

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.

The original license is written in [LICENSE.orig](./LICENSE.orig).
