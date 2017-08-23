package readinglist

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class MyListMovieController @Autowired constructor(val myListMovieRepository: MyListMovieRepository      ){
    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @GetMapping(value="/api/movie/{watcher}")
    fun watcherMovies(@PathVariable("watcher") watcher:String):List<Movie> = myListMovieRepository.findByWatcher(watcher)

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/movie/{watcher}/{id}",method= arrayOf(RequestMethod.GET))
    fun watcherMovieById(@PathVariable("watcher") watcher:String,@PathVariable("id") id:String):Boolean{
        val list:List<Movie> =   myListMovieRepository.findByWatcher(watcher)
        return list.map({ item -> item.id }).contains(id)
    }


    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/get/movie/{watcher}/{id}",method= arrayOf(RequestMethod.GET))
    fun movieById(@PathVariable("watcher") watcher:String,@PathVariable("id") id:String):Movie{
        val movie:Movie =   myListMovieRepository.findByWatcherAndId(watcher,id)
        return movie
    }

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/movie/{watcher}",method= arrayOf(RequestMethod.POST))
    fun addToMyMovieList(@PathVariable("watcher") watcher:String?,@RequestBody movie:Movie):Movie{
        movie.watcher=watcher
        return myListMovieRepository.save(movie);
    }

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/movie/{watcher}/{id}",method= arrayOf(RequestMethod.DELETE))
    fun deleteById(@PathVariable("watcher") watcher:String,@PathVariable("id") id:String){
        val movie:Movie =   myListMovieRepository.findByWatcherAndId(watcher,id)
        myListMovieRepository.delete(movie)
    }

}