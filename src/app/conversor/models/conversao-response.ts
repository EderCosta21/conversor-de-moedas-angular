export class ConversaoResponse {

	constructor(
		public base: string,
		public date: string,
		public rates: any) {}
}
/// rsposta da api esse vai ser o formato necessario

//{"base":"USD","date":"2017-03-08","rates":{"BRL":3.1405}}