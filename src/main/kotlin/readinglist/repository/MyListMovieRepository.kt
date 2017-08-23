package readinglist

import org.springframework.data.jpa.repository.JpaRepository

interface MyListMovieRepository : JpaRepository<Movie,String>{

    fun findByWatcher(watcher:String):List<Movie>
    fun findById(id:String):Movie

}