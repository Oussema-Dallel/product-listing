import type { Nil, Nillable } from '../types/Nil';

const isNil = <TActual>(maybeNil: Nillable<TActual>): maybeNil is Nil =>
	maybeNil === undefined || maybeNil === null;

export { isNil };