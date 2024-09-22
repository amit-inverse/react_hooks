import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseStateHook from "./pages/UseStateHook";
import UseEffectHook from "./pages/UseEffectHook";
import UseRefHook from "./pages/UseRefHook";
import UseMemoHook from "./pages/UseMemoHook";
import UseCallbackHook from "./pages/UseCallbackHook";
import UseContextHook from "./pages/UseContextHook";
import UseReducerHook from "./pages/UseReducerHook";
import UseLayoutEffectHook from "./pages/UseLayoutEffectHook";
import CustomHook from "./pages/CustomHook";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          marginBottom: "10px",
          paddingBottom: "10px",
          borderBottom: "1px solid blue",
        }}
      >
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useState"
        >
          useState
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useEffect"
        >
          useEffect
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useRef"
        >
          useRef
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useMemo"
        >
          useMemo
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useCallback"
        >
          useCallback
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useContext"
        >
          useContext
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useReducer"
        >
          useReducer
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/useLayoutEffect"
        >
          useLayoutEffect
        </Link>
        <Link
          style={{ marginRight: "20px", textDecoration: "none", color: "blue" }}
          to="/customHook"
        >
          customHook
        </Link>
      </div>

      <Routes>
        <Route path="useState" element={<UseStateHook />} />
        <Route path="useEffect" element={<UseEffectHook />} />
        <Route path="useRef" element={<UseRefHook />} />
        <Route path="useMemo" element={<UseMemoHook />} />
        <Route path="useCallback" element={<UseCallbackHook />} />
        <Route path="useContext" element={<UseContextHook />} />
        <Route path="useReducer" element={<UseReducerHook />} />
        <Route path="useLayoutEffect" element={<UseLayoutEffectHook />} />
        <Route path="customHook" element={<CustomHook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
