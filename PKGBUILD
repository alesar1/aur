# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix
# Contributor:  Michael DeGuzis <mdeguzis@gmail.com>

pkgname=play-emu-git
pkgver=0.31.r21.g5359327f
pkgrel=1
pkgdesc="Play! is an experimental Playstation 2 emulator."
arch=(x86_64)
url="https://purei.org/"
license=(MIT)
depends=(qt5-base openal glew)
makedepends=(git cmake ninja qt5-x11extras)
source=("${pkgname%-git}::git+https://github.com/jpd002/Play-"
        "git+https://github.com/jpd002/Play-Dependencies.git"
        "git+https://github.com/jpd002/Play--Framework.git"
        "git+https://github.com/jpd002/Play--CodeGen.git"
        "git+https://github.com/jpd002/Nuanceur.git"
        "git+https://github.com/jpd002/boost-cmake.git"
        "git+https://github.com/rs/SDWebImage.git"
        "git+https://github.com/gulrak/filesystem.git")
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

pkgver() {
  cd "${pkgname%-git}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare () {
  cd "${pkgname%-git}"

  git submodule init
  git config 'submodule.deps/Dependencies.url' "${srcdir}/Play-Dependencies"
  git config 'submodule.deps/Framework.url' "${srcdir}/Play--Framework"
  git config 'submodule.deps/CodeGen.url' "${srcdir}/Play--CodeGen"
  git config 'submodule.deps/Nuanceur.url' "${srcdir}/Nuanceur"
  git submodule update

  install -d build

  cd "${srcdir}/${pkgname%-git}"/deps/Dependencies

  git submodule init
  git config 'submodule.boost-cmake.url' "${srcdir}/boost-cmake"
  git config 'submodule.SDWebImage.url' "${srcdir}/SDWebImage"
  git config 'submodule.ghc_filesystem.url' "${srcdir}/filesystem"
  git submodule update
}

build() {
  cd "${pkgname%-git}/build"
  cmake .. -G"Ninja"
  cmake --build . --config Release
}

package() {
  cd "${pkgname%-git}"
  install -Dm755 build/Source/ui_qt/Play    "${pkgdir}"/usr/bin/play-emu
  install -D icons/icon.svg                 "${pkgdir}"/usr/share/pixmaps/play.svg
  install -D installer_unix/Play.desktop    "${pkgdir}"/usr/share/applications/play-emu.desktop
  install -D License.txt                    "${pkgdir}/usr/share/licenses/${pkgname}"/License.txt
}
