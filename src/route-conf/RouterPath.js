import Board from "body/Board";
import { Route, Routes } from 'react-router-dom';
import QuesBodyContainer from "body/container/QuesBodyContainer";

function RouterPath() {
  return (
    <Routes>
        <Route path="/" element={<QuesBodyContainer />} />
        <Route path="/board/:id" element={<Board />} />
    </Routes>
  );
}

export default RouterPath;