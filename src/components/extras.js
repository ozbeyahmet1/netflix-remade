
    // const [movie,setMovie]=useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(requests.fetchNetflixOriginals);
    //         setMovie(
    //             request.data.results[
    //                 Math.floor(Math.random() * request.data.results.length - 1)
    //             ]
    //         );
    //         return request;
    //     }

    //     fetchData();
    // },[])




    function truncate(string,n) {
        return string?.length > n ? string.substr(0,n-1) + '...' : string
    }
    // const movie_img = `${movie?.backdrop_path}`;