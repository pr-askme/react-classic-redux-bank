const customerInitialState = {
  fullName: "",
  nationalId: null,
  createdAt: "",
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: new Date().toISOString(),
      };

    case "customer/update":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return { type: "customer/create", payload: { fullName, nationalId } };
}

export function updateCustomer(fullName) {
  return { type: "customer/update", payload: fullName };
}
