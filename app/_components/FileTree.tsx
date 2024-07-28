import FileTreeNode from "./FileTreeNode";
import { FileNode } from "../_lib/types";

interface FileTreeProps {
    data: FileNode[];
}

const FileTree: React.FC<FileTreeProps> = ({ data }) => {
    return (
        <div className="mb-4 px-8 overflow-auto">
            {data.map((node) => (
                <FileTreeNode key={node.name} node={node} />
            ))}
        </div>
    );
}

export default FileTree;