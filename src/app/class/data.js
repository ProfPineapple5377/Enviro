

export default class Data {
    constructor(){
        fetchData().then((response) => {
            this.data = response;
        });
    }
    getData(){
        return this.data;
    }

}