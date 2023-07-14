import React from "react";
import './ChartBar.css';

function ChartBar(props){
    let fillBarHeight='0%';
    if(props.TotalExpense>0)
    {
        fillBarHeight=Math.round((props.value/props.TotalExpense)*100)+'%';
    }
    return <div className="chart-bar">
        <div className="chart-bar-inner">
            <div className="chart-bar__fill" style={{height:fillBarHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;