
import {
    ReactFlow,
    Handle,
    Position,
    MarkerType
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './AppInfo.css';
import { useTheme } from '../context/ThemeContext';

// Reusable node component
function OrgNode({ data, type }) {
    if (type === 'junction') {
        return (
            <div className="junction">
                <Handle id="target-top" type="target" position={Position.Top} />
                <Handle id="source-top" type="source" position={Position.Top} />

                <Handle id="target-bottom" type="target" position={Position.Bottom} />
                <Handle id="source-bottom" type="source" position={Position.Bottom} />

                <Handle id="target-left" type="target" position={Position.Left} />
                <Handle id="source-left" type="source" position={Position.Left} />

                <Handle id="target-right" type="target" position={Position.Right} />
                <Handle id="source-right" type="source" position={Position.Right} />
            </div>
        );
    }

    const isCompany = type === 'company';

    return (
        <div className={`org-node ${isCompany ? 'company-node' : ''}`}>
            {isCompany ? (
                <>
                    <Handle
                        id="source-bottom"
                        type="source"
                        position={Position.Bottom}
                    />
                    {data.label}
                </>
            ) : (
                <>
                    <Handle
                        id="source-right"
                        type="source"
                        position={Position.Right}
                    />

                    <Handle
                        id="target-left"
                        type="target"
                        position={Position.Left}
                    />

                    {data.label}
                </>
            )}
        </div>
    );
}

const nodeTypes = {
    company: OrgNode,
    department: OrgNode,
    junction: OrgNode
};

// Departments
const leftDepartments = [
    'Java',
    'Springboot',
    'Rest API',
    'Gradle',
    'Hibernate',
    'MySQL'
];

const rightDepartments = [
    'React',
    'JSX',
    'Axios',
    'Tailwind CSS',
    'Vite'
];

// Create nodes
const nodes = [
    // Company
    {
        id: 'company',
        type: 'company',
        position: { x: 650, y: 30 },
        data: { label: 'Application' }
    },

    // Main horizontal junction
    {
        id: 'center',
        type: 'junction',
        position: { x: 759, y: 170 },
        data: {}
    },

    // Left vertical spine junctions
    ...leftDepartments.map((_, i) => ({
        id: `left-${i}`,
        type: 'junction',
        position: { x: 420, y: 170 + (i * 90) },
        data: {}
    })),

    // Right vertical spine junctions
    ...rightDepartments.map((_, i) => ({
        id: `right-${i}`,
        type: 'junction',
        position: { x: 1110, y: 170 + (i * 100) },
        data: {}
    })),

    // Left department boxes
    ...leftDepartments.map((label, i) => ({
        id: `dept-left-${i}`,
        type: 'department',
        position: { x: 50, y: 140 + (i * 90) },
        data: { label }
    })),

    // Right department boxes
    ...rightDepartments.map((label, i) => ({
        id: `dept-right-${i}`,
        type: 'department',
        position: { x: 1220, y: 140 + (i * 100) },
        data: { label }
    }))
];

// Create connections
const edges = [
    // Company to center
    {
        id: 'company-center',
        source: 'company',
        sourceHandle: 'source-bottom',
        target: 'center',
        targetHandle: 'target-top'
    },

    // Center to left and right spines
    {
        id: 'center-left',
        source: 'center',
        sourceHandle: 'source-left',
        target: 'left-0',
        targetHandle: 'target-right'
    },
    {
        id: 'center-right',
        source: 'center',
        sourceHandle: 'source-right',
        target: 'right-0',
        targetHandle: 'target-left'
    },

    // Left vertical spine
    ...leftDepartments.slice(1).map((_, i) => ({
        id: `left-spine-${i}`,
        source: `left-${i}`,
        sourceHandle: 'source-bottom',
        target: `left-${i + 1}`,
        targetHandle: 'target-top'
    })),

    // Right vertical spine
    ...rightDepartments.slice(1).map((_, i) => ({
        id: `right-spine-${i}`,
        source: `right-${i}`,
        sourceHandle: 'source-bottom',
        target: `right-${i + 1}`,
        targetHandle: 'target-top'
    })),

    // Left departments connected to spine
    ...leftDepartments.map((_, i) => ({
        id: `left-dept-${i}`,
        source: `dept-left-${i}`,
        sourceHandle: 'source-right',
        target: `left-${i}`,
        targetHandle: 'target-left'
    })),

    // Right departments connected to spine
    ...rightDepartments.map((_, i) => ({
        id: `right-dept-${i}`,
        source: `right-${i}`,
        sourceHandle: 'source-right',
        target: `dept-right-${i}`,
        targetHandle: 'target-left'
    }))
].map(edge => ({
    ...edge,
    type: 'straight',
    style: {
        stroke: 'var(--chart-line, #888)',
        strokeWidth: 1
    }
}));

export default function AppInfo() {
    const { theme } = useTheme();
    return (
        <div className={`org-chart-wrapper ${theme === 'dark' ? `dark` : undefined}`}>
            <div className="org-chart-canvas">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    fitView
                    fitViewOptions={{ padding: 0.05 }}
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={false}
                    nodesFocusable={false}
                    edgesFocusable={false}
                    panOnDrag={false}
                    zoomOnScroll={false}
                    zoomOnDoubleClick={false}
                    proOptions={{ hideAttribution: true }}
                />
            </div>
        </div>
    );
}
