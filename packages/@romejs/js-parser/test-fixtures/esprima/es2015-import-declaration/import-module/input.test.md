# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-import-declaration > import-module`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 14
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ImportDeclaration {
			defaultSpecifier: undefined
			importKind: undefined
			namedSpecifiers: Array []
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: StringLiteral {
				value: "foo"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 12
						index: 12
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
			}
		}
	]
}
```
