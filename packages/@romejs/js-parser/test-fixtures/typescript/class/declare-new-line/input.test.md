# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > declare-new-line`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 19
			line: 3
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: ReferenceIdentifier {
				name: "declare"
				loc: Object {
					filename: "input.ts"
					identifierName: "declare"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
		ClassDeclaration {
			id: BindingIdentifier {
				name: "B"
				loc: Object {
					filename: "input.ts"
					identifierName: "B"
					end: Object {
						column: 7
						index: 15
						line: 2
					}
					start: Object {
						column: 6
						index: 14
						line: 2
					}
				}
			}
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 10
					index: 18
					line: 2
				}
				start: Object {
					column: 0
					index: 8
					line: 2
				}
			}
			meta: ClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 10
						index: 18
						line: 2
					}
					start: Object {
						column: 0
						index: 8
						line: 2
					}
				}
			}
		}
	]
}
```
