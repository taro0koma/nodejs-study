'use strict';
const number = process.argv[2] || 0; // コマンドライン引数で与えられた数

/**
 * なぜ添字が「２」か？
0番目・・・nodeコマンドのファイルパスが格納されている。
1番目・・・実行中のプログラムのファイルパスを格納される。
ex/ node  app.js  100  200  の配列の場合
    process.argv[0] は '/usr/local/bin/node'
    process.argv[1] は '/nodejs-study/app.js'
    process.argv[2] は '100'
    process.argv[3] は '200'

よって、コマンドライン引数を使ってコード記述する際は
process.argv[2] 以降を使用する。
*/

/**
 * process.argv[2] || 0;
 * コード実行時に、引数として 0 や null や undefined など
 * falsy な値が挿入された場合に代替として 0 を代入させる。
 */

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);