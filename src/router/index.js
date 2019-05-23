import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import withLoadable from './loadable'

const RouterTree = () => (
    <BrowserRouter>
        <Route path="/" exact component={withLoadable(() => import('@/views/home'))}/>
        <Route path="/home" exact component={withLoadable(() => import('@/views/home/page'))} />
        <Route path="/module1" exact component={withLoadable(() => import('@/views/module1'))}></Route>
        <Route path="/module2" exact component={withLoadable(() => import('@/views/module2'))}></Route>
    </BrowserRouter>
);


export default RouterTree;