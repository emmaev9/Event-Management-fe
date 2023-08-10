/**
* @param {string} str
*@return {string}
*/

export const kebabCase = (str) =>  str.replace(' ', '-');


/**
 * @param {string} searchTerm
 */

export const addPurchase = (data) => {
  const purchasedEvents = JSON.parse(localStorage.getItem('purchasedEvents')) || [];
  purchasedEvents.push(data);
  localStorage.setItem('purchasedEvents', JSON.stringify(purchasedEvents));
}