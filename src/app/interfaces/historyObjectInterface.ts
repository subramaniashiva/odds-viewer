import { HistoryPriceInterface } from './historyPriceInterface';
/**
 * @interface - Bet Object Interface.
 * @param {number} price - Price of the bet.
 * @param {number} size - Max amount allowed.
 */
export interface HistoryObjectInterface {
  back_all: Array<HistoryPriceInterface>,
  lay_all: Array<HistoryPriceInterface>
}
