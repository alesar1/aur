# Maintainer:
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Thomas Dziedzic <gostrc@gmail.com>
# Contributor: J. W. Birdsong <jwbirdsong@gmail.com>

pkgname=luakit-git
gitname=luakit
pkgver=r3471.3d38286d
pkgrel=3
pkgdesc='fork of luakit using webkit2'
arch=('x86_64' 'i686' 'armv7h')
url='https://github.com/aidanholm/luakit'
license=('GPL3')
makedepends=('git')
checkdepends=('lua51-luacheck' 'lua51-luassert' )
provides=('luakit')
conflicts=('luakit')
depends=('webkit2gtk' 'lua51-filesystem' 'luajit')
backup=('etc/xdg/luakit/binds.lua'
        'etc/xdg/luakit/globals.lua'
        'etc/xdg/luakit/modes.lua'
        'etc/xdg/luakit/rc.lua'
        'etc/xdg/luakit/theme.lua'
        'etc/xdg/luakit/webview.lua'
        'etc/xdg/luakit/window.lua')
source=("git://github.com/luakit/luakit#branch=develop")
md5sums=('SKIP')

pkgver() {
   cd "$srcdir/$gitname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "$srcdir/$gitname"
  sed -i '1s,lua,luajit,' build-utils/gentokens.lua
}

build() {
  cd "${srcdir}/${gitname}"
  make  DEVELOPMENT_PATHS=0 USE_LUAJIT=1 PREFIX=/usr all
}

#check(){
 #cd "${srcdir}/${gitname}"
 #make run-tests
#}
package() {
  cd "${srcdir}/${gitname}"
  make PREFIX=/usr DESTDIR="$pkgdir" install
}
