package readinglist

import org.springframework.data.jpa.repository.JpaRepository

interface MyListTvRepository : JpaRepository<TvShow,String>{
    fun findByWatcher(watcher:String):List<TvShow>
    fun findById(id:Int):TvShow
    fun findByWatcherAndId(watcher:String,id:Int):TvShow
}