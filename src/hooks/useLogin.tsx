import { useMutation } from '@tanstack/react-query';
import { mockLogin, LoginPayload } from '../lib/api';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginPayload) => mockLogin(data),
  });
};
