// cached.js | handles storing tt data

module.exports = tS => {

  tS.last_played = {}
  tS.now_playing = {}
  tS.current_djs = {}

  tS.buildCache = function buildCache (room) {
    for (let id of room.djids) this.cacheNewDJ(id)
    this.cacheTrack(room.currentSong)
  }

  tS.cacheTrack = function cacheTrack (e) {
    let song = e && e.room ? e.room.metadata.current_song : e
    let love = e && e.upvoters ? e.upvoters.length : 0
    let djid = song ? song.djid : false

    let last = { ...this.now_playing }
    let base = { love, hate: 0, snag: 0, dj: djid }

    this.last_played = last
    this.now_playing = song ? { ...song.metadata, ...base } : {}

    // add last song stats to DJ stats
    if (last.song && this.current_djs[last.dj])  {
      this.current_djs[last.dj].spun += 1
      this.current_djs[last.dj].love += last.love
      this.current_djs[last.dj].hate += last.hate
      this.current_djs[last.dj].snag += last.snag
    }
    else if (last.song) this.cacheNewDJ(last.dj, last)

    let stat = false
    if (last.song) stat = `${last.love}❤️${last.hate}💔${last.snag}💖`

    this.emit('tracked', stat)
    this.Log(`new song: ${ this.now_playing.song || 'none'}`)
  }

  tS.cacheNewDJ = function cacheNewDJ (e, data) {
    let user = e.user ? e.user[0].userid : e
    let curr = this.current_djs[user]
    if (!curr) this.current_djs[user] = {
      spun: data && data.spun ? data.spun : 0,
      love: data && data.love ? data.love : 0,
      hate: data && data.hate ? data.hate : 0,
      snag: data && data.snag ? data.snag : 0
    }
    let name = this.userName(user)
    this.Log(`new dj: [${name}] (${user})`)
  }

  tS.cacheSnags = function cacheSnags () {
    this.now_playing.snag += 1
  }

  tS.cacheVotes = function cacheVotes (e) {
    this.now_playing.love = e.room.metadata.upvotes
    this.now_playing.hate = e.room.metadata.downvotes
  }

  tS.clearOldDJ = function clearOldDJ (e) {
    let name = e.user[0].name
    let user = e.user[0].userid
    if (!this.current_djs[user]) return

    let stat = { ...this.current_djs[user] }
    let data = `${stat.love}❤️${stat.hate}💔${stat.snag}💖${stat.spun}▶️`
    delete this.current_djs[user]
    this.emit('dropped', name, data)
    this.Log(`old dj: [${name}] (${user})`)
  }

  tS.on('attach',       tS.buildCache)
  tS.on('add_dj',       tS.cacheNewDJ)
  tS.on('rem_dj',       tS.clearOldDJ)
  tS.on('nosong',       tS.cacheTrack)
  tS.on('newsong',      tS.cacheTrack)
  tS.on('snagged',      tS.cacheSnags)
  tS.on('update_votes', tS.cacheVotes)

}