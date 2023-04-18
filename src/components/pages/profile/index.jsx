import { Button, Container } from 'react-bootstrap';
import '../../modules/cart/cart.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import imageUrl from '../../../resources/avatar.jpg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import logo from "../../../resources/logo(black).svg";


export const ProfilePage = () => {
    const pickFile = () => {
        document.getElementById("filePicker")?.click()
       }
       const [edit,setEdit] = useState(false);
    return (
        <Container>
            <Row>
                    <Col md={4} sm={8} className="ideas-logo-block d-flex align-items-center">
                        <img src={logo} alt="" width={306} />
                        <h2 className="merch-title">Profile</h2>
                    </Col>
                </Row>
            <Row>
                <Col className='menu'>

                    <Stack className="align-items-center" gap={3}>
                        <Image src={imageUrl} alt={imageUrl} className={'cartImage'} style={{ marginLeft: "10px" }} />
                        <Button  onClick={() => pickFile()}>Change Photo</Button>
                        <div className="">First name : Nikita</div>
                        <div className="">Last name : LOX</div>
                        <div className="">Username : sususs</div>
                        <input id="filePicker" type={'file'} style={{ display : 'none' }}></input>
                    </Stack>
                </Col>
                <Col className='content' xs={9}>
                    <Formik
                        onSubmit={console.log}
                        initialValues={{
                            title: '',
                            description: '',
                            price: 0,
                            stockLevel: 0,
                            category: 'Choose category',
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form className="idea-info-inputs d-block" onSubmit={handleSubmit}>
                                <InputGroup className="mb-3" style={{marginTop : '14px' }}>
                                    <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                                    <Form.Control
                                        placeholder="+37379900628"
                                        aria-label="idea title"
                                        aria-describedby="basic-addon1"
                                        name="Phone"
                                        disabled = {edit}
                                        value={values.title}
                                        onChange={handleChange}
                                        isValid={touched.title && !errors.title}
                                        isInvalid={!!errors.title}
                                    /> 
                                </InputGroup>
                                <InputGroup className="mb-3" style={{marginTop : '14px' }}>
                                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                    <Form.Control
                                        placeholder="jinjerx13@gmail.com"
                                        aria-label="idea title"
                                        aria-describedby="basic-addon1"
                                        name="Email"
                                        disabled = {edit}
                                        value={values.email}
                                        onChange={handleChange}
                                        isValid={touched.title && !errors.title}
                                        isInvalid={!!errors.title}
                                    /> 
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text>Description</InputGroup.Text>
                                    <Form.Control as="textarea" aria-label="Description" name="description" placeholder='up to 3000 symbols'
                                        value={values.description}
                                        onChange={handleChange}
                                        disabled = {edit}
                                        isValid={touched.description && !errors.description}
                                        isInvalid={!!errors.description}
                                    />
                                </InputGroup>
                                    <Form.Group as={Col} controlId="category" style={{ minWidth: '40%' , marginTop : '14px' }}>
                                        <Form.Select
                                            name="category"
                                            value={values.category}
                                            onChange={handleChange}
                                            disabled = {edit}
                                            isValid={touched.category && !errors.category}
                                            isInvalid={!!errors.category}>

                                            <option>Choose category</option>
                                            <option>IT</option>
                                            <option>Communication</option>
                                            <options>Agriculture</options>
                                            <options>Transport</options>
                                            <options>Optimisation</options>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.category}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Stack direction="horizontal" gap={3} className="mt-3">
                                    <Button 
                                        onClick={()=>setEdit(!edit)} 
                                        disabled={!edit}
                                        >
                                        Edit
                                        </Button>

                                        <Button 
                                        onClick={()=>setEdit(!edit)} 
                                        disabled={edit}
                                        >
                                        Cancel
                                    </Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container >
    );
}