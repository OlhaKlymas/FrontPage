import model from '../components/currencyComp.js';
import view from '../views/currencyView.js';

let store = {
    model,
    view,
    work: function() {
        let result = [];
        return this.model.init().then((a)=>{
            let data = this.model.data;
            this.markUp = data;
        });
    },
    render: function() {
        this.work().then(()=> {
        this.view.render(this.markUp);
        });
    },
    markUp: []
};
export default store;