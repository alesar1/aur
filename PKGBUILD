# Maintainer: Hugo Courtial <hugo [at] courtial [not colon] me>
# Maintainer: Luca Weiss <luca (at) z3ntu (dot) xyz>

pkgname=openfx-misc-git
name=openfx-misc
pkgver=2.3.7
pkgrel=2
arch=("x86_64")
pkgdesc="A set of Readers/Writers plugins written using the OpenFX standard"
url="https://github.com/devernay/openfx-io"
license=("GPL2")
depends=("seexpr" "openimageio" "ffmpeg") 
#depends=("opencolorio" "openexr" "openimageio" "ffmpeg" "boost-libs")
makedepends=("git" "expat" "boost")
optdepends=("openfx-gmic-bin" "natron-plugins")
com=6545ae5b6f51b2a25217da84633e5854e2fc96df
source=("openfx-misc::git+https://github.com/NatronGitHub/openfx-misc.git#commit=$com"
)
sha512sums=('SKIP'
)

_bits=32 ; [[ "$CARCH" = 'x86_64' ]] && _bits=64

prepare() {
  cd "$srcdir/$name"
 git submodule update --init --recursive
}

build() {
  cd "$srcdir/$name"
  make CONFIG=release BITS=$_bits
}

package() {
  cd "$srcdir/$name"
  mkdir -p "$pkgdir/usr/OFX/Plugins"
  make install PLUGINPATH=$pkgdir/usr/OFX/Plugins CONFIG=release BITS=$_bits
}