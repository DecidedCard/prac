// action value
const PLUS_N = "PLUS_N";
const MIUNS_N = "MIUNS_N";

// action creator : action value를 return하는 함수

export const PLUSN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const MINUSN = (payload) => {
  return {
    type: MIUNS_N,
    payload,
  };
};

// 초기 상태값(State)
const initialState = {
  number: 0,
};

// 리듀서 : 'state에 변화를 일으키는'함수
// (1) state를 action의 type에 따라 변경되는 함수

// input : state와 action
// action 객체하는 것은 action type을 payload 만큼 처리하는 것
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MIUNS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
