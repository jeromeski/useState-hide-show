import { useState } from "react";
import { Button, Card, CardBody, CardImg, CardText } from "reactstrap";

export default function App({ posts }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>
      {posts.map(({ id, img, text }, idx) => {
        const isOpen = openIndex === idx;
        return (
          <Card key={id}>
            <CardImg top width="100%" src={img} />
            <CardBody>
              <CardText>
                {isOpen ? text : text.substring(0, 100) + "..."}
              </CardText>
              {!isOpen && (
                <Button onClick={() => setOpenIndex(idx)}>Open</Button>
              )}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
