import { ExchangesListInterface } from './exchangesListInterface';

/**
 * @interface - Odds List Item Interface.
 * @param {string} name - Name of the football team.
 * @param {number} id - Id of the football team.
 * @param {Array<ExchangesListInterface>} exchanges - List of exchanges and their bet details.
 */
export interface OddsListItemInterface {
  name: string,
  id: number,
  exchanges: Array<ExchangesListInterface>
};
