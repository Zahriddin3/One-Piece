

function Header () {
    return ( 
        <div className="mx-12 pt-6 flex justify-between">
            <img className="w-40 h-20" src="https://logos-world.net/wp-content/uploads/2021/09/One-Piece-Logo.png" alt="OnePiece"/>
            <div className="space-x-6">
                <a className="bg-yellow-100 border rounded-full px-4 py-1 text-lg font-semibold text-blue-900 " href="#">Pirates Home </a>
                <a className="bg-yellow-100 border rounded-full px-4 py-1 text-lg font-semibold text-blue-900 " href="#">About Mugiwara </a>
                <a className="bg-yellow-100 border rounded-full px-4 py-1 text-lg font-semibold text-blue-900 " href="#">Treasure Destination </a>
                <a className="bg-yellow-100 border rounded-full px-4 py-1 text-lg font-semibold text-blue-900 " href="#">Devil Fruits </a>
               
            </div>
        </div>
     );
}

export default Header ;