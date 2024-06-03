const root = (typeof global === 'object' && global) || this;

const Map = root.Map;
const Set = root.Set;
const Symbol = root.Symbol;
const WeakMap = root.WeakMap;
const WeakSet = root.WeakSet;

/** test value * */
const map = Map ? new Map() : undefined;
const weakMap = WeakMap ? new WeakMap() : undefined;
const set = Set ? new Set() : undefined;
const weakSet = WeakSet ? new WeakSet() : undefined;
const symbol = Symbol ? Symbol('a') : undefined;

export { map, weakMap, set, weakSet, symbol };
