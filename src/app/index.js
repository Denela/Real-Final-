import { store} from './store';

import React from 'react'
import ReactDom from 'react-dom'
import { Main } from './components/Main'
// this where the main page is being rendered
ReactDom.render(
    <Main/>,
    document.getElementById("app")
);

