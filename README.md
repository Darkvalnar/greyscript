# Greyscript (Grey Hack) stuff

Hello there!

This repository includes all scripts that I've made so far for the game Grey Hack.

You will find a Hacknet like Probing script (thanks to H4ck G4mes for the idea!!), an automatated WiFi cracker (requires you to run aireplay in a second terminal to acquire ACKs when prompted to do so) and something that I call the "Exploit Suite".

The prober can probe both IPs and Domains, when starting up probing, it will ask you what your target type is, if it is a domain/website, it will automatically convert it to an IP address, print the IP address to the terminal and also use it for probing in the same breath.

![Alt text](https://i.imgur.com/4Kz5gaZ.png "Probing Tool")

The "Exploit Suite" is basically a hacked together multi tool that I made after I realized that making 5 billion standalone tools serves nobody and clutters your folders really fast.

It currently incorporates the probing tool, a library version checker, a library vulnerability scanner, remote attack sequences (both with probing, scanning, etc. and without), local attack sequences (both with and without scanning) and the WiFi cracker.

![Alt text](https://i.imgur.com/4kAg5vi.png "Exploit Suite")

Currently the attacks will handle results that are both computer and shell. Since the Suite includes a big ASCII art logo at the beginning, it is recommended to run it in a relatively big terminal window. This is not a must tho, it will work the same in a regular sized terminal window as well.

The code is probably very messy and I will make the menu flow itself more...fluid(?) and less cluttered in the future. Same goes for the code.


