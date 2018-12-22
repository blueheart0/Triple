import adaptor from './adaptor';

export default class greedy{
    constructor(props) {
        this.input = new adaptor().forGreedy(props);
        this.path = [];
        this.resultSatisfaction = 0;
        this.placeCount = parseInt(this.input.meta[0]);
        this.travelTime = parseInt(this.input.meta[1]);
        this.places = JSON.parse(JSON.stringify(this.input.data));
        // console.log(this.input);
        // console.log(this.places);

    }
    _process(){
        if(this.placeCount !== this.places.length){
            console.error("Input data is wrong : invalid firs line meta data");
            return false;
        }
        let res = this.places.sort((a,b)=>{
            let temp = b.data.satisfaction - a.data.satisfaction;
            if( temp === 0){
               return a.data.spend - b.data.spend;
            }
            return b.data.satisfaction - a.data.satisfaction;
        });
        let spendingTime = 0;
        for(let i = 0; i < res.length; i++){
            let target = res[i];
            if(this.travelTime >= (spendingTime + target.data.spend)){
                spendingTime = spendingTime + target.data.spend;
                this.resultSatisfaction = this.resultSatisfaction + target.data.satisfaction;
                this.path.push(target);
            }
            if(spendingTime >= this.travelTime ){
                break;
            }
        }
    }
    get result(){
        this._process();
        return {
            path: this.path,
            satisfaction: this.resultSatisfaction
        };
    }
}
