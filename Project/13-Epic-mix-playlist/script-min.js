const epicMix=["Time to Pretend","O-o-oh Child","Wish You Were Here","Heroes","I Put a Spell on You","Call Me","Paper Planes","Jolene","You Don't Own Me","Fast Car","Run the World (Girls)","Superstition"],mixList=document.querySelector(".mix"),button=document.querySelector(".show-list"),total=document.querySelector(".total");button.addEventListener("click",(function(){mixInfo(epicMix),mixList.classList.remove("hide"),button.classList.add("hide")})),total.innerText=`${epicMix.length} great songs!`;const mixInfo=function(e){e.forEach((function(e,t){let n=document.createElement("li");n.classList.add("song"),n.innerHTML=`<span class="song-number">#${t+1}</span> ${e}`,mixList.append(n)}))};