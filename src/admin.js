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
               <Col style={{height:'500px',background:'#0083bc',color:'#fff'}} span={3}>{Menu}</Col>
               <Col span={21}>
               <Row style={{height:'500px',background:'#df83bc',color:'#fff'}}>
                {Header}
               </Row>
               <Row style={{height:'500px',background:'#cb00dec',color:'#fff'}}>
               {Footer}
               </Row>
               </Col>
           </Row>
        )
    }
}

export default Admin