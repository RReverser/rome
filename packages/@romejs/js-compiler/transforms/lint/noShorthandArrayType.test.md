# `noShorthandArrayType.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-compiler/transforms/lint/noShorthandArrayType.test.ts --update-snapshots` to update.

## `no shorthand array type`

### `0`

```javascript
Object {
  src: '\n    let valid: Array<foo>;\n    let invalid = bar[];\n  '
  suppressions: Array []
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unknown start to an member expression computed property'}
      }
      location: Object {
        filename: 'unknown'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 22
          index: 50
          line: 3
        }
        start: Object {
          column: 22
          index: 50
          line: 3
        }
      }
    }
  ]
}
```

### `1`

```javascript
Object {
  src: '\n    let valid: Array<foo>;\n    let invalid = bar[];\n  '
  suppressions: Array []
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unknown start to an member expression computed property'}
      }
      location: Object {
        filename: 'unknown'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 22
          index: 50
          line: 3
        }
        start: Object {
          column: 22
          index: 50
          line: 3
        }
      }
    }
  ]
}
```