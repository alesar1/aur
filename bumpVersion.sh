version=0
cd "fastfetch/"
version="$(git rev-list --count HEAD)"
cd ..

makepkg -f
makepkg --printsrcinfo > .SRCINFO
git add .
git commit -m "bumped version to r${version}"
git push
