import React, {useEffect, useState} from 'react';
import {Input, Form, Modal, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
const Modal_test =React.memo((props) => {
    let[test,SetTest]=useState(false)
   let[inp,SetInp]=useState("");
    useEffect(()=>
    {    console.log("Mount")
        return ()=>{console.log("-------did mount")}
        },[])
    let[loading,SetLoading]=useState(false)
    return (
        <div>
            <Modal title="Basic Modal" visible={props.Visible} onOk={props.handleOk} onCancel={()=>console.log("cancel")}>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loading}
                   s onClick={() =>{SetLoading(true)} }
                >
                    Click me!
                </Button>
                <Form onFinish={(e)=>{console.log("sumbit form");}}>
                    <Form.Item label="Введи текст"
                               name="Input"
                               rules={[{ required: true, message: 'Please input your username!'}]}>


                        <Input value={inp} onChange={(e)=>{SetInp(e.target.value)}} />
                    </Form.Item>
                    <Form.Item >
                     <Button ttype="primary" htmlType="submit" >sumb</Button>
                    </Form.Item>

                </Form>

                <button onClick={()=>{SetLoading(false);SetTest(true)}}>завершение загрузки</button>
            </Modal>
        </div>
    );
});

export default Modal_test;