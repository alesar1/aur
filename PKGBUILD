# Maintainer: Ben Westover <kwestover.kw@gmail.com>

pkgname='chia-git'
pkgver=1.0beta17.r0.gf745601d
pkgrel=1
pkgdesc="A new blockchain and smart transaction platform that is easier to use, more efficient, and secure."
arch=('x86_64' 'i686' 'pentium4' 'armv6h' 'armv7h' 'aarch64')
url="https://www.chia.net/"
license=('Apache')
depends=('git' 'python' 'npm' 'nodejs')
makedepends=('bc' 'lsb-release')
options=('!strip')
source=("git+https://github.com/Chia-Network/chia-blockchain.git"
        "chia-gui.desktop"
        "chia-gui.sh")
sha256sums=('SKIP'
            '28e933f5196aaac8b847467392c1c2e43281a0767113b51d97ab6faaaccb42c7'
            'd1081ad8ccc9c8f1a88b91a64655f459de10fa9adbc5d7dd4c19ce79de8299b8')

pkgver() {
	cd chia-blockchain
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd chia-blockchain 
	python3 -m venv venv
	ln -s venv/bin/activate .
	. ./activate
	pip install --upgrade pip
	pip install wheel
	pip install --extra-index-url https://download.chia.net/simple/ miniupnpc==2.1 setproctitle==1.1.10 cbor2==5.1.2
	pip install -e .
	cd electron-react
	npm install
	npm audit fix
	npm run build
}

package() {
	install -Dm644 chia-blockchain/electron-react/src/assets/img/circle-cropped.png "$pkgdir"/usr/share/pixmaps/chia.png
	mkdir -p "$pkgdir"/opt
	mv chia-blockchain "$pkgdir"/opt
	install -Dm755 chia-gui.sh "$pkgdir"/usr/bin/chia-gui
}
