# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Suvojit Ghosh <ghoshsuvojit2012@gmail.com>
# Developer: Ronak Sanpui
pkgname=senpahe-git
pkgver=r26.`6c4fa5f`
pkgrel=1
epoch=
pkgdesc="Stream and download anime from animepahe right from the terminal!"
arch=(x86_64)
url="https://gitlab.com/TGS963/senpahe-git"
license=('GPL')
groups=()
depends=(mpv openssl ffmpeg curl)
makedepends=(git python python-pip)
checkdepends=()
optdepends=()
provides=(senpahe)
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+$url")
noextract=()
md5sums=('SKIP')
validpgpkeys=()

pkgver() {
  cd $pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {

	cd $pkgname

	sed -i "s/Dev\ Channel/$pkgver/" main.py
	sed -i "s/Opened in Developer mode!/$pkgdesc/" main.py

	if command -v pyinstaller &> /dev/null; then
		pyinstaller --onefile main.py -n senpahe
	else 
		pip install pyinstaller
		pyinstaller --onefile main.py -n senpahe
		pip uninstall pyinstaller -y
	fi

}


package() {
	cd $pkgname/dist/
	install -Dm755 ./senpahe "$pkgdir/usr/bin/senpahe"
}
