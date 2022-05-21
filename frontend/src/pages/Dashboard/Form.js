import React, { useEffect, useState } from "react";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NEWS_URL, CONFIG } from "../../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getRow, update } from "../../actions/newsAction";

const Dashboard = () => {
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    title: "",
    type: "select",
    news: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

 

  useEffect(() => {
    // window.location.reload();
    if (id) {
      var res = getRow({ id: id });
      console.log(res);
      res.then((value) => {
        console.log(value[0]);
        setInputs(value[0]);
      });
    }
  }, []);

  const handleSubmit = (event) => {
    console.log(inputs);
    if (event) {
      event.preventDefault();

      const obj = {
        id: id,
        title: inputs.title,
        type: inputs.type,
        news: inputs.news,
      };

      if (!id)
        try {
          const body = JSON.stringify(obj);
          axios.post(NEWS_URL, body, CONFIG).then((res) => {
            console.log("client side news");
            console.log(res.data);

            if (res.data.status === "success") {
              console.log("submitted successful");
              alert("insert successful ");
            } else {
              console.log("failed");
              alert("failed");
            }
          });
        } catch (err) {
          console.log("error client side " + err);
        }

      if (id) {
        update(obj);
        navigate(`/dashboard`);
      }
    }
  };

  return (
    <>
      {/* <GoBackNavBar title={'New Inward Record'} /> */}
      <Header />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Container>
          <Row className="pt-5">
            {/* -------- Title  -------- */}
            <InputGroup className="mb-3 mt-4">
              <InputGroup.Text>Title : </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="title"
                name="title"
                value={inputs.title}
                onChange={(value) => handleInputChange(value)}
              />
            </InputGroup>
          </Row>
          <Row>
            {/* -------- Type -------- */}
            <InputGroup className="mb-3 mt-4">
              <InputGroup.Text>News Type : </InputGroup.Text>
              {
                <select
                  name="type"
                  className="dropdown-border"
                  id="dropdown"
                  onChange={(val) => {
                    handleInputChange(val);
                  }}
                >
                  <option value="">{inputs.type}</option>
                  <option vlaue="">Sports</option>
                  <option vlaue="">News</option>
                  <option vlaue="">Technology</option>
                </select>
              }
            </InputGroup>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={4}>
              {/* -------- News  -------- */}
              <InputGroup className="mb-3 mt-4">
                <InputGroup.Text>News : </InputGroup.Text>
                {/* <FormControl
                                    type='textarea'
                                    placeholder=""
                                    name='news'
                                    // value={formData.nature}
                                    onChange={(value) => handleInputChange(value)}
                                /> */}
                <textarea
                  name="news"
                  value={inputs.news}
                  onChange={(value) => handleInputChange(value)}
                ></textarea>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            {/* -------- Form control Buttons -------- */}
            <Col
              lg={{ span: 3, offset: 4 }}
              md={{ span: 4, offset: 4 }}
              sm={{ span: 5, offset: 4 }}
            >
              {!id && (
                <Button className="m-4" type="submit" variant="success">
                  Save
                </Button>
              )}
              {id && (
                <Button className="m-4" type="submit" variant="success">
                  Update
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Form>
      <Footer />
    </>
  );
};

export default Dashboard;
