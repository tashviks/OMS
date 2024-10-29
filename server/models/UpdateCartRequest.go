package models

type UpdateCartRequest struct {
    CartID    int           `json:"cart_id"`
    UserID    int           `json:"user_id"`
    Status    int           `json:"status"`
    CartItems []Cart_Item    `json:"cart_items"`
}