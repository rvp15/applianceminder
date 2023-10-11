import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/AssetMinder.module.css";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import AssetMinderItem from "./AssetMinderItem";
import moment from "moment/moment";

function AssetMinder() {
  const getCurrentDate = () => {
    var datetime = new Date();
    return moment(datetime).format("YYYY-MM-DD");
  };

  const [minders, setMinder] = useState([
    {
      name: "Filter Change",
      expectedService: getCurrentDate(),
      actualService: getCurrentDate(),
      serviceCompletion: getCurrentDate(),
      optionalNotes: "",
      alert: "",
    },
    {
      name: "Door maintenance",
      expectedService: getCurrentDate(),
      actualService: getCurrentDate(),
      serviceCompletion: getCurrentDate(),
      optionalNotes: "",
      alert: "",
    },
    {
      name: "Light check",
      expectedService: getCurrentDate(),
      actualService: getCurrentDate(),
      serviceCompletion: getCurrentDate(),
      optionalNotes: "",
      alert: "",
    },
  ]);

  return (
    <Container className={styles.assetdetail}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Maintenance Details</Accordion.Header>
          <Accordion.Body>
            <Container className={styles.assetminder}>
              {minders.map((minder, id) => {
                return (
                  <AssetMinderItem key={id} minder={minder}></AssetMinderItem>
                );
              })}
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default AssetMinder;
