

#### Creating the `swcdb-lib-core` Package

* Clone the package from AUR:
```
git clone ssh://aur@aur.archlinux.org/swcdb-lib-core.git;
```


* Configure, Build and Create the Package:
```
# while at the folder of `PKGBUILD`
cd swcdb-lib-core;
chmod -R 777 ./;

sudo -u swcdb_builder makepkg --printsrcinfo > .SRCINFO;
sudo -u swcdb_builder makepkg -s -r;

# Install
sudo -u swcdb_builder makepkg -i;
```
