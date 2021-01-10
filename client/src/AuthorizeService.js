import { axiosInstance } from './axiosService'

export const validateUser = async ({setLoading,setAuthStatus,setServerDown}) => {
  try {
    const { data } = await axiosInstance.post('/auth/user/validate');
    setLoading(false);
    setAuthStatus({
      userLoggedIn: true,
      userNameAlphabet: data.data.userNameAlphabet,
    });
  } catch (error) {
    setLoading(false);
    if (!error.response || error.response.status == 500) {
      setServerDown();
    } else {
      setAuthStatus({ userLoggedIn: false, userNameAlphabet: "" });
    }
  }
};