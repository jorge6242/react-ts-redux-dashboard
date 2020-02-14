import Category from "../services/Category";
import snackBarUpdate from "../actions/snackBarActions";
import { updateModal } from "../actions/modalActions";

export const ACTIONS = {
  GET_ALL: "category/get_all",
  GET: "category/get",
  SET_LOADING: "category/set_loading"
};

export default function getAll() {
  return async (dispatch: any) => {
    try {
      const { data, status } = await Category.getAll();
      let getAllCategories = [];
      if (status === 200) {
        getAllCategories = data;
        dispatch({
          type: ACTIONS.GET_ALL,
          payload: getAllCategories
        });
      }
      return getAllCategories;
    } catch (error) {
      snackBarUpdate({
        payload: {
          message: error.message,
          status: true,
          type: "error"
        }
      })(dispatch);
      return error;
    }
  };
}

export function create(body: object) {
  return async (dispatch: any) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: true
    });
    try {
      const response = await Category.create(body);
      const { data, status } = response;
      let createCategoryResponse: any = [];
      if (status === 200 || status === 201) {
        createCategoryResponse = response;
        snackBarUpdate({
          payload: {
            message: "Category Created!",
            type: "success",
            status: true
          }
        })(dispatch);
        dispatch(getAll());
        dispatch(
          updateModal({
            payload: {
              status: false,
              element: null
            }
          })
        );
        dispatch({
          type: ACTIONS.SET_LOADING,
          payload: false
        });
      }
      return createCategoryResponse;
    } catch (error) {
      snackBarUpdate({
        payload: {
          message: error.message,
          type: "error",
          status: true
        }
      })(dispatch);
      dispatch({
        type: ACTIONS.SET_LOADING,
        payload: false
      });
      return error;
    }
  };
}

export function get(id: any) {
  return async (dispatch: any) => {
    try {
      const { data, status } = await Category.get(id);
      let categoryResponse: any = [];
      if (status === 200) {
        categoryResponse = data;
      }
      return categoryResponse;
    } catch (error) {
      snackBarUpdate({
        payload: {
          message: error.message,
          type: "error",
          status: true
        }
      })(dispatch);
      return error;
    }
  };
}

export function update(body: object) {
  return async (dispatch: any) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: true
    });
    try {
      const { data, status } = await Category.update(body);
      let categoryResponse: any = [];
      if (status === 200) {
        categoryResponse = {
          data,
          status
        };
        snackBarUpdate({
          payload: {
            message: "Category Updated!",
            type: "success",
            status: true
          }
        })(dispatch);
        dispatch(getAll());
        dispatch({
          type: ACTIONS.SET_LOADING,
          payload: false
        });
      }
      return categoryResponse;
    } catch (error) {
      snackBarUpdate({
        payload: {
          message: error.message,
          type: "error",
          status: true
        }
      })(dispatch);
      dispatch({
        type: ACTIONS.SET_LOADING,
        payload: false
      });
      return error;
    }
  };
}

export function remove(id: number) {
  return async (dispatch: any) => {
    try {
      const { data, status } = await Category.remove(id);
      let categoryResponse: any = [];
      if (status === 200) {
        categoryResponse = {
          data,
          status
        };
        snackBarUpdate({
          payload: {
            message: "Category Removed!",
            type: "success",
            status: true
          }
        })(dispatch);
        dispatch(getAll());
      }
      return categoryResponse;
    } catch (error) {
      snackBarUpdate({
        payload: {
          message: error.message,
          type: "error",
          status: true
        }
      })(dispatch);
      return error;
    }
  };
}
