# Maintainer: Jan Cholasta <grubber at grubber cz>

_name=slade
pkgname=${_name}
pkgver=3.1.7
pkgrel=1
pkgdesc='SLADE3 Doom editor'
arch=('i686' 'x86_64')
url='http://slade.mancubus.net/'
license=('GPL')
depends=('bzip2'
         'curl'
         'fluidsynth>=2.0'
         'freeimage'
         'ftgl'
         'glew>=2.1'
         'glu'
         'gtk3'
         'libgl'
         'sfml>=2.5'
         'webkit2gtk'
         'wxgtk3>=3.0'
         'zlib')
makedepends=('cmake'
             'p7zip')
source=("https://github.com/sirjuddington/SLADE/archive/${pkgver}.tar.gz")
sha256sums=('abea38ff173b5494ddb50fa7996b6f1818f08c6992b119cb137bdacc63af3789')

build() {
    cd SLADE-${pkgver}

    ln -sf /usr/bin/wx-config-gtk3 wx-config

    cmake -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -DWITH_WXPATH=. \
          .
    make
}

package() {
    cd SLADE-${pkgver}

    make install DESTDIR="$pkgdir"
}
