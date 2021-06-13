/**
 * ある有用なデータがグローバル変数に格納されているとする
 */
let defaultOwnerData = { firstName: 'Sample', lastName: 'Test' };

/**
 * 値を参照するとき
 */
spaceship.owner = getDefaultOwner();

/*
 * 更新するとき
 */
setDefaultOwner({ firstName: 'NewSample', lastName: 'NewTest' })

/*
 * データを読み書きする関数を定義することで変数をカプセル化する
 */
export function defaultOwner() {
  return defaultOwner;
}

export function setDefaultOwner(arg) {
  defaultOwner = arg;
}
