import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx
const Bird = ({ speed, factor, url, ...props }) => {
  const { nodes, materials, animations } = useLoader(GLTFLoader, url);
  const group = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useEffect(
    () => void mixer.clipAction(animations[0], group.current).play(),
    []
  );
  useFrame((state, delta) => {
    group.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  });

  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...props}>
        <mesh
          name='Object_0'
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}
          geometry={nodes.Object_0.geometry}
          material={materials.Material_0_COLOR_0}
        />
      </scene>
    </group>
  );
};

export default Bird;
