import axios, {AxiosResponse} from 'axios';

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9e783027-f4c8-4865-9f3f-637d2acc2128'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => response.data)
    },
    follow(userID:number): Promise<AxiosResponse> {
        return instance.post(`follow/${userID}`)
    },

    unfollow(userID:number): Promise<AxiosResponse>{
        return instance.delete(`follow/${userID}`)
    },
    getProfile(userID:string): Promise<AxiosResponse>{
        return  profileAPI.getProfile(userID)
    }
}

export const profileAPI = {
    getProfile(userID:string): Promise<AxiosResponse>{
        return  instance.get(`profile/` + userID)
    },
    getStatus(userID:string): Promise<AxiosResponse>{
        return instance.get(`profile/status` + userID)
    },
    updateStatus(status:string): Promise<AxiosResponse>{
        return instance.put(`profile/status` + {status:status})
    },

}
export const authAPI = {
   me(){
      return  instance.get(`auth/me`)
   }
}
