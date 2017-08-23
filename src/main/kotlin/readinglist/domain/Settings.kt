package readinglist

import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Settings(@Id val type:String,
                    var value:String?,
                    val name:String?,
                    val description:String?
                    )