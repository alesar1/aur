# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>
# Contributor: Mohammad AlSaleh <CE.Mohammad.AlSaleh at gmail dot com>

_pkgname="lua-language-server"
pkgname="$_pkgname-git"
pkgver=1.8.2.r0.ge835c77e
pkgrel=1
license=('MIT')
pkgdesc='Lua Language Server coded by Lua'
url='https://github.com/sumneko/lua-language-server'
arch=('x86_64')
depends=('lua')
makedepends=('ninja' 'git')
source=(
  "${pkgname}::git+https://github.com/sumneko/${_pkgname}.git"
  '0001-Fix-paths.patch'
  '0002-Fix-build.patch'
  'wrapper'
)
sha256sums=('SKIP'
            'fcd7ae9342d35fc80fd2477c9c43cfc32e7e92d4172bc2a988edea0df33ccc97'
            '561dd0dad022cfa9364d8159864772bb09bb51ab2934ead35b48740920d0b5da'
            '6135c5424e5b87146aabf47651d3c95b6038865f26f25a8fce3a1ecd8c8f31fa')

pkgver() {
  cd "${pkgname}"

  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
      printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${pkgname}"

  git submodule update --init --recursive
  git apply "${srcdir}"/*.patch
}

build() {
  cd "${pkgname}"

  ninja -C 3rd/luamake -f ninja/linux.ninja
  ./3rd/luamake/luamake rebuild
}

package() {
  cd "${pkgname}"

  install -dm0755 "${pkgdir}/usr/lib/${_pkgname}"
  cp -a bin/Linux/* "${pkgdir}/usr/lib/${_pkgname}"

  install -dm0755 "${pkgdir}/usr/share/${_pkgname}"

  cp -a \
    main.lua platform.lua debugger.lua \
    locale script meta \
    "${pkgdir}/usr/share/${_pkgname}"

  install -Dm0755 ../wrapper "${pkgdir}/usr/bin/${_pkgname}"
}
