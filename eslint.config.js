import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import vitestPlugin from 'eslint-plugin-vitest'
import unicornPlugin from 'eslint-plugin-unicorn'

export default tseslint.config(
  { ignores: ['dist', 'vite.config.ts', 'src/vite-env.d.ts'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked
    ],
    files: ['**/*.{ts,tsx}'],
    settings: { react: { version: '18.3' } },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        // This is new and could cause some problems, just restart the ESlint server when it complains about files not to be included
        // even though they are included via the src directory.
        projectService: true,
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
        }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      vitest: vitestPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.all.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/jsx-filename-extension': ["off"],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      "vitest/max-nested-describe": [
        "error",
        {
          "max": 3
        }
      ],
      // eslint
      'array-bracket-newline': ['error', { multiline: true }],
      'array-bracket-spacing': ['error', 'always', {
        objectsInArrays: false,
        arraysInArrays: false
      }],
      'array-element-newline': ['error', 'consistent'],
      'arrow-spacing': ['error'],
      'block-spacing': ['error'],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline-arguments'],
      'no-mixed-operators': ['error'],
      'no-multiple-empty-lines': ['error', {
        max: 1
      }],
      'no-multi-spaces': ['error'],
      'no-trailing-spaces': ['error'],
      'max-len': ['error', {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'multiline-ternary': ['error', 'always-multiline'],
      'object-curly-newline': ['error', {
        multiline: true,
        consistent: true,
      }],
      'object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true
      }],
      'operator-linebreak': ['error', 'before', {
        overrides: { '=': 'after' }
      }],
      'padded-blocks': ['error', 'never'],
      'require-await': ['off'],
      "sort-imports": ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'single',
          'multiple',
          'all',
          'none'
        ]
      }],
      'space-in-parens': ['error', 'never'],
      'yoda': ['error'],
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],
      'react/no-adjacent-inline-elements': ['off'],
      'react/forbid-component-props': ['off'],
      'react/no-set-state': ['off'],
      'react/react-in-jsx-scope': ['off'],
      'react/require-default-props': ['off'],
      'react/sort-comp': ['off'],
      'react/jsx-boolean-value': ['off'],
      'react/jsx-curly-newline': ['error', {
        singleline: 'consistent',
        multiline: 'consistent'
      }],
      'react/jsx-curly-spacing': ['error', {
        'when': 'always',
        'children': true,
        'spacing': {
          'objectLiterals': 'never'
        }
      }],
      'react/jsx-filename-extension': ['error', {
        'extensions': ['.tsx']
      }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-handler-names': ['error', {
        checkLocalVariables: true,
      }],
      'react/jsx-indent': ['error', 'tab', {
        checkAttributes: false,
        indentLogicalExpressions: true
      }],
      'react/jsx-indent-props': ['error', 'tab'],
      'react/jsx-max-depth': ['off'],
      'react/jsx-newline': ['off'],
      'react/jsx-no-literals': ['off'],
      'react/jsx-one-expression-per-line': ['off'],
      'react/jsx-props-no-spreading': ['error', {
        custom: 'ignore'
      }],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore'
      }],
      // eslint-plugin-react-hooks
      'react-hooks/rules-of-hooks': ['error'],
      'react-hooks/exhaustive-deps': ['error'],

      // @typescript-eslint/eslint-plugin
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/no-non-null-assertion': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowTypedFunctionExpressions: true,
      }],
      '@typescript-eslint/array-type': ['error'],
      '@typescript-eslint/ban-tslint-comment': ['error'],
      '@typescript-eslint/class-literal-property-style': ['error'],
      '@typescript-eslint/consistent-type-assertions': ['error', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }],
      '@typescript-eslint/consistent-type-definitions': ['error'],
      '@typescript-eslint/no-base-to-string': ['error'],
      '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
      '@typescript-eslint/no-duplicate-enum-values': ['error'],
      '@typescript-eslint/no-dynamic-delete': ['error'],
      '@typescript-eslint/no-extraneous-class': ['error'],
      '@typescript-eslint/no-invalid-void-type': ['off'],
      '@typescript-eslint/no-meaningless-void-operator': ['error'],
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
      '@typescript-eslint/no-unnecessary-condition': ['error'],
      '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
      '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
      '@typescript-eslint/prefer-for-of': ['error'],
      '@typescript-eslint/prefer-function-type': ['error'],
      '@typescript-eslint/prefer-includes': ['error'],
      '@typescript-eslint/prefer-literal-enum-member': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],
      '@typescript-eslint/prefer-optional-chain': ['error'],
      '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
      '@typescript-eslint/prefer-return-this-type': ['error'],
      '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      '@typescript-eslint/prefer-ts-expect-error': ['error'],
      '@typescript-eslint/require-await': ['off'],
      '@typescript-eslint/unified-signatures': ['error'],
      '@typescript-eslint/consistent-type-exports': ['error'],
      '@typescript-eslint/consistent-type-imports': ['error'],
      '@typescript-eslint/explicit-member-accessibility': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": {
            "memberTypes": [
              // Index signature
              "signature",
              "call-signature",

              // Fields
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "#private-static-field",

              "public-decorated-field",
              "protected-decorated-field",
              "private-decorated-field",

              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",
              "#private-instance-field",

              "public-abstract-field",
              "protected-abstract-field",

              "public-field",
              "protected-field",
              "private-field",
              "#private-field",

              "static-field",
              "instance-field",
              "abstract-field",

              "decorated-field",

              "field",

              // Static initialization
              "static-initialization",

              // Constructors
              "public-constructor",
              "protected-constructor",
              "private-constructor",

              "constructor",

              // Getters
              "public-static-get",
              "protected-static-get",
              "private-static-get",
              "#private-static-get",

              "public-decorated-get",
              "protected-decorated-get",
              "private-decorated-get",

              "public-instance-get",
              "protected-instance-get",
              "private-instance-get",
              "#private-instance-get",

              "public-abstract-get",
              "protected-abstract-get",

              "public-get",
              "protected-get",
              "private-get",
              "#private-get",

              "static-get",
              "instance-get",
              "abstract-get",

              "decorated-get",

              "get",

              // Setters
              "public-static-set",
              "protected-static-set",
              "private-static-set",
              "#private-static-set",

              "public-decorated-set",
              "protected-decorated-set",
              "private-decorated-set",

              "public-instance-set",
              "protected-instance-set",
              "private-instance-set",
              "#private-instance-set",

              "public-abstract-set",
              "protected-abstract-set",

              "public-set",
              "protected-set",
              "private-set",
              "#private-set",

              "static-set",
              "instance-set",
              "abstract-set",

              "decorated-set",

              "set",

              // Methods
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "#private-static-method",

              "public-decorated-method",
              "protected-decorated-method",
              "private-decorated-method",

              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
              "#private-instance-method",

              "public-abstract-method",
              "protected-abstract-method",

              "public-method",
              "protected-method",
              "private-method",
              "#private-method",

              "static-method",
              "instance-method",
              "abstract-method",

              "decorated-method",

              "method"
            ],
            "order": "alphabetically"
          }
        }
      ],
      '@typescript-eslint/method-signature-style': ['error'],
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': ['error',
        {
          selector: 'default',
          format: ['camelCase']
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase']
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE']
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        },
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        }
      ],
      '@typescript-eslint/no-confusing-void-expression': ['error'],
      '@typescript-eslint/no-redundant-type-constituents': ['error'],
      // We use unicorn/prefer-module instead
      '@typescript-eslint/no-require-imports': ['off'],
      '@typescript-eslint/no-unnecessary-qualifier': ['error'],
      '@typescript-eslint/no-useless-empty-export': ['error'],
      // We use unicorn/prefer-module instead
      '@typescript-eslint/no-var-requires': ['off'],
      '@typescript-eslint/parameter-properties': ['error'],
      '@typescript-eslint/prefer-enum-initializers': ['error'],
      '@typescript-eslint/prefer-readonly': ['error'],
      '@typescript-eslint/prefer-regexp-exec': ['error'],
      '@typescript-eslint/promise-function-async': ['error'],
      '@typescript-eslint/require-array-sort-compare': ['error'],
      '@typescript-eslint/sort-type-constituents': ['error'],
      '@typescript-eslint/strict-boolean-expressions': ['warn'],
      '@typescript-eslint/switch-exhaustiveness-check': ['error'],

      // typescript-eslint extensions
      'brace-style': ['off'],
      '@/brace-style': ['error', '1tbs'],
      'comma-dangle': ['off'],
      '@/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      'comma-spacing': ['off'],
      '@/comma-spacing': ['error'],
      'default-param-last': ['off'],
      '@typescript-eslint/default-param-last': ['error'],
      'dot-notation': ['off'],
      '@typescript-eslint/dot-notation': ['error'],
      'func-call-spacing': ['off'],
      '@/func-call-spacing': ['error'],
      'indent': ['off'],
      '@/indent': ['error', 'tab'],
      'keyword-spacing': ['off'],
      '@/keyword-spacing': ['error', { after: true }],
      'lines-between-class-members': ['off'],
      '@/lines-between-class-members': ['error', "always", { "exceptAfterSingleLine": true }],
      'no-array-constructor': ['off'],
      '@typescript-eslint/no-array-constructor': ['error'],
      'no-dupe-class-members': ['off'],
      '@typescript-eslint/no-dupe-class-members': ['error'],
      'no-extra-parens': ['off'],
      '@typescript-eslint/no-extra-parens': ['off'],
      'no-invalid-this': ['off'],
      '@typescript-eslint/no-invalid-this': ['error'],
      'no-loop-func': ['off'],
      '@typescript-eslint/no-loop-func': ['error'],
      'no-redeclare': ['off'],
      '@typescript-eslint/no-redeclare': ['error'],
      'no-shadow': ['off'],
      '@typescript-eslint/no-shadow': ['error'],
      'no-throw-literal': ['off'],
      '@/no-throw-literal': ['error'],
      'no-unused-expressions': ['off'],
      '@typescript-eslint/no-unused-expressions': ['error'],
      'no-use-before-define': ['off'],
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-useless-constructor': ['off'],
      '@typescript-eslint/no-useless-constructor': ['error'],
      'object-curly-spacing': ['off'],
      '@/object-curly-spacing': ['error', 'always'],
      'padding-line-between-statements': ['off'],
      '@/padding-line-between-statements': ['error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' }
      ],
      'quotes': ['off'],
      '@/quotes': ['error', 'single', {
        avoidEscape: false,
        allowTemplateLiterals: true
      }],
      'no-return-await': ['off'],
      '@typescript-eslint/return-await': ['error', 'always'],
      'semi': ['off'],
      '@/semi': ['error', 'always'],
      'space-before-blocks': ['off'],
      '@/space-before-blocks': ['error'],
      'space-before-function-paren': ['off'],
      '@/space-before-function-paren': ['error', 'always'],
      'space-infix-ops': ['off'],
      '@/space-infix-ops': ['error'],

      // eslint-plugin-unicorn
      'unicorn/catch-error-name': ['error', {
        name: 'ex'
      }],
      'unicorn/filename-case': ['warn', {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }],
      'unicorn/numeric-separators-style': ["error"],
      'unicorn/no-null': ['off'],
      'unicorn/no-useless-undefined': ['off'],
      'unicorn/prevent-abbreviations': ['warn', {
        replacements: {
          args: false,
          props: false
        }
      }],
      'unicorn/prefer-ternary': ['off'],
      'unicorn/prefer-spread': ['off'],
    },
  },
)
