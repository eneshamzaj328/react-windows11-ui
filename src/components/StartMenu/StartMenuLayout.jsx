import { Layout, Container } from "./StartMenuLayout.styled";

import SearchInputForm from "./Layout/SearchInputForm";
import Pinned from "./Layout/Pinned";
import Recommended from "./Layout/Recommended";
import User from "./Layout/User";

const StartMenuLayout = () => {
  return (
    <Layout>
      <Container>
        <SearchInputForm />
        <Pinned />
        <Recommended />
      </Container>
      <User />
    </Layout>
  );
};

export default StartMenuLayout;
