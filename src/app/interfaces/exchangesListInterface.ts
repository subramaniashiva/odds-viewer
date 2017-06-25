import { BetObjectInterface } from './betObjectInterface';
import { HistoryObjectInterface } from './historyObjectInterface';
/**
 * @interface - Exchanges List Interface.
 * @param {string} name - Name of the exchange.
 * @param {number} id - Id of the exchange.
 * @param {BetObjectInterface} back_all - All the back odds for the team in the exchange.
 * @param {BetObjectInterface} lay_all - All the lay odds for the team in the exchange.
 * @param {object} history - History of the best odds in the exchange.
 */
export interface ExchangesListInterface {
	name: string,
  id: number,
  currency: string,
  back_all: Array<BetObjectInterface>
  lay_all: Array<BetObjectInterface>
  history: HistoryObjectInterface
};
