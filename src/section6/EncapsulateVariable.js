/**
 * ある有用なデータがグローバル変数に格納されているとする
 */
let defaultOwner = { firstName: 'Sample', lastName: 'Test' };

/**
 * 値を参照するとき
 */
spaceship.owner = defaultOwner;

/*
 * 更新するとき
 */
defaultOwner = { firstName: 'NewSample', lastName: 'NewTest' };

/*
 * データを読み書きする関数を定義することで変数をカプセル化する
 */
function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}
