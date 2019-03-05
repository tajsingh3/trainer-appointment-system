import database, { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = uid => {
  return {
    type: "LOGIN",
    uid
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const isTrainer = isTrainer => ({
  type: "IS_TRAINER",
  isTrainer
});

export const startIsTrainer = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database
      .ref(`users/${uid}/isTrainer`)
      .once("value")
      .then(snapshot => {
        const isTrainerValue = !!snapshot.val();
        dispatch(isTrainer(isTrainerValue));
      });
  };
};
