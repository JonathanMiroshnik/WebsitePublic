import React from 'react';

import '../../components/ContentContainer/ContentContainer.css';
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const projectsList = [
  {
    id: 1,
    title: "Prompts and Perils",
    description: "Dungeons and Dragons inspired single-player game.\nPlay as a unique character along with AI companions and interact with the world thorugh an AI Dungeon Master.",
    techStack: ["Godot", "C#", "ChatGPT API"],
    image: "media/images/PromptsAndPerils.png", // Replace with actual image URL
    github: "https://github.com/JonathanMiroshnik/AmazonDungeons",
    itch: "https://srscottalot.itch.io/prompts-and-perils"
  },
  {
    id: 2,
    title: "Walls Beyond Walls",
    description: "A Unity VR game where the player generates images in response to real-time gameplay choices.",
    techStack: ["Unity", "C#", "Oculus SDK", "StableDiffusion API"],
    image: "media/images/WallsBeyondWalls.png",
    github: "https://github.com/JonathanMiroshnik/UnityVRStableDiffusionLibrary",
    itch: "https://vrkings.itch.io/walls-beyond-walls"
  },
  {
    id: 3,
    title: "InfiniBand RDMA based shared store",
    description: "Creates a shared store of strings between computers through InfiniBand compliant routers.\nFor large transfers of information, utilizes the RDMA capability of IBV routers.\nSpecial thanks to fibermall for the image.",
    techStack: ["Infiniband VERBS API", "C"],
    image: "https://www.fibermall.com/blog/wp-content/uploads/2022/12/the-INIC-hardware-completes-the-RDMA-transmission-packet-encapsulation-freeing-the-operating-system-and-CPU.png",
    github: "https://github.com/JonathanMiroshnik/IBV-Verbs-API-Shared-Key-Value-Store",
    itch: ""
  }
];

const Projects = () => {
  return (
    <div className="contentContainer">
        <Container className="py-5">
        <h1>My Projects</h1>
            <Row className="g-4">
                {projectsList.map((project) => (
                <Col md={4} key={project.id}>
                    <Card className="bg-dark text-white shadow-lg">
                    <Card.Img variant="top" src={project.image} alt={project.title} />
                    <Card.Body>
                        {/* Title & Description */}
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>

                        {/* Tech Stack Section */}
                        <hr className="border-secondary" />
                        <div className="text-center mb-3">
                            <h6 className="text-warning">Tech Stack</h6>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                            {project.techStack.map((tech, index) => (
                                <Badge key={index} bg="secondary">{tech}</Badge>
                            ))}
                            </div>
                        </div>
                        
                        {/* Buttons Section */}
                        <div className="d-flex justify-content-center gap-2 mt-3">
                            <Button variant="warning" href={project.github} target="_blank">
                                View on GitHub
                            </Button>
                            {project.itch && (
                                <Button variant="danger" href={project.itch} target="_blank">
                                Play on Itch.io
                                </Button>
                            )}
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    
  );
};

export default Projects;

