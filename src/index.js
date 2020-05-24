import ReactDOM from 'react-dom';
import React from 'react';
import App from './routes';
import "./work/style/ztao.scss"
import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import userStore from '@mobx';
import test from '@mobx/tests';
import {is_mock} from '@config';
const stores = {
    userStore, test
};

if(is_mock){
    require("@mock")

}

configure({'enforceActions': 'always'});

ReactDOM.render(
        <Provider {...stores}>
            <App/>
        </Provider>,
    document.getElementById('root')
);
