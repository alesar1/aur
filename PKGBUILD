# Maintainer: Milk (milk / milkii on Freenode) 
# Contributor: osch <oliver@luced.de>
pkgname=surge-synthesizer-lv2-git
pkgver=r984.ba36b33
scmver=1.6.1
pkgrel=1
pkgdesc="Surge Synthesizer plugin (LV2, git head)"
arch=('x86_64')
url="https://surge-synthesizer.github.io"
license=('GPL3')
groups=('lv2-plugins')
depends=('cairo'  'fontconfig'          'freetype2'
         'libx11' 'xcb-util-cursor'     'xcb-util'
         'libxcb' 'xcb-util-renderutil' 'xcb-util-image'
         'cmake' )
makedepends=('premake-git' 'git')
provides=('surge-synthesizer' 'surge-synthesizer-bin')
conflicts=('surge-synthesizer' 'surge-synthesizer-bin')
source=("git+https://github.com/surge-synthesizer/surge.git")
options=()
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/surge"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/surge"
	git submodule update --init --recursive
	pwd
	sed -i -e 's:dest_path="/:dest_path="$DEST_DIR/:' build-linux.sh
	sed -i -e 's:data_path="/:data_path="$DEST_DIR/:' build-linux.sh
	echo "$scmver".$pkgver > VERSION
}

build() {
	cd "$srcdir/surge"
	./build-linux.sh -p lv2 build
}

package() {
	cd "$srcdir/surge"
	export DEST_DIR="$pkgdir"
	mkdir -p   "$DEST_DIR/usr/share"
	mkdir -p   "$DEST_DIR/usr/lib/lv2"
	./build-linux.sh -p lv2 install
	mkdir -p   "$DEST_DIR/usr/share/Surge/doc"
	cp LICENSE "$DEST_DIR/usr/share/Surge/doc"
}

