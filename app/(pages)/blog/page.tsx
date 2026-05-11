'use client';

import { useState, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  OnNodesChange,
  OnEdgesChange,
  Node,
  Edge,
  addEdge,
  OnConnect,
  Position,
  Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { blogData } from './blogData';



// Custom Node for Card
const CardNode = ({ data }: any) => (
  <div className="bg-white rounded-lg shadow-md w-72 overflow-hidden font-sans hover:shadow-xl transition-shadow duration-300">
    {data.image && (
      <div className="h-40 overflow-hidden bg-gray-200">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <div className="p-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{data.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{data.description}</p>
      {data.date && (
        <p className="text-xs text-gray-400 mt-1">
          {new Date(data.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </p>
      )}
    </div>
  </div>
);

const nodeTypes = {
  card: CardNode,
};

export default function App() {

  const initialNodes = blogData.map((post, i) => ({
    id: `n${i + 1}`,
    type: 'card',
    position: {
      x: 50 + (i % 3) * 330,
      y: 50 + Math.floor(i / 3) * 350,
    },
    data: {
      title: post.title,
      description: post.excerpt,
      image: post.image,
      date: post.date,
    },
  }));

  const initialEdges: Edge[] = [];

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Dots);

  useEffect(() => {
    const updateLayout = () => {
      const isMobile = window.innerWidth < 768;

      setNodes((currentNodes) =>
        currentNodes.map((node, index) => {
          if (isMobile) {
            // Vertical layout for mobile
            return {
              ...node,
              position: { x: 50, y: 50 + index * 350 }
            };
          } else {
            // 3x2 Grid for desktop
            const col = index % 3;
            const row = Math.floor(index / 3);
            return {
              ...node,
              position: { x: 50 + col * 330, y: 50 + row * 350 }
            };
          }
        })
      );
    };

    // Set initial layout
    updateLayout();

    // Listen for window resize
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div className='w-full h-full  relative bg-blue-50/20'>
      {/* Adding the background gradient blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={20} variant={variant} className='bg-black' />
      </ReactFlow>
    </div>
  );
}