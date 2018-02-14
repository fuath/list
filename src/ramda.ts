// @ts-ignore
import { curry, CurriedFunction2 } from "ramda";
import * as R from "ramda";
import * as L from "./index";

export { Node, List, list } from "./index";

L.setEquals(R.equals);

export const prepend = curry(L.prepend);
export const append = curry(L.append);
export const pair = curry(L.pair);
export const empty = curry(L.empty);
export const repeat = curry(L.repeat);
export const length = curry(L.length);
export const first = curry(L.first);
export const last = curry(L.last);
export const nth = curry(L.nth);
export const map = curry(L.map);
export const pluck = curry(L.pluck as (<A>(key: string, l: L.List<A>) => A));
export const range = curry(L.range);
export const foldl = curry(L.foldl);
export const reduce = foldl;
export const filter = curry(L.filter);
export const reject = curry(L.reject);
export const partition = curry(L.partition);
export const join = curry(L.join);
export const foldr = curry(L.foldr);
export const reduceRight = foldr;
export const flatten = curry(L.flatten);
export const every = curry(L.every);
export const all = every;
export const some = curry(L.some);
export const any = some;
export const none = curry(L.none);
export const find = curry(L.find);
export const indexOf = curry(L.indexOf);
export const findIndex = curry(L.findIndex);
export const includes = curry(L.includes);
export const contains = includes;
export const equals = curry(L.equals);
export const concat = curry(L.concat);
export const update = curry(L.update);
export const adjust = curry(L.adjust);
export const slice = curry(L.slice);
export const take = curry(L.take);
export const takeWhile = curry(L.takeWhile);
export const dropWhile = curry(L.dropWhile);
export const takeLast = curry(L.takeLast);
export const splitAt = curry(L.splitAt);
export const remove = curry(L.remove);
export const reverse = curry(L.reverse);
export const drop = curry(L.drop);
export const dropLast = curry(L.dropLast);
export const pop = curry(L.pop);
export const init = pop;
export const tail = curry(L.tail);
export const toArray = curry(L.toArray);
export const fromArray = curry(L.fromArray);
export const fromIterable = curry(L.fromIterable);
export const insert = curry(L.insert);
export const insertAll = curry(L.insertAll);
