import { useDispatch } from "react-redux";
import { setAuthentication } from "../store/modules/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { resetState } from "../store/modules/displayedVenueStageSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    dispatch(setAuthentication(false));
    dispatch(resetState());

    navigate("/");
  };

  return { logOut };
};

export default useAuth;
