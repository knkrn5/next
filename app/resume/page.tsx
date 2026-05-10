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
    Position,
    Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node for Color Picker
const ColorPickerNode = ({ data }: any) => (
    <div className="bg-white border rounded shadow-md w-48 font-sans">
        <div className="bg-gray-50 p-2 border-b text-sm font-semibold text-gray-700 rounded-t">shape color</div>
        <div className="p-4 flex items-center gap-2">
            <input type="color" defaultValue={data.color || "#ff00dd"} className="w-8 h-8 cursor-pointer border-0 p-0" onChange={data.onChange} />
            <span className="text-gray-600 text-sm">{data.color || "#ff00dd"}</span>
        </div>
        <Handle type="source" position={Position.Right} />
    </div>
);

// Custom Node for Shape Type
const ShapeTypeNode = ({ data }: any) => (
    <div className="bg-white border rounded shadow-md w-48 font-sans">
        <div className="bg-gray-50 p-2 border-b text-sm font-semibold text-gray-700 rounded-t">shape type</div>
        <div className="p-4 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="radio" name="shape" value="cube" defaultChecked={data.shape === 'cube'} onChange={data.onChange} className="accent-pink-500 w-4 h-4" /> cube
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="radio" name="shape" value="pyramid" defaultChecked={data.shape === 'pyramid'} onChange={data.onChange} className="accent-pink-500 w-4 h-4" /> pyramid
            </label>
        </div>
        <Handle type="source" position={Position.Right} />
    </div>
);

// Custom Node for Zoom Level
const ZoomLevelNode = ({ data }: any) => (
    <div className="bg-white border rounded shadow-md w-48 font-sans">
        <div className="bg-gray-50 p-2 border-b text-sm font-semibold text-gray-700 rounded-t">zoom level</div>
        <div className="p-4">
            <input type="range" min="1" max="100" defaultValue={data.zoom || 50} onChange={data.onChange} className="w-full accent-pink-500" />
        </div>
        <Handle type="source" position={Position.Right} />
    </div>
);

// Custom Node for Output
const OutputNode = ({ data }: any) => (
    <div className="bg-white border rounded shadow-md w-96 h-80 font-sans flex flex-col relative">
        <Handle type="target" position={Position.Left} id="color" style={{ top: '30%' }} />
        <Handle type="target" position={Position.Left} id="shape" style={{ top: '50%' }} />
        <Handle type="target" position={Position.Left} id="zoom" style={{ top: '70%' }} />
        <div className="bg-gray-50 p-2 border-b text-sm font-semibold text-gray-700 rounded-t">output</div>
        <div className="flex-1 p-4 flex items-center justify-center overflow-hidden relative">
            {/* Using a placeholder for the actual 3D rendering to keep it simple */}
            <div className="w-full h-full flex items-center justify-center text-pink-500 font-bold opacity-80" 
                style={{ 
                    backgroundColor: 'rgba(255, 0, 221, 0.1)',
                    transform: `scale(${data.zoom ? data.zoom / 50 : 1})`
                }}>
                3D Output ({data.shape || 'cube'} - {data.color || '#ff00dd'})
            </div>
        </div>
    </div>
);

const nodeTypes = {
    colorPicker: ColorPickerNode,
    shapeType: ShapeTypeNode,
    zoomLevel: ZoomLevelNode,
    output: OutputNode,
};

export default function App() {

    const initialNodes: Node[] = [
        {
            id: 'n1',
            type: 'colorPicker',
            position: { x: 50, y: 50 },
            data: { color: '#ff00dd' },
        },
        {
            id: 'n2',
            type: 'shapeType',
            position: { x: 50, y: 200 },
            data: { shape: 'cube' },
        },
        {
            id: 'n3',
            type: 'zoomLevel',
            position: { x: 50, y: 400 },
            data: { zoom: 50 },
        },
        {
            id: 'n4',
            type: 'output',
            position: { x: 350, y: 150 },
            data: { color: '#ff00dd', shape: 'cube', zoom: 50 },
        }
    ];

    const initialEdges: Edge[] = [
        { id: 'e1-4', source: 'n1', target: 'n4', targetHandle: 'color', animated: true, style: { stroke: '#a8a8a8', strokeDasharray: '5,5' } },
        { id: 'e2-4', source: 'n2', target: 'n4', targetHandle: 'shape', animated: true, style: { stroke: '#a8a8a8', strokeDasharray: '5,5' } },
        { id: 'e3-4', source: 'n3', target: 'n4', targetHandle: 'zoom', animated: true, style: { stroke: '#a8a8a8', strokeDasharray: '5,5' } },
    ];

    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Dots);

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
                <Background color="#ccc" gap={20} variant={variant} />
                <Controls />
            </ReactFlow>
        </div>
    );
}