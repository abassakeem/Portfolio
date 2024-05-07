/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 akeem.glb 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/akeem.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.stand.play();
  });

  return (
    <mesh position={[-0.3, -1.55, -1.5]}>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature002" rotation={[Math.PI / 2, 0, 0]}>
            <primitive object={nodes.mixamorigHips} />

            <skinnedMesh
              name="EyeLeft001"
              geometry={nodes.EyeLeft001.geometry}
              material={materials["Wolf3D_Eye.002"]}
              skeleton={nodes.EyeLeft001.skeleton}
            />
            <skinnedMesh
              name="EyeRight001"
              geometry={nodes.EyeRight001.geometry}
              material={materials["Wolf3D_Eye.003"]}
              skeleton={nodes.EyeRight001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Body001"
              geometry={nodes.Wolf3D_Body001.geometry}
              material={materials["Wolf3D_Body.001"]}
              skeleton={nodes.Wolf3D_Body001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Head001"
              geometry={nodes.Wolf3D_Head001.geometry}
              material={materials["Wolf3D_Skin.001"]}
              skeleton={nodes.Wolf3D_Head001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Headwear001"
              geometry={nodes.Wolf3D_Headwear001.geometry}
              material={materials["Wolf3D_Headwear.001"]}
              skeleton={nodes.Wolf3D_Headwear001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Bottom001"
              geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
              material={materials["Wolf3D_Outfit_Bottom.001"]}
              skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Footwear001"
              geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
              material={materials["Wolf3D_Outfit_Footwear.001"]}
              skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Top001"
              geometry={nodes.Wolf3D_Outfit_Top001.geometry}
              material={materials["Wolf3D_Outfit_Top.001"]}
              skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth001"
              geometry={nodes.Wolf3D_Teeth001.geometry}
              material={materials["Wolf3D_Teeth.001"]}
              skeleton={nodes.Wolf3D_Teeth001.skeleton}
            />
          </group>
        </group>
      </group>
    </mesh>
  );
}

useGLTF.preload("/akeem.glb");
