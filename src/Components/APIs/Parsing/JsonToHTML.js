import React, {Component} from 'react';
import data from './mockdata.json';

function parseJSON(props) {
    let data = props.data;
}

class JsonToHTML extends Component {
    render() {
        return(
            <div style={{backgroundColor: '#f5f5f5', marginLeft: 4, marginRight: 4, padding: 4, height: 600, overflow: 'hidden'}}>
                
                <ul className="css-treeview">
                    <li id=""item-0>One
                        <ul style={{display: 'none'}}>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                    </li>

                    <li>Two
                        <ul style={{display: 'none'}}>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                    </li>
                </ul>

            </div>
        )
    }
}
export default JsonToHTML;