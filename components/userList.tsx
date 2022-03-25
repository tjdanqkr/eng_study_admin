import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAllUserAsync, saveCombineData } from '../features/auth/authSlice';
import { getAllCategoryAsync } from '../features/category/categorySlice';
import { checkCombineUserData } from '../lib/combineUser';
import Table from './table';

type Props = {
  children?: ReactNode;
};
export default function UserList({ children }: Props) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth.user);
  const { category } = useAppSelector((state) => state.category);
  const combineUser = useAppSelector((state) => state.auth.combineUser);

  useEffect(() => {
    getAllUser();
    getAllCategory();
  }, []);

  useEffect(() => {
    checkCombineUser();
  }, [user, category]);

  const getAllUser = async () => {
    await dispatch(getAllUserAsync());
  };
  const getAllCategory = async () => {
    await dispatch(getAllCategoryAsync());
  };
  const checkCombineUser = async () => {
    await getCombineUser();
  };

  const getCombineUser = async () => {
    const combineUser = await checkCombineUserData(user, category);
    if (combineUser) {
      dispatch(saveCombineData(combineUser));
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-gray-200 rounded-lg min-h-96 text-center flex flex-col justify-evenly">
            <Table
              cols={col}
              rows={combineUser}
              table_header={'UserList'}
            ></Table>
          </div>
        </div>
      </div>
    </>
  );
}

const col = [
  {
    field: 'id',
  },
  {
    field: 'name',
  },
  {
    field: 'phoneNum',
  },
  {
    field: 'startTime',
  },
  {
    field: 'endTime',
  },
  {
    field: 'bigCategory',
  },
  {
    field: 'middleCategory',
  },
];
