import { api } from "@/lib/axios";

export type GetPopularPropsResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopularPropsResponse>(
    "/metrics/popular-products",
  );
  return response.data;
}
