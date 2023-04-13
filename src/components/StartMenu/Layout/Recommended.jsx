import { recommendedItems as rcmdItems } from "../../windows/Icons";
import { Container } from "./Layout.styled";

const Recommended = () => {
  return (
    <Container>
      <header>
        <h4 className="title">Recommended</h4>
      </header>
      <menu className="recommendedItems">
        {rcmdItems &&
          rcmdItems.map((item, index) => (
            <div key={index} className="rcmdItem">
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
      </menu>
    </Container>
  );
};

export default Recommended;
