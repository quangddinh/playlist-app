import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        // gọi phương thức của firebase ở config firebase
        if (!res) {
            throw new Error("Could not complete signup");
        }
        await res.user.updateProfile({ displayName });
        //update display name

        error.value = null;

        // nếu ko có erorr thì sẽ null, null thì gọi {{ error }} ở view sẽ ko show lên
        // mà ko cần sử dụng v-if

        return res;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
};
const useSignup = () => {
    return { error, signup };
};
export default useSignup;
