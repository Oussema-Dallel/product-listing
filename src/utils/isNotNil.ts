import { isNil } from './IsNil';
import type { Nillable } from '../types/Nil';

const isNotNil = <TActual>(maybeNil: Nillable<TActual>): maybeNil is TActual =>
	!isNil(maybeNil);

export { isNotNil };