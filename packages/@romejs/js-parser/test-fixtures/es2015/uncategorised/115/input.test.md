# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 115`

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
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 32
			index: 32
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ClassDeclaration {
			id: BindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 32
					index: 32
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: ClassHead {
				implements: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 32
						index: 32
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				superClass: ReferenceIdentifier {
					name: "B"
					loc: Object {
						filename: "input.js"
						identifierName: "B"
						end: Object {
							column: 17
							index: 17
							line: 1
						}
						start: Object {
							column: 16
							index: 16
							line: 1
						}
					}
				}
				body: Array [
					ClassMethod {
						kind: "get"
						key: StaticPropertyKey {
							value: Identifier {
								name: "foo"
								loc: Object {
									filename: "input.js"
									identifierName: "foo"
									end: Object {
										column: 26
										index: 26
										line: 1
									}
									start: Object {
										column: 23
										index: 23
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 26
									index: 26
									line: 1
								}
								start: Object {
									column: 23
									index: 23
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 19
								index: 19
								line: 1
							}
						}
						body: BlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 29
									index: 29
									line: 1
								}
							}
						}
						head: FunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 26
									index: 26
									line: 1
								}
							}
						}
						meta: ClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 19
								index: 19
								line: 1
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 26
									index: 26
									line: 1
								}
								start: Object {
									column: 19
									index: 19
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```
