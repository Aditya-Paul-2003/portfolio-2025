import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={200}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={100}
      color="#ffa033"
    />
    
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={50}
      color="#ffa033"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#4d3a2d", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={200}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[2, 4, 0]} intensity={50} color="#f2e083" />
    <pointLight position={[2, 2, -2]} intensity={5} color="#f2e083" />
  </>
);

export default HeroLights;