import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { delete_from, getNews, update } from "../../actions/newsAction";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Dashboard = () => {
  const [newsData, setNewsData] = useState([]);

  let result;
  let sn = 1;
  const navigate = useNavigate();

  useEffect(() => {
    result = getNews();
    result.then((res) => {
      setNewsData(res);
      // console.log(res);
    });
  }, []);

  console.log(newsData);

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
  };

  const handleDelete = (id) => {
    const res = window.confirm("delete row ?");
    if (res) {
      delete_from({ id: id });
      window.location.reload();
    }
  };
  const handleView = (id) => {
    navigate(`/form/${id}`);
  };

  return (
    <>
      <Header />
      <Table striped hover bordered size="sm">
        <thead>
          <td>sl. no</td>
          <td>Title</td>
          <td>Type</td>
          <td>News</td>
          <td>Action</td>
        </thead>
        <tbody>
          {newsData?.map((obj) => {
            return (
              <>
                <tr>
                  <td>{sn++}</td>
                  <td>{obj.title}</td>
                  <td>{obj.type}</td>
                  <td>{obj.news}</td>
                  <td>
                    <Button variant="link" onClick={() => handleView(obj.id)}>
                      View
                    </Button>
                    <Button variant="link" onClick={() => handleEdit(obj.id)}>
                      Edit
                    </Button>
                    <Button variant="link" onClick={() => handleDelete(obj.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
            sn++;
          })}
        </tbody>
      </Table>
      <Footer />
    </>
  );
};

export default Dashboard;
