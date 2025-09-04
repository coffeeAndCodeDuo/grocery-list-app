export default function MainCard({topContent, bottomContent}) {
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <div className="bg-white rounded-t-lg h-12 w-76 flex items-center pl-6">
                {topContent}
            </div>
            <div className="bg-white rounded-b-lg h-100 w-76">
                {bottomContent}
            </div>
        </div>
    )

}