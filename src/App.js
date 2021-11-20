import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExamplePage from "./pages/Example";
import ExplorePage from "./pages/Explore";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/News";
import RiskPage from "./pages/Risk";
import { makeStyles } from "@mui/styles";
import Footer from "./components/footer";
import Header from "./components/header";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "rgb(20,20,20)",
    minHeight: "100vh",
    color: "white",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    minHeight: "70vh",
    width: "100%",
  },
});

function Body(props) {
  return (
    <div className={props.class}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />} exact></Route>
        <Route path="/explore" element={<ExplorePage />} exact></Route>
        <Route path="/risk" element={<RiskPage />} exact></Route>
        <Route path="/example" element={<ExamplePage />} exact></Route>
      </Routes>
    </div>
  );
}

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header></Header>
        <Body class={classes.body}></Body>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
