import React from 'react'
import {Row,Col} from 'antd'
import 'antd/dist/antd.css'//卧槽还要引下css

class Admin extends React.Component{
    render(){
        return(
           <Row>
               <Col span={6}>left</Col>
               <Col span={18}>right</Col>
           </Row>
        )
    }
}

export default Admin