package readinglist

import org.springframework.data.jpa.repository.JpaRepository

interface SettingsRepository : JpaRepository<Settings,String>{
    fun findByType(type:String):Settings
}