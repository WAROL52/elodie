"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PATHROOT, URLPATHS } from "../Sidebar/paths";
import ButtonLink from "../Components/ButtonLink";
type Props = {};

export default function AppsMenu({}: Props) {
  return (
    <Row xs={1} md={3} className="g-4">
      {URLPATHS.map((path, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>
                <ButtonLink
                  icon={path.icon}
                  needAuth
                  href={path.url}
                  activeLoadingWhenClick
                >
                  {path.title}
                </ButtonLink>
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
