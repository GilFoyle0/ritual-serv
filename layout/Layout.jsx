import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";


const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.main}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
		<>
		<Layout>
			<Component {...props} />
		</Layout>
		</>
    );
  };
};
