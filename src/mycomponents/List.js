import React, { Component } from 'react';

class List extends Component {

    mydataChild=(data)=>{
        return <option>{data+10}</option>
    }

    render() {
            //const country=['bangladesh','pakistan','india','china','canada'];
            const number=[1,2,3,4,5,6,7,8,9];
            const dataItems=number.map(this.mydataChild)
        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;