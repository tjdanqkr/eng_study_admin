import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllUserAsync, UserState } from "../features/auth/authSlice";
import { getAllCategoryAsync } from "../features/category/categorySlice";
import { getAllQuestionAsync } from "../features/question/questionSlice";

const MainContent = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth.user);
  const { category } = useAppSelector((state) => state.category);
  const { question } = useAppSelector((state) => state.question);
  useEffect(() => {
    getAllUser();
    getAllQuestion();
    getAllCategory();
  }, []);
  const getAllUser = async () => {
    await dispatch(getAllUserAsync());
  };
  const getAllQuestion = async () => {
    await dispatch(getAllQuestionAsync());
  };
  const getAllCategory = async () => {
    await dispatch(getAllCategoryAsync());
  };
  return (
    <>
      <p>{`유저 수 : ${user.length}명`}</p>
      <p>{`카테고리 수 : ${category.length}개`}</p>
      <p>{`문제 수 : ${question.length}개`}</p>
    </>
  );
};

export default MainContent;
