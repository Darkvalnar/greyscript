// Wifi Cracker made by Rawlings. Does everything, except of fetching ACKs.
// heavily inspired by someone else on github whos name I can't, for the love of GOD, remember.


// starting cosmetics setup here
line = "--------------------"
line1 = "#####################################################################################"  
print(line1)
print("__          _______ ______ _____    _____ _____            _____ _  __  ______     __")
print("\ \        / /_   _|  ____|_   _|  / ____|  __ \     /\   / ____| |/ / |  _ \ \   / /")
print(" \ \  /\  / /  | | | |__    | |   | |    | |__) |   /  \ | |    | ' /  | |_) \ \_/ / ")
print("  \ \/  \/ /   | | |  __|   | |   | |    |  _  /   / /\ \| |    |  <   |  _ < \   /  ")
print("   \  /\  /   _| |_| |     _| |_  | |____| | \ \  / ____ \ |____| . \  | |_) | | |   ")
print("    \/  \/   |_____|_|    |_____|  \_____|_|  \_\/_/ _  \_\_____|_|\_\_|____/  |_|   ")
print("             |  __ \     /\ \        / / |    |_   _| \ | |/ ____|/ ____|            ")
print("             | |__) |   /  \ \  /\  / /| |      | | |  \| | |  __| (___              ")
print("             |  _  /   / /\ \ \/  \/ / | |      | | | . ` | | |_ |\___ \             ")
print("             | | \ \  / ____ \  /\  /  | |____ _| |_| |\  | |__| |____) |            ")
print("             |_|  \_\/_/    \_\/  \/   |______|_____|_| \_|\_____|_____/             ")
print("                                                                                     ")
print(line1)                                                                                              
crypto = include_lib("/lib/crypto.so") // load up crypto with library
if not crypto then // check if we  can fetch it from somewhere else..
	crypto = include_lib("crypto.so")
	if not crypto then exit("Missing crypto library, shutting down operation")
	
	end if
	// declare our own computer and the interface, takes eth0 by default, will be updated for dynamic use if we can have more than one interface.
	hostPC = get_shell.host_computer
	interface = "eth0"
	
	if not crypto.airmon("start", interface) then exit ("Can not start monitoring on " + interface)

	print("Targets found.")
	print(line)
	
	networks = hostPC.wifi_networks(interface)
	
	if not networks then exit("Unable to fetch networks list...")
	
	// show potential targets
	
	print("Available networks:")
	print("#       BSSID            ESSID Strength")
	i = 1
	
	//for loop to split certaing things of the WifI networks display up
for network in networks
	split = network.split(" ")
	bssid = split[0]
	strength = split[1]
	essid = split[2]
	
	print(line)
	print(i + ": <b>aireplay -b " + bssid + " -e " + essid + "</b> (" + strength + ")")
	i = i + 1
	end for
	
	// slect our target to crack
	networkToCrack = "0"
	netprompt = "Select the network you want to target, from 1 to " + networks.len + ":"
	while networkToCrack.val >= network.len or networkToCrack <=0
		networkToCrack = user_input(netprompt)
	end while 
	print(line)
	// start dirty workaround until we can actually automate ACK capturing...
	networkToCrack = networkToCrack.val - 1
	user_input("Locking on network. Use <b>aireplay</b> in another terminal window to capture at least 7000 ACKs, when done, close the other terminal window and hit enter in this one.")
	// end dirty workaround when user inputs something
	
	if not crypto.airmon("stop", interface) then exit("Unable to stop monitoring on " + interface)
	print("Monitoring stopped")
	print(line)
	
	capfilepath = home_dir + "/file.cap" // store our cap file's path 
	capfile = hostPC.File(capfilepath)    // store the actual cap file for use with automation below
	
	if not capfile then exit("Cap file is missing. Did you run aireplay?") //  check if cap file is missing
	
	if not capfile.has_permission("r") then exit("Insufficient permission to open cap file for reading.") 
  // check if we have permission to read the actual file
	
	key = crypto.aircrack(capfilepath) // storing the password created from the capfile
	
	//  check if we were even able to fetch the key
	if not key then exit("Could not crack key. Have you obtained enough ACKs and aireplayed the correct network?") 
	
	
	print("Password cracked! [ <b>" + key + "</b> ]") // displays the stored password if we got a key
	
	print("Key cracked.")
	print(line)
	
	split = networks[networkToCrack].split(" ")
	bssid = split[0]
	essid = split[2]
	status = hostPC.connect_wifi(interface, bssid, essid, key) // connect to cracked network with all information obtained previously
	print("Connecting to network " + essid) // display which WiFi we are connecting to
	
	if status == 1 then                     // check if we are connected,
		print("Connected successfully. Have fun!")
	else 
		print("Connection failed.")
	end if
	
	capfile.delete // yeet the cap file away, it is not necessary anymore after this operation is done.
