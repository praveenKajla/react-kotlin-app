package readinglist

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.util.*
import javax.persistence.*

@Entity
data class Movie(@Id
                 @GeneratedValue(strategy= GenerationType.AUTO)
                  val idd : Long?=null,
                 var watcher:String?=null,
                 val vote_count:Long,
                 val id:String?,
                 val runtime:Int?,
                 val vote_average:Float,
                 val title:String,
                 val popularity:Float,
                 val poster_path:String,
                 val original_language:String,
                 val original_title:String,

                 val backdrop_path:String,
                 val adult:Boolean,
                 @Column(length=9000)val overview:String?,
                 val release_date:String)