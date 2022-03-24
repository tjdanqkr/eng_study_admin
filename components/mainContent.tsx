import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllUserAsync, UserState } from "../features/auth/authSlice";

const MainContent = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth.user);
  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = async () => {
    await dispatch(getAllUserAsync());
  };
  return (
    <>
      <p>{`유저 수 : ${user.length}명`}</p>
      <p>카테고리 수 : </p>
      <p>문제 수 : </p>
    </>
  );
};

export default MainContent;
