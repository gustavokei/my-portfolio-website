import { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-solid-svg-icons";

const languageColors = {
  JavaScript: { bg: "#f1e05a", color: "#333" },
  TypeScript: { bg: "#3178c6", color: "#fff" },
  Python: { bg: "#3572A5", color: "#fff" },
  Java: { bg: "#b07219", color: "#fff" },
  React: { bg: "#61dafb", color: "#333" },
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/gustavokei/repos?sort=updated&direction=desc"
        );
        const data = await response.json();
        const filteredRepos = data.filter((repo) =>
          [
            "electron-game-updater",
            "vtex-react-checkout",
          ].includes(repo.name)
        );
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Row className="pb-5 customRow">
      <Col xs="10" className="customCol">
        <h2 className="title">Featured Projects</h2>
        <Row>
          {repos.map((repo) => {
            const langColor =
              languageColors[repo.language] || {
                bg: "#e0e0e0",
                color: "#333",
              };
            return (
              <Col md={6} key={repo.id} className="mb-4">
                <Card
                  className="h-100"
                  as="a"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: "12px",
                      }}
                    >
                      <FontAwesomeIcon 
                        icon={faGitAlt} 
                        color="#6366f1"
                        style={{ marginTop: "2px", flexShrink: 0 }}
                      />
                      <Card.Title 
                        style={{ 
                          margin: 0,
                          color: "#0969da",
                          fontSize: "18px",
                          fontWeight: "600",
                          wordBreak: "break-word",
                        }}
                      >
                        {repo.name}
                      </Card.Title>
                    </div>
                    <Card.Text 
                      style={{ 
                        marginBottom: "14px",
                        color: "#424242",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        hyphens: "auto",
                        minHeight: "2.8em",
                        maxHeight: "2.8em",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {repo.description || "No description"}
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      {repo.language && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            backgroundColor: langColor.bg,
                            color: langColor.color,
                            padding: "4px 10px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor: langColor.color,
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "13px",
                          color: "#586069",
                        }}
                      >
                        ★ {repo.stargazers_count}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "13px",
                          color: "#586069",
                        }}
                      >
                        🔀 {repo.forks_count}
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Button
          className="p-3 mt-3"
          href="https://github.com/gustavokei?tab=repositories"
          rel="noopener"
          target="_blank"
        >
          View all
        </Button>
      </Col>
    </Row>
  );
};

export default Projects;
