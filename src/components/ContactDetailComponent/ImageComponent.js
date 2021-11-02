import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';

function ImageComponent({src}) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  return (
    <View style={style.imageContainer}>
      {isLoading && <Text style={style.loading}>Loading image...</Text>}
      <View>
        <Image
          onLoadEnd={onLoadEnd}
          onError={onError}
          onLoadStart={onLoadStart}
          style={style.detailPhoto}
          source={{uri: src}}
        />
      </View>
    </View>
  );
}

export default ImageComponent;