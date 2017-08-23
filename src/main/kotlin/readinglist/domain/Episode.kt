package readinglist

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.module.kotlin.*
import java.util.Date
import javax.persistence.*

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
data class Episode (@Id val id:Int,
                    val name:String,
                   val episode_number:Int,
                   val  season_number:Int,
                   val air_date:Date,
                    val still_path:String,
                   @Column(length=9000)val overview:String?,
                   val vote_average:Double,
                   
                   val vote_count:Int,
                   @ManyToOne var tvShow:TvShow
                   )



