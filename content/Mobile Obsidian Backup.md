---
"Note Planted:": 2024-06-27
"Last Tended:": 2024-06-29
---
#🌱Seed  #🙂Agree
****
>`Importance`: 10%
 
***The Big Idea***: 

* * *
### Related Notes 
- [[iPhone Shells and Automation]]

1. `apk update`
2. `apk upgrade`
Install git and curl
3. `apk add git`
4. `ask add curl`
Install syncthing Add the release PGP keys:
5. `mkdir -p /etc/apt/keyrings`
6. `curl -L -o /etc/apt/keyrings/syncthing-archive-keyring.gpg https://syncthing.net/release-key.gpg`
Add the "stable" channel to your APT sources:
7.   `mkdir /etc/apt/sources.list.d`
8. `echo "deb [signed-by=/etc/apt/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | tee /etc/apt/sources.list.d/syncthing.list`
9. `apk add syncthing`
10. `apk add until-Linux`
11. `whereis git`

## setup using a-shell
[Automatic sync with GitHub on iOS (for free) via a-shell - Share & showcase - Obsidian Forum)
](https://forum.obsidian.md/t/mobile-automatic-sync-with-github-on-ios-for-free-via-a-shell/46150?page=2)

