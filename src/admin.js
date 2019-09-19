import React from 'react'
import {Row,Col} from 'antd'
// import 'antd/dist/antd.css'//卧槽还要引下css
import Menu from './components/menu'
import Header from './components/header'
import Footer from './components/footer'

class Admin extends React.Component{
    render(){
        return(
           <Row>
               <Col span={3}>{{Menu}}</Col>
               <Col span={21}>{{Header}}{{Footer}}</Col>
           </Row>
        )
    }
}

export default Admin