// Probing tool made by Rawlings (CREDITS TO H4CK G4MES FOR THE IDEA AND PART OF THE CODE). This tool works with domain names AND IPs, no separate nslookup needed anymore.
// Kinda like nmap
// start of cosmetics setup
line = "--------------------"
line1 = "#####################################################################################"   
print (line1)                                                                    
print("  ____      ___        ___     ___ _   _  ____ ____    ____  ____   ___  ____  _____")
print("|  _ \    / \ \      / / |   |_ _| \ | |/ ___/ ___|  |  _ \|  _ \ / _ \| __ )| ____|")
print("| |_) |  / _ \ \ /\ / /| |    | ||  \| | |  _\___ \  | |_) | |_) | | | |  _ \|  _|  ") 
print("|  _ <  / ___ \ V  V / | |___ | || |\  | |_| |___) | |  __/|  _ <| |_| | |_) | |___ ")
print("|_| \_\/_/   \_\_/\_/  |_____|___|_| \_|\____|____/  |_|   |_| \_\\___/|____/|_____|")
print("                                                                                    ")
print("                                                                                    ")
print("                                                                                    ")
print("                                                                                    ")
print("Probe IPs or websites!				 																							 ")
print (line1)
choice = user_input("IP or Website?") 

//self explanatory, fetches what you wanna probe
//based on the type of probe, it will either straight use an IP or resolve a domain into IP
if choice == "Website" then 
	domain= user_input("Domain:")
	ip = nslookup(domain) //since we can not directly probe domains, we need to convert the domain to IP and then store it 
	print("Probing " + ip + "............")
	
	// 	if not is_valid_ip(ip) then exit ("Probe Failed: Invalid IP")     <---- we don't need this if it is a domain as it will be a valid IP from domain
	router = get_router(ip) 
	//		if not router then exit("Probe Failed: Unable to find specified router") <---- not needed either
	ports = router.used_ports
	print ("Probe Complete - Open Ports:")
	print (line)
	if not ports then print("PORTS NOT FOUND.....") //<----questionable, but included
	for port in ports
		print("Port#: " + port.port_number + " - " + router.port_info(port)) //<---- print our result
	end for
	print (line)
end if

if choice == "IP" then
	ip = user_input("IP to probe:")	
	print("Probing " + ip + "............")
	if not is_valid_ip(ip) then exit ("Probe Failed: Invalid IP") //check if the IP is in fact a valid IP, if not, we get prompted it's not valid
	
	router = get_router(ip) 
	if not router then exit("Probe Failed: Unable to find specified router") // check if we can find a router with the IP
	
	ports = router.used_ports
	print ("Probe Complete - Open Ports:")
	print (line)
	if not ports then print("PORTS NOT FOUND.....") // check if we can find any ports on the IP
	
	for port in ports // loop to continiously look for ports
		print("Port#: " + port.port_number + " - " + router.port_info(port)) // print our result
	end for // break up the loop here
	print (line)
end if
