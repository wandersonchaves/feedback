import React from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableHighlightProps,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";

interface Props extends TouchableHighlightProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
