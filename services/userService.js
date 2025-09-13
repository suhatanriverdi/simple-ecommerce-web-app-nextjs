import api from "@/lib/utils";

const userService = {
  getUserById: async (id) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },

  updateUser: async (id, data) => {
    const res = await api.patch(`/users/${id}`, data);
    return res.data;
  },
};

export default userService;
