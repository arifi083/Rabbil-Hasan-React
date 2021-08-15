import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {

        const mylist=[

            {
                city:"dhaka",
                zip:"4000"
            },
            {
                city:"rajshahi",
                zip:"5000"
            },
            {
                city:"rangpur",
                zip:"6000"
            }    
        ]

        const dataItemCity=mylist.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        });

        const dataItemZip=mylist.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
        });
            
    


        return (
            <div>
                <select>
                    {dataItemCity}
                </select>
                <select>
                    {dataItemZip}
                </select>
                
            </div>
        );
    }
}

export default Jsonlist;