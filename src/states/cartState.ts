import { atom } from "nanostores";
import ProductModel from "../models/product/productModel";

export const cartItems = atom<ProductModel[]>([]);