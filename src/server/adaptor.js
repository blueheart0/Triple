export default class adaptor{
    constructor(){
        this.forGreedy = this.forGreedy.bind(this);
    }
    forGreedy(data){
        let res = {};
        res.meta = data[0];
        res.data = [];
        for(let i=1; i < data.length; i++){
            let element = {};
            element.key = data[i][0];
            element.data = {};
            element.data.spend = parseInt(data[i][1]);
            element.data.satisfaction = parseInt(data[i][2]);
            if( element.data.spend &&  element.data.satisfaction){
                res.data.push(element);
            }
        }
        return res;
    }
}