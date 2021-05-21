import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

// nếu login hay logout thì sẽ chạy function bên trong
// bất kì trạng thái auth nào thay đổi sẽ kích hoạt function

projectAuth.onAuthStateChanged((_user) => {
    console.log(_user);
    user.value = _user;
});

const getUser = () => {
    return { user };
};
export default getUser;
