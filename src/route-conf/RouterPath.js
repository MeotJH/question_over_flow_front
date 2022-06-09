import QuesBody from "body/QuesBody";
import LoginPage from "body/login/LoginPage"
import Board from "body/Board";
import { Route, Routes } from 'react-router-dom';

function RouterPath() {
  return (
    <Routes>
        <Route path="/" element={<QuesBody />} />
        <Route path="/board/:id" element={<Board />} />
    </Routes>
  );
}

export default RouterPath;