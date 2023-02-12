import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Text from './Text';

const Neptune = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/neptune/base.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 12, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Neptune
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('neptune')}
        >
          <meshStandardMaterial map={base} />
        </Sphere>
      </>
    );
  }
);

export default Neptune;
