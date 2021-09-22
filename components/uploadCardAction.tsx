import React from "react";
// Styles
import { UploadCardAction as UploadCardActionStyled } from "@styles/uploadCard";

export const UploadCardAction: React.FC = ({ children }) => {
  return <UploadCardActionStyled>{children}</UploadCardActionStyled>;
};
