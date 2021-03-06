import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as catalog from "./ScriptureInfo.json";
import { ArrowRightCircle } from "react-feather";
import "./fade.css";

export default function BooksCatalog() {
  const oldTestament = catalog.oldTestament;
  const newTestament = catalog.newTestament;
  const [newTestamentOpen, setNewTestamentOpen] = useState(true);
  const [oldTestamentOpen, setOldTestamentOpen] = useState(true);

  return (
    <Container>
      <Button
        aria-controls="oldContent"
        aria-expanded={oldTestamentOpen}
        key="oldToggle"
        onClick={() => setOldTestamentOpen(!oldTestamentOpen)}
        className="d-block border-0"
        variant="outline-info"
      >
        <ArrowRightCircle />
      </Button>
      <Collapse key="old" in={oldTestamentOpen}>
        <Container className="my-flexWrap" id="oldContent">
          {Object.keys(oldTestament).map(x => (
            <Card
              className="mx-2 my-2 my-bookName"
              // style={{ width: "8rem" }}
              key={x}
            >
              <Link
                to={"/omac-app/bible/" + x}
                onClick={() => {
                  localStorage.setItem("book", x);
                  localStorage.setItem(
                    "chaptersCount",
                    oldTestament[x].chapter
                  );
                  localStorage.setItem("chapter", "1");
                }}
                className="text-decoration-none"
              >
                <Card.Text>
                  <span className="font-weight-bold my-title">
                    {oldTestament[x].abbr}
                  </span>
                  <br />
                  <span className="font-weight-lighter text-muted my-sub-title">
                    {oldTestament[x].fullName}
                  </span>
                </Card.Text>
              </Link>
            </Card>
          ))}
        </Container>
      </Collapse>
      <hr />
      <Button
        aria-controls="newContent"
        aria-expanded={newTestamentOpen}
        key="newToggle"
        onClick={() => setNewTestamentOpen(!newTestamentOpen)}
        className="d-block border-0"
        variant="outline-info"
      >
        <ArrowRightCircle />
      </Button>

      <Collapse key="new" in={newTestamentOpen}>
        <Container id="newContent" className="my-flexWrap">
          {Object.keys(newTestament).map(x => (
            // <Card
            //   className="mx-2 my-2 my-bookName"
            //   //  style={{ width: "8rem"}}
            //   key={x}
            // >
            //   <Card.Body>
            //     <Link
            //       to={"/omac-app/bible/" + x}
            //       onClick={() => {
            //         localStorage.setItem("book", x);
            //         localStorage.setItem(
            //           "chaptersCount",
            //           newTestament[x].chapter
            //         );
            //         localStorage.setItem("chapter", "1");
            //       }}
            //       className="text-decoration-none"
            //     >
            //       <Card.Title>{newTestament[x].abbr}</Card.Title>
            //       <Card.Subtitle className="text-muted">
            //         {newTestament[x].fullName}
            //       </Card.Subtitle>
            //     </Link>
            //   </Card.Body>
            // </Card>
            <Card
            className="mx-2 my-2 my-bookName"
            // style={{ width: "8rem" }}
            key={x}
          >
            <Link
              to={"/omac-app/bible/" + x}
              onClick={() => {
                localStorage.setItem("book", x);
                localStorage.setItem(
                  "chaptersCount",
                  newTestament[x].chapter
                );
                localStorage.setItem("chapter", "1");
              }}
              className="text-decoration-none"
            >
              <Card.Text>
                <span className="font-weight-bold my-title">
                  {newTestament[x].abbr}
                </span>
                <br />
                <span className="font-weight-lighter text-muted my-sub-title">
                  {newTestament[x].fullName}
                </span>
              </Card.Text>
            </Link>
          </Card>
          ))}
        </Container>
      </Collapse>
    </Container>
  );
}
