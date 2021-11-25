var mailbox = document.getElementById("mailbox")

function showmail(){
    mailbox.style.display = "block"
        }
function hidemail(){
    mailbox.style.display = "none"
}




        function send() {
        var DiscordID = document.getElementById("DiscordID").value;
        var email = "Niet ingevuld!"
        var inServer = document.getElementById("ja")
        var isNotServer = document.getElementById("nee")
        var isServer = ""
        var discord = document.getElementById("frame")

        if(inServer.checked) isServer = "Ja"
        if(isNotServer.checked){
            isServer = "Nee"
            email = document.getElementById("email").value;
            discord.style.marginTop = "50px"
            }

        var description = document.getElementById("subject").value;

        if (DiscordID !== "" && isServer !== "" && description !== "") {
          document.getElementById("DiscordID").value = "";
          const rbs = document.querySelectorAll('input[name="server"]');
        let isInServer = "Ja";
        for (const rb of rbs) {
            if (rb.checked){
                isInServer = "";
                break;
            }
        }
          document.getElementById("subject").value = "";

          request.open(
            "POST",
            "https://discord.com/api/webhooks/913439005322903572/0ojlna6kzsaoMYUyY-av6WFxXL3XZ8puSN6G6DwqHWJYGaBeXQDO4kuvY3ImSAM8VvXD"
          );

          request.setRequestHeader("Content-type", "application/json");

          var params = {
            username: "Contact - KingCraftMC",
            content:
              "**Er is een vraag binnengekomen via de website**\n\n> **User Tag:** \n``" +
              DiscordID +
              "``\n\n> **Persoon in discord server:** \n``" +
              isServer +
              "``\n\n> **Email:** \n``" +
              email + "``\n\n**Vraag** \n``" +
              description +
              "``\n"
          };

          request.send(JSON.stringify(params));
    document.getElementById("notice").innerHTML =
                    "Successfully sent request!";
                    setTimeout(() => {
                        document.getElementById("notice").innerHTML = ""
                                    }, 5000);
          event.preventDefault();
        } else {
          event.preventDefault();
        document.getElementById("notice").innerHTML =
                    "You need to fill all the boxes";
                    setTimeout(() => {
        document.getElementById("notice").innerHTML = ""
                    }, 5000);
        }    
 }