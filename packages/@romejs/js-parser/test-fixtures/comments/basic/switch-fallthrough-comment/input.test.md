# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `comments > basic > switch-fallthrough-comment`

```javascript
Program {
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
			column: 0
			index: 92
			line: 8
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	comments: Array [
		CommentLine {
			id: "0"
			value: " foo"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 10
					index: 24
					line: 2
				}
				start: Object {
					column: 4
					index: 18
					line: 2
				}
			}
		}
		CommentLine {
			id: "1"
			value: " falls through"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 24
					index: 61
					line: 4
				}
				start: Object {
					column: 8
					index: 45
					line: 4
				}
			}
		}
	]
	body: Array [
		SwitchStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 91
					line: 7
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			discriminant: ReferenceIdentifier {
				name: "foo"
				loc: Object {
					filename: "input.js"
					identifierName: "foo"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
			}
			cases: Array [
				SwitchCase {
					consequent: Array []
					trailingComments: Array ["1"]
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 11
							index: 36
							line: 3
						}
						start: Object {
							column: 10
							index: 35
							line: 3
						}
					}
					test: NumericLiteral {
						value: 1
						format: undefined
						leadingComments: Array ["0"]
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 10
								index: 35
								line: 3
							}
							start: Object {
								column: 9
								index: 34
								line: 3
							}
						}
					}
				}
				SwitchCase {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 15
							index: 89
							line: 6
						}
						start: Object {
							column: 10
							index: 72
							line: 5
						}
					}
					test: NumericLiteral {
						value: 2
						format: undefined
						leadingComments: Array ["1"]
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 10
								index: 72
								line: 5
							}
							start: Object {
								column: 9
								index: 71
								line: 5
							}
						}
					}
					consequent: Array [
						ExpressionStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 15
									index: 89
									line: 6
								}
								start: Object {
									column: 8
									index: 82
									line: 6
								}
							}
							expression: CallExpression {
								arguments: Array []
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 14
										index: 88
										line: 6
									}
									start: Object {
										column: 8
										index: 82
										line: 6
									}
								}
								callee: ReferenceIdentifier {
									name: "doIt"
									loc: Object {
										filename: "input.js"
										identifierName: "doIt"
										end: Object {
											column: 12
											index: 86
											line: 6
										}
										start: Object {
											column: 8
											index: 82
											line: 6
										}
									}
								}
							}
						}
					]
				}
			]
		}
	]
}
```
