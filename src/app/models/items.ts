import {Item} from './item';

export interface Items {
    offset: number,
    limit: number,
    total?: number,
    results: Item[]
}