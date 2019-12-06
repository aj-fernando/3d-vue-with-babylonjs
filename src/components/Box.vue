<template>
<Scene>
  <Property name="clearColor" color="#FFF"> </Property>
  <Camera type="arcRotate"> </Camera>
  <HemisphericLight>
    <Property name="intensity" :float="2.0"> </Property>
  </HemisphericLight>
  <Box>
    <Material diffuse="#533597" specular="#533500"></Material>
    <Animation property="rotation.x" :duration="5" :end="Math.PI * 2"> </Animation>
    <Animation property="rotation.y" :duration="5" :end="Math.PI * 5"> </Animation>
  </Box>
</Scene>
</template>