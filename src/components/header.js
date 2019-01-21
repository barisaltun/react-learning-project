import React from 'react';

export default function Header (props){

        return (
           <div>
               <input
                   onChange={props.onChangeFilterText}
                   name={"filter"}
                   id={"filter"}
                   placeholder={"Filter by name"}
               />
               <button className={"filterUnder"} onClick={props.onClickPriceFilter(null, "less", 19)}>Filter Under 19</button>
               <button className={"filterOver"} onClick={props.onClickPriceFilter(null, "greater", 18)}>Filter Over 19</button>
               <button className={"showAll"} onClick={props.onClickPriceFilter(null, "none", 0)}>Show All</button>
               <button className={"showAll"} onClick={props.reset}>Reset</button>
           </div>
        );
}

