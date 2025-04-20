<<<<<<< HEAD
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import someConfig from 'some-other-config-you-use';
import eslintConfigPrettier from 'eslint-config-prettier';
=======
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
>>>>>>> 8e2e46c (충돌 해결)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
<<<<<<< HEAD
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  someConfig,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 여기에 추가적인 규칙을 설정할 수 있습니다
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
=======
  ...compat.extends("next/core-web-vitals", "next/typescript"),
>>>>>>> 8e2e46c (충돌 해결)
];

export default eslintConfig;
