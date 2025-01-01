import React, { useMemo } from 'react';
import ReactFlow, { MiniMap, Controls, Handle } from 'reactflow';
import 'reactflow/dist/style.css';

// Custom edge type for smooth curves
const customEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) => {
  return (
    <g className="react-flow__edge-path" style={{ pointerEvents: 'none' }}>
      <path
        className="react-flow__edge-path"
        fill="none"
        stroke="#4CAF50"
        strokeWidth={2}
        d={`M${sourceX},${sourceY} C${(sourceX + targetX) / 2},${sourceY} ${(sourceX + targetX) / 2},${targetY} ${targetX},${targetY}`}
      />
    </g>
  );
};

const FlowChart = () => {
  const graphData = {
    nodes: [
      {
        id: 'org1',
        type: 'input',
        label: 'Infinity Farms',
        role: 'Data Provider',
        logo: '/farm1.jpg',
        position: { x: 0, y: 150 },
      },
      {
        id: 'org2',
        type: 'input',
        label: 'Toothman Farms',
        role: 'Data Provider',
        logo: '/farm2.jpeg',
        position: { x: 0, y: 350 },
      },
      {
        id: 'org3',
        label: 'Amazon',
        role: 'Data Producer',
        logo: '/aws.png',
        position: { x: 300, y: 250 },
      },
      {
        id: 'org4',
        type: 'output',
        label: 'Farm AI',
        role: 'Data Customer',
        logo: '/farm3.png',
        position: { x: 600, y: 250 },
      },
    ],
    edges: [
      { id: 'e1', source: 'org1', target: 'org3', animated: true },
      { id: 'e2', source: 'org2', target: 'org3', animated: true },
      { id: 'e3', source: 'org3', target: 'org4', animated: true },
    ],
  };

  const nodes = useMemo(
    () =>
      graphData.nodes.map((node) => ({
        id: node.id,
        type: node.type || 'default',
        data: {
          label: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '400px',
              }}
            >
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={node.logo}
                  alt={`${node.label} Logo`}
                  style={{ width: '100%', height: 'auto', maxWidth: '50px' }}
                />
              </div>
              <div
                style={{
                  flex: '2',
                  textAlign: 'left',
                  wordBreak: 'break-word',
                  padding: '4px',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>{node.label}</div>
                <small>{node.role}</small>
              </div>
            </div>
          ),
        },
        position: node.position,
        // Add handles to define connector positions
        sourcePosition: 'right', // Right side for input nodes
        targetPosition: 'left',  // Left side for output nodes
      })),
    [graphData]
  );

  const edges = useMemo(
    () =>
      graphData.edges.map((edge) => ({
        ...edge,
        type: 'smoothstep',
        style: { strokeWidth: 2, stroke: '#4CAF50' },
        animated: edge.animated,
      })),
    [graphData]
  );

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        edgeTypes={{ smoothstep: customEdge }}
      >
        {graphData.nodes.map((node) => (
          <>
            {/* Add Handle components to connect nodes on the sides */}
            {node.type !== 'output' && (
              <Handle
                type="source"
                position="right"
                id={`source-${node.id}`}
                style={{ background: '#4CAF50' }}
              />
            )}
            {node.type !== 'input' && (
              <Handle
                type="target"
                position="left"
                id={`target-${node.id}`}
                style={{ background: '#4CAF50' }}
              />
            )}
          </>
        ))}
        <Controls position="bottom-right" />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
