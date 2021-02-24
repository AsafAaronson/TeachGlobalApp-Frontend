import React from "react";

export const LikeHandlerContext = React.createContext({
    userLikes: [],
    handleLike: () => {}
});
