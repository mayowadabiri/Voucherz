export class CreateVoucher{
    constructor(
        public category: string,
        public suffix: string,
        public prefix: string,
        public type: string,
        public number: number,
        public value: number
    ){
        
    }
}