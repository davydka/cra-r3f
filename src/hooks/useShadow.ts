import {useEffect} from 'react'
import {
  Group, Mesh
} from 'three';

interface Props {
  scene: Group
}

const useShadow = ({scene}: Props) => {
  useEffect(() => {
    scene.traverse((node) => {
      if ((node as Mesh).isMesh) {
        node.castShadow = true;
      }
    });

  }, [scene])
}

export default useShadow;
