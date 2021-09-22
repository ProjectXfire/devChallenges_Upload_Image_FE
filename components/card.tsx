import React from "react";
// Next
import Image from "next/image";
// Models
import { ImageModel } from "../models/image";
// Styles
import { Card as CardStyled, CardImage } from "@styles/card";
// Components
import { TextButton, Button } from "@components/shared";

export const Card = ({
  copyLink,
  value,
  showTextButton = true,
  removeImage,
}: {
  copyLink?: (...arg: any) => void;
  value: ImageModel;
  showTextButton?: boolean;
  removeImage: (id: string, name: string) => void;
}) => {
  return (
    <CardStyled>
      <CardImage
        objectFit="cover"
        width="100"
        height="170"
        src={value.image}
        quality={100}
        alt="test"
      />
      {showTextButton && (
        <TextButton
          value={value.image}
          text="Copy Link"
          readOnly
          outline={false}
          color="#2979ff"
          size="sm"
          onClick={copyLink}
        />
      )}
      <br />
      <Button
        color="#d32f2f"
        onClick={() => removeImage(value._id, value.name)}
      >
        Delete
      </Button>
    </CardStyled>
  );
};
