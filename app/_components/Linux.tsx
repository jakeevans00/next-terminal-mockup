const Linux = () => {
    return (
        <div className="w-2/3 m-24 border border-slate-700">
            <div className="flex items-center justify-center h-6  bg-slate-800 m-auto">
                <p>/home/kotz-ij</p>
                <span className="float-end">x</span>
            </div>
            <div className="px-1 py-8 text-white flex items-center linux gap-4">
                <div className="w-min flex-1">
                    <p>&nbsp;____________________</p>
                    <p>/ living on earth may be </p>
                    <div>
                        <pre className="text-teal-200 one-word">
                            o

                        </pre>
                    </div>
                </div>

                <div className="w-min flex-1">
                    <p className="text-teal-200">jake@kotz-ij.dev</p>
                    <p>------------------</p>
                    <p>OS: Arch Linux x86_64</p>
                    <p>Host: Whatever you</p>
                    <p>Kernel: 1.0.0-jsh</p>
                    <p>Packages: 793 (pacman)</p>
                </div>
            </div>
        </div>
    )
}

export default Linux;