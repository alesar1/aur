# Maintainer: desbma
# shellcheck disable=SC2034,SC2148,SC2154,SC2164
pkgname=pacdiff-pacman-hook-git
pkgver=r67.ecd7d38
pkgrel=2
pkgdesc='Pacman hook to run pacdiff automatically'
arch=('any')
_gitname='pacman-hooks'
url="https://github.com/desbma/${_gitname}"
license=('GPL')
depends=('git-delta' 'pacman-contrib')
conflicts=('pacman-hooks-desbma-git')
source=("git+https://github.com/desbma/${_gitname}")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_gitname}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "${srcdir}/${_gitname}"
    install -Dm 644 -t "${pkgdir}/usr/share/libalpm/hooks" pacdiff/pacdiff.hook
}
