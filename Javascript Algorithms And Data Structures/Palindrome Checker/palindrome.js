function palindrome(str) {
    let regstr = str.replace(/[\W_]/gi,"").toLowerCase();
    console.log (regstr);
    let checker = "";
        for (let i = (regstr.length)-1; i>=0; i--){
            checker += regstr[i];
    }
    if (regstr == checker) { 
        return true;
    } else {
        return false;
    }
}
