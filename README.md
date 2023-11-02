# Greyscript (Grey Hack) stuff
[update info](#updating-to-game-version-08) at the bottom!

Hello there!

This repository includes all scripts that I've made so far for the game Grey Hack.

You will find a Hacknet like Probing script (thanks to H4ck G4mes for the idea!!), an automatated WiFi cracker (requires you to run aireplay in a second terminal to acquire ACKs when prompted to do so) and something that I call the "Exploit Suite".

The prober can probe both IPs and Domains, when starting up probing, it will ask you what your target type is, if it is a domain/website, it will automatically convert it to an IP address, print the IP address to the terminal and also use it for probing in the same breath.

![Alt text](https://i.imgur.com/4Kz5gaZ.png "Probing Tool")

The "Exploit Suite" is basically a hacked together multi tool that I made after I realized that making 5 billion standalone tools serves nobody and clutters your folders really fast.

Able to probe, attack remote target, attack router, attack locally, crack wifi and check libraries for exploits and check library versions. Also includes a script which you can use to automatically extract banking infos, needs to be ran locally as root. The bank info script within the suite as well as the standalone tool still have a debugging thing I used which tries to delete folders in guest dir. Don't mind this, I'm just too lazy to remove it.

![Alt text](https://i.imgur.com/4kAg5vi.png "Exploit Suite")

Currently the attacks will handle results that are both computer and shell. Since the Suite includes a big ASCII art logo at the beginning, it is recommended to run it in a relatively big terminal window. This is not a must tho, it will work the same in a regular sized terminal window as well.

The code is probably very messy and I will make the menu flow itself more...fluid(?) and less cluttered in the future. Same goes for the code.

# Updating to Game version 0.8
Hey! I'm currently working to get suit running since the Grey-Script API changed.

## Installation
- Copy and paste both files found in the [Update folder](https://github.com/StopfMich/greyscript/edit/update_unstable/update/) into your CodeEditor.exe
- You can name the "Exploit Suite 0.9.1.scr" however you want and compile it to /bin/
- the "crack.src" has to be compiled into "crack" in /bin/
- - crack.src is not optional for the Suite to work!
