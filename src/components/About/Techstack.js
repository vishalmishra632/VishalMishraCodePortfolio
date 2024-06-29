import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiDotnet,
  SiElasticsearch,
  SiApachesolr,
  SiAzuredevops,
  SiFilezilla
} from "react-icons/si";
import { TbBrandCSharp ,TbSql,TbBrandReactNative} from "react-icons/tb";
import { FaAngular,FaVuejs,FaAws,FaBitbucket,FaSourcetree } from "react-icons/fa";

function Techstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

<h2 className="project-sub-heading">Coding Language</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Coding Language */}
    <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
  </Row>

<h1 className="project-sub-heading">Frontend Technology</h1>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Frontend Technology */}
    <Col xs={4} md={2} className="tech-icons">
      <DiReact /> {/* React */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaAngular /> {/* Angular */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaVuejs /> {/* Vue.js */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
  </Row>

  <h2 className="project-sub-heading">Backend Technology</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Backend Technology */}
    <Col xs={4} md={2} className="tech-icons">
      <DiNodejs /> {/* Node.js */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiDotnet /> {/* .NET */}
    </Col>
  </Row>

  <h2 className="project-sub-heading">Mobile Application</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Backend Technology */}
    <Col xs={4} md={2} className="tech-icons">
      <TbBrandReactNative /> {/* Node.js */}
    </Col>
  </Row>


  
  <h2 className="project-sub-heading">Database</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Database */}
    <Col xs={4} md={2} className="tech-icons">
      <TbSql /> {/* SQL */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiMongodb /> {/* MongoDB */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
    </Col>
  </Row>


  <h2 className="project-sub-heading">Search Engine</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachesolr />
      </Col>
  </Row>

  <h2 className="project-sub-heading">Version Control and Collaboration Tools</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSourcetree />
      </Col>
  </Row>


  <h2 className="project-sub-heading">Cloud Computing Platform</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
  </Row>
    </Row>
  );
}

export default Techstack;
