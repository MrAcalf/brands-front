import {
  Grid,
} from '@mantine/core';
import Layout from '../../components/Layout';
import { ArticleCardVertical } from '../../components/PostCard';

// const child = <Skeleton height={140} radius="md" animate />;
const Home = () => (
    <Layout>
      <Grid.Col xs={12}>
        <ArticleCardVertical
          author={{ name: 'Antônio', avatar: 'https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png' }}
          category="posts"
          date="10/12/2022"
          title="Teste de post inicial para mobile"
          key="001"
          image="https://images.unsplash.com/photo-1638913662415-8c5f79b20656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </Grid.Col>
      <Grid.Col xs={12}>
        <ArticleCardVertical
          author={{ name: 'Antônio', avatar: 'https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png' }}
          category="posts"
          date="10/12/2022"
          title="Teste de post inicial para mobile"
          key="002"
          image="https://images.unsplash.com/photo-1654875659141-bc9310224933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80"
        />
      </Grid.Col>
      {/* <Grid.Col xs={12}>{child}</Grid.Col>
      <Grid.Col xs={12}>{child}</Grid.Col>
      <Grid.Col xs={12}>{child}</Grid.Col> */}
    </Layout>
  );

export default Home;
