//load on start
$(document).ready(function() {
  var twitchStreamers = [
    "xqcow",
    "gale_adelade",
    "karq",
    "tf2pine",
    "liberot99",
    "wraxu",
    "fleta92",
    "logixow",
    "kephrii",
    "jjonaklove",
    "saebyeolbe",
    "harryhook",
    "arkyjun",
    "itsrawkus",
    "wpghd321",
    "linkzr"
  ];
  var b = twitchStreamers.length;

  //iterating streamers #1
  for (let a = 0; a < b; a++) {
    let twitchURLStream =
      "https://wind-bow.glitch.me/twitch-api/streams/" + twitchStreamers[a];
    let twitchURLChannel =
      "https://wind-bow.glitch.me/twitch-api/channels/" + twitchStreamers[a];
    //get streamer API stream for online

    $.getJSON(twitchURLStream, function contentGrab(twitchJSON) {
      $.getJSON(twitchURLChannel, function contentGrab2(twitchJSON2) {
        var OnstreamerCompile =
          '<li class="eachOn-streamer"><span class="logo"><img src="' +
          twitchJSON2.logo +
          '" class="logo"></span>' +
          '<span class="name"><a target="_blank" href=' +
          twitchJSON2.url +
          ">" +
          twitchJSON2.display_name +
          "</a></span>" +
          '<span class="game">' +
          twitchJSON2.game +
          "</span></li>";

        var OffstreamerCompile =
          '<li class="eachOff-streamer"><span class="logo"><img src="' +
          twitchJSON2.logo +
          '" class="logo"></span>' +
          '<span class="name"><a target="_blank" href=' +
          twitchJSON2.url +
          ">" +
          twitchJSON2.display_name +
          "</a></span>" +
          '<span class="game-offline">' +
          "Offline" +
          "</span></li>";

        if (twitchJSON.stream === null) {
          $(".streamer-box").append(OffstreamerCompile);
        } // end if statement for JSON2.stream
        else {
          $(".streamer-box").prepend(OnstreamerCompile);
        } // end else statement for JSON2.stream

        //button to show all
        $("#all-button").click(function() {
          $(".eachOn-streamer").show();
          $(".eachOff-streamer").show();
        }); //end button to show all

        //button to show online
        $("#on-button").click(function() {
          $(".eachOff-streamer").hide();
          $(".eachOn-streamer").show();
        }); //end button to show online

        //button to show offline
        $("#off-button").click(function() {
          $(".eachOn-streamer").hide();
          $(".eachOff-streamer").show();
        }); //end button to show offline
      }); // end get streamer API stream for offline
    }); // get streamer API stream for online
  } //end iterating streamers #1
}); //end load on start
