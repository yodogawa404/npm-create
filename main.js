#!/usr/bin/env node
import { existsSync } from 'node:fs';
import fs_extra from 'fs-extra';
const { copySync } = fs_extra;

const __dirname = import.meta.dirname;

if (existsSync('./project')) {
  console.error(
    'エラー: 出力先ディレクトリが既に存在します\nディレクトリ名: project',
  );
  process.exit(1);
}

try {
  copySync(`${__dirname}/template`, './project');
  console.log('./project にプロジェクトを作成しました');
} catch (err) {
  console.error('プロジェクトの作成に失敗しました:');
  console.error(err);
}
