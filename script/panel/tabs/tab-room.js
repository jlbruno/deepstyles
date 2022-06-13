export default function () { return `
  <section>
    <article>
      ${ this.$bool("Autobop", "autobop") }
      <p>Auto vote "awesome" when a new song starts.</p>
    </article>

    <article class="ts-help">
      ${ this.$bool("Move Volume", "use.volume") }
      <p>Moves volume to the header, adds temporary mute - unmutes after the current song.</p>
    </article>

    <article class="ts-help">
      ${ this.$bool("Recently Played", "use.recent") }
      <p>Highlights songs in your playlist that were recently played in the room.</p>
    </article>

    <article class="ts-help">
      <strong>Reminder:</strong> 
      ${ this.$list("note.on", "times") }
      <p>Send text to the room at a selected interval. Useful for posting recurring information like rules, themes, or whatever!</p>
      ${ this.$str("Save Reminder", "note.text") }
    </article>
  </section>

  <section>
    <article class="ts-help">
      ${ this.$bool("Add More Emojis", "use.emojis") }
      <p>Adds more emojis to the :emoji: syntax. Currently sourced from Twitch and BTTV. Note: Only visible to other turnStyles users, and disables the :P emoji!</p>
    </article>

    <article class="ts-help">
      ${ this.$bool("Chat Timestamps", "use.stamps") }
      <p>We all get distracted - turnStyles will add timestamps to all user messages in chat so you know when a message was sent.</p>
    </article>

    <article>
      ${ this.$bool("Hide Chat Bubbles", "hide.bubble") }
      <p>Toggles speech bubbles from the audience.</p>
    </article>

    <article>
      ${ this.$bool("Hide Room Audience", "hide.people") }
      <p>Toggles the avatars on the room floor.</p>
    </article>

    <article>
      ${ this.$bool("Hide Video Player", "hide.player") }
      <p>Toggles the video player in the background.</p>
    </article>
  </section>`
}