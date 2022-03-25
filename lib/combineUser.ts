import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  CombineUserState,
  getAllUserAsync,
  saveCombineData,
  User,
  UserState,
} from '../features/auth/authSlice';
import {
  CategoryState,
  getAllCategoryAsync,
} from '../features/category/categorySlice';

export const checkCombineUserData = async (
  user: User[],
  category: CategoryState[],
) => {
  console.log('user', user);
  console.log('category', category);
  let combineUser: CombineUserState[] = [];
  if (user.length !== 0 && category.length !== 0) {
    combineUser = await combineUserData(user, category);
  }
  return combineUser;
};

const combineUserData = async (user: User[], category: CategoryState[]) => {
  const combineUser = user.map((data) => {
    const filterBigCategory = category.filter(
      (cate) => cate.type === 1 && cate.num === data.bigCategory,
    )[0].title;
    const filterMiddleCategory = category.filter(
      (cate) => cate.type === 2 && cate.num === data.middleCategory,
    )[0].title;
    return {
      ...data,
      bigCategory: filterBigCategory,
      middleCategory: filterMiddleCategory,
    };
  });
  return combineUser;
};
