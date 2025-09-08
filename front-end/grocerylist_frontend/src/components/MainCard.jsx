export default function MainCard({topContent, bottomContent, bgColor = "bg-white"}) {
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <div className={`rounded-t-lg h-12 w-76 flex items-center pl-6 ${bgColor}`}>
                {topContent}
            </div>
            <div className={`rounded-b-lg h-100 w-76 ${bgColor} overflow-y-auto`}>
                {bottomContent}
            </div>
        </div>
    )

}