# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > export-from-specifier`

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
			index: 25
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ExportExternalDeclaration {
			defaultSpecifier: undefined
			exportKind: undefined
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 24
					index: 24
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
						column: 23
						index: 23
						line: 1
					}
					start: Object {
						column: 18
						index: 18
						line: 1
					}
				}
			}
			namedSpecifiers: Array [
				ExportExternalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 11
							index: 11
							line: 1
						}
						start: Object {
							column: 8
							index: 8
							line: 1
						}
					}
					exported: Identifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 11
								index: 11
								line: 1
							}
							start: Object {
								column: 8
								index: 8
								line: 1
							}
						}
					}
					local: Identifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 11
								index: 11
								line: 1
							}
							start: Object {
								column: 8
								index: 8
								line: 1
							}
						}
					}
				}
			]
		}
	]
}
```
