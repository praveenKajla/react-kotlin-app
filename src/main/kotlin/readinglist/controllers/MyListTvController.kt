package readinglist

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class MyListTvController @Autowired constructor(val myListTvRepository : MyListTvRepository ) {

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/tv/{watcher}",method= arrayOf(RequestMethod.GET))
    fun watcherTvShows(@PathVariable("watcher") watcher:String):List<TvShow>{
        return myListTvRepository.findByWatcher(watcher)
    }

     @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/get/tv/{watcher}/{id}",method= arrayOf(RequestMethod.GET))
    fun watcherTvShowById(@PathVariable("watcher") watcher:String,@PathVariable("id") id:Int):TvShow{
        return myListTvRepository.findByWatcherAndId(watcher,id)
    }

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/tv/{watcher}/{id}",method= arrayOf(RequestMethod.GET))
    fun watcherAllTvShowById(@PathVariable("watcher") watcher:String,@PathVariable("id") id:Int):Boolean{
        val list:List<TvShow> =   myListTvRepository.findByWatcher(watcher)
        return list.map({ item -> item.id }).contains(id)
    }

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/tv/{watcher}",method= arrayOf(RequestMethod.POST))
    fun addToMyTvList(@PathVariable("watcher") watcher:String?, @RequestBody tvShow:TvShow):TvShow{
        tvShow.watcher=watcher
        return myListTvRepository.save(tvShow)


    }

    @CrossOrigin(origins = arrayOf("http://localhost:8080"))
    @RequestMapping(value="/api/tv/{watcher}/{id}",method= arrayOf(RequestMethod.DELETE))
    fun deleteById(@PathVariable("watcher") watcher:String,@PathVariable("id") id:Int){
        val tvShow:TvShow =   myListTvRepository.findByWatcherAndId(watcher,id)
        return myListTvRepository.delete(tvShow)
    }

}