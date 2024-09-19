import { IPlaceholderUser } from "./jsonplaceholder.types";

export type UserDisplayProps = {
    users: IPlaceholderUser[];
    isCardView: boolean;
}