//command: crack
cryptools = include_lib("/lib/crypto.so")
if not cryptools then exit("Error: Missing crypto library")

GetPassword = function(userPass) //function to decipher password
	if userPass.len != 2 then return ("decipher: wrong syntax") 
	password = cryptools.decipher(userPass[1]) //the actual command in order to decipher the password
	return password
end function

if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit(command_info("decipher_usage"))

origFile = params[0]
file = get_shell.host_computer.File(origFile)
if file then
	if not file.has_permission("r") then exit("can't read file. Permission denied")
	if file.get_content.len == 0 then exit("decipher: no users found")
	lines = file.get_content.split("\n")
else if origFile.len > 33 then
	lines = [origFile]
	
else
	exit("decipher: can't find " + origFile)
	end if

for line in lines 
		userPass = line.split(":")
		password = GetPassword(userPass)
		if not password then print("Can't find password :(")
		if password then print(password)
	end for
