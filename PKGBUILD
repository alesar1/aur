# Maintainer: Serge Roussak <beaux_monde@tut.by>
pkgname=smplayer-qt4
pkgver=18.5.0
pkgrel=1
pkgdesc='Complete front-end for MPlayer/MPV (Qt4)'
arch=('i686' 'x86_64')
url='http://smplayer.sourceforge.net/'
license=('GPL')
depends=('qt4' 'mplayer')
optdepends=('smplayer-themes: icon themes collection'
            'smplayer-skins: skin themes collection'
            'smtube: browse and play youtube videos'
            'mpv: video player based on MPlayer/mplayer2')
makedepends=('make')
provides=('smplayer')
conflicts=('smplayer')
install=smplayer.install
source=("https://downloads.sourceforge.net/smplayer/smplayer-$pkgver.tar.bz2"
        'gcc8-snprintf-etc.patch')
sha256sums=('36a3aeda0f1fcbffdf05039185dd76160551a2905056ef933fd3b772eb47ad3b'
            '56ee2215dcb1b59a1c0259446212ee20974ce71fd31420eba44dc6ff55d816dd')

prepare() {
  cd "smplayer-$pkgver"

  # The gcc has become smarter now, so it can determine a (probably)
  # overflows in the C stdio calls.
  patch -Np1 -i ../gcc8-snprintf-etc.patch
}

build() {
  cd "smplayer-$pkgver"
  make PREFIX=/usr                                  \
       DOC_PATH="\\\"/usr/share/doc/smplayer\\\""   \
       QMAKE=qmake-qt4                              \
       LRELEASE=lrelease-qt4                        \
       QMAKE_OPTS=DEFINES+=NO_DEBUG_ON_CONSOLE      \
       all
}

package() {
  cd "smplayer-$pkgver"
  make PREFIX=/usr                                  \
       DOC_PATH=/usr/share/doc/smplayer             \
       DESTDIR="$pkgdir"                            \
       install
}
