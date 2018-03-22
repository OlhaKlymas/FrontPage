let store = {
    data: [],
    init: function(url){
        return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then((r)=>r.json()).then(json => store.data = json);
    }
}
export default store;