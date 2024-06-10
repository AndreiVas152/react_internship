import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings : {
      react  :{
        version : 'detect',
      },
    },
    ignores :[
      '/dist/**'
    ]
  }
];