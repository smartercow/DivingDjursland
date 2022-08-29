import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const Navigation = () => {
  
  const myObj = ["test0", "test1", "test2"];

  const [show, setShow] = useState(-1);

  const showShit = (e) => {
    setShow(e.currentTarget.dataset.index);
  };

  useEffect(() => {

    for (let i = 0; i < 3; i++) {
      document.querySelector(".test" + i).style.display = "none";
    }

    if (show > -1) {
      document.querySelector(".test" + parseInt(show)).style.display = "block";
    }
    
  }, [show]);

  return (
    <section id="navigation">

      <nav>
        <ListGroup horizontal variant="success">

          {myObj.map((obj, index) => (
            <ListGroup.Item
              data-index={index}
              onClick={showShit}
              key={index}
            >
              <Link to="/">Home</Link>
              <span className={"test" + index}>allo</span>
            </ListGroup.Item>
          ))}

        </ListGroup>
      </nav>
    </section>
  );
};

export default Navigation;
