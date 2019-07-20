type SendFunction = (
  to: string | Array<string>,
  message: string,
  token?: string,
) => Promise<{
  success: boolean;
  total?: number;
  result?: Array<{
    number: string;
    rate: number;
    region: string;
    isSent: boolean;
  }>;
  error?: {
    code: number;
    message: string;
  };
}>;

export default SendFunction;
