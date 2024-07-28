"use client";

import { useEffect, useState } from "react";
import { FileNode } from "../_lib/types";

interface FileTreeNodeProps {
    node: FileNode;
}

const FileTreeNode: React.FC<FileTreeNodeProps> = ({ node }) => {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        console.log(node);
    });
    const toggleExpand = () => {
        if (node.type === 'folder') {
            setExpanded(!expanded);
        }
    }

    return (
        <div style={{ marginLeft: 20 }}>
            <div onClick={toggleExpand} style={{ cursor: node.type == 'folder' ? 'pointer' : 'default' }} className="hover:cursor-pointer">
                {node.type === "folder" ? (expanded ? '📂' : '📁') : '📄'} {node.name}
            </div>
            {expanded && node.children && (
                <div>
                    {node.children.map((child, index) => (
                        <FileTreeNode key={index} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FileTreeNode;