package readinglist

import org.springframework.data.jpa.repository.JpaRepository

interface EpisodeRepository : JpaRepository<Episode,Int> {
    fun findByTvShow(tvShow: TvShow):List<Episode>
}