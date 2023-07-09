import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { easing } from "maath";

const Shirt = () => {
  const snap = useSnapshot(state);
  const logoTexture = useTexture(snap.logoDecal);
  logoTexture.anisotropy = 16;
  const fullTexture = useTexture(snap.fullDecal);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );
  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
