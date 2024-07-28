import { FileNode } from '@/app/_lib/types';

const fileTreeData: FileNode[] = [
    {
        name: 'bin',
        type: 'folder',
        children: [
            { name: 'cat', type: 'folder' },
            { name: 'echo', type: 'folder' },
            { name: 'ls', type: 'folder' },
            { name: 'ps', type: 'folder' },
            { name: 'pwd', type: 'folder' },
            { name: 'cd', type: 'folder' },
            { name: 'jsh', type: 'folder' }
        ]
    },
    {
        name: 'etc',
        type: 'folder',
        children: [
            { name: 'jshrc', type: 'file' },
            { name: 'log.txt', type: 'file' }
        ]
    },
    {
        name: 'dev',
        type: 'folder',
        children: [
            { name: 'Metasource', type: 'file' },
            { name: 'EXSC BYU', type: 'file' },
            { name: 'chess', type: 'file' },
            { name: 'sound-box', type: 'file' }
        ]
    },
    {
        name: 'lib',
        type: 'folder',
        children: [
            { name: 'jsh-specification.txt', type: 'file' },
            { name: 'about-this-app.txt', type: 'file' }
        ]
    },
    {
        name: 'media',
        type: 'folder',
        children: [
            { name: 'blog-post-1.txt', type: 'file' },
            { name: 'blog-post-2.txt', type: 'file' },
            { name: 'blog-post-3.txt', type: 'file' },
            { name: 'blog-post-4.txt', type: 'file' },
        ]
    },
    {
        name: 'opt',
        type: 'folder',
        children: [

        ]
    },
    {
        name: 'root',
        type: 'folder',
        children: [
            { name: 'kotzij.txt', type: 'file' }
        ]
    },
    {
        name: 'usr',
        type: 'folder',
        children: [
            { name: 'song.mp3', type: 'file' },
            { name: 'art.png', type: 'file' },
            { name: 'resume.pdf', type: 'file' }
        ]
    },
    {
        name: 'var',
        type: 'folder',
        children: []
    }
]

export default fileTreeData;