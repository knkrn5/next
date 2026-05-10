'use client';

import { useState, useCallback } from 'react';
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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function App() {

    const initialNodes: Node[] = [
        {
            id: 'n1',
            position: { x: 0, y: 0 },
            data: { label: 'Node 1' },
            type: 'input',
        },
        {
            id: 'n2',
            position: { x: 100, y: 100 },
            data: { label: 'Node 2' },
        },
    ];

    const initialEdges: Edge[] = [
        {
            id: 'n1-n2',
            source: 'n1',
            target: 'n2',
            label: 'connects with',
        },
    ];

    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [variant, setVariant] = useState<BackgroundVariant>('cross' as BackgroundVariant);


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
        <div className='w-full h-full'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background color="skyblue" variant={variant} />
                <Controls />
            </ReactFlow>
        </div>
    );
}