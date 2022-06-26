import { Layout } from './Wrapper.styled';

export default function Wrapper(props) {
  return (
    <Layout>
      {props.children}
    </Layout>

  );
}