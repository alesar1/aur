# Maintainer: Albert Graef <aggraef at gmail dot com>
# Debian Upstream Maintainer: IOhannes m zmölnig <umlaeute at debian.org>

pkgname=pd-lua-git
pkgver=29.f5703f5
pkgrel=1
pkgdesc="Lua bindings for Pd"
arch=("i686" "x86_64")
license=('GPL')
url="http://download.puredata.info/pdlua"
depends=('pd' 'lua')
makedepends=('pkg-config')
source=("git+https://github.com/agraef/pd-lua.git")
md5sums=('SKIP')

pkgver() {
    cd $srcdir/pd-lua
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
     cd $srcdir/pd-lua
     make LUA_CFLAGS="$(pkg-config --cflags lua pd)" LUA_LIBS="$(pkg-config --libs lua pd)"
}

package() {
     cd $srcdir/pd-lua
     make DESTDIR="$pkgdir" prefix=/usr install
}
