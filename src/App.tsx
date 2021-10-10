import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Technologies} from "./components/Technologies/Technologies";
import {Header} from "./components/Header/Header";

function App() {
    console.log('App rendering')
  return (
    <div>
        <Header />
        <Technologies />
        <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        <Rating value = {3}/>
        <Accordion titleValue = {"Menu"} collapsed = {true} />
        <Accordion titleValue = {"Users"} collapsed = {false} />
        <Rating value = {0}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
    </div>
  );
}



type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType){
    debugger
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
