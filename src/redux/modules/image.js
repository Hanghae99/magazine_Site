import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { storage } from "../../utils/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const PREVIEW = "PREVIEW";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const preview = createAction(PREVIEW, (preview) => ({ preview }));

const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};

const uploadImageFB = (image) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));

    const storageRef = ref(storage, `imgs/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log(snapshot);

      getDownloadURL(ref(storage, `imgs/${image.name}`)).then((url) => {
        dispatch(uploadImage(url));
        console.log(url);
      });
    });
  };
};

export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  uploadImageFB,
  preview,
};

export { actionCreators };
