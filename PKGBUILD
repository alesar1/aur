# Maintainer: Caleb Maclennan <caleb@alerque.com>

_rockname=cluacov
pkgbase="lua-$_rockname"
pkgname=("lua-$_rockname" "lua53-$_rockname" "lua52-$_rockname" "lua51-$_rockname")
pkgver=0.1.2
pkgrel=2
pkgdesc='C extensions for LuaCov'
arch=('x86_64' 'i686')
url="https://github.com/luarocks/$_rockname"
license=('MIT')
depends=('lua')
_lua_deps=('luacov')
makedepends=('lua' 'lua53' 'lua52' 'lua51' 'luarocks')
source=("$_rockname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('fcc09eb18819f665e075f4abec8da90e5208d5c2d46dfb8b992ca2bf2b4d3e05')

_package_helper() {
  cd "$_rockname-$pkgver"
  luarocks --lua-version="$1" --tree="$pkgdir/usr/" \
    make --deps-mode=none --no-manifest
}

package_lua-cluacov() {
  depends=('lua' "${_lua_deps[@]/#/lua-}")
  _package_helper 5.4
}

package_lua53-cluacov() {
  depends=('lua53' "${_lua_deps[@]/#/lua53-}")
  _package_helper 5.3
}

package_lua52-cluacov() {
  depends=('lua52' "${_lua_deps[@]/#/lua52-}")
  _package_helper 5.2
}

package_lua51-cluacov() {
  depends=('lua51' "${_lua_deps[@]/#/lua51-}")
  _package_helper 5.1
}
