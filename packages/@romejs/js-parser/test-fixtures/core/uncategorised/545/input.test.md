# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 545`

```javascript
Program {
	comments: Array []
	corrupt: false
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
			index: 26
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "public is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "module"
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 8
					index: 8
					line: 1
				}
			}
		}
	]
	body: Array [
		VariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 25
					index: 25
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: VariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					VariableDeclarator {
						id: BindingObjectPattern {
							rest: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
							properties: Array [
								BindingObjectPatternProperty {
									key: StaticPropertyKey {
										value: Identifier {
											name: "public"
											loc: Object {
												filename: "input.js"
												identifierName: "public"
												end: Object {
													column: 14
													index: 14
													line: 1
												}
												start: Object {
													column: 8
													index: 8
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 14
												index: 14
												line: 1
											}
											start: Object {
												column: 8
												index: 8
												line: 1
											}
										}
									}
									value: BindingIdentifier {
										name: "public"
										loc: Object {
											filename: "input.js"
											identifierName: "public"
											end: Object {
												column: 14
												index: 14
												line: 1
											}
											start: Object {
												column: 8
												index: 8
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 14
											index: 14
											line: 1
										}
										start: Object {
											column: 8
											index: 8
											line: 1
										}
									}
								}
							]
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 24
								index: 24
								line: 1
							}
							start: Object {
								column: 6
								index: 6
								line: 1
							}
						}
						init: CallExpression {
							arguments: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 19
									index: 19
									line: 1
								}
							}
							callee: ReferenceIdentifier {
								name: "foo"
								loc: Object {
									filename: "input.js"
									identifierName: "foo"
									end: Object {
										column: 22
										index: 22
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
					}
				]
			}
		}
	]
}
```
