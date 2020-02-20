pragma solidity >=0.6.2;

contract firstContract {
    struct User {
        string nick;
        string crew;
    }

    mapping(address => User) private users;
    mapping(address => bool) private joinedUsers;
    address[] total;

    event onUserJoined(address, string);

    function join(string memory nickRecibed, string memory crewRecibed) public {
        require(!userJoined(msg.sender), 'Ya te has registrado');
        User storage user = users[msg.sender];
        user.nick = nickRecibed;
        user.crew = crewRecibed;
        joinedUsers[msg.sender] = true;
        total.push(msg.sender);
        emit onUserJoined(msg.sender, string(abi.encodePacked(nickRecibed," ",crewRecibed)));
    }

    function getUser(address addr) public view returns (string memory , string memory ) {
        require(userJoined(addr), 'El usuario no existe.');
        User memory user = users[addr];
        return (user.nick, user.crew);
    }

    function userJoined(address addr) private view returns (bool) {
        return joinedUsers[addr];
    }

    function totalUsers() public view returns (uint) {
        return total.length;
    }
}
