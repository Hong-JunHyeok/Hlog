interface ILoginParams {
  id: string;
  pw: string;
}

const loginValidation = ({ id, pw }: ILoginParams) => {
  if (!id || !pw) {
    return false;
  }

  return true;
};

export default loginValidation;
