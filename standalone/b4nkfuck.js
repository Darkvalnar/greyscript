// git dat m0n3y boi

// cosmetic shit starts here



// and ends here

line = "--------------------"
us = active_user


if us != "root" then exit("ESCALATE TO ROOT OR GTFO")

print ("git dat m0n3y boi.")
print(line)
victim = get_shell.host_computer

home = victim.File("/home") 																// check for all home folders
guest = victim.File("/home/guest")  														// does guest exist?
if guest !=null then get_shell.launch("/bin/rmdir", "/home/guest")// if it does, TOO BAD, IT'S GONE

users = home.get_folders 																	// we now store all the folders in home as the usernames


cryptools = include_lib ("/lib/crypto.so")

if not cryptools then  																			//now we check if the dependcies are there and will attempt to look for them in alternative places
	currentPath = get_shell.host_computer.current_path
	cryptools = include_lib(currentPath + "/crypto.so")						// useful if you brought crypto.so with you to the same dir this script is in
end if

if not cryptools then print ("Missing crypto, unable to decrypt : ( ")


for user in users 																				// for loop that will take care of fetching all bank files and decrypting their contents
	
	bank = victim.File( "/home/" + user.name + "/Config/Bank.txt") // store all contents of every Bank.txt for each user
	bankfile = ( "/home/" + user.name + "/Config/Bank.txt")
	splitted = bank.content.split(":") 													// we split the contents of each bank.txt by the character : and store it in splitted
	print (bankfile + " : " + splitted) 												// now we print each path and the contents of splitted
	
	
	if cryptools then 																			// if we have cryptools on the target, might as well use it
	m0n3y = cryptools.decipher(splitted[0], splitted[1]) 						// since we split every bank.txt entry earlier, we can now pass these as separate params to the decrypt
	print (m0n3y) 																				// we print the decrypted result and should now be able to get that money BOI
else
	
	end if

end for





