<template>
  <div class="dndflow" @drop="onDrop">
    <VueFlow @dragover="onDragOver">
      <Controls />
    </VueFlow>
  </div>
</template>

<script setup>
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import { nextTick, watch } from "vue";

let id = 0;
const getId = () => `dndnode_${id++}`;

const {
  findNode,
  onConnect,
  nodes,
  edges,
  addEdges,
  addNodes,
  viewport,
  project,
  vueFlowRef,
} = useVueFlow({
  nodes: [
    {
      id: "1",
      type: "input",
      label: "Text Message",
      position: { x: 250, y: 25 },
      width: 300,
      height: 100,
    },
  ],
});

const onDragOver = (event) => {
  event.preventDefault();

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};

onConnect((params) => addEdges([params]));

const onDrop = (event) => {
  nextTick(() => {
    const type = event.dataTransfer?.getData("application/vueflow");

    const { left, top } = vueFlowRef.value.getBoundingClientRect();

    const position = project({
      x: event.clientX - left,
      y: event.clientY - top,
    });

    const newNode = {
      id: getId(),
      type,
      position,
      label: `${type} node`,
      width: 300,
      height: 100,
    };

    addNodes([newNode]);


    const node = findNode(newNode.id);
    const stop = watch(
      () => node.dimensions,
      (dimensions) => {
        if (dimensions.width > 0 && dimensions.height > 0) {
          node.position = {
            x: node.position.x - node.dimensions.width / 2,
            y: node.position.y - node.dimensions.height / 2,
          };
          stop();
        }
      },
      { deep: true, flush: "post" }
    );
  });
};
</script>
