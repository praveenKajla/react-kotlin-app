package readinglist
import com.fasterxml.jackson.module.kotlin.*

import java.util.*
import javax.persistence.*

val mapper = jacksonObjectMapper()

@Entity
data class TvShow(@Id
                  @GeneratedValue(strategy= GenerationType.AUTO)
                  val idd : Long?=null,
                  val id:Int?,
                  var watcher:String?,
                  val backdrop_path:String?,
                  val poster_path:String?,
                  val name:String?,
                  val original_name:String?,
                  @Column(length=9000)val overview:String?,
                  val first_air_date:String?,
                  val original_language:String?,

                  val origin_country:Array<String?>?,
                  val popularity:Float?,
                  val vote_average:Float?,
                  val vote_count:Long?)