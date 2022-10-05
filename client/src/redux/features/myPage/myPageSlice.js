import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    me: {
        userId: '',
        userName: '',
        userPassword: '',
        userEmail: '',
        gender: false,
        height: 0,
        weight: 0,
        birthday: '',
    },
    meStateDone: false,
    nutritionHistoryList: [],
    weightHistoryList: [],

    myPageLikeList: [],
    likeDeleteState: false,

    myPageLoading: false, // 마이페이지 정보
    myPageDone: false,
    myPageError: false,

    updateUserInfoLoading: false, // 회원수정
    updateUserInfoDone: false,
    updateUserInfoError: false,

    deleteUserInfoLoading: false, // 회원탈퇴
    deleteUserInfoDone: false,
    deleteUserInfoError: false,

    passwordConfirmLoading: false, // 비밀번호 확인
    passwordConfirmDone: false,
    passwordConfirmError: false,

    nutritionHistoryLoading: false, // 영양 성분
    nutritionHistoryDone: false,
    nutritionHistoryError: null,

    weightHistoryLoading: false, // 몸무게 히스토리 읽기
    weightHistoryDone: false,
    weightHistoryError: null,

    updateWeightHistoryInfoLoading: false, // 몸무게 히스토리 수정
    updateWeightHistoryInfoDone: false,
    updateWeightHistoryInfoError: false,

    registerweightHistoryLoading: false, // 몸무게 히스토리 등록 히스토리
    registerweightHistoryDone: false,
    registerweightHistoryError: null,

    selectRegisterWeightHistoryInfoLoading: false, // 몸무게 히스토리 선택 등록
    selectRegisterWeightHistoryInfoDone: false,
    selectRegisterWeightHistoryInfoError: false,

    deleteWeightHistoryInfoLoading: false, // 몸무게 히스토리 삭제
    deleteWeightHistoryInfoDone: false,
    deleteWeightHistoryInfoError: false,
};

const myPageSlice = createSlice({
    name: 'mypage',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },

        MY_PAGE_REQUEST: (state, action) => {
            state.myPageLoading = true;
            state.myPageError = null;
            state.myPageDone = false;
        },
        MY_PAGE_SUCCESS: (state, action) => {
            state.myPageLoading = false;
            state.myPageDone = true;
            state.me.userId = action.data.userId;
            state.me.userPassword = action.data.userPassword;
            state.me.userEmail = action.data.userEmail;
            state.me.userName = action.data.userName;
            state.me.gender = action.data.gender;
            state.me.height = action.data.height;
            state.me.weight = action.data.weight;
            state.me.birthday = action.data.birthday;
            state.me.isLogin = action.data.isLogin;
            state.meStateDone = true;
        },
        MY_PAGE_FAILURE: (state, action) => {
            state.myPageLoading = false;
            state.myPageError = action.error;
        },
        UPDATE_USER_INFO_REQUEST: (state, action) => {
            state.updateUserInfoLoading = true;
            state.updateUserInfoError = null;
            state.updateUserInfoDone = false;
        },
        UPDATE_USER_INFO_SUCCESS: (state, action) => {
            state.updateUserInfoLoading = false;
            state.updateUserInfoDone = true;
        },
        UPDATE_USER_INFO_FAILURE: (state, action) => {
            state.updateUserInfoLoading = false;
            state.updateUserInfoError = action.error;
        },
        DELETE_USER_REQUEST: (state, action) => {
            state.deleteUserLoading = true;
            state.deleteUserError = null;
            state.deleteUserDone = false;
        },
        DELETE_USER_SUCCESS: (state, action) => {
            state.deleteUserLoading = false;
            state.deleteUserDone = true;
        },
        DELETE_USER_FAILURE: (state, action) => {
            state.deleteUserLoading = false;
            state.deleteUserError = action.error;
        },
        PASSWORD_CONFIRM_REQUEST: (state, action) => {
            state.passwordConfirmLoading = true;
            state.passwordConfirmError = null;
            state.passwordConfirmDone = false;
        },
        PASSWORD_CONFIRM_SUCCESS: (state, action) => {
            state.passwordConfirmLoading = false;
            state.passwordConfirmDone = true;
        },
        PASSWORD_CONFIRM_FAILURE: (state, action) => {
            state.passwordConfirmLoading = false;
            state.passwordConfirmError = action.error;
        },
        PASSWORD_CONFIRM_RESET: (state, action) => {
            state.passwordConfirmLoading = false;
            state.passwordConfirmError = null;
            state.passwordConfirmDone = false;
        },
        MY_PAGEUPDATE_USER_INFO_RESET_REQUEST: (state, action) => {
            state.updateUserInfoLoading = true;
            state.updateUserInfoError = null;
            state.updateUserInfoDone = false;
            state.passwordConfirmLoading = false;
            state.passwordConfirmError = null;
            state.passwordConfirmDone = false;
        },
        NUTRITION_HISTORY_REQUEST: (state, action) => {
            state.nutritionHistoryLoading = true;
            state.nutritionHistoryDone = false;
            state.nutritionHistoryError = null;
        },
        NUTRITION_HISTORY_SUCCESS: (state, action) => {
            state.nutritionHistoryLoading = false;
            state.nutritionHistoryDone = true;
            state.nutritionHistoryList = action.data;
        },
        NUTRITION_HISTORY_FAILURE: (state, action) => {
            state.nutritionHistoryLoading = false;
            state.nutritionHistoryError = action.error;
        },
        WEIGHT_HISTORY_REQUEST: (state, action) => {
            state.weightHistoryLoading = true;
            state.weightHistoryDone = false;
            state.weightHistoryError = null;
        },
        WEIGHT_HISTORY_SUCCESS: (state, action) => {
            state.weightHistoryLoading = false;
            state.weightHistoryDone = true;
            state.weightHistoryList = action.data;
        },
        WEIGHT_HISTORY_FAILURE: (state, action) => {
            state.weightHistoryLoading = false;
            state.weightHistoryError = action.error;
        },
        REGISTER_WEIGHT_HISTORY_REQUEST: (state, action) => {
            state.registerweightHistoryLoading = true;
            state.registerweightHistoryError = null;
            state.registerweightHistoryDone = false;
        },
        REGISTER_WEIGHT_HISTORY_SUCCESS: (state, action) => {
            state.registerweightHistoryLoading = false;
            state.registerweightHistoryDone = true;
        },
        REGISTER_WEIGHT_HISTORY_FAILURE: (state, action) => {
            state.registerweightHistoryLoading = false;
            state.registerweightHistoryError = action.error;
        },
        SELECT_REGISTER_WEIGHT_HISTORY_REQUEST: (state, action) => {
            state.selectRegisterWeightHistoryInfoLoading = true;
            state.selectRegisterWeightHistoryInfoError = null;
            state.selectRegisterWeightHistoryInfoDone = false;
        },
        SELECT_REGISTER_WEIGHT_HISTORY_SUCCESS: (state, action) => {
            state.selectRegisterWeightHistoryInfoLoading = false;
            state.selectRegisterWeightHistoryInfoDone = true;
        },
        SELECT_REGISTER_WEIGHT_HISTORY_FAILURE: (state, action) => {
            state.selectRegisterWeightHistoryInfoLoading = false;
            state.selectRegisterWeightHistoryInfoError = action.error;
        },
        SELECT_REGISTER_WEIGHT_HISTORY_RESET: (state, action) => {
            state.selectRegisterWeightHistoryInfoLoading = false;
            state.selectRegisterWeightHistoryInfoError = null;
            state.selectRegisterWeightHistoryInfoDone = false;
        },
        UPDATE_WEIGHT_HISTORY_REQUEST: (state, action) => {
            state.updateWeightHistoryInfoLoading = true;
            state.updateWeightHistoryInfoErrorr = null;
            state.updateWeightHistoryInfoDone = false;
        },
        UPDATE_WEIGHT_HISTORY_SUCCESS: (state, action) => {
            state.updateWeightHistoryInfoLoading = false;
            state.updateWeightHistoryInfoDone = true;
        },
        UPDATE_WEIGHT_HISTORY_FAILURE: (state, action) => {
            state.updateWeightHistoryInfoLoading = false;
            state.updateWeightHistoryInfoError = action.error;
        },
        UPDATE_WEIGHT_HISTORY_RESET: (state, action) => {
            state.updateWeightHistoryInfoLoading = false;
            state.updateWeightHistoryInfoErrorr = null;
            state.updateWeightHistoryInfoDone = false;
        },
        DELETE_WEIGHT_HISTORY_REQUEST: (state, action) => {
            state.deleteWeightHistoryInfoLoading = true;
            state.deleteWeightHistoryInfoError = null;
            state.deleteWeightHistoryInfoDone = false;
        },
        DELETE_WEIGHT_HISTORY_SUCCESS: (state, action) => {
            state.deleteWeightHistoryInfoLoading = false;
            state.deleteWeightHistoryInfoDone = true;
        },
        DELETE_WEIGHT_HISTORY_FAILURE: (state, action) => {
            state.deleteWeightHistoryInfoLoading = false;
            state.deleteWeightHistoryInfoError = action.error;
        },
        DELETE_WEIGHT_HISTORY_RESET: (state, action) => {
            state.deleteWeightHistoryInfoLoading = false;
            state.deleteWeightHistoryInfoError = null;
            state.deleteWeightHistoryInfoDone = false;
        },
        MY_PAGE_LIKE_REQUEST: (state, action) => {
        },
        MY_PAGE_LIKE_SUCCESS: (state, action) => {
            state.myPageLikeList = action.data.data;
            state.likeDeleteState = false;
        },
        MY_PAGE_LIKE_FAILURE: (state, action) => {
        },
        MY_PAGE_LIKE_DELETE_REQUEST: (state, action) => {
        },
        MY_PAGE_LIKE_DELETE_SUCCESS: (state, action) => {
            state.likeDeleteState = true;
        },
        MY_PAGE_LIKE_DELETE_FAILURE: (state, action) => {
        }
    }
});

export const { MY_PAGE_REQUEST, MY_PAGE_SUCCESS, MY_PAGE_FAILURE,
    UPDATE_USER_INFO_REQUEST, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAILURE, UPDATE_USER_INFO_RESET,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE,
    PASSWORD_CONFIRM_REQUEST, PASSWORD_CONFIRM_SUCCESS, PASSWORD_CONFIRM_FAILURE, PASSWORD_CONFIRM_RESET,
    NUTRITION_HISTORY_REQUEST, NUTRITION_HISTORY_SUCCESS, NUTRITION_HISTORY_FAILURE,
    WEIGHT_HISTORY_REQUEST, WEIGHT_HISTORY_SUCCESS, WEIGHT_HISTORY_FAILURE,
    REGISTER_WEIGHT_HISTORY_REQUEST, REGISTER_WEIGHT_HISTORY_SUCCESS, REGISTER_WEIGHT_HISTORY_FAILURE,
    SELECT_REGISTER_WEIGHT_HISTORY_REQUEST, SELECT_REGISTER_WEIGHT_HISTORY_SUCCESS, SELECT_REGISTER_WEIGHT_HISTORY_FAILURE, SELECT_REGISTER_WEIGHT_HISTORY_RESET,
    UPDATE_WEIGHT_HISTORY_REQUEST, UPDATE_WEIGHT_HISTORY_SUCCESS, UPDATE_WEIGHT_HISTORY_FAILURE, UPDATE_WEIGHT_HISTORY_RESET,
    DELETE_WEIGHT_HISTORY_REQUEST, DELETE_WEIGHT_HISTORY_SUCCESS, DELETE_WEIGHT_HISTORY_FAILURE, DELETE_WEIGHT_HISTORY_RESET,
    MY_PAGE_LIKE_REQUEST, MY_PAGE_LIKE_SUCCESS, MY_PAGE_LIKE_FAILURE,
    MY_PAGE_LIKE_DELETE_REQUEST, MY_PAGE_LIKE_DELETE_SUCCESS, MY_PAGE_LIKE_DELETE_FAILURE } = myPageSlice.actions;

export default myPageSlice.reducer;