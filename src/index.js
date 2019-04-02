import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';

import localeEsMessages from "./local/es";
import localeEnMessages from "./local/en";
import JobsList from "./components/jobsList";

console.log(navigator.language)

const localeMessage = function(){
    if(navigator.language==="es-ES"){
        return localeEsMessages;
    }
    else{
        return localeEnMessages;
    }

}
addLocaleData([...esLocaleData, ...enLocaleData])

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages= {localeMessage()}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root")
);