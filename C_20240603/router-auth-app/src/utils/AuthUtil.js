const staticUsers = [
  { userid: "user1", password: "1234", roles: ["users"] },
  { userid: "user2", password: "1234", roles: ["users"] },
  { userid: "admin", password: "1234", roles: ["users", "admins"] },
];

const pathsToRoles = [
  { path: "/", roles: ["everybody"] },
  { path: "/login", roles: ["everybody"] },
  { path: "/users", roles: ["users", "admins"] },
  { path: "/admins", roles: ["admins"] },
];

const setUserInfo = (userInfo) => {
  if (userInfo && userInfo.authenticated) {
    window.localStorage.setItem("userInfo", btoa(JSON.stringify(userInfo)));
  } else {
    window.localStorage.removeItem("userInfo");
  }
};

const getUserInfo = () => {
  let strUserInfo = window.localStorage.getItem("userInfo");
  if (!strUserInfo) {
    return { authenticated: false };
  } else {
    return JSON.parse(window.atob(strUserInfo));
  }
};

const loginProcess = (userid, password, successCallback, failCallback) => {
  const user = staticUsers.find(
    (u) => u.userid === userid && u.password === password
  );
  if (user) {
    let userInfo = {
      authenticated: true,
      userid: user.userid,
      roles: user.roles,
    };
    setUserInfo(userInfo);
    successCallback();
  } else {
    if (failCallback) failCallback();
  }
};

const logoutProcess = (callback) => {
  setUserInfo(null);
  callback();
};

const isMatchToRoles = (reqPath) => {
  const path = pathsToRoles.find((pr) => pr.path === reqPath);
  if (!path) return false;

  const userInfo = getUserInfo();
  if (userInfo.authenticated === false) {
    return path.roles.find((p) => p === "everybody") ? true : false;
  } else {
    let isAccessible = false;
    if (path.roles.indexOf("everybody") > -1) {
      isAccessible = true;
    } else {
      for (let i = 0; i < userInfo.roles.length; i++) {
        let role = userInfo.roles[i];
        const index = path.roles.indexOf(role);
        if (index >= 0) {
          isAccessible = true;
          break;
        }
      }
    }
    return isAccessible;
  }
};

export { isMatchToRoles, loginProcess, logoutProcess, getUserInfo };
