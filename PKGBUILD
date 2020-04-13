# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

_pkgname=lgi
_luaver=5.1
pkgname=("lua${_luaver//./}-${_pkgname}-git")
pkgver=0.9.2.r50.g9541863
pkgrel=1
pkgdesc='Lua 5.1 bindings for GObject using gobject-introspection library'
url='https://github.com/pavouk/lgi'
arch=('x86_64')
license=('MIT')
provides=("lua${_luaver//./}-${_pkgname}")
depends=('glibc'
         'glib2'
         'libffi'
         "lua${_luaver//./}"
         'gobject-introspection-runtime')
makedepends=('gobject-introspection' 'git')
conflicts=('luajit-lgi')
source=("git+${url}")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}  

prepare() {
  cd "${srcdir}/${_pkgname}"
  sed -i -e "s/^PKGS = .*/& lua${_luaver//./}/" lgi/Makefile
}

build() {
  cd "${srcdir}/lgi"
  make PREFIX=/usr LUA_VERSION=${_luaver}
}

package() {
  cd "${srcdir}/${_pkgname}"
  make DESTDIR="${pkgdir}/" PREFIX=/usr LUA_VERSION=${_luaver} install
  install -Dm 644 README.md -t "${pkgdir}/usr/share/doc/lua51-lgi"
  install -Dm 644 docs/* -t "${pkgdir}/usr/share/doc/lua51-lgi"
  install -Dm 644 samples/*.lua -t "${pkgdir}/usr/share/lua51-lgi/samples"
  install -Dm 644 samples/gtk-demo/* -t "${pkgdir}/usr/share/lua51-lgi/samples/gtk-demo"
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/lua51-lgi"
}
# vim: ts=2 sw=2 et: