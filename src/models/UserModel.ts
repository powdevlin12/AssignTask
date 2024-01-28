export interface UserModel {
  id?: string;
  username: string;
  password: string;
  email?: string;
  name?: string;
  phone?: string;
  website?: string;
  address?: {
    city: string;
    street: string;
    zipcode: string;
  };
  data: () => UserModel;
}
