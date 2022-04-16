const endpoints = {
  auth: {
    signin: `/auth/signin`,
    signup: `/auth/signup`,
  },
  courses: {
    getOne: courseId => `/courses/${courseId}`,
  },
  users: {
    me: `/users/me`,
    getOne: userId => `/users/${userId}`,
  },
};

export default endpoints;