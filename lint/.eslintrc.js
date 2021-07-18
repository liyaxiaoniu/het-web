//
module.exports = {
  root: true, // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  // 定义了一组预定义的全局变量。可用的环境包
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 使用 globals 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写，或 false 将不允许被重写。
  globals: {},
  // 基础的配置规则 按顺序覆盖
  extends: [
    'eslint:recommended', //
    'plugin:eslint-plugin-prettier/recommended', //
  ],

  parserOptions: {
    // 默认设置为3， 5（ 默认）， 你可以使用 6、 7、 8 或 9 来指定你想要使用的 ECMAScript 版本。
    // 你也可以用使用年份命名的版本号指定为 2015（ 同 6）， 2016（ 同 7）， 或 2017（ 同 8） 或 2018（ 同 9）
    ecmaVersion: 2020,
    // "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    sourceType: 'module',
    // 想使用的额外的语言特性
    ecmaFeatures: {
      globalReturn: false, // 允许在全局作用域下使用 return 语句
      impliedStrict: true, // - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      jsx: true, //- 启用 JSX
    },
  },
  // 插件可以提供新的规则，以覆盖eslint的默认行为，配置之后就可以在rules里使用自定义规则

  rules: {
    'no-var': 2, // 禁止var语法
    'prefer-const': 1, // 检查能使用const的地方就使用const
    'no-prototype-builtins': 1, // 如果要使用原型链上的方法，使用Object.prototype.hasOwnProperty，禁止使用实例化对象调用obj.hasOwnProperty
    'no-useless-escape': 1, // 检查不必要的转义字符，有些符号并不需要使用转义字符
    'no-debugger': 1, // debugger报警告
    'no-unused-vars': 1,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prettier/prettier': [
      1,
      {
        semi: false, // 是否句末加分号
        trailingComma: 'all', //尾随逗号
        singleQuote: true, // 是否用单引号
        printWidth: 80, // 换行长度，默认80
        tabWidth: 2,
        endOfLine: 'auto',
        bracketSpacing: true, //括号间距
        jsxSingleQuote: true, //在JSX中使用单引号而不是双引号。
        jsxBracketSameLine: true,
      },
    ],
  },
  overrides: [
    // ts文件
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser', // @typescript-eslint/parser
      extends: [
        'plugin:@typescript-eslint/recommended', //ts的推荐规则
      ],

      // plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-inferrable-types': 1,
        '@typescript-eslint/ban-ts-comment': 1, // 禁止使用ts的ignore注释
        // '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-var-requires': 0, // 允许使用require语法
        '@typescript-eslint/no-explicit-any': 0, // 允许使用any
        '@typescript-eslint/explicit-module-boundary-types': 0, // 允许函数不指定返回值type
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/ban-types': [
          'warn',
          {
            types: {
              Function: false,
              '{}': {
                message: 'Use object instead',
                fixWith: 'object',
              },
            },
          },
        ], // 类型使用错误
      },
    },
    // cypress测试文件
    // {
    //   files: ['*.spec.ts'],
    //   parser: '@typescript-eslint/parser', //
    //   extends: [
    //     'plugin:@typescript-eslint/recommended', //ts的推荐规则
    //     'plugin:cypress/recommended',
    //   ],
    //   rules: {
    //     // strict: 'off',
    //     'cypress/no-assigning-return-values': 0,
    //     'cypress/no-unnecessary-waiting': 0,
    //   },
    // },
    // js文件
    // {
    //   files: ['*.js', '*.jsx'],
    //   // parser: './node_modules/@babel/eslint-parser',
    //   parser: '@babel/eslint-parser',
    //   extends: [],
    // },
    // vue文件
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/vue3-essential', // eslint-plugin-vue 配置.vue 文件的校验  https://eslint.vuejs.org/
        // '@vue/typescript/recommended', //  来源于/@vue/eslint-config-typescript, 用于让.vue文件支持ts语法, 包扩注释语法
      ],
      rules: {
        'vue/max-attributes-per-line': 0,
        // "vue/no-custom-modifiers-on-v-model": 0,
        // "vue/no-unused-vars": "error",
        // "vue/html-quotes": ["error", "single", { avoidEscape: false }],
      },
    },
  ],
}
