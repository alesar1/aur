pkgname=openmw-git
pkgver=0.47.0.r2137.gca77ae336
pkgrel=1
pkgdesc="An open-source engine reimplementation for the role-playing game Morrowind."
arch=('i686' 'x86_64')
url="http://www.openmw.org"
license=('GPL3' 'MIT' 'custom')
# Workaround ffmpeg4.4 https://gitlab.com/OpenMW/openmw/-/issues/6631#note_848732223
depends=('openal' 'openscenegraph' 'mygui' 'bullet-multithreaded' 'qt5-base' 'ffmpeg4.4' 'sdl2' 'unshield' 'libxt' 'boost-libs' 'luajit' 'recastnavigation-openmw')
optdepends=('openscenegraph-openmw-git: experimental performance enhancements for OpenMW that are too controversial to be included in the general purpose OSG project')
makedepends=('git' 'cmake' 'boost')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=('git+https://gitlab.com/OpenMW/openmw.git')
sha1sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname%-git}"
  _tag="$(git describe --tags --match 'openmw*' --abbrev=0 $(git rev-list --tags) | head -n 1 | sed 's/openmw-//')"
  _numcommits="$(git rev-list  `git rev-list --tags --no-walk --max-count=1`..HEAD --count)"
  _hash="$(git rev-parse --short HEAD)"
  printf "%s.r%s.g%s" "$_tag" "$_numcommits" "$_hash"
}

build() {
  cd "${srcdir}/${pkgname%-git}"

  # Workardoung ffmpeg4.4 https://gitlab.com/OpenMW/openmw/-/issues/6631#note_848732223
  export PKG_CONFIG_LIBDIR='/usr/lib/ffmpeg4.4/pkgconfig/'

  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=RelWithDebInfo \
        -DDESIRED_QT_VERSION=5 \
        -DOPENMW_USE_SYSTEM_RECASTNAVIGATION=ON
  make
}

package() {
  cd "${srcdir}/${pkgname%-git}"
  make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:
